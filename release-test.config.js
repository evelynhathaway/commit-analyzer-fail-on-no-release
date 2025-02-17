/**
 * @type {import("semantic-release").GlobalConfig}
 */
export default {
	plugins: [
		[
			"commit-analyzer-fail-on-no-release",
			{
				"config": "conventional-changelog-evelyn",
				"releaseRules": "conventional-changelog-evelyn/release-rules.js",
			},
		],
	],
};
