import React, { Component } from 'react'

export default class My extends Component {
    btn(){
        this.props.history.push({pathname: "/login",state:{id:10}})

    }
    render() {
        return (
            <div>
               <button onClick={this.btn.bind(this)}>登录</button>
            </div>
        )
    }
}
