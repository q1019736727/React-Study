import React,{Component} from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
import './page.css'

export default class Page extends Component{
    render() {
        return (
            <div className={'page'}>
                <Link to='/hoc'>
                    <Button>
                    </Button>
                </Link>

            </div>
        );
    }
}
