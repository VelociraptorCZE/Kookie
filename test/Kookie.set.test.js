describe("Kookie.set()", function () {
    it("Set cookie with expiration (max-age)", function (done) {
        Kookie.set("temp", "42", { maxAge: 1 });
        chai.assert.strictEqual(Kookie.get("temp"), "42");

        setTimeout(function () {
            chai.assert.strictEqual(Kookie.get("temp"), null);
            done();
        }, 1000);
    });

    it("Set cookie with expiration (expires)", function (done) {
        this.timeout(3000);
        const date = new Date;
        date.setSeconds(date.getSeconds() + 2);

        Kookie.set("temp", "42", { expires: date });
        chai.assert.strictEqual(Kookie.get("temp"), "42");

        setTimeout(function () {
            chai.assert.strictEqual(Kookie.get("temp"), null);
            done();
        }, 2000);
    });
});
