/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */


import * as runtime from '../runtime';
import type {
  HealthResponse,
  TierDefinition,
} from '../models/index';
import {
    HealthResponseFromJSON,
    HealthResponseToJSON,
    TierDefinitionFromJSON,
    TierDefinitionToJSON,
} from '../models/index';

/**
 * SystemApi - interface
 * 
 * @export
 * @interface SystemApiInterface
 */
export interface SystemApiInterface {
    /**
     * 
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApiInterface
     */
    getHealthRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponse>>;

    /**
     * Health check
     */
    getHealth(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponse>;

    /**
     * Returns all available subscription tiers with their rate limits, pricing, and feature gates. This is the single source of truth for tier configuration. 
     * @summary List available subscription tiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApiInterface
     */
    listTiersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TierDefinition>>>;

    /**
     * Returns all available subscription tiers with their rate limits, pricing, and feature gates. This is the single source of truth for tier configuration. 
     * List available subscription tiers
     */
    listTiers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TierDefinition>>;

}

/**
 * 
 */
export class SystemApi extends runtime.BaseAPI implements SystemApiInterface {

    /**
     * Health check
     */
    async getHealthRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HealthResponseFromJSON(jsonValue));
    }

    /**
     * Health check
     */
    async getHealth(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponse> {
        const response = await this.getHealthRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns all available subscription tiers with their rate limits, pricing, and feature gates. This is the single source of truth for tier configuration. 
     * List available subscription tiers
     */
    async listTiersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TierDefinition>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/tiers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TierDefinitionFromJSON));
    }

    /**
     * Returns all available subscription tiers with their rate limits, pricing, and feature gates. This is the single source of truth for tier configuration. 
     * List available subscription tiers
     */
    async listTiers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TierDefinition>> {
        const response = await this.listTiersRaw(initOverrides);
        return await response.value();
    }

}
