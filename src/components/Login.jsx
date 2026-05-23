import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ onLogin }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    const ok = onLogin(email, password)
    if (!ok) {
      setError('Wrong email or password')
      return
    }

    navigate('/users')
  }

  return (
    <div className="auth-page auth-page-full">
      <div className="auth-card">
        <div className="auth-header">
          <div className="brand-icon">💬</div>
          <h1>Welcome back</h1>
          <p>Sign in to continue chatting</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {error && <p className="alert-error">{error}</p>}

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>

        <p className="auth-hint">Demo: alex@test.com / 123</p>

        <p className="auth-footer">
          No account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
