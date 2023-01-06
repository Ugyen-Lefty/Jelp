import { useEffect, useState } from "react";
import ReviewCard from "../components/Card";

const Home = () => {
	const url =
		"https://react-projects-x-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json";

	const [isEmpty, setIsEmpty] = useState(true);
	const [loadedReviews, setLoadedReviews] = useState([]);

	function getAllReviews() {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setIsEmpty(!data);
				const reviews = [];
				for (const key in data) {
					const review = {
						id: key,
						...data[key],
					};
					reviews.push(review);
				}
				reviews.reverse();
				setLoadedReviews(reviews);
			});
	}

	useEffect(() => {
		getAllReviews();
	}, []);

	if (isEmpty) {
		return (
			<div>
				<h1>No Reviews Found</h1>
			</div>
		);
	} else {
		return <ReviewCard reviews={loadedReviews} />;
	}
};

export default Home;
