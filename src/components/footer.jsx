import React from "react";
import { List } from "semantic-ui-react";
import "../App.css";

const Footer = () => (
  <div className="footer">
    <List celled horizontal>
      <List.Item>About Us</List.Item>
      <List.Item>Contact</List.Item>
      <List.Item>Support</List.Item>
    </List>
  </div>
);

export default Footer;
