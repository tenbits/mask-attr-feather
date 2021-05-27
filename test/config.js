
module.exports = {
    suites: {
        selenium : {
            exec: 'dom',
            tests: 'test/**.spec.ts',
			$config: {
                includejs: includeSettings(),
            },
        }
    }
};


function includeSettings() {
    return {
        extentionDefault: { js: 'ts' },
        amd: true,
        routes: {}
    };
}
