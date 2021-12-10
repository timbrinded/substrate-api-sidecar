import { karuraAccountsEndpoints } from './accounts';
import { karuraBlockEndpoints } from './blocks';
import { karuraRuntimeEndpoints } from './runtime';


// The global test runner expects a parachain test suite
// I've just assigned this to another pack as a quick fix
// Long term fix is to make the global test runner more flexible

export const karuraEndpoints = {
	blocks: karuraBlockEndpoints,
	accounts: karuraAccountsEndpoints,
	paras: karuraRuntimeEndpoints, 
	runtime: karuraRuntimeEndpoints,
};
