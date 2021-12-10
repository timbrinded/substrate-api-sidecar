import runtimeCode10000 from './10000.json';
import runtimeCode800000 from './800000.json';

export const karuraRuntimeCodeEndpoints = [
	['/runtime/code?at=10000', JSON.stringify(runtimeCode10000)], 
	['/runtime/code?at=800000', JSON.stringify(runtimeCode800000)],
];
