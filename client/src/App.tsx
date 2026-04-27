import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			{" "}
			<BrowserRouter>
				<NavBar />

				<main className="grow pt-16 pb-20">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="skill" element={<Skill />} />
						<Route path="experience" element={<Experience />} />
						<Route path="contact" element={<Contact />} />
						<Route path="about" element={<About />} />
					</Routes>
				</main>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
