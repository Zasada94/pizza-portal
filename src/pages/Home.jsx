import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import CartButton from "../components/CartButton";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<Gallery />
			<Menu />
			<CartButton />
			<Footer/>
		</>
	);
};

export default Home;
