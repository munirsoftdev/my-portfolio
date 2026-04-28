import { useState, type FC, type FormEvent } from "react";
import axios from "axios";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaPaperPlane,
} from "react-icons/fa";

// 1. Keep the API_URL outside the component
const API_URL = "https://my-portfolio-a3vd.onrender.com"

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Contact: FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setStatus("loading");

		try {
			// 2. Using the dynamic API_URL here
			await axios.post(`${API_URL}/api/contact`, formData);

			setStatus("success");
			setFormData({ name: "", email: "", subject: "", message: "" });
		} catch (error) {
			console.error("Submission error:", error);
			setStatus("error");
		}
	};

	const contactDetails = [
		{
			icon: <FaPhoneAlt className="text-blue-400" />,
			label: "Call Me",
			values: ["+234 814 970 1155"],
		},
		{
			icon: <FaEnvelope className="text-emerald-400" />,
			label: "Email Me",
			values: ["muniryahaya2002@gmail.com"],
		},
		{
			icon: <FaMapMarkerAlt className="text-red-400" />,
			label: "Location",
			values: ["Kubau Kaduna, Nigeria"],
		},
	];

	return (
		<section className="bg-slate-950 text-white min-h-screen py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="mb-16 text-center">
					<h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
					<p className="text-slate-400">Let's discuss your next project.</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="space-y-8">
						{contactDetails.map((detail, index) => (
							<div
								key={index}
								className="flex items-start gap-5 bg-slate-900/50 p-6 rounded-2xl border border-slate-800"
							>
								<div className="text-2xl p-4 bg-slate-800 rounded-xl">
									{detail.icon}
								</div>
								<div>
									<h3 className="text-lg font-semibold text-slate-200">
										{detail.label}
									</h3>
									{detail.values.map((v, i) => (
										<p key={i} className="text-slate-400 mt-1">
											{v}
										</p>
									))}
								</div>
							</div>
						))}
					</div>

					<div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-2xl">
						<form onSubmit={handleSubmit} className="space-y-5">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<input
									required
									type="text"
									placeholder="Your Name"
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									className="bg-slate-800 border border-slate-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
								/>
								<input
									required
									type="email"
									placeholder="Your Email"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className="bg-slate-800 border border-slate-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
								/>
							</div>
							<input
								type="text"
								name="subject"
								placeholder="Subject"
								value={formData.subject}
								onChange={(e) =>
									setFormData({ ...formData, subject: e.target.value })
								}
								className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
							/>

							<textarea
								required
								placeholder="Message"
								rows={5}
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
							></textarea>

							<button
								disabled={status === "loading"}
								className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
							>
								{status === "loading" ?
									"Sending..."
								:	<>
										<FaPaperPlane /> Send Message
									</>
								}
							</button>
							{status === "success" && (
								<p className="text-emerald-400 text-center">
									Message sent successfully!
								</p>
							)}
							{status === "error" && (
								<p className="text-red-400 text-center">
									Something went wrong. Try again.
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
