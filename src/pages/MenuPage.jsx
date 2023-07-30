import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import CartButton from "../components/CartButton";
import Footer from "../components/Footer";

const MenuPage = () => {
	return (
		<>
			<Navbar />
			<Menu />
			<CartButton />
			<Footer/>
		</>
	);
};

export default MenuPage;
