import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function AddRating(props) {
	return (
		<Stack spacing={2}>
			{/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
			<Rating
				{...props}
				value={+props.value || 0}
				precision={0.5}
			/>
		</Stack>
	);
}
