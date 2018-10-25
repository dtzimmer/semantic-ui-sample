import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import Logo from "../images/Webdezign Studios.jpg";
import "../App.css";

const ModalModalExample = () => (
  <div className="center">
    <Modal trigger={<Button>Example Modal</Button>}>
      <Modal.Header>Thank You!</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={Logo} />
        <Modal.Description>
          <Header>Please Leave a Review.</Header>
          <p>We hope we have met your satisfaction. Please leave a comment.</p>
          <p>How did we do?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </div>
);

export default ModalModalExample;
