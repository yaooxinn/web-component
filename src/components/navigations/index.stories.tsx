import Navigations, { NavigationsProps } from "@components/navigations";
import { Meta, StoryObj } from "@storybook/react";

const Template: StoryObj<NavigationsProps> = {
  render: (args) => <Navigations {...args} />,
};

export default {
  title: "components/navigations",
  component: Navigations,
  argTypes: {
    // isOpen: { control: "boolean" },
    menuItems: { control: "array" },
    selectedHpid: { control: "string" },
    hospitalItems: { control: "array" },
    onMenuClick: { control: "function" },
    onHospitalChange: { control: "function" },
  },
} as Meta<typeof Navigations>;

export const Default: StoryObj<typeof Navigations> = {
  ...Template,
  args: {
    menuItems: [
      {
        label: "診療分析",
        children: [
          { label: "疾患別統計" },
          { label: "DPCサマリ" },
          { label: "パス分析" },
          { label: "外来分析" },
        ],
      },
      {
        label: "検索",
        children: [{ label: "検索機能" }],
      },
      {
        label: "DPC対策",
        children: [
          { label: "コーディングチェック" },
          { label: "機能評価係数Ⅱ", children: [{ label: "指数別分析" }] },
          { label: "DPC特定病院群要件", children: [{ label: "要件別分析" }] },
        ],
      },
    ],
    selectedHpid: "999953",
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
