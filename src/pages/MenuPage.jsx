import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import CartButton from "../components/CartButton";
import Footer from "../components/Footer";
import ParrallaxMenu from "../components/ParrallaxMenu";
import PromoImage from "../components/PromoImage";

const MenuPage = () => {
	return (
		<>
			<Navbar />
			<ParrallaxMenu />
			<PromoImage />
			<Menu />
			<CartButton />
			<Footer />
		</>
	);
};

export default MenuPage;
