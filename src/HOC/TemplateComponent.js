import React,{Component} from 'react'
import withSubscription from './withSubscription'
import Button from '../components/Button'

class TemplateComponent extends Component{
    constructor(){
        super()
        this.state = {
            data: {name: 'ChiuYung'}
        }
    }
    render(){
        return(
            <div>
                <p>获取到HOC组件信息{this.props.secret}</p>
                <p>获取自身信息{this.state.data.name}</p>
                <Button>
                    <div>😄哈哈😄</div>
                </Button>
            </div>
        )
    }
}

const WrappedComponent = withSubscription(TemplateComponent);

export default WrappedComponent;
