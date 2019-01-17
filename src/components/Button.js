import React from 'react'
import './Button.scss'
class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            disX:0,
            disY:0,
            animation: false
        }
        this.ref = React.createRef()
    }
    render(){
        return(
            <div className='button-wrapper'>
                <button ref={this.ref} onClick={this.clickCircle.bind(this)}>
                    {this.props.children}
                    <p>开启React世界</p>
                    {this.state.animation === true ?
                        <span onAnimationEnd={this.animationEnd.bind(this)}
                              style={{left:this.state.disX,top:this.state.disY}}
                              className='circle'></span> : ''
                    }
                </button>
            </div>
        )
    }
    clickCircle(el){
        let btn = el.currentTarget
        let disX = el.clientX - btn.getBoundingClientRect().x
        let disY = el.clientY - btn.getBoundingClientRect().y
        this.setState({
            animation: true,
            disX:disX,
            disY:disY,
        })
    }
    animationEnd(){
        this.setState({
            animation: false
        })
    }
}

export default Button