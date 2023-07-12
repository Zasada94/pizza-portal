import { css } from "styled-components";

export const full = (props) => {
	return css`
		@media (min-width: 1080px) {
			${props}
		}
	`;
};

export const tablet = (props) => {
	return css`
		@media (max-width: 1080px) {
			${props}
		}
	`;
};

export const mobile = (props) => {
	return css`
		@media (max-width: 720px) {
			${props}
		}
	`;
};
