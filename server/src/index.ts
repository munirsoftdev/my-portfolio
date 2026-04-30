import express from "express";
import type { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

app.set("trust proxy", 1);
// Middleware
app.use(helmet());
app.use(
	cors({
		origin:
			process.env.ALLOWED_ORIGIN || "https://munirsoftdev-site.onrender.com",
		methods: ["GET", "POST", "PUT", "DELETE"], // Optional: Specify allowed methods
		credentials: true, // Optional: If you're using cookies/sessions
	}),
);

app.use(express.json());

// 1. Configure the Rate Limiter
const contactLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 10 requests per windowMs
	message: {
		success: false,
		message:
			"Too many attempts from this IP, please try again after 15 minutes",
	},
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const transporter = nodemailer.createTransport({
	// host: "smtp.gmail.com",
	// port: 465,
	// secure: true,
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},

	tls: {
		rejectUnauthorized: false,
	},
});

// 2. Apply Limiter to the Route
app.post(
	"/api/contact",
	contactLimiter,
	async (req: Request, res: Response): Promise<void> => {
		try {
			const { name, email, subject, message } = req.body;

			if (!name || !email || !message) {
				res
					.status(400)
					.json({ success: false, message: "Missing required fields" });
				return;
			}

			const mailOptions = {
				from: process.env.EMAIL_USER,
				replyTo: email,
				to: "muniryahaya2002@gmail.com",
				// Adding the name to the subject helps prevent Gmail from threading/grouping them
				subject: `[Portfolio Contact] ${subject ? subject : "New Message from " + name}`,
				text: `From: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
			};

			await transporter.sendMail(mailOptions);
			res.status(200).json({ success: true, message: "Email sent!" });
		} catch (error) {
			console.error("Email Error:", error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	},
);

app.get("/health", (req, res) => {
	res.status(200).send("Server is awake!");
});

app.listen(PORT, () => {
	console.log(`🚀 Server running on ${PORT}`);
});
