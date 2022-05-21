import React from 'react'

const Home = props => (
 <div className='Home'>
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> ITA Jr. </span>

            <span className="login-form-title">
            </span>

            <div className="wrap-input">
              <input className='email'/>
              <span className="focus-input" data-placeholder='Email'></span>
            </div>

            <div className="wrap-input">
              <input className='password'/>
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="#">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
)

export default Home