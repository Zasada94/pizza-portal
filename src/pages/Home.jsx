import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import CartButton from "../components/CartButton";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import PromoImage from "../components/PromoImage";

const Home = () => {
	return (
		<>
			<Navbar />
			<Gallery />
			<PromoImage />
			<Menu />
			<CartButton />
			<Footer />
		</>
	);
};

export default Home;
