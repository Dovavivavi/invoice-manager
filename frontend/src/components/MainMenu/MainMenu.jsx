import { signOut } from 'firebase/auth'
import React, { Component } from 'react'
import { auth } from '../../firebase-config'
import './MainMenu.scss'


export class MainMenu extends Component {
  render() {
    const logout = async () => {
      try {
        await signOut(auth)
        console.log('succesful signout')
      } catch(error) {
        console.log(error.message)
      } 
    }

    return (
      <>
        <div>main menu header
          <p>list</p>
          <p>create bill</p>
          <button onClick={logout}>kijelentkezés</button>
        </div>
        <div>Main menu is here</div>
      </>
    )
  }
}

export default MainMenu