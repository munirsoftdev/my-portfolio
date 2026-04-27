import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import logo from "../assets/munirsoftdev.jpg";

function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
		isActive ?
			"text-white bg-green-500 rounded-md px-3 py-2 underline decoration-2 underline-offset-8 decoration-white"
		:	"text-white rounded-md px-3 py-2 hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-green-500 transition-all duration-300";

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		// Added sticky and z-index to keep it at the top
		<div className="sticky top-0 z-50 w-full bg-slate-900 shadow-md">
			<div className="flex justify-between items-center py-3 px-4 md:px-10 lg:px-20 xl:px-32">
				<img
					src={logo}
					alt="logo"
					className="h-12 w-auto object-contain rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
				/>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex flex-row items-center gap-4 xl:gap-8">
					<NavLink to="/" className={navLinkClassName}>
						Home
					</NavLink>
					<NavLink to="/skill" className={navLinkClassName}>
						Skill
					</NavLink>
					<NavLink to="/experience" className={navLinkClassName}>
						Experience
					</NavLink>
					<NavLink to="/about" className={navLinkClassName}>
						About
					</NavLink>
					<NavLink to="/contact" className={navLinkClassName}>
						Contact
					</NavLink>
				</nav>

				{/* Menu Icon */}
				<button
					onClick={toggleMenu}
					className="lg:hidden text-3xl focus:outline-none"
				>
					{isMenuOpen ?
						<MdClose className="text-red-500" />
					:	<MdMenu className="text-white" />}
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			{isMenuOpen && (
				<div className="lg:hidden absolute w-[calc(100%-2rem)] left-4 bg-slate-900 rounded-2xl mt-2 p-6 shadow-2xl border border-white/10">
					<nav className="flex flex-col gap-3">
						<NavLink
							to="/"
							className={navLinkClassName}
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</NavLink>
						<NavLink
							to="/skill"
							className={navLinkClassName}
							onClick={() => setIsMenuOpen(false)}
						>
							Skill
						</NavLink>
						<NavLink
							to="/experience"
							className={navLinkClassName}
							onClick={() => setIsMenuOpen(false)}
						>
							Experience
						</NavLink>
						<NavLink
							to="/about"
							className={navLinkClassName}
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</NavLink>
						<NavLink
							to="/contact"
							className={navLinkClassName}
							onClick={() => setIsMenuOpen(false)}
						>
							Contact
						</NavLink>
					</nav>
				</div>
			)}
		</div>
	);
}

export default NavBar;
