import type { FC } from "react";
import { FaBriefcase } from "react-icons/fa";

interface ExperienceItem {
	role: string;
	company: string;
	location: string;
	description: string[];
	tags: string[];
}

const Experience: FC = () => {
	const workHistory: ExperienceItem[] = [
		{
			role: "Full Stack Developer",
			company: "Tech Solutions Inc.",
			location: "Remote",
			description: [
				"Developed high-performance web apps using the MERN stack.",
				"Integrated CI/CD pipelines with GitHub Actions and Docker.",
				"Ensured top-tier security using JWT and OWASP best practices.",
			],
			tags: ["MERN", "Docker", "TypeScript"],
		},
		{
			role: "Mobile App Developer",
			company: "Innovate Mobility",
			location: "Lagos, Nigeria",

			description: [
				"Built cross-platform iOS and Android apps with React Native.",
				"Implemented real-time features using Firebase and PostgreSQL.",
				"Reduced app crash rates by 25% through SonarQube optimization.",
			],
			tags: ["React Native", "Firebase", "PostgreSQL"],
		},
		{
			role: "Desktop Engineer",
			company: "Software Systems Ltd.",
			location: "Hybrid",
			description: [
				"Designed native desktop apps using Electron.js and Node.js.",
				"Optimized IPC communication for low-latency system tasks.",
				"Managed large-scale data migrations with MySQL.",
			],
			tags: ["Electron.js", "Node.js", "MySQL"],
		},
	];

	return (
		<section className="bg-slate-950 text-white min-h-screen py-20 px-6">
			<div className="max-w-4xl mx-auto">
				<div className="mb-16 text-center">
					<h2 className="text-4xl font-bold mb-4 tracking-tight">
						Professional Experience
					</h2>
					<div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
				</div>

				<div className="relative border-l border-slate-800 ml-4 md:ml-8">
					{workHistory.map((item, index) => (
						<div key={index} className="mb-12 ml-8 relative group">
							{/* Pulse Indicator */}
							<div className="absolute -left-10.5 top-1.5 h-6 w-6 bg-slate-950 border-4 border-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>

							<div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-600 transition-all duration-300 shadow-xl">
								<div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
									<h3 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
										<FaBriefcase className="text-xl" /> {item.role}
									</h3>
								</div>

								<div className="flex items-center gap-4 text-slate-300 mb-4 font-medium italic">
									<span>{item.company}</span>
									<span className="h-1 w-1 bg-slate-600 rounded-full"></span>
								</div>

								<ul className="space-y-3 mb-6 text-slate-400 list-disc list-inside">
									{item.description.map((bullet, i) => (
										<li
											key={i}
											className="leading-relaxed hover:text-slate-200 transition-colors"
										>
											{bullet}
										</li>
									))}
								</ul>

								<div className="flex flex-wrap gap-2">
									{item.tags.map((tag) => (
										<span
											key={tag}
											className="text-[10px] uppercase tracking-widest font-bold bg-blue-900/30 text-blue-400 border border-blue-900/50 px-3 py-1 rounded-md"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
