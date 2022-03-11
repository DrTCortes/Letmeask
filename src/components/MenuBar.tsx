import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom'

import {RoomCode} from './roomCode'
import '../styles/menuBar.scss'
import logoImg from '../assets/images/logo.svg'
import { Button } from './Button';
import { database } from '../services/firebase';

type MenuProps = {
    isOutlined?: boolean;
    isAdmin?: boolean;

}

export function MenuBar({isAdmin, isOutlined}: MenuProps){
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    function navigateToHome(){
        history.push('/')
    }

    async function handleRemoveRoom(){
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        })

        history.push("/")
    }
    
    type RoomParams = {
        id: string;
    }


    return (
        <div className="menuBar">

            <img src={logoImg} alt="Letmeask"/>

            <div className="section">
                <RoomCode code={roomId}/>
                <Button onClick={isAdmin ? handleRemoveRoom : navigateToHome} className="logOut">Encerrar sala</Button>
            </div>
        </div>
    )
}