import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Parrallax from "../components/Parrallax";
import { styled } from "styled-components";
import { mobile, smallest, tablet } from "../responsive";
import DoubleMenu from "../components/DoubleMenu";
import TripleMenu from "../components/TripleMenu";

const Promo = styled.div`
	position: absolute;
	top: 40%;
	width: 90%;
	margin: 0 auto;
	text-align: center;
	color: white;
	font-size: 25px;
	font-weight: 800;
`;

const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	overflow: hidden;
	${mobile({
		flexDirection: "column",
	})}
`;

const DoubleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border: 0.5px solid none;
	cursor: pointer;
	border-radius: 15px;
	box-shadow: 0 10px 45px 10px #26282b0f;
	margin: 15px 30px;
	padding: 35px 35px;
	${mobile({
		margin: "15px 40px",
		padding: "35px 45px",
	})}
	${smallest({
		margin: "15px 20px",
		padding: "35px 25px",
	})}
`;

const TripleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border: 0.5px solid none;
	cursor: pointer;
	border-radius: 15px;
	box-shadow: 0 10px 45px 10px #26282b0f;
	margin: 15px 30px;
	padding: 35px 35px;
	${mobile({
		margin: "15px 40px",
		padding: "35px 45px",
	})}
	${smallest({
		margin: "15px 20px",
		padding: "35px 25px",
	})}
`;

const PromoImage = styled.img`
	width: 100%;
`;

const PromoTitle = styled.h1`
	margin-top: 20px;
	margin-bottom: 10px;
	font-weight: 700;
	font-size: 20px;
	${smallest({
		fontSize: "18px",
	})}
`;

const PromoText = styled.p`
	text-align: center;
	font-weight: 500;
	font-size: 16px;
	${smallest({
		fontSize: "15px",
	})}
`;

const Promotions = () => {
	const [doubleMenu, setDoubleMenu] = useState(false);
	const [tripleMenu, setTripleMenu] = useState(false);
	const [doubleWrapperVisible, setDoubleWrapperVisible] = useState(false);
	const [tripleWrapperVisible, setTripleWrapperVisible] = useState(false);
	const [doubleWrapperClicked, setDoubleWrapperClicked] = useState(false);
	const [tripleWrapperClicked, setTripleWrapperClicked] = useState(false);

	return (
		<>
			<Navbar />
			<Parrallax />
			<Promo>Promotions</Promo>
			<Container>
				{!tripleWrapperClicked && (
					<DoubleWrapper
						onClick={() => {
							setDoubleWrapperVisible(!doubleWrapperVisible);
							setTripleWrapperVisible(false);
							setDoubleMenu(true);
							setDoubleWrapperClicked(true);
							setTripleWrapperClicked(false);
						}}
						clickedDouble={doubleWrapperVisible}
					>
						<PromoImage
							src="
						https://i.ibb.co/2YTk2Lc/promotwo.png
						"
						></PromoImage>
						<PromoTitle>DOUBLE DEAL!</PromoTitle>
						<PromoText>Order two XL pizzas. Second is half price!</PromoText>
					</DoubleWrapper>
				)}
				{!doubleWrapperClicked && (
					<TripleWrapper
						onClick={() => {
							setTripleWrapperVisible(!tripleWrapperVisible);
							setDoubleWrapperVisible(false);
							setTripleMenu(true);
							setTripleWrapperClicked(true);
							setDoubleWrapperClicked(false);
						}}
						clickedTriple={tripleWrapperVisible}
					>
						<PromoImage
							src="
						https://i.ibb.co/nR6kVmP/promothree.png
					"
						></PromoImage>
						<PromoTitle>TRIPLE DEAL!</PromoTitle>
						<PromoText>Order three XL pizzas. Third one is free!</PromoText>
					</TripleWrapper>
				)}
			</Container>
			{doubleMenu && <DoubleMenu />}
			{tripleMenu && <TripleMenu />}
			<Footer />
		</>
	);
};

export default Promotions;
