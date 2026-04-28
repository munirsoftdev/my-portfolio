import {
	FaFacebookF,
	FaInstagram,
	FaWhatsapp,
	FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
	const socialLinks = [
		{
			name: "Facebook",
			href: "https://facebook.com/profile.php?id=61573719445286",
			icon: <FaFacebookF />,
			color: "hover:text-blue-600",
		},
		{
			name: "WhatsApp",
			href: "https://wa.me/+2348149701155",
			icon: <FaWhatsapp />,
			color: "hover:text-green-500",
		},
		{
			name: "Instagram",
			href: "https://instagram.com/munir682002",
			icon: <FaInstagram />,
			color: "hover:text-pink-500",
		},
		{
			name: "Telegram",
			href: "https://t.me/+2348149701155",
			icon: <FaTelegramPlane />,
			color: "hover:text-sky-400",
		},
	];

	return (
		<footer className="bg-gray-900 text-gray-300 py-8">
			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
				{/* Copyright Section */}
				<div className="text-sm font-medium">
					© {new Date().getFullYear()}{" "}
					<span className="text-white">munirsoftdev</span>. All rights reserved.
				</div>

				{/* Social Links Section */}
				<div className="flex items-center gap-6">
					{socialLinks.map((social) => (
						<a
							key={social.name}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							className={`text-2xl transition-colors duration-300 ${social.color}`}
							aria-label={social.name}
						>
							{social.icon}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
