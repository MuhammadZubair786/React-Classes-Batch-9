import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getInitials } from '../utils'

function Chat({ users, user, messages, onSend }) {
  const { userId } = useParams()
  const [text, setText] = useState('')
  const messagesEndRef = useRef(null)

  let chatUser = null
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].id === userId) {
  //     chatUser = users[i]
  //     break
  //   }
  // }

  const chatMessages = []
  // if (chatUser) {
  //   for (let i = 0; i < messages.length; i++) {
  //     const msg = messages[i]
  //     const betweenUs =
  //       (msg.fromUserId === user.id && msg.toUserId === chatUser.id) ||
  //       (msg.fromUserId === chatUser.id && msg.toUserId === user.id)

  //     if (betweenUs) chatMessages.push(msg)
  //   }
  // }

  // useEffect(function () {
  //   messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  // }, [chatMessages.length])

  // if (!chatUser) {
  //   return (
  //     <div className="not-found-card">
  //       <h2>User not found</h2>
  //       <p>This conversation does not exist.</p>
  //       <Link to="/users" className="btn btn-primary" style={{ marginTop: '1rem' }}>
  //         Back to messages
  //       </Link>
  //     </div>
  //   )
  // }

  function handleSend(e) {
    e.preventDefault()
    if (text.trim() === '') return

    onSend(user.id, chatUser.id, text.trim())
    setText('')
  }

  return (
    <div className="chat-page">
     

      <div className="chat-messages">
       
          <div className="chat-empty">
            <span className="chat-empty-icon">👋</span>
            <p>Say hello to nasbfnas</p>
            <p>Start the conversation below</p>
          </div>
        
       


      <form onSubmit={handleSend} className="chat-form">
        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-icon" title="Send">
          ➤
        </button>
      </form>
    </div>
    </div>
  )
}

export default Chat
