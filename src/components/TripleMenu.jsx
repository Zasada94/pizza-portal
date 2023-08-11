import { styled } from "styled-components";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import axios from "axios";
import Product from "./Product";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { dummyData } from "../dummyData";
import { full, mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { addPromo } from "../redux/cartRedux";

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
	margin: 10px 0 0 40px;
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
	justify-content: space-around;
`;

const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	border: 0.5px solid none;
	border-radius: 15px;
	box-shadow: 0 10px 45px 10px #26282b0f;
	margin: 15px 40px;
	padding: 15px 15px;
	flex-basis: 100%;
	${full({
		margin: "15px 20px",
		flexBasis: "40%",
	})}
	${mobile({
		margin: "10px 20px",
		padding: "10px 10px",
	})}
`;

const ItemImage = styled.img`
	width: 150px;
	height: 150px;
	margin-right: 20px;
	align-self: center;
	${mobile({
		width: "130px",
		height: "130px",
	})}
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
	${mobile({
		fontSize: "18px",
	})}
`;

const ItemDesc = styled.p`
	font-size: 14px;
	font-weight: 300;
	flex: 1;
	${mobile({
		fontSize: "12px",
	})}
`;

const OthersWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 3;
	align-items: end;
`;

const Price = styled.div`
	padding: 5px 10px 5px;
	${mobile({
		fontSize: "14px",
		padding: " 2px 5px 2px",
	})}
`;

const AddButton = styled.button`
	color: white;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 10px;
	padding: 5px 10px;
	margin-right: 10px;
	word-spacing: 10px;
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
		wordSpacing: "3px",
		marginRight: "5px",
	})}
`;

const TripleMenu = () => {
	const [products, setProducts] = useState([]);
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState("XL");
	const dispatch = useDispatch();
	const [tempSelectedProduct, setTempSelectedProduct] = useState(null);
	const [tempSelectedProduct2, setTempSelectedProduct2] = useState(null);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await publicRequest.get(`/products`);
				setProducts(res.data);
			} catch (err) {
				setProducts(dummyData); //THIS PART IS TO GET PRODUCTS FROM FAKE DB IN CASE API IS OFFLINE
				console.log(err);
			}
		};
		getProducts();
	}, []);

	const handleClick = (productId) => {
		const selectedProduct = products.find(
			(product) => product._id === productId
		);
		if (selectedProduct) {
			if (!tempSelectedProduct) {
				setTempSelectedProduct(selectedProduct);
			} else if (!tempSelectedProduct2) {
				setTempSelectedProduct2(selectedProduct);
			} else {
				const lessExpensiveProduct =
					selectedProduct.price < tempSelectedProduct.price
						? selectedProduct
						: tempSelectedProduct;

				const moreExpensiveProduct =
					selectedProduct.price >= tempSelectedProduct.price
						? selectedProduct
						: tempSelectedProduct;

				const leastExpensiveProduct =
					lessExpensiveProduct.price < tempSelectedProduct2.price
						? lessExpensiveProduct
						: tempSelectedProduct2;

				const mostExpensiveProduct =
					moreExpensiveProduct.price > tempSelectedProduct2.price
						? moreExpensiveProduct
						: tempSelectedProduct2;

				let middleExpensiveProduct;
				if (
					selectedProduct !== leastExpensiveProduct &&
					selectedProduct !== mostExpensiveProduct
				) {
					middleExpensiveProduct = selectedProduct;
				} else if (
					tempSelectedProduct !== leastExpensiveProduct &&
					tempSelectedProduct !== mostExpensiveProduct
				) {
					middleExpensiveProduct = tempSelectedProduct;
				} else {
					middleExpensiveProduct = tempSelectedProduct2;
				}
				dispatch(
					addPromo({
						...leastExpensiveProduct,
						price: 0,
						quantity,
						size,
						isPromo: true,
					})
				);
				dispatch(
					addPromo({
						...middleExpensiveProduct,
						quantity,
						size,
						isPromo: true,
					})
				);
				dispatch(
					addPromo({
						...mostExpensiveProduct,
						quantity,
						size,
						isPromo: true,
					})
				);
				setTempSelectedProduct(null);
				setTempSelectedProduct2(null);
			}
		} else {
			console.log("Product not found");
		}
	};

	return (
		<Container>
			<Title>Choose three pizzas</Title>
			<Subtitle>
				<LocalPizzaIcon />
				Pizza
			</Subtitle>
			<Wrapper>
				{products.map((item) => (
					<ItemWrapper key={item._id}>
						<ItemImage src={item.img}></ItemImage>
						<RightWrapper>
							<ItemTitle>{item.title} XL</ItemTitle>
							<ItemDesc>{item.desc}</ItemDesc>
							<OthersWrapper>
								<Price>{item.price} PLN</Price>
								<AddButton onClick={() => handleClick(item._id)}>
									Add +
								</AddButton>
							</OthersWrapper>
						</RightWrapper>
					</ItemWrapper>
				))}
			</Wrapper>
		</Container>
	);
};

export default TripleMenu;
