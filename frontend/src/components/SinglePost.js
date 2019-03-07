import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import "../App.css"

/* 
Os detalhes da postagem estão disponíveis em /:category/:post_id

A postagem é exibida com os seguintes itens:
1) Título
2) Corpo
3) Autor
4) Número de comentários
5) Pontuação atual
6) Mecanismo de voto para votar positiva ou negativamente o post
7) Botões ou links para que o post possa ser editado ou removido.
*/

class SinglePost extends Component{
    componentWillMount(){
        //
    }

    render(){
        return(
            <div className="single-post">
                <h3>Tittle</h3>
                
            </div>
        )
    }
}

export default SinglePost