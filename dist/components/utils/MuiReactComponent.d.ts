import { Component, ComponentType, PropsWithChildren } from "react";
export default class MuiReactComponent<P = {}> extends Component<PropsWithChildren<P>> {
    render(): import("react/jsx-runtime").JSX.Element;
}
/**
 * ReactコンポーネントをWebコンポーネントに変換し、カスタムエレメントとして定義
 *
 * @template P コンポーネントのプロパティ型
 * @param {string} componentName - カスタムエレメントの名前
 * @param {ComponentType<P>} component - Webコンポーネントに変換するReactコンポーネント
 */
export declare const defineWebComponent: <P = {}>(componentName: string, component: ComponentType<P>) => void;
