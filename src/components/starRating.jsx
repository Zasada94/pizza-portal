import * as React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";


export default function StarRating() {
	const [value, setValue] = React.useState(2);
	const [hover, setHover] = React.useState(-1);
	return (
		<Rating
			name="hover-feedback"
			value={value}
            size="large"
			precision={0.5}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			onChangeActive={(event, newHover) => {
				setHover(newHover);
			}}
			emptyIcon={
				<StarIcon
					style={{  opacity: 0.55 }}
					fontSize="inherit"
				/>
			}
		/>
	);
}
