import React from "react";
import { connect } from "react-redux";
import Wrapper from "../../components/Wrapper";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import LoadingOverlay from "react-loading-overlay";
import Notification from "../../components/Notification";
import { ModalAddTrack } from "../../components/Modal";
import { hideAddTracker } from "../../../redux/actions/ortherActions";

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      notification: [],
    };
    this.handleLoading = this.handleLoading.bind(this);
  }

  handleLoading(action) {
    this.setState({
      isLoading: action,
    });
  }

  render() {
    let children_props = Object.assign(
      { handleLoading: this.handleLoading },
      this.props.children.props
    );
    const { dispatch } = this.props;
    let children = _objectWithoutProperties(this.props.children, "props");
    children = Object.assign(children, { props: children_props });
    return (
      <React.Fragment>
        <ModalAddTrack
          isOpen={this.props.orther.addNewTracker}
          handleOk = {(state)=>{
            console.log(state)
          }}
          handleCancel = {()=>{
           dispatch(hideAddTracker()); 
          }}
        />
        <LoadingOverlay
          active={this.state.isLoading}
          spinner
          text="Please wait..."
        >
          <Wrapper>
            <Sidebar />
            <Main>
              <Navbar notification={this.state.notification} isSidebar={true} />
              <Content>{children}</Content>
              <Footer />
            </Main>
          </Wrapper>
        </LoadingOverlay>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (store) => ({
  orther: store.orther,
});

export default connect(mapStateToProps)(Dashboard);
