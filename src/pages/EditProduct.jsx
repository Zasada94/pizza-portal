import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { full, mobile } from "../responsive";

const Container = styled.div``;

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
`;
const AddImage = styled.input``;
const AddTitle = styled.input``;
const AddDesc = styled.input``;
const AddPrice = styled.input``;
const AddSize = styled.input``;
const InStock = styled.input``;

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
		<Container>
			<ItemWrapper>
				<AddWrapper onSubmit={handleUpdate}>
					<AddImage
						placeholder="image url"
						name="img"
						value={product.img}
						onChange={handleChange}
					></AddImage>
					<AddTitle
						placeholder="title text"
						name="title"
						value={product.title}
						onChange={handleChange}
					></AddTitle>
					<AddDesc
						placeholder="description text"
						name="desc"
						value={product.desc}
						onChange={handleChange}
					></AddDesc>
					<AddPrice
						placeholder="price value [PLN]"
						name="price"
						value={product.price}
						onChange={handleChange}
					></AddPrice>
					<AddSize
						placeholder="sizes (comma-separated)"
						name="size"
						value={product.size}
						onChange={handleChange}
					></AddSize>
					<InStockWrapper>
						inStock?
						<InStock
							type="checkbox"
							checked={product.inStock}
							onChange={(e) =>
								setProduct({ ...product, inStock: e.target.checked })
							}
						></InStock>
					</InStockWrapper>
					<AddButton type="submit">UPDATE</AddButton>
				</AddWrapper>
			</ItemWrapper>
		</Container>
	);
};

export default EditProduct;
