import { Link } from 'react-router-dom'
import { getInitials } from '../utils'

function Users({ users, user }) {
  const otherUsers = []

  for (let i = 0; i < users.length; i++) {
    if (users[i].id !== user.id) {
      otherUsers.push(users[i])
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Messages</h1>
        <p>Select someone to start a conversation</p>
      </div>

      {otherUsers.length === 0 ? (
        <div className="empty-state">
          <p>No other users yet.</p>
          <p>Sign up another account to chat.</p>
        </div>
      ) : (
        <ul className="user-list">
          {otherUsers.map(function (u) {
            return (
              <li key={u.id}>
                <Link to={'/chat/' + u.id} className="user-card">
                  <div className="avatar">{getInitials(u.name)}</div>
                  <div className="user-card-info">
                    <strong>{u.name}</strong>
                    <span>{u.email}</span>
                  </div>
                  <span className="user-card-arrow">→</span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Users
