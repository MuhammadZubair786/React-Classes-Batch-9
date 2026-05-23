import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import Signup from './components/Signup'
import Users from './components/Users'
import { useStore } from './useStore'
import { getInitials } from './utils'

function App() {
  const store = useStore()

  return (
    <BrowserRouter>
      <div className="app-shell">
        {store.user && (
          <header className="navbar">
            <Link to="/users" className="navbar-brand">
              <span className="brand-icon">💬</span>
              ChatFlow
            </Link>

            <div className="navbar-user">
              <div className="avatar avatar-sm">{getInitials(store.user.name)}</div>
              <span className="navbar-name">
                <strong>{store.user.name}</strong>
              </span>
              <button type="button" className="btn btn-ghost" onClick={store.logout}>
                Logout
              </button>
            </div>
          </header>
        )}

        <main className={store.user ? 'main-content' : ''}>
          <Routes>
            <Route
              path="/login"
              element={
                store.user ? (
                  <Navigate to="/users" replace />
                ) : (
                  <Login onLogin={store.login} />
                )
              }
            />

            <Route
              path="/signup"
              element={
                store.user ? (
                  <Navigate to="/users" replace />
                ) : (
                  <Signup onSignup={store.signup} />
                )
              }
            />

            <Route
              path="/users"
              element={
                store.user ? (
                  <Users users={store.users} user={store.user} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route
              path="/chat/:userId"
              element={
                store.user ? (
                  <Chat
                    users={store.users}
                    user={store.user}
                    messages={store.messages}
                    onSend={store.sendMessage}
                  />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route
              path="/"
              element={
                <Navigate to={store.user ? '/users' : '/login'} replace />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
