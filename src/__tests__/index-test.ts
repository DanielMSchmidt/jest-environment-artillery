const JestEnvironmentArtillery = require("../");

describe("jest-environment-artillery", () => {
  it("exposes a constructor", () => {
    expect(JestEnvironmentArtillery).toBeInstanceOf(Function);
  });

  describe("instance", () => {
    let instance = new JestEnvironmentArtillery({});

    beforeEach(() => {
      instance = new JestEnvironmentArtillery({});
    });

    it("exposes setup", () => {
      expect(instance.setup).toBeInstanceOf(Function);
    });

    it("exposes teardown", () => {
      expect(instance.teardown).toBeInstanceOf(Function);
    });
  });
});
