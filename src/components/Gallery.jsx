import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { full } from "../responsive";

const Container = styled.div`
	position: relative;
	height: auto;
	aspect-ratio: 16/9;
	border: none;
	overflow: hidden;
	${full({
		aspectRatio: "auto",
		maxHeight: "600px",
	})}
`;

const Wrapper = styled.div`
	display: flex;
	transition: transform 1s ease;
	transform: ${({ currentslide }) => `translateX(-${100 * currentslide}%)`};
`;

const Slide = styled.div`
	flex-shrink: 0;
	width: 100%;
`;

const SlideImg = styled.img`
	width: 100%;
`;

const Gallery = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Container>
			<Wrapper currentslide={currentSlide}>
				<Slide>
					<SlideImg src="https://i.ibb.co/x7NJpsp/pizzaslider1.jpg" alt="" />
				</Slide>
				<Slide>
					<SlideImg src="https://i.ibb.co/80N43zD/pizzaslider2.jpg" alt="" />
				</Slide>
				<Slide>
					<SlideImg src="https://i.ibb.co/zGT4bnq/pizzaslider3.jpg" alt="" />
				</Slide>
			</Wrapper>
		</Container>
	);
};

export default Gallery;
