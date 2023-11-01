const config = {
  collectCoverageFrom: [
    "**/*,{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
  ],
  coverageThreshold: {
    branshes: 100,
    function: 100,
    lines: 100,
  },
};
