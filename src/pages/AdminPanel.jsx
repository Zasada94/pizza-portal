import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { dummyData } from "../dummyData";
import { full, mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

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

const AddWrapper = styled.form`
	display: flex;
	flex-direction: column;
	padding: 10px;
	width: 50vw;
	overflow: hidden;
	${full({
		width: "25vw",
	})};
`;

const AddInput = styled.input`
	margin: 4px;
	padding: 2px;
	border: none;
	border-radius: 5px;
	background-color: #f6f6f6;
`;

const PriceWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const PriceInput = styled.input`
	max-width: 60%;
	margin: 4px;
	padding: 2px;
	border: none;
	border-radius: 5px;
	background-color: #f6f6f6;
	flex-grow: 1;
`;

const InStockWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const DeleteButton = styled.button`
	color: white;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 10px;
	padding: 8px;
	margin: 5px;
	background-color: #be3144;
	cursor: pointer;
	font-weight: 500;
	transition: 0.5s ease-out;
	&:hover {
		background-color: #ab2c3d;
	}
`;
const AddButton = styled.button`
	color: white;
	padding: 8px;
	margin: 5px;
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

const AdminPanel = () => {
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const [newProduct, setNewProduct] = useState({
		immg: "",
		title: "",
		desc: "",
		price: 0,
		size: [],
		inStock: false,
	});

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await publicRequest.get(`/products`);
				setProducts(res.data);
			} catch (err) {
				// setProducts(dummyData);
				//THIS PART IS TO GET PRODUCTS FROM FAKE DB IN CASE API IS OFFLINE
				console.log(err);
			}
		};
		getProducts();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "size") {
			const sizeArray = value.split(",");
			setNewProduct({ ...newProduct, [name]: sizeArray });
		} else {
			setNewProduct({ ...newProduct, [name]: value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await publicRequest.post("/products", newProduct);
			console.log("Product create:", res.data);
		} catch (err) {
			console.log("error creating product", err);
		}
	};

	const handleDelete = async (productId) => {
		try {
			await publicRequest.delete(`/products/${productId}`);
			console.log("product deleted");
		} catch (err) {
			console.log("error deleting", err);
		}
	};

	const handleEdit = (productId) => {
		navigate(`/edit/${productId}`);
	};

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
							<AddButton
								onClick={() => {
									handleEdit(item._id);
								}}
							>
								EDIT
							</AddButton>
							<DeleteButton onClick={() => handleDelete(item._id)}>
								DELETE
							</DeleteButton>
						</ItemWrapper>
					))}
				</Wrapper>
				<Title>Add product</Title>
				<ItemWrapper>
					<AddWrapper onSubmit={handleSubmit}>
						<AddInput
							placeholder="image url"
							name="img"
							value={newProduct.img}
							onChange={handleChange}
						></AddInput>
						<AddInput
							placeholder="title text"
							name="title"
							value={newProduct.title}
							onChange={handleChange}
						></AddInput>
						<AddInput
							placeholder="description text"
							name="desc"
							value={newProduct.desc}
							onChange={handleChange}
						></AddInput>
						<PriceWrapper>
							Price:
							<PriceInput
								placeholder="price value [PLN]"
								name="price"
								value={newProduct.price}
								onChange={handleChange}
							></PriceInput>
						</PriceWrapper>
						<AddInput
							placeholder="sizes (comma-separated)"
							name="size"
							value={newProduct.size}
							onChange={handleChange}
						></AddInput>
						<InStockWrapper>
							in stock?
							<AddInput
								type="checkbox"
								checked={newProduct.inStock}
								onChange={(e) =>
									setNewProduct({ ...newProduct, inStock: e.target.checked })
								}
							></AddInput>
						</InStockWrapper>
						<AddButton>ADD PRODUCT</AddButton>
					</AddWrapper>
				</ItemWrapper>
			</Container>
			<Footer />
		</>
	);
};

export default AdminPanel;
