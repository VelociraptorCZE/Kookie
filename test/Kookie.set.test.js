describe("Kookie.set()", function () {
    it("Set cookie with special chars", function () {
        Kookie.set("spec=al", "oh$");
        chai.assert.strictEqual(Kookie.get("spec=al"), "oh$");
        chai.assert.strictEqual(Kookie.getAll().get("spec=al"), "oh$");
    });

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

        console.log(Kookie.getAll());

        setTimeout(function () {
            chai.assert.strictEqual(Kookie.get("temp"), null);
            done();
        }, 2000);
    });
});
