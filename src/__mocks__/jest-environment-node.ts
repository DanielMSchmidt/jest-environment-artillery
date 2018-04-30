export const mocks = {
  setup: jest.fn(),
  teardown: jest.fn(),
};

export default class JestEnvironmentNode {
  public async setup() {
    mocks.setup();
  }
  public async teardown() {
    mocks.teardown();
  }
}
