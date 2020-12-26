import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import { MapPin } from "react-feather";
import { Badge } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

import routes from "../route/index";
import { CustomImg } from "../components/CustomTag";


const SidebarItem = withRouter(
    ({ name, badgeColor, badgeText, icon: Icon, location, to }) => {
        const getSidebarItemClass = path => {
            return location.pathname === path ? "active" : "";
        };

        return (
            <li className={"sidebar-item sidebar-link " + getSidebarItemClass(to)}>

                    {Icon ? <FontAwesomeIcon icon={Icon} className="align-middle mr-3" size="lg" /> : null}
                    {name}
                    {badgeColor && badgeText ? (
                        <Badge color={badgeColor} size={18} className="sidebar-badge">
                            {badgeText}
                        </Badge>
                    ) : null}
              
            </li>
        );
    }
);

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    toggle = index => {
        this.setState(state => ({
            [index]: !state[index]
        }));
    };

    componentDidMount() {
        /* Open collapse element that matches current url */

        routes.forEach((route, index) => {


            this.setState(() => ({
                [index]: true
            }));
        });

        //const project = utils.getPermissionInProject();
        this.setState({ isAdmin: true })
    }

    render() {

        const userInfo = "user.user";
        const name = "userInfo.full_name";
        // const avatar = userInfo.photo;
        const avatar = null;
            return (
                <nav
                    className={
                        " toggled sidebar-sticky"
                        // +(!sidebar.isOpen ? " toggled" : "") +
                        // (sidebar.isSticky ? " sidebar-sticky" : "")
                    }
                >
                    <div className="sidebar-content">
                        <PerfectScrollbar>
                            <a className="sidebar-brand" href="/">
                                <MapPin className="align-middle text-primary mr-2" size={24} />{" "}
                                <span className="align-middle" >Đồ Án</span>
                            </a>
                            <ul className="sidebar-nav">
                                <React.Fragment>
                                    <SidebarItem
                                        name="Members"
                                        icon={faUser}
                                        to="/project/clients"
                                    />

                                </React.Fragment>
                            </ul>
                        </PerfectScrollbar>
                    </div>
                </nav>
            );
    }
}

export default Sidebar;
