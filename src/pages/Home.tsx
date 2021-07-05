import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'

export function Home(){
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
                
                <button> 
                    <img src={googleIconImg} alt="" />
                    Crie sua sala com o Google
                </button>
                
                <div className="separator">ou entre em uma sala</div>

                <form action="">

                    <input placeholder="Digite o código da sala" type="text" />

                    <button type="submit"> Entrar na sala</button>
                </form>

             </div>
         </main>
        </div>
    )
}