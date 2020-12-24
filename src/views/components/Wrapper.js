import React from "react";
const Wrapper = ({ layout, children }) => (
    <div className={"wrapper " + (true ? "wrapper-boxed" : "")}>
        {children}
    </div>
);

export default Wrapper;
