describe("Kookie.remove()", function () {
    it("Create a new cookie and then immediately destroy it", function () {
        Kookie.set("removeMe", "1");
        chai.assert.strictEqual(Kookie.get("removeMe"), "1");

        Kookie.remove("removeMe");
        chai.assert.strictEqual(Kookie.get("removeMe"), null);
    });
});


describe("Kookie.removeAll()", function () {
    it("Nuke all cookies", function () {
        Kookie.removeAll();
        chai.assert.strictEqual(Kookie.getAll().size, 0);
    });
});
