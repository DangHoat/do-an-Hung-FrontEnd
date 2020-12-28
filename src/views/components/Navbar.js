import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "../../redux/actions/sidebarActions";
import { Link } from "react-router-dom";
import $ from "jquery";

import {
  Row,
  Col,
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
} from "reactstrap";

import { Bell, Home, PieChart, Settings, User, Map,Plus } from "react-feather";
import { CustomImg } from "../components/CustomTag";

import usFlag from "../../assets/image/avatars/us.png";
import vnFlag from "../../assets/image/avatars/vn.png";

import empty_avatar from "../../assets/image/avatars/empty_avatar.png";
import "./style/Navbar.css";

const ValidInput = require("../../../define/ValidInput");

const event = [
  "event_type_0",
  "event_type_1",
  "event_type_2",
  "event_type_3",
  "event_type_4",
  "event_type_5",
  "event_type_6",
  "event_type_7",
  "event_type_8",
  "event_type_9",
  "event_type_10",
];

class NavbarDropdown extends React.Component {
  render() {
    const { children, count, showBadge, header, icon } = this.props;
    return (
      <UncontrolledDropdown nav inNavbar className="mr-2">
        <DropdownToggle nav className="nav-icon dropdown-toggle">
          <div className="position-relative">
            <Link to="#">
              <Bell id="navbar-notificatipn" className="align-middle" />
            </Link>
            <UncontrolledTooltip
              placement="bottom"
              target="navbar-notificatipn"
            >
              Notifications
            </UncontrolledTooltip>
            {showBadge ? <span className="indicator">{count}</span> : null}
          </div>
        </DropdownToggle>
        <DropdownMenu right className="dropdown-menu-lg py-0">
          <div className="dropdown-menu-header position-relative">
            {count} {header}
          </div>
          <ListGroup>{children}</ListGroup>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
class NavbarComponent extends React.Component {
  changeLanguage(lang) {
    this.setState({
      lang: lang,
    });
    let flag = lang === "en" ? usFlag : vnFlag;
    $("#language_selected").attr("src", flag);
  }

  replacePage(page) {
    const { history } = this.props;
    history.push(page);
  }

  hanleLogout() {
    sessionStorage.clear();
  }

  render() {
    const { dispatch, user } = this.props;
    const userInfo = " user.user";
    // const avatar = userInfo.photo;
    const avatar = null;
    const name = "userInfo.full_name";
    return (
      <Navbar color="white" light expand>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar className="mr-2">
              <DropdownToggle nav>
                <Link to="/do-an/timeline">
                  <Map id="navbar-dashboard" size={18} />
                </Link>
                <UncontrolledTooltip
                  placement="bottom"
                  target="navbar-dashboard"
                > Timeline
                </UncontrolledTooltip>
              </DropdownToggle>
              
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="mr-2">
              <DropdownToggle nav>
                <Link to="/do-an/timeline">
                  <Plus id="navbar-dashboard" size={18} />
                </Link>
                <UncontrolledTooltip
                  placement="bottom"
                  target="navbar-dashboard"
                >
                  Thêm
                </UncontrolledTooltip>
              </DropdownToggle>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="mr-2">
              <DropdownToggle nav caret className="nav-flag">
                <CustomImg src={usFlag} alt="English" id="language_selected" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={this.changeLanguage.bind(this, "en")}>
                  <CustomImg
                    src={usFlag}
                    alt="English"
                    width="20"
                    className="align-middle mr-1"
                  />
                  <span className="align-middle">English</span>
                </DropdownItem>
                <DropdownItem onClick={this.changeLanguage.bind(this, "vn")}>
                  <CustomImg
                    src={vnFlag}
                    alt="Vietnam"
                    width="20"
                    className="align-middle mr-1"
                  />
                  <span className="align-middle">Vietnam</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <span className="d-inline-block d-sm-none">
                <DropdownToggle nav caret>
                  <Settings size={18} className="align-middle" />
                </DropdownToggle>
              </span>
              <span className="d-none d-sm-inline-block">
                <DropdownToggle nav caret>
                  <CustomImg
                    src={avatar !== null ? avatar : empty_avatar}
                    className="avatar img-fluid rounded-circle mr-1"
                    alt="Avatar"
                  />
                  <span className="text-dark">{name}</span>
                </DropdownToggle>
              </span>
              <DropdownMenu right>
                <Link to="/do-an/profile" className="text-dark">
                  <DropdownItem>
                    <User size={18} className="align-middle mr-2" />
                    Hồ Sơ Cá Nhân
                  </DropdownItem>
                </Link>
                <Link to="/do-an/timeline">
                  <DropdownItem>
                    <PieChart size={18} className="align-middle mr-2" />
                    TimeLine
                  </DropdownItem>
                </Link>
                <DropdownItem divider />

                <Link to="/auth/sign-in" className="text-dark">
                  <DropdownItem onClick={this.hanleLogout.bind(this)}>
                    Sign out
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default connect((store) => ({
  app: store.app,
  user: store.user,
}))(NavbarComponent);
