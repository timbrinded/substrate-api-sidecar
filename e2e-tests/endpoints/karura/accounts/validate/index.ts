import validKarura from './validKarura.json';

const validKaruraStringify = JSON.stringify(validKarura);

export const karuraAccountValidateEndpoints = [
	[
		'/accounts/qmmNufxeWaAVN8EJK58yYNW1HDcpSLpqGThui55eT3Dfr1a/validate',
		validKaruraStringify,
	],
	[
		'/accounts/ssziEAyRZvcVNTgMnxsCaUdNxfPt9wUa4ftkabx34RMjSpw/validate',
		validKaruraStringify,
	],
];
