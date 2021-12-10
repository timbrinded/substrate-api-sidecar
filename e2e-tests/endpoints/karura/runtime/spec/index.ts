import runtimeSpec10000 from './10000.json';
import runtimeSpec20000 from './20000.json';
import runtimeSpec30000 from './30000.json';


export const karuraRuntimeSpecEndpoints = [
	['/runtime/spec?at=10000', JSON.stringify(runtimeSpec10000)],
	['/runtime/spec?at=20000', JSON.stringify(runtimeSpec20000)],
	['/runtime/spec?at=30000', JSON.stringify(runtimeSpec30000)],

];
