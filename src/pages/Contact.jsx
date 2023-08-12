import React from "react";
import Navbar from "../components/Navbar";
import { styled } from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
`;

const Title = styled.div`
	color: var(--red);
	font-weight: 700;
	font-size: 30px;
	align-self: flex-start;
`;

const Subtitle = styled.div``;
const Location = styled.div``;
const Details = styled.div``;

const Contact = () => {
	return (
		<>
			<Navbar />
			<Wrapper>
				<Title>Find us</Title>
				<Location>
					<Details>
						<Subtitle></Subtitle>
					</Details>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.76879010632!2d20.98596538888598!3d52.23873115686829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc81264718f1%3A0x585dbd09069dfeb2!2s%C5%BBelazna%2087%2C%2000-879%20Warszawa!5e0!3m2!1spl!2spl!4v1691842177854!5m2!1spl!2spl"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</Location>
			</Wrapper>
		</>
	);
};

export default Contact;
