import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    console.log("Bye i am Unmounted...");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

// export default User;
