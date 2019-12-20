import React from 'react';
import { render } from '@testing-library/react';

class Criar extends React.Component{





    render(){
        return(
            <div>
                <header>
                    <p>Criar conta</p>
                    <form>
                        <span>
                            <label>nome</label>
                            <input required placeholder="ensira o nome"></input>
                        </span>
                        <span>
                            <label>email</label>
                            <input required placeholder="ensira o email"></input>
                        </span>
                        <span>
                            <label>senha</label>
                            <input required placeholder="ensira a senha"></input>
                        </span>
                        <button>criar conta</button>
                    </form>
                </header>
            </div>
        )
    }
}

export default Criar;