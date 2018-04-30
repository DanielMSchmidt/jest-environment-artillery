# Jest-Environment-Artillery

A jest environment for running load tests on your application.

## Status

* [x] Base Setup for developig a jest environment with typescript
* [ ] Expose `artillery` wrapper
* [ ] Expose expectation helpers
* [ ] Write integration tests
* [ ] Release version `0.1.0`

## Installation

* Make sure jest is set up properly
* run `npm install --save-dev artillery jest-environment-artillery`
* [Configure `jest-environment-artillery` as test environment](https://facebook.github.io/jest/docs/en/configuration.html#testenvironment-string)

## Usage

```js
describe("MyService", () => {
  describe("Performance", () => {
    it("has a limit for latency", async () => {
      const testResult = await artillery({ target: "https://artillery.io" });
      expect(testResult).toHaveMaxLatencyLowerThan(1000);
      expect(testResult).toHaveMedianLatencyLowerThan(200);
    });
  });
});
```
