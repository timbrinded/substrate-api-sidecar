import accountBalance1014034 from './1014034.json';
import accountBalance1074034 from './1074034.json';

/**
 * Haven't spent time in finding important or interesting blocks,
 * but hopefully you get the idea!
 */
export const karuraAccountBalanceEndpoints = [
	[
		'/accounts/qmmNufxeWaAVN8EJK58yYNW1HDcpSLpqGThui55eT3Dfr1a/balance-info?at=1014034',
		JSON.stringify(accountBalance1014034),
	], 
	[
		'/accounts/qmmNufxeWaAVN8EJK58yYNW1HDcpSLpqGThui55eT3Dfr1a/balance-info?at=1074034',
		JSON.stringify(accountBalance1074034),
	], 
];
