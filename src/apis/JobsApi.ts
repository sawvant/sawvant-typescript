/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */


import * as runtime from '../runtime';
import type {
  JobResponse,
} from '../models/index';
import {
    JobResponseFromJSON,
    JobResponseToJSON,
} from '../models/index';

export interface GetJobRequest {
    id: string;
}

export interface StreamJobRequest {
    id: string;
}

/**
 * JobsApi - interface
 * 
 * @export
 * @interface JobsApiInterface
 */
export interface JobsApiInterface {
    /**
     * Returns the current state of a job including progress, result, and errors.
     * @summary Get job status
     * @param {string} id Job UUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    getJobRaw(requestParameters: GetJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobResponse>>;

    /**
     * Returns the current state of a job including progress, result, and errors.
     * Get job status
     */
    getJob(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobResponse>;

    /**
     * Server-Sent Events stream that emits `progress`, `completed`, or `failed` events. The stream closes automatically when the job reaches a terminal state.  A `: heartbeat` comment is sent every 30 seconds to keep the connection alive through proxies and load balancers. SSE clients ignore these automatically. 
     * @summary Stream job progress via SSE
     * @param {string} id Job UUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    streamJobRaw(requestParameters: StreamJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
     * Server-Sent Events stream that emits `progress`, `completed`, or `failed` events. The stream closes automatically when the job reaches a terminal state.  A `: heartbeat` comment is sent every 30 seconds to keep the connection alive through proxies and load balancers. SSE clients ignore these automatically. 
     * Stream job progress via SSE
     */
    streamJob(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

}

/**
 * 
 */
export class JobsApi extends runtime.BaseAPI implements JobsApiInterface {

    /**
     * Returns the current state of a job including progress, result, and errors.
     * Get job status
     */
    async getJobRaw(requestParameters: GetJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getJob().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Key"] = await this.configuration.apiKey("X-API-Key"); // apiKey authentication
        }

        const response = await this.request({
            path: `/v1/jobs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobResponseFromJSON(jsonValue));
    }

    /**
     * Returns the current state of a job including progress, result, and errors.
     * Get job status
     */
    async getJob(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobResponse> {
        const response = await this.getJobRaw({ id: id }, initOverrides);
        return await response.value();
    }

    /**
     * Server-Sent Events stream that emits `progress`, `completed`, or `failed` events. The stream closes automatically when the job reaches a terminal state.  A `: heartbeat` comment is sent every 30 seconds to keep the connection alive through proxies and load balancers. SSE clients ignore these automatically. 
     * Stream job progress via SSE
     */
    async streamJobRaw(requestParameters: StreamJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling streamJob().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Key"] = await this.configuration.apiKey("X-API-Key"); // apiKey authentication
        }

        const response = await this.request({
            path: `/v1/jobs/{id}/stream`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Server-Sent Events stream that emits `progress`, `completed`, or `failed` events. The stream closes automatically when the job reaches a terminal state.  A `: heartbeat` comment is sent every 30 seconds to keep the connection alive through proxies and load balancers. SSE clients ignore these automatically. 
     * Stream job progress via SSE
     */
    async streamJob(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.streamJobRaw({ id: id }, initOverrides);
        return await response.value();
    }

}
