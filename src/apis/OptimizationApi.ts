/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */


import * as runtime from '../runtime';
import type {
  OptimizeAccepted,
  OptimizeRequest,
  RateLimitError,
} from '../models/index';
import {
    OptimizeAcceptedFromJSON,
    OptimizeAcceptedToJSON,
    OptimizeRequestFromJSON,
    OptimizeRequestToJSON,
    RateLimitErrorFromJSON,
    RateLimitErrorToJSON,
} from '../models/index';

export interface CreateOptimizationRequest {
    optimizeRequest: OptimizeRequest;
}

/**
 * OptimizationApi - interface
 * 
 * @export
 * @interface OptimizationApiInterface
 */
export interface OptimizationApiInterface {
    /**
     * Validates the request synchronously, then enqueues the job for async processing. Returns 202 with a job ID and URLs for polling/streaming. 
     * @summary Submit a cutting optimization job
     * @param {OptimizeRequest} optimizeRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OptimizationApiInterface
     */
    createOptimizationRaw(requestParameters: CreateOptimizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OptimizeAccepted>>;

    /**
     * Validates the request synchronously, then enqueues the job for async processing. Returns 202 with a job ID and URLs for polling/streaming. 
     * Submit a cutting optimization job
     */
    createOptimization(optimizeRequest: OptimizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OptimizeAccepted>;

}

/**
 * 
 */
export class OptimizationApi extends runtime.BaseAPI implements OptimizationApiInterface {

    /**
     * Validates the request synchronously, then enqueues the job for async processing. Returns 202 with a job ID and URLs for polling/streaming. 
     * Submit a cutting optimization job
     */
    async createOptimizationRaw(requestParameters: CreateOptimizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OptimizeAccepted>> {
        if (requestParameters['optimizeRequest'] == null) {
            throw new runtime.RequiredError(
                'optimizeRequest',
                'Required parameter "optimizeRequest" was null or undefined when calling createOptimization().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Key"] = await this.configuration.apiKey("X-API-Key"); // apiKey authentication
        }

        const response = await this.request({
            path: `/v1/optimize`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OptimizeRequestToJSON(requestParameters['optimizeRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OptimizeAcceptedFromJSON(jsonValue));
    }

    /**
     * Validates the request synchronously, then enqueues the job for async processing. Returns 202 with a job ID and URLs for polling/streaming. 
     * Submit a cutting optimization job
     */
    async createOptimization(optimizeRequest: OptimizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OptimizeAccepted> {
        const response = await this.createOptimizationRaw({ optimizeRequest: optimizeRequest }, initOverrides);
        return await response.value();
    }

}
