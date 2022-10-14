import React, { Component } from 'react'
import insta from '../Assets/Images/insta.png'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section>
            <p>Subscribe for future updates</p>
            <a href="www.instagram.com">
                <img src={insta} alt="instagram logo" />
            </a>
        </section>
        <section>
            <textarea name="email" id="email" cols="30" rows="10">Email...</textarea>
            <button>Sign Up</button>
        </section>
      </div>
    )
  }
}
