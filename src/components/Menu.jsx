import { styled } from "styled-components";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { full } from "../responsive";
import Product from "./Product";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
`;

const Title = styled.h1`
	font-weight: 500;
	font-size: 30px;
	align-self: start;
	margin: 20px 0px 0 40px;
`;

const Subtitle = styled.h2`
	display: flex;
	align-items: center;
	color: #be3144;
	font-weight: 400;
	align-self: start;
	margin: 0 40px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Menu = () => {
	return (
		<Container>
			<Title>Our menu:</Title>
			<Subtitle>
				<LocalPizzaIcon />
				Pizza
			</Subtitle>
			<Wrapper>
				<Product />
				<Product />
				<Product />
				<Product />
			</Wrapper>
		</Container>
	);
};

export default Menu;
