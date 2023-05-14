import React, { useState } from 'react'
import './App.css'
import image from './image.png'

function App () {
  const [account, setAccount] = useState(true)
  const handleButtonClick = () => {
    setAccount(!account)
  }

  return (
    <div className='body'>
      <div className='container'>
        <img src={image} />
        {account ? (
          <div className='form'>
            <div>
              <h1>Welcome to BookClub</h1>
              <p>
                Get instant access to the key takeaways from the world's most
                influential books ever written that are guaranteed to change
                your life.
              </p>
              <div>
                <h2>Login</h2>
                <div>
                  <label for='id_login'>ID </label>
                  <div>
                    <input type='text' name='id_login' id='id_login' />
                    <button className='search'>Search</button>
                  </div>
                </div>
                <div>
                  <label for='email_login'>E-mail </label>
                  <div>
                    <input type='text' name='email_login' id='email_login' />
                    <button className='search'>Search</button>
                  </div>
                </div>
              </div>
            </div>
            <h5>
              Don't have an account?{' '}
              <button className='signUp' onClick={handleButtonClick}>
                Sign Up
              </button>
            </h5>
          </div>
        ) : (
          <div className='form'>
            <h2 className='register'>Register</h2>
            <form>
              <div className='nameAndPhone'>
                <div>
                  <label for='name'>Name: </label>
                  <div>
                    <input type='text' name='name' id='name' />
                  </div>
                </div>
                <div>
                  <label for='phone'>Phone: </label>
                  <div>
                    <input type='tel' name='phone' id='phone' />
                  </div>
                </div>
              </div>
              <label for='email'>E-mail: </label>
              <div>
                <input type='email' name='email' id='email' />
              </div>
              <div className='cepAndAddress'>
                <div>
                  <label for='cep'>CEP: </label>
                  <div>
                    <input type='number' name='cep' id='cep' />
                  </div>
                </div>
                <div>
                  <label for='address'>Address: </label>
                  <div>
                    <input type='text' name='address' id='address' />
                  </div>
                </div>
              </div>
              <div className='numberAndaddress_complementAndDistrict'>
                <div>
                  <label for='number'>Number: </label>
                  <div>
                    <input type='number' name='number' id='number' />
                  </div>
                </div>
                <div>
                  <label for='address_complement'>Address complement: </label>
                  <div>
                    <input
                      type='text'
                      name='address_complement'
                      id='address_complement'
                    />
                  </div>
                </div>
                <div>
                  <label for='district'>District: </label>
                  <div>
                    <input type='text' name='district' id='district' />
                  </div>
                </div>
              </div>
              <div className='cityAndUfAndPlan'>
                <div>
                  <label for='city'>City: </label>
                  <div>
                    <input type='text' name='city' id='city' />
                  </div>
                </div>
                <div>
                  <label for='uf'>UF: </label>
                  <div>
                    <input type='text' name='uf' id='uf' />
                  </div>
                </div>
                <div className='plan'>
                  <label for='plan'>Plan: </label>
                  <select name='plan' id='plan'>
                    <option></option>
                    <option value='1'>Padrao</option>
                    <option value='2'>Prata</option>
                    <option value='3'>Bronze</option>
                    <option value='4'>Ouro</option>
                    <option value='5'>Black</option>
                  </select>
                </div>
              </div>
              <button className='createAccount'>Create Account</button>
            </form>
            <h5>
              Already have an account?{' '}
              <button className='login' onClick={handleButtonClick}>
                Log in.
              </button>
            </h5>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
