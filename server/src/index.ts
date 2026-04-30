import express from "express";
import type { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dns from "dns";
import "dotenv/config";

dns.setDefaultResultOrder("ipv4first");

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.set("trust proxy", 1);
app.use(helmet());
app.use(
	cors({
		origin: ["https://munirsoftdev-site.onrender.com", "http://localhost:5173"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	}),
);
app.use(express.json());

const contactLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
	message: {
		success: false,
		message:
			"Too many attempts from this IP, please try again after 15 minutes",
	},
	standardHeaders: true,
	legacyHeaders: false,
});

// Fix #1: Don't import internal paths. Use `any` or let TS infer.
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	family: 4,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
	tls: {
		rejectUnauthorized: false,
	},
} as any); // <-- Easiest fix. TS will stop complaining

// Fix #2: Better - verify connection on startup to catch DNS issues early
transporter.verify((error, success) => {
	if (error) {
		console.error("SMTP connection failed:", error);
	} else {
		console.log("SMTP server is ready to take messages");
	}
});

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

app.listen(PORT, "0.0.0.0", () => {
	console.log(`🚀 Server running on ${PORT}`);
});
