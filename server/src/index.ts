import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import emailjs from "@emailjs/nodejs";
import "dotenv/config";

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

app.post(
	"/api/contact",
	contactLimiter,
	async (req: Request, res: Response) => {
		const { name, email, subject, message } = req.body;

		try {
			await emailjs.send(
				process.env.EMAILJS_SERVICE_ID!,
				process.env.EMAILJS_TEMPLATE_ID!,
				{ name, email, subject, message },
				{
					publicKey: process.env.EMAILJS_PUBLIC_KEY!,
					privateKey: process.env.EMAILJS_PRIVATE_KEY!,
				},
			);
			res.status(200).json({ success: true, message: "Email sent!" });
		} catch (error) {
			console.error("EmailJS Error:", error);
			res.status(500).json({ success: false, message: "Email failed" });
		}
	},
);

app.get("/health", (req: Request, res: Response) => {
	res.status(200).send("Server is awake!");
});

app.listen(PORT, () => {
	console.log(`🚀 Server running on ${PORT}`);
});
