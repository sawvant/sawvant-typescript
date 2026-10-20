/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */


import * as runtime from '../runtime';
import type {
  ApiError,
  BatchAccepted,
  BatchRequest,
  OptimizeAccepted,
  OptimizeRequest,
  RateLimitError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    BatchAcceptedFromJSON,
    BatchAcceptedToJSON,
    BatchRequestFromJSON,
    BatchRequestToJSON,
    OptimizeAcceptedFromJSON,
    OptimizeAcceptedToJSON,
    OptimizeRequestFromJSON,
    OptimizeRequestToJSON,
    RateLimitErrorFromJSON,
    RateLimitErrorToJSON,
} from '../models/index';

export interface CreateBatchOptimizationRequest {
    batchRequest: BatchRequest;
}

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
     * Enqueues an array of optimization requests as individual jobs and returns their IDs immediately. Poll or stream each job separately.  Maximum 50 fast jobs or 10 thorough jobs per batch. Requires a tier with the `batch` feature. 
     * @summary Submit multiple cutting optimization jobs
     * @param {BatchRequest} batchRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OptimizationApiInterface
     */
    createBatchOptimizationRaw(requestParameters: CreateBatchOptimizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchAccepted>>;

    /**
     * Enqueues an array of optimization requests as individual jobs and returns their IDs immediately. Poll or stream each job separately.  Maximum 50 fast jobs or 10 thorough jobs per batch. Requires a tier with the `batch` feature. 
     * Submit multiple cutting optimization jobs
     */
    createBatchOptimization(batchRequest: BatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchAccepted>;

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
     * Enqueues an array of optimization requests as individual jobs and returns their IDs immediately. Poll or stream each job separately.  Maximum 50 fast jobs or 10 thorough jobs per batch. Requires a tier with the `batch` feature. 
     * Submit multiple cutting optimization jobs
     */
    async createBatchOptimizationRaw(requestParameters: CreateBatchOptimizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchAccepted>> {
        if (requestParameters['batchRequest'] == null) {
            throw new runtime.RequiredError(
                'batchRequest',
                'Required parameter "batchRequest" was null or undefined when calling createBatchOptimization().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-Key"] = await this.configuration.apiKey("X-API-Key"); // apiKey authentication
        }

        const response = await this.request({
            path: `/v1/optimize/batch`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BatchRequestToJSON(requestParameters['batchRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BatchAcceptedFromJSON(jsonValue));
    }

    /**
     * Enqueues an array of optimization requests as individual jobs and returns their IDs immediately. Poll or stream each job separately.  Maximum 50 fast jobs or 10 thorough jobs per batch. Requires a tier with the `batch` feature. 
     * Submit multiple cutting optimization jobs
     */
    async createBatchOptimization(batchRequest: BatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchAccepted> {
        const response = await this.createBatchOptimizationRaw({ batchRequest: batchRequest }, initOverrides);
        return await response.value();
    }

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
