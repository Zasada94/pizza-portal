import React from "react";
import { styled } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	height: 100px;
	padding-top: 20px;
	margin-left: auto;
	margin-right: auto;
	border-top: 0.5px solid lightgrey;
	${mobile({
		height: "150px",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
	})}
`;

const Left = styled.div`
	margin-left: 20px;
	margin-top: 15px;
	font-weight: 400;
	${mobile({
		marginLeft: "0",
	})}
`;

const Right = styled.div`
	display: flex;
	margin-right: 20px;
	${mobile({
		marginRight: "0",
	})}
`;

const SocialIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	margin: 5px 10px;
	color: #${(props) => props.color};
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		opacity: 50%;
	}
`;

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<Container>
			<Left>Double Pizza &copy; {year} </Left>
			<Right>
				<SocialIcon color="3B5999">
					<FacebookIcon style={{ width: "100%", height: "100%" }} />
				</SocialIcon>
				<SocialIcon color="E4405F">
					<InstagramIcon style={{ width: "100%", height: "100%" }} />
				</SocialIcon>
				<SocialIcon color="55acee">
					<TwitterIcon style={{ width: "100%", height: "100%" }} />
				</SocialIcon>
			</Right>
		</Container>
	);
};

export default Footer;
