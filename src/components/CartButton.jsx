import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Button = styled.button`
	position: fixed;
	bottom: 15px;
	width: 300px;
	max-width: 70vw;
	height: 50px;
	left: 50%;
	transform: translate(-50%, 0);
	color: white;
	padding: 8px;
	background-color: var(--green);
	cursor: pointer;
	font-size: 16px;
	font-weight: 400;
	transition: 0.5s ease-out;
	border: none;
	&:hover {
		background-color: #aab800;
	}
`;

const CartButton = () => {
	return (
		<Link to={`/cart`}>
			<Button>SHOW CART</Button>
		</Link>
	);
};

export default CartButton;
