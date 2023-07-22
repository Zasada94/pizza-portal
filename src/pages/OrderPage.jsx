import { styled } from "styled-components";
import { full, mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useState } from "react";

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
		padding: "5px",
		flexDirection: "column",
	})}
`;
const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const ProductInfo = styled.div`
	padding: 10px;
	font-size: 16px;
	${mobile({
		fontSize: "14px",
		padding: "8px",
	})}
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
	font-weight: 500;
	font-size: 20px;
`;

const SummaryItem = styled.div`
	font-weight: 400;
	margin: 10px 0;
	display: flex;
	justify-content: space-between;
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

const OrderData = styled.div``;
const Form = styled.form``;
const PaymentWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const PaymentItem = styled.div`
	display: flex;
`;
const PaymentTitle = styled.h3``;
const PaymentInput = styled.input``;
const TermInput = styled.input``;
const PaymentLabel = styled.label``;

const OrderPage = () => {
	const cart = useSelector((state) => state.cart);
	const [payChecked, setPayChecked] = useState(false);
	const [payChecked2, setPayChecked2] = useState(false);
	const [payChecked3, setPayChecked3] = useState(false);

	const [deliveryChecked, setDeliveryChecked] = useState(false);
	const [deliveryChecked2, setDeliveryChecked2] = useState(false);
	const [deliveryChecked3, setDeliveryChecked3] = useState(false);

	const [termChecked, setTermChecked] = useState(false);
	const [termChecked2, setTermChecked2] = useState(false);
	const [customTerm, setCustomTerm] = useState("");

	const handlePayChange = () => {
		setPayChecked(!payChecked);
		setPayChecked2(false);
		setPayChecked3(false);
	};
	const handlePayChange2 = () => {
		setPayChecked2(!payChecked2);
		setPayChecked(false);
		setPayChecked3(false);
	};
	const handlePayChange3 = () => {
		setPayChecked3(!payChecked3);
		setPayChecked(false);
		setPayChecked2(false);
	};

	const handleDeliveryChange = () => {
		setDeliveryChecked(!payChecked);
		setDeliveryChecked2(false);
		setDeliveryChecked3(false);
	};
	const handleDeliveryChange2 = () => {
		setDeliveryChecked2(!payChecked2);
		setDeliveryChecked(false);
		setDeliveryChecked3(false);
	};
	const handleDeliveryChange3 = () => {
		setDeliveryChecked3(!payChecked3);
		setDeliveryChecked(false);
		setDeliveryChecked2(false);
	};

	const handleTermChange = () => {
		setTermChecked(!payChecked);
		setTermChecked2(false);
	};
	const handleTermChange2 = () => {
		setTermChecked2(!payChecked2);
		setTermChecked(false);
	};

	return (
		<Container>
			<Navbar />
			<Wrapper>
				<Title>Your order:</Title>
				<Top>
					<Link to="/menu">
						<LeftButton>BACK TO CART</LeftButton>
					</Link>
					<RightButton>CONFIRM ORDER</RightButton>
				</Top>
				<Bottom>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>{cart.total} PLN</SummaryItemPrice>
						</SummaryItem>
						<OrderData>
							<Form>
								<PaymentWrapper>
									<PaymentTitle>Payment</PaymentTitle>
									<PaymentItem>
										<PaymentInput
											type="checkbox"
											checked={payChecked}
											onChange={handlePayChange}
										></PaymentInput>
										<PaymentLabel>Online (recommended)</PaymentLabel>
									</PaymentItem>
									<PaymentItem>
										<PaymentInput
											type="checkbox"
											checked={payChecked2}
											onChange={handlePayChange2}
										></PaymentInput>
										<PaymentLabel>Card (on delivery)</PaymentLabel>
									</PaymentItem>
									<PaymentItem>
										<PaymentInput
											type="checkbox"
											checked={payChecked3}
											onChange={handlePayChange3}
										></PaymentInput>
										<PaymentLabel>Cash (on delivery)</PaymentLabel>
									</PaymentItem>
								</PaymentWrapper>
								<PaymentWrapper>
									<PaymentTitle>Delivery</PaymentTitle>
									<PaymentItem>
										<PaymentInput
											type="checkbox"
											checked={deliveryChecked}
											onChange={handleDeliveryChange}
										></PaymentInput>
										<PaymentLabel>Adress delivered</PaymentLabel>
									</PaymentItem>
									<PaymentItem>
										<PaymentInput
											type="checkbox"
											checked={deliveryChecked2}
											onChange={handleDeliveryChange2}
										></PaymentInput>
										<PaymentLabel>personal pickup</PaymentLabel>
									</PaymentItem>
									<PaymentItem>
										<PaymentInput
											type="checkbox"
											checked={deliveryChecked3}
											onChange={handleDeliveryChange3}
										></PaymentInput>
										<PaymentLabel>cash (on delivery)</PaymentLabel>
									</PaymentItem>
								</PaymentWrapper>
								<PaymentWrapper>
									<PaymentTitle>Term</PaymentTitle>
									<PaymentItem>
										<PaymentInput
											type="checkbox"
											checked={termChecked}
											onChange={handleTermChange}
										></PaymentInput>
										<PaymentLabel>As soon as possible</PaymentLabel>
									</PaymentItem>
									<PaymentItem>
										<PaymentInput
											type="checkbox"
											checked={termChecked2}
											onChange={handleTermChange2}
										></PaymentInput>
										<PaymentLabel>Choose term</PaymentLabel>
									</PaymentItem>
									<PaymentItem>
										<TermInput
											type="text"
											placeholder="Type date and time here..."
											onChange={(e) => setCustomTerm(e.target.value)}
										></TermInput>
									</PaymentItem>
								</PaymentWrapper>
							</Form>
						</OrderData>
						<Link to={`/order`} style={{ alignSelf: "center" }}>
							<SummaryButton>CONFIRM ORDER</SummaryButton>
						</Link>
					</Summary>
				</Bottom>
				<Info>
					{cart.products.map((product, index) => (
						<Product key={index}>
							<ProductDetail>
								<ProductInfo>
									<b>Product:</b> {product.title}
								</ProductInfo>
								<ProductInfo>
									<b>Size:</b> {product.size}
								</ProductInfo>
								<ProductInfo>
									<b>Quantity:</b> {product.quantity}
								</ProductInfo>
								<ProductInfo>
									<b>Price:</b> {product.price * product.quantity} PLN
								</ProductInfo>
							</ProductDetail>
						</Product>
					))}
				</Info>
			</Wrapper>
		</Container>
	);
};

export default OrderPage;
