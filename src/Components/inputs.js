import React from 'react'
import Erro from './erro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NameInput = (props) =>{
    let style = {class:'box sb2'}
    return(
        <div>
            <input placeholder='Nome' input='text' onChange = {props.onChange} /> 
                {(props.state.name.length <= 3 && props.state.name.length > 0) && 
                        <div>
                            <i>  <FontAwesomeIcon icon="times-circle" color='red' size='lg' /> </i>
                            <Erro msg={"Digite seu Nome Completo"} style={style} />
                        </div>
                }
                        
                {(props.state.name.length > 3 )  && <div>
                            <i>  <FontAwesomeIcon icon="check-circle" color='green' size='lg' /> </i>
                        </div>        
                }
            </div>
    )
}

const EmailInput = (props)=>{
    let style = {class:'box sb2'}
    
    return(
         <div>
        <input placeholder='Email' input='text'  onChange={props.onChange}/>
        {((props.state.email.indexOf("@") === -1 || props.state.email[0]==="@") && props.state.email.length > 0 ) && 
                <div>
                    <i>  <FontAwesomeIcon icon="times-circle" color='red' size='lg' /> </i>
                    <Erro msg={"Insira um Email Valido"} style={style} />
                </div>
        }
                
        {(props.state.email.indexOf("@") !== -1 && props.state.email[0] !=="@")  && <div>
                    <i>  <FontAwesomeIcon icon="check-circle" color='green' size='lg' /> </i>
                </div>        
        }
    </div>
    )
    
}


const MessageInput = (props)=>{
    let style = {class:'box-mesage sb2'}
    return(
         <div>
    <input className='input' placeholder='Mensagem' input='text' onChange={props.onChange} />

        {(props.state.message.length <= 3 && props.state.message.length > 0 ) && 
                <div>
                    <i className='icon-mesage'>  <FontAwesomeIcon icon="times-circle" color='red' size='lg'/> </i>
                    <Erro msg={"A mensagem deve conter pelo menos 4 palavras e 20 caracteres"} style={style} />
                </div>
        }
                
        {(props.state.message.length > 3 )  && <div>
                    <i className='icon-mesage'>  <FontAwesomeIcon icon="check-circle" color='green' size='lg' /> </i>
                </div>        
        }
    </div>     
    )
}


const Inputs =(props)=>{
    return(
        <div>
            <label> Vem tomar um café com a gente </label> <br/>
            <label className='label-resp'> {props.state.done}  </label> <br/>
            <NameInput state = {props.state}  onChange ={props.NameChange}/>
            <EmailInput state = {props.state}  onChange={props.EmailChange}/>
            <MessageInput state = {props.state} onChange = {props.MessageChange} />
        </div>
    )

}



export default Inputs