import React from "react";
import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * storybook向けのコンポーネントのコードファイル
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // primary属性に応じてスタイルクラスを決定
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    // propsを元にbutton要素を組み立て
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
