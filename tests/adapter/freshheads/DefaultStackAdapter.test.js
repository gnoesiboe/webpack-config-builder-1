const { FreshheadsDefaultStackAdapter } = require('../../../build/index');

describe('FreshheadsDefaultStackAdapter', () => {
    describe('When applied', () => {
        var adapter, builderConfig;

        beforeEach(() => {
            adapter = new FreshheadsDefaultStackAdapter();
            builderConfig = { env: 'dev' };
        });

        it('should contain all rules for all default adapters', () => {
            const webpackConfig = {};

            adapter.apply(webpackConfig, builderConfig, () => {});

            expect(webpackConfig).toHaveProperty('module');
            expect(webpackConfig).toHaveProperty('module.rules');

            const rules = webpackConfig.module.rules;

            expect(Array.isArray(rules)).toBe(true);

            expect(rules).toHaveLength(5);

            rules.forEach(rule => {
                expect(rule).toHaveProperty('test');
            });
        });

        it("should call the 'next' callback afterwards", done => {
            const callback = () => done();

            adapter.apply({}, builderConfig, callback);
        });
    });
});
