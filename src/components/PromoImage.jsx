import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const PromoImg = styled.img`
	width: 100%;
	max-width: 800px;
	margin: 20px auto;
	cursor: hover;
`;

const PromoImage = () => {
	return (
		<Wrapper>
			<Link to={`/promotions`}>
				<PromoImg src="https://i.ibb.co/2trBXLB/promoimg.png"></PromoImg>
			</Link>
		</Wrapper>
	);
};

export default PromoImage;
