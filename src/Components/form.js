import React,{Component} from 'react'

import Inputs from '../Components/inputs'

class Form extends Component{
    constructor(props){
        super(props)
        this.InitialState = {name:"",email:"",message:"",done:""}
        this.state = this.InitialState
    }

    handleChange = event =>{
        let input = event.target.value
        let resul = input.split(" ")
        if((resul.length >= 2 && input.length >=7) || input.length === 0  ){
            this.setState({...this.state,name:input})
            console.log(this.state.name)
        }
        else{
            this.setState({...this.state,name:"out"})
            console.log(this.state)
        }
    }

    handleEmail = event =>{
        this.setState({...this.state,email:event.target.value})
    }

    handleMessage = event =>{
        let input = event.target.value
        let resul = input.split(" ")
        if((resul.length >= 4 && input.length>=20) || input.length === 0  ){
            this.setState({...this.state,message:input})
            console.log(this.state.message)
        }
        else{
            this.setState({...this.state,message:"out"})
            console.log(this.state)
        }
               
    }

    handleSubmit = () =>{
        if((this.state.name.length > 3) && (this.state.email.length > 3) && (this.state.message.length > 3)  ){
            this.setState({...this.state,done:"Sua Mensagem foi enviada com sucesso"})
        }
        else{
            console.log('Algum campo está errado')
        }
    }

    render(){
        return(
            
            <div>
                <form className='form'>
                    <Inputs  state = {this.state} NameChange = {this.handleChange} EmailChange ={this.handleEmail} 
                    MessageChange={this.handleMessage} Submitbuttom ={this.handleSubmit}/>
                </form>
                <button onClick={this.handleSubmit} > ENVIAR </button>
               
            </div>
                
        )
    }
}



export default Form