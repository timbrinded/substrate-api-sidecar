import { karuraRuntimeCodeEndpoints } from './code';
import { karuraRuntimeMetadataEndpoints } from './metadata';
import { karuraRuntimeSpecEndpoints } from './spec';

export const karuraRuntimeEndpoints = [
	...karuraRuntimeCodeEndpoints,
	...karuraRuntimeSpecEndpoints,
	...karuraRuntimeMetadataEndpoints,
];
