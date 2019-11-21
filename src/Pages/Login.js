import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ''
        }
    }
    componentDidMount() {
            let id =this.props.location.state.id
            this.setState({
                id 
            })
            console.log(id)
    }
    login() {
        // let id = this.props.location.state.id
        // this.setState({
        //     id
        // })
        console.log(this.state.id)
        let name = this.refs.name.value
        let password = this.refs.password.value
        if (!name || !password) {
            alert('不能为空')
            return false
        }
       

        // this.props.history.push('/home')

    }
    render() {


        return (
            <div>
                <input type="text" ref="name" />
                <br />
                <input type="text" ref="password" />
                <br />
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
}
