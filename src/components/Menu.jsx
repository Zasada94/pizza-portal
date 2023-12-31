import { styled } from "styled-components";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import axios from "axios";
import Product from "./Product";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { dummyData } from "../dummyData";

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

const Menu = () => {
	const [products, setProducts] = useState([]);

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

	return (
		<Container>
			<Title>Our menu:</Title>
			<Subtitle>
				<LocalPizzaIcon />
				Pizza
			</Subtitle>
			<Wrapper>
				{products.map((item) => (
					<Product item={item} key={item._id} />
				))}
			</Wrapper>
		</Container>
	);
};

export default Menu;
