module.exports = {
	"plugins": [
		"evelyn",
	],

	"extends": [
		"plugin:evelyn/default",
		"plugin:evelyn/node",
		"plugin:evelyn/source",
	],

	"rules": {
		"unicorn/prefer-module": "off", // Semantic release isn't ready for ESM
	},
};
