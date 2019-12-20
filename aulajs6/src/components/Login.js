import React from 'react';

class Usuario extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            senha:'000000',
            email:'oioi1@gmail.com',

            input : null,
            input2 : null,

        }
    }
    validarEMAIL = () => {
        this.setState ({
            input: document.querySelector('.EMAIL').value,
            input2: document.querySelector('.SENHA').value
        })
            if (this.state.input === this.state.email && this.state.senha){
                console.log('loga')
            } 
            else{
                console.log('nao loga')
            }
            
    }
    render (){
        return(
           <div>
                <header>
                    <p>fazer login</p>
                    <form>
                        <span>
                            <label for="email">email</label>
                            <input className="EMAIL" required placeholder="ensira Email"></input>
                        </span>
                        <span>
                            <label for="password">senha</label>
                            <input className="SENHA" required placeholder="ensira senha"></input>
                        </span>
                        <button onClick={() => this.validarEMAIL()}>entrar</button>
                    </form>
                </header>
           </div>
        )
    }
}
export default Usuario;