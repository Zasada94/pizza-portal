import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	height: 60px;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Left = styled.div`
	font-weight: 800;
`;

const Logo = styled.div``;

const LogoIcon = styled.div``;

const Center = styled.div``;

const Right = styled.div``;

const MenuItem = styled.button`
	border: none;
	padding: 10px;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
`;

const Button = styled.button`
	border: none;
	border-radius: 10px;
	padding: 10px;
	background-color: red;
	cursor: pointer;
	font-weight: 500;
`;

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<Left>
				<Logo>
					<LogoIcon></LogoIcon>
					PIZZA PORTAL
				</Logo>
			</Left>
			<Center>
				<MenuItem onClick={() => navigate("/menu")}>MENU</MenuItem>
				<MenuItem onClick={() => navigate("/promotions")}>PROMOTIONS</MenuItem>
				<MenuItem onClick={() => navigate("/gallery")}>GALLERY</MenuItem>
				<MenuItem onClick={() => navigate("/contact")}>CONTACT</MenuItem>
			</Center>
			<Right>
				<Button>ORDER ONLINE</Button>
			</Right>
		</Container>
	);
};

export default Navbar;
