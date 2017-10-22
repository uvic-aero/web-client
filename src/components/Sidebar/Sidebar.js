import React, { Component } from "react";
import { browserHistory } from "react-router";
import cx from "classnames";
import s from "./Sidebar.css";
import logo from "./AeroLogo.png";

import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";

import QueueIcon from "material-ui/svg-icons/av/queue";
import WebIcon from "material-ui/svg-icons/av/web";
import AnalysisIcon from "material-ui/svg-icons/action/trending-up";
import SpectatorIcon from "material-ui/svg-icons/maps/terrain";
import ReportIcon from "material-ui/svg-icons/content/content-paste";

export default class Sidebar extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      menu: [
        {
          text: "Image Queue",
          icon: <QueueIcon />,
          href: "/"
        },
        {
          text: "Image Browser",
          icon: <WebIcon />,
          href: "/browser"
        },
        {
          text: "Target Analysis",
          icon: <AnalysisIcon />,
          href: "/targets"
        },
        {
          text: "Spectator View",
          icon: <SpectatorIcon />,
          href: "/spectate"
        },
        {
          text: "Report",
          icon: <ReportIcon />,
          href: "/report"
        }
      ]
    };
  }

  setRoute(route) {
    browserHistory.push(route);
  }

  render() {
    const currentPath = this.context.router.location.pathname;

    return (
      <div className={s.root}>
        <div className={s.logo}>
          <div className={s.logo_text}>UVic AERO</div>
        </div>
        <div className={s.menu}>
          <Menu width="100%" style={{ width: "100%" }} autoWidth={true}>
            {this.state.menu.map(el => (
              <MenuItem
                key={el.text}
                primaryText={el.text}
                leftIcon={el.icon}
                innerDivStyle={{ padding: "0 20px 0 60px", marginLeft: "10px" }}
                onTouchTap={() => {
                  this.setRoute(el.href);
                }}
                className={cx(s.menu_item, {
                  [s.focused]: el.href === currentPath
                })}
                hoverColor="rgba(0,0,0,0.248)"
              />
            ))}
          </Menu>
        </div>
      </div>
    );
  }
}
