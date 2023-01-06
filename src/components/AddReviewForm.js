import { Field, Form } from "react-final-form";
import "./AddReviewForm.css";
import CustomButton from "./CustomButton";
import AddRating from "./AddRating";
import { useNavigate } from "react-router-dom";

export default function AddReviewForm() {
	const navigate = useNavigate();

	function onSubmit(data) {
		fetch(
			"https://react-projects-x-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json",
			{
				method: "POST",
				body: JSON.stringify({ ...data, favorite: false }),
				headers: {
					"Content-type": "application/json",
				},
			}
		).then((res) => {
			alert("Form Submitted");
			navigate("/", { replace: true });
		});
	}

	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Field
						name="restaurantName"
						component="input"
						placeholder="Name of Restaurant"
						className="text-field"
					/>
					<Field
						name="imageUrl"
						component="input"
						placeholder="Image Url"
						className="text-field"
					/>
					<Field
						name="description"
						render={({ input, meta }) => (
							<textarea
								{...input}
								placeholder="Description"
								className="text-area"
							/>
						)}
					/>
					<Field
						name="restaurantRatings"
						type="number"
						defaultValue={3}
						parse={(value) => +value || 0}
						render={({ input, meta }) => (
							<AddRating {...input} className="review" />
							// <textarea
							// 	{...input}
							// 	placeholder="Description"
							// 	className="text-area"
							// />
						)}
					/>
					<CustomButton />
				</form>
			)}
		/>
	);
}
