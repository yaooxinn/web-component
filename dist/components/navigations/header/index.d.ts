import MuiReactComponent from "@/components/utils/MuiReactComponent";
export interface HeaderProps {
    isOpen: boolean;
    onToggleSidebar: () => void;
}
export declare class Header extends MuiReactComponent<HeaderProps> {
    render(): import("react/jsx-runtime").JSX.Element;
}
