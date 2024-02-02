import Header, { HeaderProps } from "@components/navigations/header";
import { Meta, StoryObj } from "@storybook/react";

const Template: StoryObj<HeaderProps> = {
  render: (args) => <Header {...args} />,
};

export default {
  title: "components/navigations/header",
  component: Header,
  argTypes: {
    isOpen: { control: "boolean" },
    selectedHpid: { control: "string" },
    hospitalItems: { control: "array" },
  },
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
  ...Template,
  args: {
    isOpen: true,
    selectedHpid: "999954",
    hospitalItems: [
      {
        HospitalID: "3fc5d901-54b3-456a-96e0-d23de35a66c5",
        HPID: "999953",
        Name: "CK_SW病院992",
      },
      {
        HospitalID: "3fc5d901-54b3-456a-96e0-d23de35a66c4",
        HPID: "999954",
        Name: "CK_SW病院994",
      },
    ],
  },
};
