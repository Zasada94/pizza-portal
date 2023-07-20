import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import CartButton from "../components/CartButton";

const Home = () => {
	return (
		<>
			<Navbar />;
			<Menu />;
			<CartButton />
		</>
	);
};

export default Home;
