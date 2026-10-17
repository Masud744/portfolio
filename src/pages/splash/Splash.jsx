import React, { Component } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.jsx";

function AnimatedSplash(props) {
  const theme = props.theme || {};
  const bgColor = theme.splashBg || theme.dark || "#001C55";
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: bgColor }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 4400);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Navigate to="/home" replace />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
