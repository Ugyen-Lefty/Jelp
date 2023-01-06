import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarRating from "../components/Rating";

export default function CardItem(props) {
	const [isFavorite, setIsFavorite] = useState(props.favorite);
	const handleFavorite = (id, fav) => {
		fetch(
			`https://react-projects-x-default-rtdb.asia-southeast1.firebasedatabase.app/reviews/${id}.json`,
			{
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					...props,
					favorite: fav,
				}),
			}
		)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setIsFavorite(res.favorite);
			});
	};

	return (
		<Card sx={{ maxWidth: 1000 }} style={{ marginBottom: "30px" }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
						A
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={props.restaurantName}
				subheader="January 6th, 2023"
			/>
			<CardMedia
				component="img"
				height="100%"
				image={props.imageUrl}
				alt="Restaurant Location"
			/>
			<CardContent>
				<StarRating rating={props.restaurantRatings} />
			</CardContent>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{props.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				{isFavorite ? (
					<IconButton
						aria-label="add to favorites"
						onClick={() => handleFavorite(props.id, false)}>
						<FavoriteIcon style={{ color: "red" }} />
					</IconButton>
				) : (
					<IconButton
						aria-label="add to favorites"
						onClick={() => handleFavorite(props.id, true)}>
						<FavoriteIcon />
					</IconButton>
				)}
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
