import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import AddReviewForm from "./AddReviewForm";

export default function AddReviewCard(props) {
	return (
		<Card sx={{ maxWidth: 1000 }}>
			<CardHeader title="Add a Review" />
			<CardContent>
				<AddReviewForm />
			</CardContent>
		</Card>
	);
}
