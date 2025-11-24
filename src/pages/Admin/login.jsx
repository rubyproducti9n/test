import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import '@material/web/slider/slider.js'
// import { styles as themeStyles } from '@material/web/theme/theme.js'

function App() {
  return (
    <>
      <style>{themeStyles.cssText}</style>
      <md-filled-button>Click</md-filled-button>
    </>
  )
}


export default function AdminLogin() {
  const navigate = useNavigate()

  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")

  const STATIC_EMAIL = "admin@bentork.com"
  const STATIC_PASSWORD = "admin123"

  const handleLogin = (e) => {
    e.preventDefault()

    if (!emailValue || !passwordValue) {
      alert("Please enter email and password")
      return
    }

    if (emailValue === STATIC_EMAIL && passwordValue === STATIC_PASSWORD) {
      alert("Login successful")
      localStorage.setItem("token", "static_dummy_token")
      navigate("/Dashboard", { replace: true })
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <>
      <style>{`
:root {
  /* System tokens */
  --md-sys-color-primary: #009d1dff;

  /* Component tokens */
  --md-slider-handle-shape: 110px;
}

        .admin-container {
          display: flex;
          min-height: 100vh;
          font-family: Inter, sans-serif;
        }
        .left-panel {
          width: 50%;
          background: #1E1E1E;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }
        .logo-box {
          padding: 16px 28px;
          margin-bottom: 22px;
          text-align: center;
        }
        .logo-img {
          width: 180px;
          height: auto;
          object-fit: contain;
        }
        .panel-box {
          padding: 14px 26px;
          text-align: center;
        }
        .panel-title {
          margin: 0;
          font-size: 22px;
          letter-spacing: 1px;
        }
        .panel-desc {
          margin-top: 8px;
          font-size: 12px;
          color: #C0C0C0;
        }
        .right-panel {
          width: 50%;
          background: #FFFFFF;
          padding: 80px 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .login-title {
          margin: 0;
          font-size: 26px;
          font-weight: 400;
          font-family: "Gabarito", sans-serif !important;
        }
        .login-sub {
          margin-top: 6px;
          margin-bottom: 30px;
          color: #444;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .input-box {
          width: 100%;
          height: 46px;
          padding: 10px 12px;
          border-radius: 6px;
          border: 1px solid #CFCFCF;
          outline: none;
          font-size: 15px;
        }
        .create-text {
          font-size: 12px;
          margin: 0 auto;
        }
        .create-link {
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
        }
        .login-btn {
          background: #1E1E1E;
          color: white;
          border: none;
          height: 44px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 400;
          cursor: pointer;
          width: 120px;
          margin: 0 auto;
        }
      `}</style>

      <div className="admin-container">
        <div className="left-panel">
          <div className="logo-box">
            <img
              src={"https://raw.githubusercontent.com/bentork5151/assets/refs/heads/main/Logo/logo_inverted.png"}
              alt="Bentork Logo"
              className="logo-img"
            />
          </div>

          <div className="panel-box">
            <h2 className="panel-title">ADMIN PANEL</h2>
            <p className="panel-desc">
              Manage charging stations, users, and sessions all in one place.
            </p>
          </div>
        </div>

        <div className="right-panel">
          <h2 className="login-title">Login</h2>
          <p className="login-sub">Enter your registered credentials to get started</p>

          <form onSubmit={handleLogin} className="login-form">
            <input
              type="text"
              placeholder="Email ID or Mobile Number"
              className="input-box"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
 
            <input
              type="password"
              placeholder="Password"
              className="input-box"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />

            <p className="create-text">
              Don’t have an Account?{" "}
              <span className="create-link" onClick={() => navigate("/AdminRegister")}>
                Create Account
              </span>
            </p>

<div style={{ padding: 32 }}>
      <md-slider step="10" ticks min="0" max="100" labeled></md-slider>
    </div>

            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}
