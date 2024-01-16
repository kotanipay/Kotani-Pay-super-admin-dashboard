/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiConstants } from '../constants/api';

export class HttpClient {
  private axiosInstance?: AxiosInstance;
  private static instance: HttpClient;

  constructor() {
    this.setupAxios();
    this.setupInterceptors();
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  private setupAxios() {
    this.axiosInstance = axios.create({
      baseURL: ApiConstants.apiBaseUrl,
      timeout: 10000,
    });
  }

  private setupInterceptors(): void {
    // Request interceptor

    this.axiosInstance?.interceptors.request.use(
      async (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance?.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401) {
          // check the message
          if (error.response.data.message.includes('token expired')) {
            // refresh the token
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
              try {
                const tokens = await this.refreshToken(refreshToken);
                if (tokens) {
                  localStorage.setItem('accessToken', tokens.accessToken);
                  localStorage.setItem('refreshToken', tokens.refreshToken);
                  // retry the request
                  const config = error.config;
                  config.headers.Authorization =
                    'Bearer ' + localStorage.getItem('accessToken');
                  return new Promise((resolve, reject) => {
                    axios
                      .request(config)
                      .then((response) => {
                        resolve(response);
                      })
                      .catch((error) => {
                        reject(error);
                      });
                  });
                } else {
                  return Promise.reject(error);
                }
              } catch (error) {
                // clear the local storage and redirect to login
                localStorage.clear();
                window.location.href = '/';
                return Promise.reject(error);
              }
            } else {
              return Promise.reject(error);
            }
          } else {
            return Promise.reject(error);
          }
        } else {
          return Promise.reject(error);
        }
      }
    );
  }

  private refreshToken(
    refreshToken: string
  ): Promise<Record<string, string> | undefined> {
    // Make a request to the /refresh endpoint with the refresh token
    // Return a Promise that resolves with the new access token
    return this.axiosInstance!.get(
      `/dashboard/auth/refresh-token?token=${refreshToken}`
    )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        localStorage.clear();
        window.location.href = '/';
        return Promise.resolve(undefined);
      });
  }

  public get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance!.get(url, config);
  }

  public post(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.axiosInstance!.post(url, data, config);
  }

  public patch(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.axiosInstance!.patch(url, data, config);
  }

  public form(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.axiosInstance!.postForm(url, data, config);
  }

  public put(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.axiosInstance!.put(url, data, config);
  }

  public delete(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.axiosInstance!.delete(url, config);
  }
}
