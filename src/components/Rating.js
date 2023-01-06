import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function StarRating(props) {
	return (
		<Stack spacing={2}>
			{/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
			<Rating
				name="restaurant-ratings"
				defaultValue={props.rating}
				precision={0.5}
				readOnly
			/>
		</Stack>
	);
}
