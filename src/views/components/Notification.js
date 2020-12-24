import {toastr} from "react-redux-toastr";
function Notification(type, title, message) {
    const options = {
        timeOut: 5000,
        showCloseButton: true,
        progressBar: true,
        position: 'bottom-left'
    };

    const toastrInstance =
        type === "info"
            ? toastr.info
            : type === "warning"
            ? toastr.warning
            : type === "error"
                ? toastr.error
                : toastr.success;

    message = (typeof message==="object") ? JSON.stringify(message) : message;

    toastrInstance(
        title||"Success",
        message||"Successfully!!",
        options
    );
}

export default Notification;