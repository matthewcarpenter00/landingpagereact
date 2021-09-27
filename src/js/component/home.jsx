import React from "react";

import { Navbar } from "./navBar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Footer } from "./footer.jsx";
import { Card } from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />

			<div className="row justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

			<Footer />
		</div>
	);
};

export default Home;
