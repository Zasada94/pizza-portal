import { styled } from "styled-components";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { full } from "../responsive";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	${full({
		flexWrap: "nowrap",
	})}
`;

const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	border: 0.5px solid none;
	border-radius: 15px;
	box-shadow: 0 10px 45px 10px #26282b0f;
	margin: 15px 40px;
	padding: 15px 15px;
	flex-grow: 1;
	${full({
		margin: "15px 20px",
	})}
`;

const ItemImage = styled.img`
	width: 150px;
	margin-right: 20px;
`;

const RightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
`;

const ItemTitle = styled.h2`
	font-size: 20px;
	font-weight: 400;
	flex: 1;
`;

const ItemDesc = styled.p`
	font-size: 14px;
	font-weight: 300;
	flex: 1;
`;

const OthersWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 3;
	align-items: end;
`;

const Price = styled.div`
	padding: 5px 10px 5px;
`;

const AddButton = styled.button`
	color: white;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 10px;
	padding: 5px 10px;
	margin-right: 10px;
	word-spacing: 15px;
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

const Menu = () => {
	return (
		<Container>
			<Title>Our menu:</Title>
			<Subtitle>
				<LocalPizzaIcon />
				Pizza
			</Subtitle>
			<Wrapper>
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
			</Wrapper>
		</Container>
	);
};

export default Menu;
