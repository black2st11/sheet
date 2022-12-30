import React, {ReactEventHandler, ReactNode} from 'react'
import {Button as AntdButton , ButtonProps as AntdButtonProps} from 'antd'

interface ButtonProps {
    children : string | ReactNode | undefined;
    type : 'primary' | 'dashed' | 'text' | 'link' | undefined;
    danger: boolean | undefined;
    disabled: boolean | undefined;
    icon: ReactNode | undefined;
    props: AntdButtonProps | undefined;
    onClick: ReactEventHandler | undefined;
    size: 'large' | 'middle' | 'small' | undefined;
}


const Button = ({children, type, size, danger, disabled, icon, props, onClick}: ButtonProps) => (
    <AntdButton style={{display : 'flex', alignItems : 'center', justifyContent: 'center'}} {...props} {...{danger, size, type, disabled, icon, onClick }}  >
        {children}
    </AntdButton>
)

export default Button