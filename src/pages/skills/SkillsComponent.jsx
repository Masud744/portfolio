import React, { Component } from "react";
import Header from "../../components/header/Header";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

export default class SkillsComponent extends Component {
  render() {
    return (
      <div>
        <Header
          theme={this.props.theme}
          themeMode={this.props.themeMode}
          onToggle={this.props.onToggle}
        />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
