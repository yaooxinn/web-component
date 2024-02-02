import React, { useState, useEffect, useRef, ReactNode } from "react";
import Box from "@mui/material/Box";
import Header, { HospitalItem } from "@components/navigations/header";
import Sidebar, { MenuItem } from "@components/navigations/sidebar";
import Footer from "@components/navigations/footer";
import logger from "@logger";
import MuiReactComponent, {
  defineWebComponent,
} from "@utils/MuiReactComponent";

export interface NavigationsProps {
  menuItems: MenuItem[];
  selectedHpid: string;
  hospitalItems: HospitalItem[];
  children?: ReactNode;
  onMenuClick?: (path: string) => void;
  onHospitalChange?: (HPID: string) => void;
}

const Navigations: React.FC<NavigationsProps> = ({
  menuItems,
  selectedHpid,
  hospitalItems,
  children,
  onMenuClick,
  onHospitalChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const navigationsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const loadFromLocalStorage = () => {
    const storedValue = localStorage.getItem("sidebarOpen");
    if (storedValue) {
      setIsOpen(storedValue === "true");
    }
  };

  const saveToLocalStorage = (value: string) => {
    localStorage.setItem("sidebarOpen", value);
  };

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => {
      saveToLocalStorage(String(!prevIsOpen));
      return !prevIsOpen;
    });
  };

  const onMenuClickForOpen = (path: string) => {
    onMenuClick && onMenuClick(path);
    if (!isOpen)
      setIsOpen((prevIsOpen) => {
        saveToLocalStorage(String(!prevIsOpen));
        return !prevIsOpen;
      });
  };

  logger.info("render Navigations");
  return (
    <MuiReactComponent>
      <Header
        isOpen={isOpen}
        onToggleSidebar={toggleSidebar}
        selectedHpid={selectedHpid}
        hospitalItems={hospitalItems}
        onHospitalChange={onHospitalChange}
      />
      <Box sx={{ paddingTop: "64px" }} ref={navigationsRef}>
        <Sidebar
          isOpen={isOpen}
          menuItems={menuItems}
          onMenuClick={onMenuClickForOpen}
        />
        <Box
          className="py-3 px-6"
          sx={{
            paddingLeft: isOpen ? "256px" : "72px",
          }}
        >
          <main style={{ padding: "24px" }}> {children} </main>
        </Box>
      </Box>
      <Footer />
    </MuiReactComponent>
  );
};
export default Navigations;

defineWebComponent("mdvap-navigations", Navigations, {
  isOpen: "boolean",
  menuItems: "json",
  selectedHpid: "string",
  hospitalItems: "json",
  onMenuClick: "function",
  onHospitalChange: "function",
});
