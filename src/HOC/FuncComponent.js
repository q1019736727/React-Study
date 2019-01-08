import React from "react";
import withSub from './withSubscription'

const DisplayTheSecret = props => (
    <div>
        Function组件获取到HOC组件信息 {props.secret}.
    </div>
);

const WrapperComponent = withSub(DisplayTheSecret)

export default WrapperComponent