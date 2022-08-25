import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
	GetServerSidePropsContext,
	GetServerSidePropsResult,
	NextApiHandler,
	PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { IronOptions } from "./config";

export function withSessionRoute(handler: NextApiHandler<any>) {
	return withIronSessionApiRoute(handler, IronOptions);
}

export function withSessionSsr<
	P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
	handler: (
		context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
	) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
	return withIronSessionSsr(handler, IronOptions);
}
