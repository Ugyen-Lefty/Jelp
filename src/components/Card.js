import * as React from "react";
import CardItem from "./CardItem";

export default function ReviewCard(props) {
	return (
		<div>
			{props.reviews.map((res, key) => {
				return (
					<CardItem
						key={key}
						id={res.id}
						restaurantName={res.restaurantName}
						imageUrl={res.imageUrl}
						restaurantRatings={res.restaurantRatings}
						description={res.description}
						favorite={res.favorite}
					/>
				);
			})}
		</div>
	);
}
