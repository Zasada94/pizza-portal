import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Parrallax from "../components/Parrallax";
import { styled } from "styled-components";
import DoubleMenu from "../components/DoubleMenu";
import TripleMenu from "../components/TripleMenu";
import Promos from "../components/Promos";
import CartButton from "../components/CartButton";

const Promo = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, 0);
	text-align: center;
	color: white;
	font-size: 25px;
	font-weight: 800;
`;

const Promotions = () => {
	const [doubleMenu, setDoubleMenu] = useState(false);
	const [tripleMenu, setTripleMenu] = useState(false);
	return (
		<>
			<Navbar />
			<Parrallax />
			<Promo>Promotions</Promo>
			<Promos
				doubleMenu={doubleMenu}
				tripleMenu={tripleMenu}
				setDoubleMenu={setDoubleMenu}
				setTripleMenu={setTripleMenu}
			/>
			{doubleMenu && <DoubleMenu />}
			{tripleMenu && <TripleMenu />}
			<CartButton />
			<Footer />
		</>
	);
};

export default Promotions;
