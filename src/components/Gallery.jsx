import { styled } from "styled-components";
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	autoplay: {
		delay: 5000,
	},
	// Navigation arrows
	// navigation: {
	// 	nextEl: ".swiper-button-next",
	// 	prevEl: ".swiper-button-prev",
	// },
});

const Container = styled.div`
	max-width: 100%;
	height: auto;
	aspect-ratio: 16/9;
	border: none;
`;

const Wrapper = styled.div``;

const Slide = styled.div``;

const SlideImg = styled.img`
	width: 100%;
`;

const Gallery = () => {
	return (
		<Container className="swiper">
			<Wrapper className="swiper-wrapper">
				<Slide className="swiper-slide">
					<SlideImg src="../../public/img/pizzaslider1.jpg" alt="" />
				</Slide>
				<Slide className="swiper-slide">
					<SlideImg src="../../public/img/pizzaslider2.jpg" alt="" />
				</Slide>
				<Slide className="swiper-slide">
					<SlideImg src="../../public/img/pizzaslider3.jpg" alt="" />
				</Slide>
			</Wrapper>

			{/* <!-- If we need navigation buttons --> */}
			{/* <div className="swiper-button-prev"></div>
			<div className="swiper-button-next"></div> */}
		</Container>
	);
};

export default Gallery;
