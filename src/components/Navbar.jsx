import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { full, tablet } from "../responsive";

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

const Center = styled.div`
	display: flex;
	flex-direction: column;
	${tablet({
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
	})}
	height: 300px;
`;
const MenuWrapper = styled.div`
	/* ${tablet({ transform: "translate(0, -200%)" })}; */
	${full({ display: "flex", alignItems: "center", justifyContent: "center" })}
	display: ${(props) => (props.opened === "true" ? "flex" : "none")};
	justify-content: flex-end;
	flex-direction: ${(props) => props.opened === "true" && "column"};
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
		<Container>
			<Left>
				<Logo>
					<LogoIcon></LogoIcon>
					PIZZA PORTAL
				</Logo>
			</Left>
			<Center>
				<Burger
					onClick={() => {
						setOpen(!open);
						console.log(open);
					}}
				>
					<BurgerLine opened={open.toString()} type="top"></BurgerLine>
					<BurgerLine opened={open.toString()} type="middle"></BurgerLine>
					<BurgerLine opened={open.toString()} type="bottom"></BurgerLine>
				</Burger>
				<MenuWrapper opened={open.toString()}>
					<MenuItem onClick={() => navigate("/menu")}>MENU</MenuItem>
					<MenuItem onClick={() => navigate("/promotions")}>
						PROMOTIONS
					</MenuItem>
					<MenuItem onClick={() => navigate("/gallery")}>GALLERY</MenuItem>
					<MenuItem onClick={() => navigate("/contact")}>CONTACT</MenuItem>
				</MenuWrapper>
			</Center>
			<Right>
				<Button>ORDER ONLINE</Button>
			</Right>
		</Container>
	);
};

export default Navbar;
