import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer";
import Logo from "./components/logo";
import Modal from "./components/modal";
import Stackable from "./components/stackable";
import Form from "./components/form";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Logo />
        <Stackable />
        <Form />
        <Modal />
        <Footer />
      </div>
    );
  }
}

export default App;
