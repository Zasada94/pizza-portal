import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { dummyData } from "../dummyData";
import { full, mobile } from "../responsive";

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

const AdminPanel = () => {
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
		<>
			<Navbar />
			<Container>
				<Title>Admin panel:</Title>
				<Subtitle>
					<LocalPizzaIcon />
					Pizza
				</Subtitle>
				<Wrapper>
					{products.map((item) => (
						<ItemWrapper item={item} key={item._id}>
							<ItemImage src={item.img}></ItemImage>
							<RightWrapper>
								<ItemTitle>{item.title}</ItemTitle>
								<ItemDesc>{item.desc}</ItemDesc>
								<OthersWrapper>
									<Price>{item.price} PLN</Price>
								</OthersWrapper>
							</RightWrapper>
						</ItemWrapper>
					))}
				</Wrapper>
			</Container>
			<Footer />
		</>
	);
};

export default AdminPanel;
