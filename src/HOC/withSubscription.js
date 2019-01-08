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
                    {/*这里面永远不会渲染*/}
                </WrappedComponent>
            )
        }
    }
    return HOC;
}
export default withSubscription