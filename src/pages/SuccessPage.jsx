import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import Parrallax from "../components/Parrallax";

const Container = styled.div`
	height: 200vh;
`;

const Thanks = styled.p`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	font-size: 25px;
    font-weight: 800;
	text-align: center;
`;

const SuccessPage = () => {
	return (
		<Container>
			<Navbar />
			<Parrallax />
			<Thanks>Thank You for Your order!</Thanks>
			<Footer />
		</Container>
	);
};

export default SuccessPage;
