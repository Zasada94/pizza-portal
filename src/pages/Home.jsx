import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import CartButton from "../components/CartButton";
import Gallery from "../components/Gallery";

const Home = () => {
	return (
		<>
			<Navbar />
			<Gallery />
			<Menu />
			<CartButton />
		</>
	);
};

export default Home;
