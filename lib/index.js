// Proxy all methods on the commit analyzer exports
module.exports = new Proxy(require("@semantic-release/commit-analyzer"), {
	get (target, property, receiver) {
		// If looking for the analyze commits plugin lifecycle method, return a proxy
		if (property === "analyzeCommits") {
			return new Proxy(target.analyzeCommits, {
				async apply (target, thisArg, argumentsList) {
					// Await for the analysis from the proxy target to complete
					const result = await Reflect.apply(target, thisArg, argumentsList);
					// It's gonna make a release
					if (result != null) return result;
					// Nullish means it's not making a release, let's throw a fit!
					throw new Error("There are no relevant changes and you are using commit-analyzer-fail-on-no-release.");
				},
			});
		}
		// Otherwise just return whatever it would've anyways
		return Reflect.get(target, property, receiver);
	},
});
