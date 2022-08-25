import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosRequestHeaders,
	AxiosResponse,
} from "axios";
import { useState } from "react";

export async function fetchData(endpoint?: string) {
try {
	const response = await axios(`${endpoint}`, {});
	return response.data;
} catch (error) {
	console.log(error)
}
}

export enum RequestMethod {
	GET = "GET",
	POST = "POST",
	PATCH = "PATCH",
}

interface UseApiOptions<ResponseDataType = any, ErrorDataType = any> {
	onSuccess?: (response: AxiosResponse<ResponseDataType>) => void;
	onError?: (error: AxiosError<ErrorDataType>) => void;
	method?: RequestMethod;
	headers?: AxiosRequestHeaders;
}

export function useApi<
	T extends object,
	D extends object = any,
	E extends object = any
>(url: string, options?: UseApiOptions<D, E>, token?: string) {
	const [isLoading, setIsloading] = useState(false);

	const submit = async (data?: T) => {
		setIsloading(true);

		try {
			const method =
				options?.method?.toLowerCase() || RequestMethod.POST.toLowerCase();

			const requestConfig: AxiosRequestConfig = {
				headers: {
					Authorization: `Bearer ${token}`,
					...options?.headers,
				},
			};

			const response = await (axios as any)[method]?.(
				url,
				method === RequestMethod.GET.toLowerCase() ? requestConfig : data,
				requestConfig
			);

			options?.onSuccess?.(response);
		} catch (error: any) {
			options?.onError?.(error);
		}

		setIsloading(false);
	};

	return {
		submit,
		isLoading,
		setIsloading,
	};
}
