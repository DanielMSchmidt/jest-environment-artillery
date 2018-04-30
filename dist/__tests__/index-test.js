"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
describe("jest-environment-artillery", function () {
    it("exposes a constructor", function () {
        expect(_1.default).toBeInstanceOf(Function);
    });
    describe("instance", function () {
        var instance = new _1.default({});
        beforeEach(function () {
            instance = new _1.default({});
        });
        it("exposes setup", function () {
            expect(instance.setup).toBeInstanceOf(Function);
        });
        it("exposes teardown", function () {
            expect(instance.teardown).toBeInstanceOf(Function);
        });
    });
});
