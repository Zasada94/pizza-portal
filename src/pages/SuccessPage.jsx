import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import Parrallax from "../components/Parrallax";
import { Link } from "react-router-dom";
import StarRating from "../components/starRating";

const Container = styled.div``;

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

const Top = styled.div`
	text-align: center;
	border: 0.5px solid none;
	border-radius: 15px;
	box-shadow: 0 10px 45px 10px #26282b0f;
	margin: 10px 10px;
	padding: 15px;
`;

const LeftButton = styled.button`
	color: white;
	padding: 8px;
	background-color: var(--green);
	cursor: pointer;
	font-weight: 500;
	transition: 0.5s ease-out;
	border: none;
	border-radius: 10px;
	margin: 30px 20px;
	&:hover {
		background-color: #aab800;
	}
`;
const Bottom = styled.div``;

const Info = styled.div`
	margin: 10px 5px;
`;

const Title = styled.div`
	color: var(--red);
	font-size: 22px;
	font-weight: 700;
	margin: 10px 5px;
`;

const Subtitle = styled.div`
	margin: 10px 5px;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 5px;
`;

const SuccessPage = () => {
	return (
		<Container>
			<Navbar />
			<Parrallax />
			<Thanks>Thank You for Your order!</Thanks>
			<Top>
				<Info>
					Now please wait for a phone call from one of our employees to confirm
					the order!
				</Info>
				<Title>WE'D LOVE YOUR FEEDBACK</Title>
				<Subtitle>How would You rate Your online ordering experience?</Subtitle>
				<Wrapper>
					<StarRating />
				</Wrapper>
			</Top>
			<Bottom>
				<Link to="/menu">
					<LeftButton>BACK TO MENU</LeftButton>
				</Link>
			</Bottom>
			<Footer />
		</Container>
	);
};

export default SuccessPage;
