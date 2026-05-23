import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getInitials } from '../utils'

function Chat({ users, user, messages, onSend }) {
  const { userId } = useParams()
  const [text, setText] = useState('')
  const messagesEndRef = useRef(null)

  let chatUser = null
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      chatUser = users[i]
      break
    }
  }

  const chatMessages = []
  if (chatUser) {
    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i]
      const betweenUs =
        (msg.fromUserId === user.id && msg.toUserId === chatUser.id) ||
        (msg.fromUserId === chatUser.id && msg.toUserId === user.id)

      if (betweenUs) chatMessages.push(msg)
    }
  }

  useEffect(function () {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages.length])

  if (!chatUser) {
    return (
      <div className="not-found-card">
        <h2>User not found</h2>
        <p>This conversation does not exist.</p>
        <Link to="/users" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to messages
        </Link>
      </div>
    )
  }

  function handleSend(e) {
    e.preventDefault()
    if (text.trim() === '') return

    onSend(user.id, chatUser.id, text.trim())
    setText('')
  }

  return (
    <div className="chat-page">
      <header className="chat-header">
        <Link to="/users" className="chat-back">
          ← Back
        </Link>
        <div className="avatar">{getInitials(chatUser.name)}</div>
        <div className="chat-header-info">
          <h2>{chatUser.name}</h2>
          <p>Online</p>
        </div>
      </header>

      <div className="chat-messages">
        {chatMessages.length === 0 ? (
          <div className="chat-empty">
            <span className="chat-empty-icon">👋</span>
            <p>Say hello to {chatUser.name}</p>
            <p>Start the conversation below</p>
          </div>
        ) : (
          chatMessages.map(function (msg) {
            const isMine = msg.fromUserId === user.id

            return (
              <div
                key={msg.id}
                className={isMine ? 'message message-mine' : 'message message-other'}
              >
                {msg.text}
              </div>
            )
          })
        )}
        <div ref={messagesEndRef} />
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
  )
}

export default Chat
