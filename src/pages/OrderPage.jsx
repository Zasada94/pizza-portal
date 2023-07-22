import { styled } from "styled-components";
import { full, mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
	margin: 0 auto;
	max-width: 1200px;
`;

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
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
	flex: 1;
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
	flex: 3;
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
	background-color: #be3144;
	cursor: pointer;
	font-weight: 500;
	transition: 0.5s ease-out;
	align-self: center;
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
	text-align: center;
	display: flex;
	margin: 5px;
	border: ${(props) =>
		!!props.checked ? "1px solid var(--green)" : "1px solid lightgrey"};
	border-radius: 5px;
`;
const PaymentTitle = styled.h3`
	margin: 5px;
	margin-top: 10px;
`;
const PaymentInput = styled.input`
	text-align: center;
	margin: 5px;
	cursor: pointer;
`;
const PaymentLabel = styled.label`
	margin-right: 5px;
	padding: 3px 5px;
	margin-left: 5px;
	margin: 5px 0;
`;
const TermInput = styled.input`
	flex-grow: 1;
	padding: 3px 5px;
	margin: 5px;
	border: none;
	border-radius: 5px;
	background-color: #f6f6f6;
	cursor: pointer;
	&::placeholder {
		color: black;
	}
`;

const OrderPage = () => {
	const cart = useSelector((state) => state.cart);
	const [payChecked, setPayChecked] = useState(false);
	const [payChecked2, setPayChecked2] = useState(false);
	const [payChecked3, setPayChecked3] = useState(false);

	const [deliveryChecked, setDeliveryChecked] = useState(false);
	const [deliveryChecked2, setDeliveryChecked2] = useState(false);

	const [termChecked, setTermChecked] = useState(false);
	const [termChecked2, setTermChecked2] = useState(false);
	const [customTerm, setCustomTerm] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [adress, setAdress] = useState("");

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
		setDeliveryChecked(!deliveryChecked);
		setDeliveryChecked2(false);
	};
	const handleDeliveryChange2 = () => {
		setDeliveryChecked2(!deliveryChecked2);
		setDeliveryChecked(false);
	};

	const handleTermChange = () => {
		setTermChecked(!termChecked);
		setTermChecked2(false);
	};
	const handleTermChange2 = () => {
		setTermChecked2(!termChecked2);
		setTermChecked(false);
	};

	const handleOrder = async () => {
		if (
			!!payChecked ||
			!!payChecked2 ||
			(!!payChecked3 && !!cart.total && !!deliveryChecked) ||
			(deliveryChecked2 && !!termChecked) ||
			!!termChecked2
		) {
			try {
				const res = await publicRequest.post("/orders", {
					products: cart.products.map((item) => ({
						productId: item._id,
						quantity: item.quantity,
						size: item.size,
					})),
					total: cart.total,
					online: !!payChecked,
					card: !!payChecked2,
					cash: !!payChecked3,
					delivery: !!deliveryChecked,
					address: adress,
					ASAP: !!termChecked,
					term: customTerm,
					name: name,
					phone: phone,
					email: email,
				});
			} catch (err) {
				console.log(err);
			}
		} else {
			console.log("give all neccessary data");
		}
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
									<PaymentItem checked={payChecked}>
										<PaymentInput
											type="checkbox"
											checked={payChecked}
											onChange={handlePayChange}
										></PaymentInput>
										<PaymentLabel>Online (recommended)</PaymentLabel>
									</PaymentItem>
									<PaymentItem checked={payChecked2}>
										<PaymentInput
											type="checkbox"
											checked={payChecked2}
											onChange={handlePayChange2}
										></PaymentInput>
										<PaymentLabel>Card (on delivery)</PaymentLabel>
									</PaymentItem>
									<PaymentItem checked={payChecked3}>
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
									<PaymentItem checked={deliveryChecked}>
										<PaymentInput
											type="checkbox"
											checked={deliveryChecked}
											onChange={handleDeliveryChange}
										></PaymentInput>
										<PaymentLabel>Adress delivered</PaymentLabel>
									</PaymentItem>
									<PaymentItem checked={deliveryChecked2}>
										<PaymentInput
											type="checkbox"
											checked={deliveryChecked2}
											onChange={handleDeliveryChange2}
										></PaymentInput>
										<PaymentLabel>personal pickup</PaymentLabel>
									</PaymentItem>
								</PaymentWrapper>
								<PaymentWrapper>
									<PaymentTitle>Term</PaymentTitle>
									<PaymentItem checked={termChecked}>
										<PaymentInput
											type="checkbox"
											checked={termChecked}
											onChange={handleTermChange}
										></PaymentInput>
										<PaymentLabel>As soon as possible</PaymentLabel>
									</PaymentItem>
									<PaymentItem checked={termChecked2}>
										<PaymentInput
											type="checkbox"
											checked={termChecked2}
											onChange={handleTermChange2}
										></PaymentInput>
										<PaymentLabel>Choose term</PaymentLabel>
										{termChecked2 && (
											<TermInput
												type="text"
												placeholder="Type date and time here..."
												onChange={(e) => setCustomTerm(e.target.value)}
											></TermInput>
										)}
									</PaymentItem>
								</PaymentWrapper>
								<PaymentWrapper>
									<PaymentTitle>Contact Data</PaymentTitle>
									<PaymentItem>
										<PaymentLabel>Name: </PaymentLabel>
										<TermInput
											type="text"
											placeholder="Type name here..."
											onChange={(e) => setName(e.target.value)}
										></TermInput>
									</PaymentItem>
									<PaymentItem>
										<PaymentLabel>Phone: </PaymentLabel>
										<TermInput
											type="text"
											placeholder="Type phone number here..."
											onChange={(e) => setPhone(e.target.value)}
										></TermInput>
									</PaymentItem>
									<PaymentItem>
										<PaymentLabel>E-mail: </PaymentLabel>
										<TermInput
											type="text"
											placeholder="Type e-mail here..."
											onChange={(e) => setEmail(e.target.value)}
										></TermInput>
									</PaymentItem>
									{deliveryChecked && (
										<PaymentItem>
											<PaymentLabel>Adress: </PaymentLabel>
											<TermInput
												type="text"
												placeholder="Type adress here..."
												onChange={(e) => setAdress(e.target.value)}
											></TermInput>
										</PaymentItem>
									)}
								</PaymentWrapper>
							</Form>
						</OrderData>
					</Summary>
					<Info>
						{cart.products.map((product) => (
							<Product key={product._id}>
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
				</Bottom>
				<SummaryButton onClick={handleOrder}>CONFIRM ORDER</SummaryButton>
			</Wrapper>
		</Container>
	);
};

export default OrderPage;
