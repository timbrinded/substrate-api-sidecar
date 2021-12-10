import runtimeMetadata10000 from './10000.json';
import runtimeMetadata800000 from './800000.json';

export const karuraRuntimeMetadataEndpoints = [
	['/runtime/metadata?at=10000', JSON.stringify(runtimeMetadata10000)], // v1020
	['/runtime/metadata?at=800000', JSON.stringify(runtimeMetadata800000)], // v9040
];
