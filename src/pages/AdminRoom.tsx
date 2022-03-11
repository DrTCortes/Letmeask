import {useState, useContext, FormEvent, useEffect} from 'react'
import {AuthContext} from '../context/AuthContext'
import {useParams} from 'react-router-dom'
import {database} from '../services/firebase'

import {MenuBar} from '../components/MenuBar'
import {Button} from '../components/Button'
import { Question } from '../components/Question'

import '../styles/room.scss'
import { useRoom } from '../hooks/useRoom'



type RoomParams = {
    id: string;
}

export function AdminRoom(){
    const { user } = useContext(AuthContext)
    const params = useParams<RoomParams>();
    
    const roomId = params.id;
    
    const {title, questions} = useRoom(roomId)

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
                            />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}