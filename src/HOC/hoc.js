import React,{Component} from 'react'
import './css/index.css'
//HOC组件
import Hoccomponent from './TemplateComponent'
import Funccomponent from './FuncComponent'
//

export default  class Hoc extends Component{
    render() {
        return (
            <div className={'HocContent'}>
                <Hoccomponent/>
                <Funccomponent></Funccomponent>
            </div>
        );
    }
}