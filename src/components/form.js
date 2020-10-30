import React, { Component } from 'react'

import Inputs from './inputs'

class Form extends Component {
    constructor(props) {
        super(props)
        this.InitialState = { name: "", email: "", message: "", done: "" }
        this.state = this.InitialState
    }

    handleChange = event => {
        let input = event.target.value
        let resul = input.split(" ")
        let resultLenth = result.length
        let inputLenth =  input.length

        if ((resultLenth >= 2 && inputLenth >= 7) || inputLenth === 0) {
            this.setState({ ...this.state, name: input })
        }
        else {
            this.setState({ ...this.state, name: "out" })
        }
    }

    handleEmail = event => {
        this.setState({ ...this.state, email: event.target.value })
    }

    handleMessage = event => {
        let input = event.target.value
        let resul = input.split(" ")
        if ((resul.length >= 4 && input.length >= 20) || input.length === 0) {
            this.setState({ ...this.state, message: input })
        }
        else {
            this.setState({ ...this.state, message: "out" })
        }

    }

    handleSubmit = () => {
        if ((this.state.name.length > 3) && (this.state.email.length > 3) && (this.state.message.length > 3)) {
            this.setState({ ...this.state, done: "Sua Mensagem foi enviada com sucesso." })
        }
        else {
        }
    }

    render() {
        return (

            <div>
                <form className='form'>
                    <Inputs state={this.state} NameChange={this.handleChange} EmailChange={this.handleEmail}
                        MessageChange={this.handleMessage} Submitbuttom={this.handleSubmit} />
                </form>
                <button onClick={this.handleSubmit} > ENVIAR </button>

            </div>

        )
    }
}



export default Form