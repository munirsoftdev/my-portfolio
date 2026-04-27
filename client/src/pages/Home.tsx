function Home() {
	return (
		<div className="min-h-[85vh] flex flex-col items-center justify-center text-white bg-slate-900 px-6">
			<div className="text-center">
				<h1 className="text-2xl md:text-3xl text-gray-100 mb-2 opacity-80">
					Assalamu Alaikum
				</h1>

				<h2 className="text-5xl md:text-7xl font-bold mb-4">
					I'm <span className="text-blue-500">Munir Yahaya</span>
				</h2>

				{/* Center the typewriter */}
				<div className="flex justify-center">
					<h2 className="typewriter-text text-xl md:text-4xl font-mono font-semibold text-slate-300">
						Software Engineer
					</h2>
				</div>

				<p className="mt-8 text-slate-400 max-w-lg mx-auto text-lg">
					Passionate about crafting clean code and building modern web solutions
					that solve real-world problems.
				</p>
			</div>
		</div>
	);
}

export default Home;
