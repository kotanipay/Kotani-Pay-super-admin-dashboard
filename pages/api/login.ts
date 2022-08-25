import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/withSession";

declare module "iron-session" {
	interface IronSessionData {
		user?: {
			accessToken: string;
		};
	}
}

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
	const { phone, password } = req.body;

	const url = process.env.NEXT_PUBLIC_API_URL;

	try {
		const response = await axios.post(`${url}/login`, {
			phone,
			password,
		});

		const data = response.data;

		const accessToken = data.token;

		req.session.user = {
			accessToken,
		};

		await req.session.save();
		res.send({ message: "Successfully Logged In" });
	} catch (error: any) {
		const resError = error.response.data;

		res.status(resError.statusCode || 500).send(resError);
	}
}

export default withSessionRoute(loginRoute);
