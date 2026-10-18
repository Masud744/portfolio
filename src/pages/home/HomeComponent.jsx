import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import About from "../../containers/about/About";
import Skills from "../../containers/skills/Skills";
import Activities from "../../containers/activities/Activities";
import Testimonials from "../../containers/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          theme={this.props.theme}
          themeMode={this.props.themeMode}
          onToggle={this.props.onToggle}
        />
        <Greeting theme={this.props.theme} />
        <About theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Activities theme={this.props.theme} />
        <Testimonials theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
