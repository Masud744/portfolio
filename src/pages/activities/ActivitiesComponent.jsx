import React, { Component } from "react";
import Header from "../../components/header/Header";
import Activities from "../../containers/activities/Activities";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

export default class ActivitiesComponent extends Component {
  render() {
    return (
      <div>
        <Header
          theme={this.props.theme}
          themeMode={this.props.themeMode}
          onToggle={this.props.onToggle}
        />
        <Activities theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
