import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { full, mobile } from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-weight: 500;
	font-size: 30px;
	align-self: start;
	margin: 10px 0 0 40px;
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

const EditProduct = () => {
	const location = useLocation();
	const productId = location.pathname.split("/")[2];
	const navigate = useNavigate();
	const [product, setProduct] = useState({
		title: "",
		desc: "",
		img: "",
		price: 0,
		size: [],
		inStock: false,
	});

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await publicRequest.get(`/products/find/${productId}`);
				setProduct(res.data);
			} catch (err) {
				console.log("error", err);
			}
		};

		fetchProduct();
	}, [productId]);

	const handleUpdate = async (e) => {
		e.preventDefault();
		try {
			await publicRequest.put(`/products/${productId}`, product);
			navigate("/admin");
		} catch (err) {
			console.log("error", err);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "size") {
			const sizeArray = value.split(",");
			setProduct({ ...product, [name]: sizeArray });
		} else {
			setProduct({ ...product, [name]: value });
		}
	};

	return (
		<>
			<Navbar />
			<Container>
				<Title>Edit product</Title>
				<ItemWrapper>
					<AddWrapper onSubmit={handleUpdate}>
						<AddInput
							placeholder="image url"
							name="img"
							value={product.img}
							onChange={handleChange}
						></AddInput>
						<AddInput
							placeholder="title text"
							name="title"
							value={product.title}
							onChange={handleChange}
						></AddInput>
						<AddInput
							placeholder="description text"
							name="desc"
							value={product.desc}
							onChange={handleChange}
						></AddInput>
						<PriceWrapper>
							Price:
							<PriceInput
								placeholder="price value [PLN]"
								name="price"
								value={product.price}
								onChange={handleChange}
							></PriceInput>
						</PriceWrapper>
						<AddInput
							placeholder="sizes (comma-separated)"
							name="size"
							value={product.size}
							onChange={handleChange}
						></AddInput>
						<InStockWrapper>
							inStock?
							<AddInput
								type="checkbox"
								checked={product.inStock}
								onChange={(e) =>
									setProduct({ ...product, inStock: e.target.checked })
								}
							></AddInput>
						</InStockWrapper>
						<AddButton type="submit">UPDATE</AddButton>
					</AddWrapper>
				</ItemWrapper>
			</Container>
			<Footer />
		</>
	);
};

export default EditProduct;
