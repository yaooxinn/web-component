import Login from "@components/login";
import { Meta, StoryObj } from "@storybook/react";

const Template: StoryObj<typeof Login> = {
  render: () => <Login />,
};

export default {
  title: "components/login",
  component: Login,
  argTypes: {},
} as Meta<typeof Login>;

export const Default: StoryObj<typeof Login> = {
  ...Template,
  args: {},
};
