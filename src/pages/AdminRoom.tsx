import {useState, useContext, FormEvent, useEffect} from 'react'
import {AuthContext} from '../context/AuthContext'
import {useHistory, useParams} from 'react-router-dom'
import {database} from '../services/firebase'
import { useRoom } from '../hooks/useRoom'

import {MenuBar} from '../components/MenuBar'
import { Question } from '../components/Question'

import deleteImg from '../assets/images/delete.svg'
import '../styles/room.scss'


type RoomParams = {
    id: string;
}

export function AdminRoom(){
    const { user } = useContext(AuthContext)
    const params = useParams<RoomParams>();
    const history = useHistory();
    const roomId = params.id;
    
    const {title, questions} = useRoom(roomId)

    async function handleDeleteQuestion(questionId: string){
        if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")){
            const questionRef = await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return(
        <div id="page-room">

            <MenuBar isAdmin isOutlined></MenuBar>
            
            <main className='content'>
                <div className='room-title'>
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>
                    }
                </div>

                <div className="question-list">
                    {questions.map(question =>{
                        return(
                            <Question 
                            key={question.id}
                            content={question.content}
                            author={question.author}
                            >
                                <button
                                    type='button'
                                    onClick={()=> handleDeleteQuestion(question.id)}

                                >
                                    <img src={deleteImg} alt="Remover pergunta." />
                                </button>
                            </Question>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}