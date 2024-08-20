import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonTest } from "./ButtonTest";
import { action } from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Test/ButtonTest",
  component: ButtonTest,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // コンポーネントを中心に配置する記載
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // ドキュメントを自動で作成する記載
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //
  argTypes: {
    backgroundColor: { control: "color" },
    // この項目をアクティブにするとラジオボタンからプルダウンになる
    // size: {
    //   control: { type: "select" },
    // },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonTest>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Click me",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    handleClick: action("clicked"),
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Index: Story = {
  args: {
    primary: true,
    label: "Index Click me",
  },
};
