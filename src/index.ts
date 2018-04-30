import NodeEnvironment from "jest-environment-node";

// From https://github.com/facebook/jest/blob/e58d3db5d3e39b03cca4316c9157089c368086d2/types/Config.js#L220
export type Path = string;
export type Glob = string;
export interface IConstructorOptions {
  automock?: boolean;
  browser?: boolean;
  cache?: boolean;
  cacheDirectory?: Path;
  clearMocks?: boolean;
  coveragePathIgnorePatterns?: string[];
  cwd?: Path;
  detectLeaks?: boolean;
  displayName?: string;
  filter?: Path;
  forceCoverageMatch?: Glob[];
  globals?: object;
  haste?: {
    defaultPlatform?: string;
    hasteImplModulePath?: string;
    platforms?: string[];
    providesModuleNodeModules?: string[];
  };
  moduleDirectories?: string[];
  moduleFileExtensions?: string[];
  moduleLoader?: Path;
  moduleNameMapper?: Array<[string, string]>;
  modulePathIgnorePatterns?: string[];
  modulePaths?: string[];
  name?: string;
  resetMocks?: boolean;
  resetModules?: boolean;
  resolver?: Path;
  restoreMocks?: boolean;
  rootDir?: Path;
  roots?: Path[];
  runner?: string;
  setupFiles?: Path[];
  setupTestFrameworkScriptFile?: Path;
  skipFilter?: boolean;
  skipNodeResolution?: boolean;
  snapshotSerializers?: Path[];
  testEnvironment?: string;
  testEnvironmentOptions?: object;
  testMatch?: Glob[];
  testLocationInResults?: boolean;
  testPathIgnorePatterns?: string[];
  testRegex?: string;
  testRunner?: string;
  testURL?: string;
  timers?: "real" | "fake";
  transform?: Array<[string, Path]>;
  transformIgnorePatterns?: Glob[];
  watchPathIgnorePatterns?: string[];
  unmockedModulePathPatterns?: string[];
}

class ArtilleryEnvironment extends NodeEnvironment {
  public global: object;

  constructor(config: IConstructorOptions) {
    super(config);
    const global = {};

    this.global = global;
  }
  public async setup() {
    // TODO: setup per test
    return Promise.resolve();
  }

  public async teardown() {
    // TODO: teardown per test
    return Promise.resolve();
  }
}

module.exports = ArtilleryEnvironment;
