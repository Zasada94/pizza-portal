import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { full, tablet } from "../responsive";
import logo from "../images/logo.png";

const Wrapper = styled.div`
	height: auto;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	height: 60px;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: reltive;
`;

const LogoIcon = styled.img`
	height: 60px;
`;

const Center = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
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
	width: 30px;
	height: 30px;
	background: none;
	border: none;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	${tablet({ display: "flex", flexDirection: "column" })}
	transition: 0.5s ease-out;
`;
const BurgerLine = styled.div`
	transition: 0.5s ease-out;
	width: 30px;
	height: 2px;
	background-color: black;
	margin: ${(props) => props.type === "middle" && "12px 0"};
	display: ${(props) =>
		props.type === "middle" && props.opened === "true" && "none"};
	transform: ${(props) =>
		(props.type === "bottom" &&
			props.opened === "true" &&
			"rotate(45deg) translate(-5%, 0)") ||
		(props.type === "top" &&
			props.opened === "true" &&
			"rotate(-45deg) translate(-5%, 0)")};
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
	padding: 8px;
	margin-right: 10px;
	background-color: #fe5757;
	cursor: pointer;
	font-weight: 500;
`;

const Navbar = () => {
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);

	return (
		<Wrapper>
			<Container>
				<LogoIcon src={logo}></LogoIcon>
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

						<MenuItem onClick={() => navigate("/contact")}>CONTACT</MenuItem>
						<MenuItem onClick={() => navigate("/account")}>ACCOUNT</MenuItem>
					</MenuDesktop>
				</Center>
				<Right>
					<Button>ORDER ONLINE</Button>
				</Right>
			</Container>
			<MenuMobile opened={open.toString()}>
				<MenuItem onClick={() => navigate("/menu")}>MENU</MenuItem>
				<MenuItem onClick={() => navigate("/promotions")}>PROMOTIONS</MenuItem>
				<MenuItem onClick={() => navigate("/contact")}>CONTACT</MenuItem>
				<MenuItem onClick={() => navigate("/account")}>ACCOUNT</MenuItem>
			</MenuMobile>
		</Wrapper>
	);
};

export default Navbar;