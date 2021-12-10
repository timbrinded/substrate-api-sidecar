
import accountBalance1075202 from './1075202.json';
import accountBalance1075205 from './1075205.json';

/**
 * Haven't spent time in finding important or interesting blocks,
 * but hopefully you get the idea!
 */
export const karuraAccountBalanceEndpoints = [
	[
		'/accounts/qmmNufxeWaAVN8EJK58yYNW1HDcpSLpqGThui55eT3Dfr1a/balance-info?at=1075202',
		JSON.stringify(accountBalance1075202),
	], 
	[
		'/accounts/qmmNufxeWaAVN8EJK58yYNW1HDcpSLpqGThui55eT3Dfr1a/balance-info?at=1075205',
		JSON.stringify(accountBalance1075205),
	], 
];
