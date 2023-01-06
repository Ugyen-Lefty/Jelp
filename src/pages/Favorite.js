import { useEffect, useState } from "react";
import ReviewCard from "../components/Card";

const Favorites = () => {
	const [isEmpty, setIsEmpty] = useState(true);
	const [favs, setFavs] = useState([]);

	function getAllFavorite() {
		fetch(
			"https://react-projects-x-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json"
		)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				const favorites = [];
				for (const key in res) {
					if (res[key].favorite) {
						const fav = {
							id: key,
							...res[key],
						};
						favorites.push(fav);
					}
				}
				favorites.reverse();
				setIsEmpty(!favorites.length);
				setFavs(favorites);
			});
	}

	useEffect(() => {
		getAllFavorite();
	}, [favs]);

	if (isEmpty) {
		return (
			<div>
				<h1>No Favorites Found</h1>
			</div>
		);
	} else {
		return <ReviewCard reviews={favs} />;
	}
};

export default Favorites;
