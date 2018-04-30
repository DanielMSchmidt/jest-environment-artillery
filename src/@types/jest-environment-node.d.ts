declare module "jest-environment-node" {
  class JestEnvironmentNode {
    constructor(options?: any);
    setup(): void;
    teardown(): void;
  }

  export default JestEnvironmentNode;
}
