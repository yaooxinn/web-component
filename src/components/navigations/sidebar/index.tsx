import React, { useState } from "react";
import {
  ExpandLess,
  ExpandMore,
  ArrowDropDown,
  ArrowDropUp,
  Search,
} from "@mui/icons-material";
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MuiReactComponent, {
  defineWebComponent,
} from "@utils/MuiReactComponent";
import "./sidebar.scss";

export interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
}

export interface SiderMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  onMenuClick?: (path: string) => void;
}

const Sidebar: React.FC<SiderMenuProps> = ({
  menuItems,
  isOpen,
  onMenuClick,
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [level, setLevel] = useState<number>(0);

  const imagePath = "images/icon_mdvact.png";
  const hospitalIconPath = "images/hospital-building.svg";

  const handleClick = (
    path: string,
    levelTmp: number,
    itemChildren: MenuItem[] | undefined
  ) => {
    setLevel(levelTmp);
    if (openItems.includes(path) && itemChildren) {
      setOpenItems(openItems.filter((item) => item !== path));
      setLevel(levelTmp - 1);
    } else if (levelTmp == 0) {
      setOpenItems([]);
      setOpenItems((openItems) => openItems.concat(path));
    } else if (levelTmp !== 0 && levelTmp > level) {
      setOpenItems([...openItems, path]);
    } else if (levelTmp <= level && !openItems.includes(path)) {
      setOpenItems((openItems) => openItems.slice(0, openItems.length - level));
      setOpenItems((openItems) => openItems.concat(path));
    }
    setSelectedItem(path);
    onMenuClick && onMenuClick(path);
  };
  const renderMenuItems = (
    items: MenuItem[],
    selectedPath: string | null,
    level: number = 0
  ) => {
    return items?.map((item, index) => (
      <React.Fragment key={index}>
        <ListItem
          button
          onClick={() => handleClick(item.label, level, item.children)}
          sx={{ px: !isOpen ? 1 : 2 }}
          className={
            openItems.includes(item.label) && item.children
              ? `selected`
              : openItems.includes(item.label)
              ? "selected-children"
              : ""
          }
        >
          {!isOpen && (
            <ListItemIcon sx={{ minWidth: "auto" }}>
              {item.label === "DPC対策" ? (
                <img width={24} src={hospitalIconPath} />
              ) : item.label === "検索" ? (
                <Search />
              ) : (
                <img width={24} src={imagePath} />
              )}
            </ListItemIcon>
          )}
          {isOpen &&
            item.children &&
            level !== 0 &&
            (openItems.includes(item.label) ? (
              <ArrowDropUp sx={{ mr: 0.5, ml: level * 2.5 }} />
            ) : (
              <ArrowDropDown sx={{ mr: 0.5, ml: level * 2.5 }} />
            ))}
          {isOpen && (
            <ListItemText
              sx={{
                pl: !item.children ? level * 3 : 0,
              }}
              primary={item.label}
            />
          )}
          {isOpen &&
            item.children &&
            level === 0 &&
            (openItems.includes(item.label) ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {item.children && isOpen && (
          <Collapse
            in={openItems.includes(item.label)}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              {renderMenuItems(item.children, selectedPath, level + 1)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));
  };

  return (
    <MuiReactComponent>
      <Drawer
        variant="permanent"
        className="siderMenu"
        sx={{ width: isOpen ? "256px" : "56px", padding: "8px" }}
      >
        <List
          sx={{
            width: isOpen ? "256px" : "56px",
            boxSizing: "border-box",
            transition: "width 0.1s ease-in",
            padding: "8px",
          }}
        >
          {renderMenuItems(menuItems, selectedItem)}
        </List>
      </Drawer>
    </MuiReactComponent>
  );
};

export default Sidebar;

defineWebComponent("mdvap-sidebar", Sidebar, {
  isOpen: "boolean",
  menuItems: "json",
});
