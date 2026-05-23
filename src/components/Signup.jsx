import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../config/supabase'

function Signup({ onSignup }) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

 async  function handleSubmit(e) {
    e.preventDefault()
    setError('')

   const { data,error} = await supabase.from("users").insert([{
    name,email,password
   }])

   if(error){
    console.log(error)
    return
   }
   alert("user create")

    navigate('/')
  }

  return (
    <div className="auth-page auth-page-full">
      <div className="auth-card">
        <div className="auth-header">
          <div className="brand-icon">💬</div>
          <h1>Create account</h1>
          <p>Join and start messaging</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {error && <p className="alert-error">{error}</p>}

          <div className="field">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
            Create account
          </button>
        </form>

        <p className="auth-footer">
          Have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
