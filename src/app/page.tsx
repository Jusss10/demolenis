// pages/index.tsx

import React, { useEffect } from "react";
import Lenis from "lenis";

const Home: React.FC = () => {
	// useEffect hook om de Lenis raf loop te starten
	useEffect(() => {
		requestAnimationFrame(handleScrollAnimation); // Start de scrollanimatie
		return () => {
			lenis.destroy(); // Schoonmaken wanneer component wordt verwijderd
		};
	}, []);

	return (
		<div className="container mx-auto">
			<div className="h-screen flex flex-col items-center justify-center">
				<h1 className="text-4xl font-bold mb-4">Welkom bij mijn website</h1>
				<p className="text-lg">Scroll naar beneden om meer te ontdekken!</p>
			</div>
			<div className="section h-screen bg-gray-200">
				<h2 className="text-3xl font-bold text-center py-10">Section 1</h2>
			</div>
			<div className="section h-screen bg-blue-200">
				<h2 className="text-3xl font-bold text-center py-10">Section 2</h2>
			</div>
			<div className="section h-screen bg-green-200">
				<h2 className="text-3xl font-bold text-center py-10">Section 3</h2>
			</div>
		</div>
	);
};

export default Home;
