import { useHistory } from 'react-router';

import '../styles/menuBar.scss'
import logoImg from '../assets/images/logo.svg'
import copyImg from '../assets/images/copy.svg'

export function MenuBar(){

    const history = useHistory();

    function navigateToHome(){
        history.push('/')
    }

    return (
        <div className="menuBar">

            <img src={logoImg} alt="Letmeask"/>

            <div className="section">
                <div className="codeRoom">
                    <button  className="copybg">
                        <img  src={copyImg} alt="Copy"/> 
                    </button>
                    <p>Sala #323243</p>
                </div>

                <button onClick={navigateToHome} className="logOut">Encerrar sala</button>
            </div>
        </div>
    )
}