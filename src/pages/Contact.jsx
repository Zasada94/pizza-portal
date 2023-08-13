import React from "react";
import Navbar from "../components/Navbar";
import { styled } from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import { tablet } from "../responsive";
import Footer from "../components/Footer";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	padding: 10px 20px;
`;

const Title = styled.div`
	color: var(--red);
	font-weight: 700;
	font-size: 30px;
	align-self: flex-start;
`;

const Location = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	${tablet({ flexDirection: "column" })}
`;

const Gmaps = styled.div`
	max-width: 90vw;
	width: 600px;
	margin: 0 auto;
	${tablet({ order: "0" })}
`;

const Details = styled.div`
	margin: 10px 20px;
	${tablet({ order: "1" })};
`;

const DetailWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 0;
`;

const SubtitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Subtitle = styled.div`
	margin-left: 5px;
`;

const Contact = () => {
	return (
		<>
			<Navbar />
			<Wrapper>
				<Title>Find us</Title>
				<Location>
					<Details>
						<DetailWrapper>
							<LocationOnIcon sx={{ color: "var(--red)" }} />
							<Subtitle>Żelazna 87, 00-877 Warsaw</Subtitle>
						</DetailWrapper>
						<DetailWrapper>
							<PhoneIcon sx={{ color: "var(--red)" }} />
							<Subtitle>+48 123 456 789</Subtitle>
						</DetailWrapper>
						<DetailWrapper>
							<AccessTimeIcon sx={{ color: "var(--red)" }} />
							<SubtitleWrapper>
								<Subtitle>mon-fri 13-22</Subtitle>
								<Subtitle>sat-sun 12-23</Subtitle>
							</SubtitleWrapper>
						</DetailWrapper>
						<DetailWrapper>
							<EmailIcon sx={{ color: "var(--red)" }} />
							<Subtitle>DoublePizza@gmail.com</Subtitle>
						</DetailWrapper>
					</Details>
					<Gmaps>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.76879010632!2d20.98596538888598!3d52.23873115686829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc81264718f1%3A0x585dbd09069dfeb2!2s%C5%BBelazna%2087%2C%2000-879%20Warszawa!5e0!3m2!1spl!2spl!4v1691842177854!5m2!1spl!2spl"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</Gmaps>
				</Location>
			</Wrapper>
			<Footer />
		</>
	);
};

export default Contact;
