import React, { useEffect, useState } from 'react'
import { X } from 'react-feather';
import ValidInput from "../../../define/ValidInput"
import empty_avatar from "../../assets/image/avatars/empty_avatar.png" 
export const CustomImg = (props) => {
    const copyProps = JSON.parse(JSON.stringify(props));
    copyProps.src = (ValidInput.isEmpty(copyProps.src)) ? empty_avatar : copyProps.src
    return (
        <img {...copyProps} />
    )
}