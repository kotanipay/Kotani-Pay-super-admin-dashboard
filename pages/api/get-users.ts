import axios from "axios";
import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(async function getUsers(req, res) {
	const url = process.env.NEXT_PUBLIC_API_URL;
	const token = req.session.user?.accessToken;

	try {
		const response = await axios.get(`${url}/all-user-details`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		res.send(response.data);
	} catch (error: any) {
		const resError = error.response.data;

		res.status(resError.statusCode || 500).send(resError);
	}
});
