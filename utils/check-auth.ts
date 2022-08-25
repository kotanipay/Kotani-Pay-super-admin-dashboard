import { GetServerSideProps } from "next";
import { withSessionSsr } from "../lib/withSession";

export function checkAuthStatus(
	mustBeLoggedIn: boolean = true,
	getServerSidePropsFn?: GetServerSideProps
) {
	return withSessionSsr(async context => {
		const isLoggedIn = context.req.session.user?.accessToken !== undefined;

		if (mustBeLoggedIn) {
			if (!isLoggedIn) {
				return {
					redirect: {
						statusCode: 302,
						destination: "/",
					},
				};
			}
		} else {
			if (isLoggedIn) {
				return {
					redirect: {
						statusCode: 302,
						destination: "/dashboard",
					},
				};
			}
		}

		if (getServerSidePropsFn) {
			return getServerSidePropsFn(context);
		}

		return {
			props: {
				user: context.req.session.user || null,
			},
		};
	});
}
