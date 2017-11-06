export interface Dependencies {
  [name: string]: string,
}

export type PackageBin = string | {[commandName: string]: string}

export interface PackageJson {
  name: string,
  version: string,
  private?: boolean,
  bin?: PackageBin,
  directories?: {
    bin?: string,
  },
  dependencies?: Dependencies,
  devDependencies?: Dependencies,
  optionalDependencies?: Dependencies,
  peerDependencies?: Dependencies,
  bundleDependencies?: string[],
  bundledDependencies?: string[],
  scripts?: {
    [name: string]: string,
  },
  config?: object,
  engines?: {
    node?: string,
    npm?: string,
  },
  cpu?: string[],
  os?: string[],
}
