import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Add } from "@mui/icons-material";

export default function CustomButton() {
	return (
		<Stack direction="row" spacing={2}>
			<Button type="submit" variant="outlined" startIcon={<Add />}>
				Add Review
			</Button>
		</Stack>
	);
}
