import styled from "styled-components";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { resetSuccessFlag } from "../redux/userRedux";

const Container = styled.div`
	width: 95vw;
	height: 95vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	margin-top: 10px;
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
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 45%;
	border: none;
	padding: 15px 20px;
	background-color: var(--green);
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
	&:disabled {
		color: green;
		cursor: not-allowed;
	}
`;

const RegisterLink = styled.p`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
	color: black;
`;

const Error = styled.span`
	color: red;
`;

const Login = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { isFetching, isSuccess, error } = useSelector((state) => state.user);

	const handleClick = async (e) => {
		e.preventDefault();
		await login(dispatch, { username, password });
	};

	useEffect(() => {
		if (isSuccess) {
			navigate("/menu");
			dispatch(resetSuccessFlag());
		}
	}, [isSuccess]);

	return (
		<>
			<Navbar />
			<Container>
				<Wrapper>
					<Title>LOG IN</Title>
					<Form>
						<Input
							placeholder="username"
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
						<Input
							placeholder="password"
							type="password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<Button onClick={handleClick} disabled={isFetching}>
							LOG IN
						</Button>
						{error && <Error>Something went wrong...</Error>}
						<Link to="/register">
							<RegisterLink>CREATE AN ACCOUNT</RegisterLink>
						</Link>
					</Form>
				</Wrapper>
			</Container>
			<Footer />
		</>
	);
};

export default Login;
