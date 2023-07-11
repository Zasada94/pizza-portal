import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 60px;
	/* padding: 10px 20px; */
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

const MenuItem = styled.button``;

const Button = styled.button``;

const Navbar = () => {
	return (
		<Container>
			<Left>
				<Logo>
					<LogoIcon></LogoIcon>
					PIZZA PORTAL
				</Logo>
			</Left>
			<Center>
				<MenuItem>MENU</MenuItem>
				<MenuItem>PROMOCJE</MenuItem>
				<MenuItem>GALERIA</MenuItem>
				<MenuItem>KONTAKT</MenuItem>
			</Center>
			<Right>
				<Button>ZAMÓW ONLINE</Button>
			</Right>
		</Container>
	);
};

export default Navbar;
