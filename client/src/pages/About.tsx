import type { FC } from "react";
import {
	FaLaptopCode,
	FaRocket,
	FaUserGraduate,
	FaTerminal,
} from "react-icons/fa";

const About: FC = () => {
	const stats = [
		{
			icon: <FaLaptopCode />,
			label: "Stacks",
			value: "MERN, Native, Electron",
		},
		{ icon: <FaTerminal />, label: "Experience", value: "Full Stack Engineer" },
		{
			icon: <FaUserGraduate />,
			label: "Education",
			value: (
				<>
					Computer Science, <br /> Software Engineering
				</>
			),
		},

		{ icon: <FaRocket />, label: "Focus", value: "Performance & Security" },
	];

	return (
		<section className="bg-slate-950 text-white min-h-screen py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					{/* Left Side: Text/Story */}
					<div className="lg:col-span-7 space-y-6">
						<h2 className="text-blue-500 font-mono tracking-widest uppercase text-sm">
							Introduction
						</h2>
						<h1 className="text-5xl font-extrabold text-white">
							I'm Munir Yahaya, a{" "}
							<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
								Multi-Platform
							</span>{" "}
							Engineer.
						</h1>
						<p className="text-slate-400 text-lg leading-relaxed">
							I specialize in creating seamless digital experiences. Whether
							it's a complex
							<span className="text-white"> Web Dashboard</span> using the MERN
							stack, a high-performance
							<span className="text-white"> Mobile App</span> with React Native,
							or a specialized
							<span className="text-white"> Desktop Application</span> via
							Electron.js, I build with efficiency and security in mind.
						</p>
						<p className="text-slate-400 text-lg leading-relaxed">
							My journey in software engineering is driven by a passion for
							solving real-world problems through code. I don't just write
							scripts; I architect solutions that scale, focusing heavily on
							clean code, CI/CD automation, and modern security standards.
						</p>

						{/* Stats Grid */}
						<div className="grid grid-cols-2 gap-4 pt-6">
							{stats.map((stat, i) => (
								<div
									key={i}
									className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl"
								>
									<div className="text-blue-500 text-xl mb-2">{stat.icon}</div>
									<h4 className="text-slate-200 font-bold">{stat.label}</h4>
									<p className="text-slate-400 text-sm">{stat.value}</p>
								</div>
							))}
						</div>
					</div>

					{/* Right Side: Image/Visual Placeholder */}
					<div className="lg:col-span-5 relative group">
						<div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
						<div className="relative bg-slate-900 aspect-square rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
							{/* Placeholder for your actual photo */}
							<div className="text-center p-10">
								<FaUserGraduate className="text-9xl text-slate-700 mx-auto mb-4" />
								<p className="text-slate-500 font-mono text-lg uppercase tracking-tighter">
									Munir Yahaya
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
