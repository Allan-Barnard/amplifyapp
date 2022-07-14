import { ReactComponent as LogoDark } from "../assets/images/logos/xtremelogo.svg";
import logo from "../LOGO_Apps_Associates_144w.png";
import { Link } from "react-router-dom";
import {
  Image,
} from "@aws-amplify/ui-react";

const Logo = () => {
  return (
	<Image src={logo} className="App-logo" alt="logo" />
  );
};

export default Logo;
