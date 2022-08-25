import { withIronSessionApiRoute } from "iron-session/next";
import { IronOptions } from "../../lib/config";

export default withIronSessionApiRoute(
	//@ts-ignore
	function logoutRoute(req, res) {
		req.session.destroy();
		res.send({ userloggedOut: "Successfully" });
	},
	IronOptions
);
