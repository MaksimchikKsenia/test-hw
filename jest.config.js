module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  testMatch: ["<rootDir>/test/unit/*.test.js"],
};
