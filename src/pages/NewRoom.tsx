import {useContext} from 'react'
import {Link} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'

import {AuthContext} from '../context/AuthContext'

import '../styles/auth.scss'

export function NewRoom(){
    const {user, signInWithGoogle} = useContext(AuthContext)

    return(
        <div id="page-auth">
         <aside>
             <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
             <strong>Toda pergunta tem uma resposta.</strong>
             <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
         </aside>
         <main> 
             <div className="main-content">
                <img src={logoImg} alt="Letmeask" />
                <h1>{user?.name}</h1>
                <h2>Crie uma nova sala</h2>
                

                <form action="">

                    <input placeholder="Nome da sala" type="text" />

                    <Button type="submit">Criar sala</Button>
                    
                </form>
                    <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
             </div>
         </main>
        </div>
    )
}