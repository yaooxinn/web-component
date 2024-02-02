import React from "react";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { IconButton, Toolbar, Select, MenuItem, AppBar } from "@mui/material";
import MuiReactComponent, {
  defineWebComponent,
} from "@utils/MuiReactComponent";
import "./header.scss";

export interface HospitalItem {
  HospitalID: string;
  HPID: string;
  Name: string;
}

export interface HeaderProps {
  isOpen: boolean;
  selectedHpid: string;
  hospitalItems: HospitalItem[];
  onToggleSidebar: () => void;
  onHospitalChange?: (HPID: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isOpen,
  selectedHpid,
  hospitalItems,
  onToggleSidebar,
  onHospitalChange,
}) => {
  const logoPath = "/images/logo_mdv_ap_topbar.png";

  return (
    <MuiReactComponent>
      <AppBar sx={{ bgcolor: "rgb(237,232,228)", height: "64px" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onToggleSidebar}
            sx={{ mr: 2 }}
          >
            {isOpen ? (
              <ChevronLeft className="arrow" />
            ) : (
              <ChevronRight className="arrow" />
            )}
          </IconButton>
          <img src={logoPath} className="logo_img" />
          <div className="div_select">
            <Select
              sx={{ "& fieldset": { display: "none" } }}
              className="header_select"
              size="small"
              defaultValue={selectedHpid}
              onChange={(e) => {
                onHospitalChange && onHospitalChange(e.target.value);
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
            >
              {hospitalItems?.map((item) => (
                <MenuItem
                  key={item.HPID}
                  value={item.HPID}
                  className="menu_item_css"
                >
                  {item.Name}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Toolbar>
      </AppBar>
    </MuiReactComponent>
  );
};

export default Header;

defineWebComponent("mdvap-header", Header, {
  isOpen: "boolean",
  selectedHpid: "string",
  hospitalItems: "json",
});
