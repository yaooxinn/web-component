import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Sidebar, { SiderMenuProps } from "./index";

export default {
  title: "Components/navigations/siderMenu",
  component: Sidebar,
} as Meta;

const Template: StoryFn<SiderMenuProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
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
  isOpen: true,
};