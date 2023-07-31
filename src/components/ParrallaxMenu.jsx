import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
	background-image: url("https://i.ibb.co/hsd9m1Q/parrallax2.jpg");
	min-height: 400px;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Parrallax = () => {
	return <Container></Container>;
};

export default Parrallax;
