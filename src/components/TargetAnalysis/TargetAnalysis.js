import React, { Component } from "react";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import s from "./TargetAnalysis.css";

class TargetRow extends Component {
  render() {
    return (
      <div className={s.target}>
        <img className={s.target_image} width="250px" height="250px" alt="broken.jpg"/>
        <div className={s.target_name}>{this.props.name}</div>
        <div className={s.target_id}>{this.props.id}</div>
        <div />
      </div>
    );
  }
}

export default class TargetAnalysis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      targets: [
        {
          name: "Coming soon",
          id: "",
          imageID: "",
          tags: []
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className={s.menu}>
          <IconMenu
            iconButtonElement={
              <IconButton tooltip="Menu Button">
                <MenuIcon color="#424242" />
              </IconButton>
            }
            onItemTouchTap={event => console.log("menu", event)}
          >
            <MenuItem primaryText="Refresh" />
          </IconMenu>
        </div>
        <div className={s.container}>
          {this.state.targets.map((target, i) => {
            return <TargetRow {...target} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

//<div style="font-size: 20px; color: blue;"></div>
//<div style={{color: "blue", fontSize: "20px"}}
