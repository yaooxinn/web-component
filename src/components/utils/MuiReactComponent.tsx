import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import r2wc from "@r2wc/react-to-web-component";
import { Component, ComponentType, PropsWithChildren } from "react";

const theme = createTheme({
  // テーマの設定
});

const emotionCache = createCache({
  key: "css",
  prepend: true,
});

export default class MuiReactComponent<P = {}> extends Component<
  PropsWithChildren<P>
> {
  render() {
    return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </CacheProvider>
    );
  }
}

/**
 * ReactコンポーネントをWebコンポーネントに変換し、カスタムエレメントとして定義
 *
 * @template P コンポーネントのプロパティ型
 * @param {string} componentName - カスタムエレメントの名前
 * @param {ComponentType<P>} component - Webコンポーネントに変換するReactコンポーネント
 */
export const defineWebComponent = <P = {},>(
  componentName: string,
  component: ComponentType<P>,
  extraProps: Record<
    string,
    "string" | "number" | "boolean" | "json" | "function"
  > = {}
) => {
  const options = {
    props: extraProps, // "r2wc 関数に追加パラメータを渡す"
  };

  if (!customElements.get(componentName)) {
    customElements.define(
      componentName,
      r2wc(component as ComponentType<object>, options)
    );
  }
};
