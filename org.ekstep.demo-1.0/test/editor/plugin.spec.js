describe("EditorPlugin", function() {
    describe("newInstance", function() {
        var plugin;

        beforeEach(function() {
            plugin = new org.ekstep.demo.EditorPlugin({}, {}, {});
        });

        it("should ?", function() {
            plugin.newInstance();

            expect(true).toBe(true);
        });
    });
});
