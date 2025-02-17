// This file replaces an existing export by exporting twice
/* eslint-disable import/export */
import {analyzeCommits as originalAnalyzeCommits} from "@semantic-release/commit-analyzer";

// Re-export all the commit analyzer exports in case they add another export in the future
export * from "@semantic-release/commit-analyzer";

// Proxy analyzeCommits so we can intercept the result and throw an error
export const analyzeCommits = new Proxy(originalAnalyzeCommits, {
	async apply (target, thisArgument, argumentsList) {
		// Await for the analysis from the proxy target to complete
		const result = await Reflect.apply(target, thisArgument, argumentsList);
		// It's gonna make a release
		if (result != null) return result;
		// Nullish means it's not making a release, let's throw a fit!
		throw new Error("There are no relevant changes and you are using commit-analyzer-fail-on-no-release.");
	},
});
