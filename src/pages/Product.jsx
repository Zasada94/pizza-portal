import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: contain;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;

const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	&:hover {
		background-color: #f8f4f4;
	}
`;

const Product = () => {
	const [quantity, setQuantity] = useState(1);

	const handleQuantity = (type) => {
		if (type === "dec") {
			if (quantity > 1) {
				setQuantity(quantity - 1);
			}
		} else {
			setQuantity(quantity + 1);
		}
	};

	return (
		<Container>
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src="https://i.ibb.co/bNVvQnK/Screenshot-1.png" />
				</ImgContainer>
				<InfoContainer>
					<Title>Double Pepperoni</Title>
					<Desc>Double: tomato sauce, mozarella, pepperoni</Desc>
					<Price>30 PLN</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>SMALL 30cm</FilterSizeOption>
								<FilterSizeOption>MEDIUM 40cm</FilterSizeOption>
								<FilterSizeOption>LARGE 50cm</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove onClick={() => handleQuantity("dec")} />
							<Amount>{quantity}</Amount>
							<Add onClick={() => handleQuantity("inc")} />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default Product;
