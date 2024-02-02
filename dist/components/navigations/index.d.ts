import MuiReactComponent from "@/components/utils/MuiReactComponent";
export interface NavigationsProps {
    isOpen: boolean;
}
export declare class Navigations extends MuiReactComponent<NavigationsProps> {
    state: {
        isOpen: boolean;
    };
    componentDidMount(): void;
    loadFromLocalStorage(): void;
    saveToLocalStorage(value: string): void;
    toggleSidebar: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
