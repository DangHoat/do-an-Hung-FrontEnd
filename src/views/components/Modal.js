import React from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Row,
  Col,
  Badge,
  Form,
  FormGroup,
  Label,
  FormFeedback
} from "reactstrap";

// import {CustomImg} from "../components/CustomTag"
// import Notification from "./Notification";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faTags, faAtom, faExclamation, faBomb} from "@fortawesome/free-solid-svg-icons";

// const utils = require("../utils/utils");

class ModalConfirm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOk() {
    this.props.handleOk();
  }

  handleCancel() {
    this.props.handleCancel();
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader>Confirm</ModalHeader>
        <ModalBody>Are you sure?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.handleCancel}>
            Cancel
          </Button>
          <Button color="success" onClick={this.props.handleOk}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
class ModalAddTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name :"",
      phone :"",
      password:"",
      password2:"",
      validPassword : false
    }
  }
  handleOk() {
    if(this.state.password != this.state.password2 ||!this.state.password){
      this.setState({validPassword:true})
      return
    }else{
      this.setState({validPassword:false})
      this.props.handleOk(this.state);
    }

    
  }

  handleCancel() {
    this.props.handleCancel();
  }
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader>Tạo Mới Tracker</ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Name</Label>
                  <Input
                    onChange ={this.handleChange.bind(this)} 
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Tên Tracker"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Số Điện Thoại</Label>
                  <Input
                    onChange ={this.handleChange.bind(this)} 
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Số điện thoại"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Mật Khẩu</Label>
              <Input
                onChange ={this.handleChange.bind(this)} 
                type="password"
                name="password"
                id="password"
                placeholder="Nhập mật khẩu"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">Xác Nhận Mật Khẩu</Label>
              <Input
                onChange ={this.handleChange.bind(this)} 
                type="password"
                name="password2"
                id="password2"
                placeholder="Xác nhận lại mật khẩu"
                invalid ={this.state.validPassword}
              />
                <FormFeedback invalid>
                    Kiểm tra lại mật khẩu!!!
                </FormFeedback>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleCancel.bind(this)}>
            Cancel
          </Button>
          <Button color="success" onClick={this.handleOk.bind(this)}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export { ModalConfirm, ModalAddTrack };
