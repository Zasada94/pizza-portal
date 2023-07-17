import { styled } from "styled-components";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-weight: 500;
	font-size: 30px;
`;

const Subtitle = styled.h2`
	display: flex;
	color: #be3144;
	font-weight: 400;
`;

const ItemWrapper = styled.div``;

const ItemImage = styled.img``;

const RightWrapper = styled.div``;

const ItemTitle = styled.h2``;

const ItemDesc = styled.p``;

const OthersWrapper = styled.div``;

const Price = styled.div``;

const AddButton = styled.button``;

const Menu = () => {
	return (
		<Container>
			<Title>Our menu:</Title>
			<Subtitle>
				<LocalPizzaIcon />
				Pizza
			</Subtitle>
			<ItemWrapper>
				<ItemImage src="https://i.ibb.co/bNVvQnK/Screenshot-1.png"></ItemImage>
				<RightWrapper>
					<ItemTitle>DOUBLE PEPERONI</ItemTitle>
					<ItemDesc>Double: tomato sauce, mozarella, pepperoni</ItemDesc>
					<OthersWrapper>
						<Price>30 PLN</Price>
						<AddButton>Dodaj +</AddButton>
					</OthersWrapper>
				</RightWrapper>
			</ItemWrapper>
		</Container>
	);
};

export default Menu;
