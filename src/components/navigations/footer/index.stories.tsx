import Footer from "@components/navigations/footer";
import { Meta, StoryObj } from "@storybook/react";

const Template: StoryObj = {
  render: () => <Footer />,
};

export default {
  title: "components/navigations/footer",
  component: Footer,
  argTypes: {},
} as Meta<typeof Footer>;

export const Default: StoryObj<typeof Footer> = {
  ...Template,
  args: {},
};