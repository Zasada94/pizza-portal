import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { full, tablet } from "../responsive";

const Wrapper = styled.div`
	height: auto;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: red;
`;

const Container = styled.div`
	height: 60px;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: blue;
`;

const Left = styled.div`
	font-weight: 800;
`;

const Logo = styled.div``;

const LogoIcon = styled.div``;

const Center = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 110px;
	${tablet({
		justifyContent: "flex-end",
	})}
`;
const MenuMobile = styled.div`
	${full({ display: "none" })}
	display: ${(props) => (props.opened === "true" ? "flex" : "none")};
	flex-direction: column;
`;

const MenuDesktop = styled.div`
	${tablet({ display: "none" })}
	display: ${(props) => (props.opened === "true" ? "none" : "flex")};
`;

const Burger = styled.button`
	${full({ display: "none" })}
	width: 33px;
	height: 33px;
	background: none;
	border: none;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	${tablet({ display: "flex", flexDirection: "column" })}
`;
const BurgerLine = styled.div`
	width: 30px;
	height: 1px;
	background-color: black;
	margin: ${(props) => props.type === "middle" && "12px 0"};
	display: ${(props) =>
		props.type === "middle" && props.opened === "true" && "none"};
	transform: ${(props) =>
		(props.type === "top" && props.opened === "true" && "rotate(45deg)") ||
		(props.type === "bottom" && props.opened === "true" && "rotate(-45deg)")};
`;

const Right = styled.div``;

const MenuItem = styled.button`
	border: none;
	margin: 10px;
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

	const [open, setOpen] = useState(false);

	return (
		
<Wrapper>
		<Container>
			<Left>
				<Logo>
					<LogoIcon></LogoIcon>
					PIZZA PORTAL
				</Logo>
			</Left>
			<Center opened={open.toString()}>
				<Burger
					onClick={() => {
						setOpen(!open);
					}}
				>
					<BurgerLine opened={open.toString()} type="top"></BurgerLine>
					<BurgerLine opened={open.toString()} type="middle"></BurgerLine>
					<BurgerLine opened={open.toString()} type="bottom"></BurgerLine>
				</Burger>

				<MenuDesktop opened={open.toString()}>
					<MenuItem onClick={() => navigate("/menu")}>MENU</MenuItem>
					<MenuItem onClick={() => navigate("/promotions")}>
						PROMOTIONS
					</MenuItem>
					<MenuItem onClick={() => navigate("/gallery")}>GALLERY</MenuItem>
					<MenuItem onClick={() => navigate("/contact")}>CONTACT</MenuItem>
				</MenuDesktop>
			</Center>
			<Right>
				<Button>ORDER ONLINE</Button>
			</Right>
		</Container>
						<MenuMobile opened={open.toString()}>
						<MenuItem onClick={() => navigate("/menu")}>MENU</MenuItem>
						<MenuItem onClick={() => navigate("/promotions")}>
							PROMOTIONS
						</MenuItem>
						<MenuItem onClick={() => navigate("/gallery")}>GALLERY</MenuItem>
						<MenuItem onClick={() => navigate("/contact")}>CONTACT</MenuItem>
					</MenuMobile>
					</Wrapper>
	);
};

export default Navbar;
