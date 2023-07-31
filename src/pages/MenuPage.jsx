import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import CartButton from "../components/CartButton";
import Footer from "../components/Footer";
import ParrallaxMenu from "../components/ParrallaxMenu";

const MenuPage = () => {
	return (
		<>
			<Navbar />
			<ParrallaxMenu />
			<Menu />
			<CartButton />
			<Footer />
		</>
	);
};

export default MenuPage;
