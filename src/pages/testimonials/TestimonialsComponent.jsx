import React, { Component } from "react";
import Header from "../../components/header/Header";
import Testimonials from "../../containers/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

export default class TestimonialsComponent extends Component {
  render() {
    return (
      <div>
        <Header
          theme={this.props.theme}
          themeMode={this.props.themeMode}
          onToggle={this.props.onToggle}
        />
        <Testimonials theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
