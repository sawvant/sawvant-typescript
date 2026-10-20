/* tslint:disable */
/* eslint-disable */
/**
 * Sawvant Cutting Optimization API — TypeScript SDK
 *
 * File generated from our OpenAPI spec; DO NOT EDIT.
 */

import { mapValues } from '../runtime';
import type { GrainDirection } from './GrainDirection';
import {
    GrainDirectionFromJSON,
    GrainDirectionFromJSONTyped,
    GrainDirectionToJSON,
    GrainDirectionToJSONTyped,
} from './GrainDirection';

/**
 * 
 * @export
 * @interface Placement
 */
export interface Placement {
    /**
     * 
     * @type {string}
     * @memberof Placement
     */
    partId: string;
    /**
     * Which sheet type this part is placed on
     * @type {string}
     * @memberof Placement
     */
    sheetId: string;
    /**
     * mm from the top-left of the usable area, along the sheet's length axis. x + width never exceeds the usable length.
     * @type {number}
     * @memberof Placement
     */
    x: number;
    /**
     * mm from the top-left of the usable area, along the sheet's width axis. y + height never exceeds the usable width.
     * @type {number}
     * @memberof Placement
     */
    y: number;
    /**
     * Post-edge-banding dimension along the sheet's length axis
     * @type {number}
     * @memberof Placement
     */
    width: number;
    /**
     * Post-edge-banding dimension along the sheet's width axis
     * @type {number}
     * @memberof Placement
     */
    height: number;
    /**
     * True when the part's length runs along the sheet's width axis, so width is the part's width and height is its length.
     * @type {boolean}
     * @memberof Placement
     */
    rotated: boolean;
    /**
     * 
     * @type {GrainDirection}
     * @memberof Placement
     */
    grain: GrainDirection;
}



/**
 * Check if a given object implements the Placement interface.
 */
export function instanceOfPlacement(value: object): value is Placement {
    if (!('partId' in value) || value['partId'] === undefined) return false;
    if (!('sheetId' in value) || value['sheetId'] === undefined) return false;
    if (!('x' in value) || value['x'] === undefined) return false;
    if (!('y' in value) || value['y'] === undefined) return false;
    if (!('width' in value) || value['width'] === undefined) return false;
    if (!('height' in value) || value['height'] === undefined) return false;
    if (!('rotated' in value) || value['rotated'] === undefined) return false;
    if (!('grain' in value) || value['grain'] === undefined) return false;
    return true;
}

export function PlacementFromJSON(json: any): Placement {
    return PlacementFromJSONTyped(json, false);
}

export function PlacementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Placement {
    if (json == null) {
        return json;
    }
    return {
        
        'partId': json['part_id'],
        'sheetId': json['sheet_id'],
        'x': json['x'],
        'y': json['y'],
        'width': json['width'],
        'height': json['height'],
        'rotated': json['rotated'],
        'grain': GrainDirectionFromJSON(json['grain']),
    };
}

export function PlacementToJSON(json: any): Placement {
    return PlacementToJSONTyped(json, false);
}

export function PlacementToJSONTyped(value?: Placement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'part_id': value['partId'],
        'sheet_id': value['sheetId'],
        'x': value['x'],
        'y': value['y'],
        'width': value['width'],
        'height': value['height'],
        'rotated': value['rotated'],
        'grain': GrainDirectionToJSON(value['grain']),
    };
}

