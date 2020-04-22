process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

module.exports = {
  transform: {
    '.ts': 'ts-jest'
  },
  transformIgnorePatterns: [ '[/\\\\]node_modules[/\\\\].+\\.js$' ],
  moduleFileExtensions: [ 'ts', 'js', 'json', 'node' ],
  collectCoverageFrom: [ 'src/**/*.ts' ],
  moduleDirectories: ["node_modules", "src"],
  testMatch: [ '<rootDir>/**/*.(spec|test).ts' ],
  rootDir: '.'
};
