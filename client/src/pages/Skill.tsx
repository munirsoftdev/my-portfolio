import type { FC, ReactNode } from "react";

import {
	FaNodeJs,
	FaReact,
	FaMobileAlt,
	FaDesktop,
	FaDatabase,
	FaLock,
	FaGlobe,
} from "react-icons/fa";

import {
	SiMongodb,
	SiPostgresql,
	SiMysql,
	SiFirebase,
	SiTailwindcss,
	SiElectron,
	SiTypescript,
	SiDocker,
	SiGithubactions,
	SiNetlify,
	SiSonar,
	SiOwasp,
	SiKubernetes,
} from "react-icons/si";

interface Tool {
	name: string;
	icon: ReactNode;
}

interface SkillCategory {
	title: string;
	description: string;
	icon: ReactNode;
	tools: Tool[];
	color: string;
}

const Skill: FC = () => {
	const categories: SkillCategory[] = [
		{
			title: "MERN Stack Web",
			description:
				"Building full-stack web solutions with the power of the MERN ecosystem.",
			icon: <FaGlobe className="text-4xl text-cyan-400" />,
			color: "border-cyan-500",
			tools: [
				{ name: "React", icon: <FaReact /> },
				{ name: "Node.js", icon: <FaNodeJs /> },
				{ name: "Tailwind CSS", icon: <SiTailwindcss /> },
				{ name: "TypeScript", icon: <SiTypescript /> },
			],
		},
		{
			title: "Mobile App Dev",
			description: "Cross-platform mobile applications for iOS and Android.",
			icon: <FaMobileAlt className="text-4xl text-purple-400" />,
			color: "border-purple-500",
			tools: [
				{ name: "React Native", icon: <FaReact /> },
				{ name: "Firebase Auth", icon: <SiFirebase /> },
			],
		},
		{
			title: "Desktop App Dev",
			description:
				"Native-feeling desktop software for Windows, Linux and macOS.",
			icon: <FaDesktop className="text-4xl text-blue-400" />,
			color: "border-blue-500",
			tools: [
				{ name: "Electron.js", icon: <SiElectron /> },
				{ name: "IPC Communication", icon: <SiTypescript /> },
			],
		},
		{
			title: "Databases",
			description: "Expertise in SQL, NoSQL, and Real-time data management.",
			icon: <FaDatabase className="text-4xl text-emerald-400" />,
			color: "border-emerald-500",
			tools: [
				{ name: "MongoDB", icon: <SiMongodb /> },
				{ name: "PostgreSQL", icon: <SiPostgresql /> },
				{ name: "MySQL", icon: <SiMysql /> },
				{ name: "Firebase", icon: <SiFirebase /> },
			],
		},
		{
			title: "CI/CD & DevOps",
			description: "Automating deployment and containerizing environments.",
			icon: <SiDocker className="text-4xl text-blue-500" />,
			color: "border-orange-500",
			tools: [
				{ name: "Docker", icon: <SiDocker /> },
				{ name: "Kubernate", icon: <SiKubernetes /> },
				{ name: "GitHub Actions", icon: <SiGithubactions /> },
				{ name: "Netlify/Vercel/Render", icon: <SiNetlify /> },
			],
		},
		{
			title: "Security Tools",
			description: "Ensuring code integrity and protecting user data.",
			icon: <FaLock className="text-4xl text-red-500" />,
			color: "border-red-500",
			tools: [
				{ name: "JWT Auth", icon: <FaLock /> },
				{ name: "SonarQube", icon: <SiSonar /> },
				{ name: "OWASP Principles", icon: <SiOwasp /> },
			],
		},
	];

	return (
		<section className="bg-slate-950 text-white min-h-screen py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="mb-12">
					<h2 className="text-4xl font-bold mb-2">Technical Proficiency</h2>
					<p className="text-slate-400 text-lg">
						Comprehensive engineering across Web, Mobile, and Infrastructure.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{categories.map((cat, i) => (
						<div
							key={i}
							className={`bg-slate-900/40 border border-slate-800 border-t-4 ${cat.color} p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-300`}
						>
							<div className="mb-4">{cat.icon}</div>
							<h3 className="text-xl font-bold mb-2">{cat.title}</h3>
							<p className="text-slate-400 text-sm mb-6 h-12 line-clamp-2">
								{cat.description}
							</p>

							<div className="flex flex-wrap gap-2">
								{cat.tools.map((tool, idx) => (
									<div
										key={idx}
										className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-md text-xs border border-slate-700 hover:bg-slate-700 transition-colors"
									>
										<span className="text-slate-300">{tool.icon}</span>
										{tool.name}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skill;
