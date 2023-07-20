import React from "react";
import { styled } from "styled-components";
import { full, mobile } from "../responsive";
import { Link } from "react-router-dom";

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

const Product = ({ item }) => {
	return (
		<ItemWrapper>
			<ItemImage src={item.img}></ItemImage>
			<RightWrapper>
				<ItemTitle>{item.title}</ItemTitle>
				<ItemDesc>{item.desc}</ItemDesc>
				<OthersWrapper>
					<Price>{item.price} PLN</Price>
					<Link to={`/product/:${item._id}`}>
						<AddButton>Add +</AddButton>
					</Link>
				</OthersWrapper>
			</RightWrapper>
		</ItemWrapper>
	);
};

export default Product;
