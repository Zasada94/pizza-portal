import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { full, mobile, tablet } from "../responsive";
import { Badge } from "@mui/material";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
	height: auto;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	height: 60px;
	width: 95vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	max-width: 1200px;
	${mobile({
		height: "50px",
	})}
`;

const LogoIcon = styled.img`
	height: 60px;
	margin-left: 5px;
	align-self: center;
	${mobile({
		height: "50px",
	})}
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
`;
const BurgerLine = styled.div`
	transition: 0.5s ease-out;
	width: 30px;
	height: 1px;
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
	color: black;
	border: none;
	border-radius: 5px;
	padding: 10px 25px;
	margin: 5px;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	transition: 0.5s ease-out;
	&:hover {
		color: #be3144;
	}
`;

const Button = styled.button`
	color: white;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 10px;
	padding: 8px;
	margin-right: 10px;
	background-color: #be3144;
	cursor: pointer;
	font-weight: 500;
	transition: 0.5s ease-out;
	&:hover {
		background-color: white;
		border: 1px solid #be3144;
		color: black;
	}
`;

const Navbar = () => {
	const badgeStyle = {
		"& .MuiBadge-badge": {
			color: "white",
			backgroundColor: "black",
			width: "18px",
			height: "18px",
			minWidth: "unset",
			padding: "0",
			textAlign: "center",
		},
	};
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);

	const quantity = useSelector((state) => state.cart.quantity);
	const user = useSelector((state) => state.user.currentUser);
	// const isAdmin = useSelector((state) => state.user.currentUser.isAdmin);

	return (
		<Wrapper>
			<Container>
				<Link to={`/`}>
					<LogoIcon src="https://i.ibb.co/D5bKZB1/logo.png"></LogoIcon>
				</Link>
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
						<MenuItem onClick={() => navigate("/login")}>ACCOUNT</MenuItem>
						{user?.isAdmin && (
							<MenuItem onClick={() => navigate("/login")}>ACCOUNT</MenuItem>
						)}
					</MenuDesktop>
				</Center>
				<Right>
					<Link to={`/cart`}>
						<Button>
							ORDER{" "}
							<Badge badgeContent={quantity} sx={badgeStyle}>
								<CartIcon />
							</Badge>
						</Button>
					</Link>
				</Right>
			</Container>
			<MenuMobile opened={open.toString()}>
				<MenuItem onClick={() => navigate("/menu")}>MENU</MenuItem>
				<MenuItem onClick={() => navigate("/promotions")}>PROMOTIONS</MenuItem>
				<MenuItem onClick={() => navigate("/contact")}>CONTACT</MenuItem>
				<MenuItem onClick={() => navigate("/login")}>ACCOUNT</MenuItem>
				{user?.isAdmin && (
					<MenuItem onClick={() => navigate("/admin")}>ADMIN PANEL</MenuItem>
				)}
			</MenuMobile>
		</Wrapper>
	);
};

export default Navbar;
