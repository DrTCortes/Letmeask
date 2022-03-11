import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom'

import {RoomCode} from './roomCode'
import '../styles/menuBar.scss'
import logoImg from '../assets/images/logo.svg'
import { Button } from './Button';

type MenuProps = {
    isOutlined?: boolean;
    isAdmin?: boolean
}

export function MenuBar({isAdmin, isOutlined}: MenuProps){
    const history = useHistory();

    function navigateToHome(){
        history.push('/')
    }
    
    type RoomParams = {
        id: string;
    }

    const params = useParams<RoomParams>();
    const roomId = params.id;

    return (
        <div className="menuBar">

            <img src={logoImg} alt="Letmeask"/>

            <div className="section">
                <RoomCode code={roomId}/>
                <Button onClick={navigateToHome} className="logOut">Encerrar sala</Button>
            </div>
        </div>
    )
}