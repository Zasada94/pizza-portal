import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import CartButton from "../components/CartButton";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { dummyData } from "../dummyData";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 30px;
	margin: 30px auto;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 0.5px solid none;
	border-radius: 15px;
	box-shadow: 0 10px 45px 10px #26282b0f;
	${mobile({
		maxWidth: "80vw",
		padding: "20px 10px",
	})}
`;

const ImgContainer = styled.div`
	width: 200px;
	overflow: hidden;
`;

const Image = styled.img`
	object-fit: cover;
	margin: 0 auto;
	width: 200px;
	height: 200px;
`;

const InfoContainer = styled.div`
	padding: 0px 50px;
	${mobile({
		padding: "0 10px",
	})}
`;

const Title = styled.h1`
	font-size: 20px;
	font-weight: 400;
	flex: 1;
	${mobile({
		fontSize: "18px",
	})}
`;

const Desc = styled.p`
	margin: 10px 0px;
	font-size: 14px;
	font-weight: 300;
	flex: 1;
	${mobile({
		fontSize: "12px",
	})}
`;

const Price = styled.span`
	${mobile({
		fontSize: "14px",
	})}
`;

const Filter = styled.div`
	width: 100%;
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
`;

const FilterTitle = styled.span`
	align-self: center;
	font-weight: 300;
	font-size: 16px;
	${mobile({
		fontSize: "14px",
		padding: " 2px 5px 2px",
	})}
`;

const FilterSize = styled.select`
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	width: 100%;
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
	border: 1px solid var(--red);
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;

const Button = styled.button`
	color: white;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 10px;
	padding: 5px 10px;
	background-color: #be3144;
	cursor: pointer;
	font-weight: 500;
	transition: 0.5s ease-out;
	&:hover {
		background-color: white;
		border: 1px solid #be3144;
		color: black;
	}
	${mobile({
		fontSize: "12px",
	})}
`;

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState("M");
	const dispatch = useDispatch();

	const handleQuantity = (type) => {
		if (type === "dec") {
			if (quantity > 1) {
				setQuantity(quantity - 1);
			}
		} else {
			setQuantity(quantity + 1);
		}
	};

	//THIS PART IS TO GET PRODUCTS FROM MONGO DB WITH API TURNED ON
	// useEffect(() => {
	// 	const getProduct = async () => {
	// 		try {
	// 			const res = await publicRequest.get("/products/find/" + id);
	// 			setProduct(res.data);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};
	// 	getProduct();
	// }, [id]);

	useEffect(() => {
		const getProduct = async () => {
			try {
				const productFromDB = dummyData.find((item) => item._id === id);
				setProduct(productFromDB);
			} catch (err) {
				console.log(err);
			}
		};
		getProduct();
	}, [id]);

	const handleClick = () => {
		dispatch(addProduct({ ...product, quantity, size }));
	};

	return (
		<Container>
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Desc>{product.desc}</Desc>
					<Filter>
						<FilterTitle>Size</FilterTitle>
						<FilterSize
							onChange={(e) => {
								setSize(e.target.value);
							}}
						>
							{product.size?.map((size) => (
								<FilterSizeOption key={size}>{size}</FilterSizeOption>
							))}
						</FilterSize>
					</Filter>
					<AddContainer>
						<Price>30 PLN</Price>
						<AmountContainer>
							<Remove onClick={() => handleQuantity("dec")} />
							<Amount>{quantity}</Amount>
							<Add onClick={() => handleQuantity("inc")} />
						</AmountContainer>
						<Button onClick={handleClick}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<CartButton />
		</Container>
	);
};

export default Product;
