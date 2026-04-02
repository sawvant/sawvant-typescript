/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TierDefinition
 */
export interface TierDefinition {
    /**
     * 
     * @type {string}
     * @memberof TierDefinition
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TierDefinition
     */
    displayName: string;
    /**
     * 
     * @type {number}
     * @memberof TierDefinition
     */
    priceEurCents: number;
    /**
     * 
     * @type {string}
     * @memberof TierDefinition
     */
    period?: string;
    /**
     * Maximum fast strategy requests per 24h sliding window
     * @type {number}
     * @memberof TierDefinition
     */
    rateLimitFast: number;
    /**
     * Maximum thorough strategy requests per 24h sliding window
     * @type {number}
     * @memberof TierDefinition
     */
    rateLimitThorough: number;
    /**
     * Feature gates enabled for this tier
     * @type {{ [key: string]: boolean; }}
     * @memberof TierDefinition
     */
    features: { [key: string]: boolean; };
}

/**
 * Check if a given object implements the TierDefinition interface.
 */
export function instanceOfTierDefinition(value: object): value is TierDefinition {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('priceEurCents' in value) || value['priceEurCents'] === undefined) return false;
    if (!('rateLimitFast' in value) || value['rateLimitFast'] === undefined) return false;
    if (!('rateLimitThorough' in value) || value['rateLimitThorough'] === undefined) return false;
    if (!('features' in value) || value['features'] === undefined) return false;
    return true;
}

export function TierDefinitionFromJSON(json: any): TierDefinition {
    return TierDefinitionFromJSONTyped(json, false);
}

export function TierDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TierDefinition {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'displayName': json['display_name'],
        'priceEurCents': json['price_eur_cents'],
        'period': json['period'] == null ? undefined : json['period'],
        'rateLimitFast': json['rate_limit_fast'],
        'rateLimitThorough': json['rate_limit_thorough'],
        'features': json['features'],
    };
}

export function TierDefinitionToJSON(json: any): TierDefinition {
    return TierDefinitionToJSONTyped(json, false);
}

export function TierDefinitionToJSONTyped(value?: TierDefinition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'display_name': value['displayName'],
        'price_eur_cents': value['priceEurCents'],
        'period': value['period'],
        'rate_limit_fast': value['rateLimitFast'],
        'rate_limit_thorough': value['rateLimitThorough'],
        'features': value['features'],
    };
}

