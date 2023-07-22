import React, { useState } from "react";
import { styled } from "styled-components";
import { full, mobile } from "../responsive";
import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increaseAmount, decreaseAmount } from "../redux/cartRedux";

const Container = styled.div`
	margin: 0 auto;
	max-width: 1200px;
`;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({
		padding: "10px",
	})}
`;

const Title = styled.h1`
	font-weight: 500;
	font-size: 30px;
	align-self: start;
	margin: 10px 0 0 15px;
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
	border: 0.5px solid none;
	border-radius: 15px;
	box-shadow: 0 10px 45px 10px #26282b0f;
	margin: 10px 10px;
	padding: 5px;
	flex-grow: 1;
	flex-basis: 100%;
	${full({
		margin: "15px 20px",
		flexBasis: "40%",
	})}
	${mobile({
		margin: "10px 20px",
		padding: "10px 10px",
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
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	font-size: 16px;
	font-weight: 300;
	${mobile({
		fontSize: "14px",
	})}
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	margin: 15px 0 5px;
	${mobile({
		flexDirection: "row",
	})}
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
`;

const ProductAmount = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid var(--red);
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;

const ProductPrice = styled.div`
	font-size: 20px;
	font-weight: 300;
`;

const Summary = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	border: 0.5px solid none;
	border-radius: 15px;
	margin: 10px 0;
	padding: 10px 20px;
	box-shadow: 0 10px 45px 10px #26282b0f;
	${full({
		margin: "15px 20px",
	})}
	${mobile({
		margin: "10px 20px",
		padding: "10px 20px",
	})}
`;

const SummaryTitle = styled.h1`
	font-weight: 400;
	font-size: 20px;
`;

const SummaryItem = styled.div`
	font-weight: 300;
	margin: 10px 0;
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
	align-self: center;
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
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	return (
		<Container>
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
						{cart.products.map((product, index) => (
							<Product key={index}>
								<ProductDetail>
									<Image src={product.img} />
									<Details>
										<ProductName>
											<b>Product:</b> {product.title}
										</ProductName>
										<ProductId>
											<b>ID:</b> {product._id}
										</ProductId>
										<ProductSize>
											<b>Size:</b> {product.size}
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<Add
											onClick={() => {
												dispatch(increaseAmount({ ...product }));
											}}
										/>
										<ProductAmount>{product.quantity}</ProductAmount>
										<Remove
											onClick={() => {
												dispatch(decreaseAmount({ ...product }));
											}}
										/>
									</ProductAmountContainer>
									<ProductPrice>
										{product.price * product.quantity} PLN
									</ProductPrice>
								</PriceDetail>
							</Product>
						))}
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice> {cart.total} PLN</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Delivery cost</SummaryItemText>
							<SummaryItemPrice> 20 PLN</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Delivery discount</SummaryItemText>
							<SummaryItemPrice>-20 PLN</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>{cart.total} PLN</SummaryItemPrice>
						</SummaryItem>
						<Link to={`/order`}>
							<SummaryButton>ORDER NOW</SummaryButton>
						</Link>
					</Summary>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

export default Cart;
