module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.jest.json",
        },
    },
};
