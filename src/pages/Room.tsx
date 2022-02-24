import {useState, useContext, FormEvent, useEffect} from 'react'
import {AuthContext} from '../context/AuthContext'
import {useParams} from 'react-router-dom'
import {database} from '../services/firebase'

import {MenuBar} from '../components/MenuBar'
import {Button} from '../components/Button'

import '../styles/room.scss'

type FirebaseQuestions = Record<string, {
    author: {
        name: string,
        avatar: string
    },
    content: string,
    isAnswered: boolean,
    isHighlighted: boolean

}>

type RoomParams = {
    id: string;
}

export function Room(){
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const { user } = useContext(AuthContext)

    const roomId = params.id;

    useEffect(()=>{
        
        const roomRef = database.ref(`rooms/${roomId}`);
        
        roomRef.once('value', room =>{
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
            
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value])=>{
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                }
            })
        })
    }, [roomId])

    async function handleSendQuestion(event: FormEvent){
        event.preventDefault();
        if(newQuestion.trim() === ''){
            return
        }

        if(!user){
            alert('You must be logged in')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user?.avatar,
            },
            isHighlighted: false,
            isAnswered: false
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion('')
    }

    return(
        <div id="page-room">

            <MenuBar></MenuBar>
            
            <main className='content'>
                <div className='room-title'>
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea 
                    placeholder='O que você quer perguntar?'
                    onChange={event => setNewQuestion(event.target.value)}
                    value={newQuestion}
                    />
                    <div className="form-footer">
                        {user ? (
                            <div className='user-info'>
                                <img src={user.avatar} alt="User profile"/>
                                <span>{user.name}</span>
                            </div>
                        ): (
                            <span>Para enviar uma pergunta, <button> faça seu login.</button></span>
                        )}
                        <Button type='submit' disabled={!user}>Enviar pergunta</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}