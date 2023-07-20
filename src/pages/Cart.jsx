import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({
		padding: "10px",
	})}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const LeftButton = styled.button`
	color: white;
	padding: 8px;
	background-color: var(--green);
	cursor: pointer;
	font-weight: 500;
	transition: 0.5s ease-out;
	border: none;
	border-radius: 10px;
	&:hover {
		background-color: #aab800;
	}
`;

const RightButton = styled.button`
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

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({
		flexDirection: "column",
	})}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-around;
	${mobile({
		flexDirection: "column",
	})}
`;
const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	align-self: center;
	width: 150px;
	height: 150px;
	${mobile({
		width: "130px",
		height: "130px",
	})}
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({
		margin: "5px 15px",
	})}
`;

const ProductPrice = styled.div`
	font-size: 26px;
	font-weight: 200;
	${mobile({
		marginBottom: "20px",
	})}
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
	color: white;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 10px;
	padding: 8px;
	margin: 10px;
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

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Wrapper>
				<Title>YOUR CART</Title>
				<Top>
					<Link to="/menu">
						<LeftButton>CONTINUE SHOPPING</LeftButton>
					</Link>
					<RightButton>ORDER NOW</RightButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://i.ibb.co/bNVvQnK/Screenshot-1.png" />
								<Details>
									<ProductName>
										<b>Product:</b> Double Pepperoni
									</ProductName>
									<ProductId>
										<b>ID:</b> 123456789
									</ProductId>
									<ProductSize>
										<b>Size:</b> LARGE 50cm
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>1</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>30 PLN</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice> SUM PLN</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated delivery cost</SummaryItemText>
							<SummaryItemPrice> 20 PLN</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Delivery discount</SummaryItemText>
							<SummaryItemPrice>-20 PLN</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>SUM PLN</SummaryItemPrice>
						</SummaryItem>
						<SummaryButton>ORDER NOW</SummaryButton>
					</Summary>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

export default Cart;
