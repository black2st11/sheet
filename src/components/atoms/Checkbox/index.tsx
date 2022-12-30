import React, {ReactEventHandler, ReactNode} from 'react'
import {Checkbox as AntdCheckbox, CheckboxProps as AntdCheckboxProps} from 'antd'

interface CheckboxProps {
    children: string | ReactNode | undefined;
    name : string | undefined;
    checked: boolean | undefined;
    disabled: boolean | undefined;
    onChange: any | undefined;
    props : AntdCheckboxProps | undefined;
}

interface CheckboxGroupOptionsProps {
    label : string;
    value : string;
}

interface CheckboxGroupProps {
    options : Array<CheckboxGroupOptionsProps>;
    disabled : boolean | undefined;
    defaultValue : Array<string>;
    name : string | undefined;
    onChange: ReactEventHandler | undefined;
}

const CheckBox = ({children, name, checked, disabled, onChange, props} : CheckboxProps) => (
    <AntdCheckbox {...props} {...{name, checked, disabled, onChange}}>
        {children}
    </AntdCheckbox>
)

export default CheckBox
