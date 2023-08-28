import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useState } from "react";

const Container = styled.div`
	width: 95vw;
	height: 95vh;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	${mobile({
		width: "75%",
	})}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	margin-bottom: 10px;
	background-color: var(--green);
	color: white;
	cursor: pointer;
`;

const LoginLink = styled.p`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
	color: black;
`;

const Error = styled.div`
	color: red;
`;

const Success = styled.div`
	color: var(--green);
`;

const Register = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConf, setPasswordConf] = useState("");
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const [isFetching, setIsFetching] = useState(false);

	const handleClick = async (e) => {
		e.preventDefault();
		setError(null);
		setIsFetching(true);
		try {
			if (password === passwordConf) {
				// const response = await publicRequest.post("/auth/register", {
				// 	username,
				// 	email,
				// 	passwordConf,
				// });
				console.log("registration successfull");
				setSuccess(true);
				setTimeout(() => {
					navigate("/login");
					setIsFetching(false);
				}, 3000);
			} else {
				setError("Registration failed. Passwords don't match.");
			}
		} catch (err) {
			setError("Registration failed. Please try again.");
		}
	};

	return (
		<>
			<Navbar />
			<Container>
				<Wrapper>
					<Title>CREATE AN ACCOUNT</Title>
					<Form>
						<Input
							placeholder="username"
							onChange={(e) => setUsername(e.target.value)}
						/>
						<Input
							type="email"
							placeholder="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							type="password"
							placeholder="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Input
							type="password"
							placeholder="confirm password"
							onChange={(e) => setPasswordConf(e.target.value)}
						/>
						<Agreement>
							By creating an account, I consent to the processing of my personal
							data in accordance with the <b>PRIVACY POLICY</b>
						</Agreement>
						<Button onClick={handleClick} disabled={isFetching}>
							CREATE
						</Button>
					</Form>
					{error && <Error>{error}</Error>}
					{success && (
						<Success>Registration successful- Log in to continue!</Success>
					)}
					<Link to="/login">
						<LoginLink>HAVE AN ACCOUNT? SIGN IN</LoginLink>
					</Link>
				</Wrapper>
			</Container>
			<Footer />
		</>
	);
};

export default Register;
