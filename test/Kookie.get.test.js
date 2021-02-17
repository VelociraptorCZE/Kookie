describe("Kookie.get()", function () {
    it("Set something to cookie and then ensure, it's actually there and we can get it", function () {
        Kookie.removeAll();
        Kookie.set("user", "me");

        chai.assert.strictEqual(Kookie.get("user"), "me");
    });
});

describe("Kookie.getAll()", function () {
    it("Get all cookies as a map", function () {
        Kookie.set("privacy", "zulul");

        chai.assert.deepStrictEqual(Kookie.getAll(), new Map([["user", "me"], ["privacy", "zulul"]]));
    });
});
