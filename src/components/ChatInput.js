import { useState} from 'react'
import axios from 'axios'

const ChatInput = ({ user, clickedUser, getUserMessages, getClickedUsersMessages }) => {
    const [textArea, setTextArea] = useState("")
    const userId = user?.user_id
    const clickedUserId = clickedUser?.user_id

    const addMessage = async () => {
        const message = {
            timestamp: new Date().toISOString(),
            from_userId: userId,
            to_userId: clickedUserId,
            message: textArea
        }

        try {
            await axios.post('https://campus-chemistry-backend.onrender.com/message', { message })
            getUserMessages()
            getClickedUsersMessages()
            setTextArea("")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="chat-input">
            <textarea id='textArea' value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <button className="submit-button" onClick={addMessage}>Send</button>
        </div>
    )
}

export default ChatInput