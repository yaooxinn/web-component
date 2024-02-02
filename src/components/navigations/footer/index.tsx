import MuiReactComponent, {
  defineWebComponent,
} from "@utils/MuiReactComponent";

import "./footer.scss";
import React from "react";

const Footer: React.FC = () => {
  return (
    <MuiReactComponent>
      <footer className="footer_css">
        <span style={{ color: "black", fontSize: "12px" }}>
          © Medical Data Vision Co., Ltd. All Rights Reserved.
        </span>
      </footer>
    </MuiReactComponent>
  );
};

export default Footer;

defineWebComponent("mdvap-footer", Footer);
