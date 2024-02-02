import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react-vite", // Vite用のReactフレームワークに変更
  // TypeScript設定（必要に応じて）
  // typescript: {
  //   check: false,
  //   // reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) =>
  //       prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
  //   },
  // },
};

export default config;
