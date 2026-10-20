/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */


import * as runtime from '../runtime';
import type {
  DemoError,
  DemoOptimizeResponse,
  OptimizeRequest,
} from '../models/index';
import {
    DemoErrorFromJSON,
    DemoErrorToJSON,
    DemoOptimizeResponseFromJSON,
    DemoOptimizeResponseToJSON,
    OptimizeRequestFromJSON,
    OptimizeRequestToJSON,
} from '../models/index';

export interface CreateDemoOptimizationRequest {
    optimizeRequest: OptimizeRequest;
}

/**
 * DemoApi - interface
 * 
 * @export
 * @interface DemoApiInterface
 */
export interface DemoApiInterface {
    /**
     * Public endpoint behind the playground on sawvant.com. No API key or account needed. Runs the fast strategy synchronously and returns the result together with an SVG cutting plan per layout, so there is no job to poll.  Limits: at most 30 part types, a total part quantity of 100, 3 sheet types and a 64 KB request body. `strategy` must be omitted or `fast`; `cost_tariffs` is ignored. Each client IP may make 10 requests per minute and 100 per day. The input is not stored.  Browsers may only call this endpoint from sawvant.com. 
     * @summary Run a small optimization without an API key
     * @param {OptimizeRequest} optimizeRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DemoApiInterface
     */
    createDemoOptimizationRaw(requestParameters: CreateDemoOptimizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DemoOptimizeResponse>>;

    /**
     * Public endpoint behind the playground on sawvant.com. No API key or account needed. Runs the fast strategy synchronously and returns the result together with an SVG cutting plan per layout, so there is no job to poll.  Limits: at most 30 part types, a total part quantity of 100, 3 sheet types and a 64 KB request body. `strategy` must be omitted or `fast`; `cost_tariffs` is ignored. Each client IP may make 10 requests per minute and 100 per day. The input is not stored.  Browsers may only call this endpoint from sawvant.com. 
     * Run a small optimization without an API key
     */
    createDemoOptimization(optimizeRequest: OptimizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DemoOptimizeResponse>;

}

/**
 * 
 */
export class DemoApi extends runtime.BaseAPI implements DemoApiInterface {

    /**
     * Public endpoint behind the playground on sawvant.com. No API key or account needed. Runs the fast strategy synchronously and returns the result together with an SVG cutting plan per layout, so there is no job to poll.  Limits: at most 30 part types, a total part quantity of 100, 3 sheet types and a 64 KB request body. `strategy` must be omitted or `fast`; `cost_tariffs` is ignored. Each client IP may make 10 requests per minute and 100 per day. The input is not stored.  Browsers may only call this endpoint from sawvant.com. 
     * Run a small optimization without an API key
     */
    async createDemoOptimizationRaw(requestParameters: CreateDemoOptimizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DemoOptimizeResponse>> {
        if (requestParameters['optimizeRequest'] == null) {
            throw new runtime.RequiredError(
                'optimizeRequest',
                'Required parameter "optimizeRequest" was null or undefined when calling createDemoOptimization().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/demo/optimize`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OptimizeRequestToJSON(requestParameters['optimizeRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DemoOptimizeResponseFromJSON(jsonValue));
    }

    /**
     * Public endpoint behind the playground on sawvant.com. No API key or account needed. Runs the fast strategy synchronously and returns the result together with an SVG cutting plan per layout, so there is no job to poll.  Limits: at most 30 part types, a total part quantity of 100, 3 sheet types and a 64 KB request body. `strategy` must be omitted or `fast`; `cost_tariffs` is ignored. Each client IP may make 10 requests per minute and 100 per day. The input is not stored.  Browsers may only call this endpoint from sawvant.com. 
     * Run a small optimization without an API key
     */
    async createDemoOptimization(optimizeRequest: OptimizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DemoOptimizeResponse> {
        const response = await this.createDemoOptimizationRaw({ optimizeRequest: optimizeRequest }, initOverrides);
        return await response.value();
    }

}
