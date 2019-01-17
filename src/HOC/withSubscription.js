import React,{Component} from 'react'

function withSubscription(WrappedComponent) {
    class HOC extends React.Component {
        constructor(){
            super()
            this.state = {
                secret: 66
            }
        }
        render(){
            return(
                <WrappedComponent
                    secret={this.state.secret}
                    >
                    {this.props.children}
                </WrappedComponent>
            )
        }
    }
    return HOC;
}
export default withSubscription