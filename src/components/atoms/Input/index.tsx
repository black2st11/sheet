import React, {ReactNode} from 'react'
import {Input as AntdInput, InputProps as AntdInputProps} from 'antd';

interface InputProps {
    value : string | number;
    suffix : ReactNode | undefined;
    prefix : ReactNode | undefined;
    maxLength : number | undefined;
    disabled : boolean | undefined;
    status: 'error' | 'warning' | undefined;
    type: 'textarea' | 'search' | 'group' | 'password' | undefined,
    props : AntdInputProps | undefined

}


const Input = ({value, suffix, prefix, maxLength, disabled, status, type, props}: InputProps) => (
        <AntdInput  {...{value, addonBefore: prefix, addonAfter: suffix, maxLength, disabled, status, type}} {...props} />
)

export default Input