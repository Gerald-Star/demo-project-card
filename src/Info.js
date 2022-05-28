import React from 'react'
import './Info.css'

export default function Info() {
  return (
    <div className='info-box background-shadow'>
        <header className='header-info'>
              <img src="../persona-pics.jpg" alt="" className='profile-pics' />
            
            <div className='header-profile'>
              <h2 className='person-name'>Chima Ukwuoma</h2>
              <h4 className='job-role'>Frontend Developer</h4>
              <h5 className='website'>Chima.website.com</h5>
            </div>
        </header>
          

          <section className='contact-box'>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                  <button className='btn1'>
                      
                      <i class="fa-solid fa-envelope"></i>
                      <p>Email</p>
                  </button>

              </a>


              <a href="https://www.linkedin.com/in/gerald-ch-ukwuoma-b502b6180/">
                  <button className='btn2'>
                      <i class="fa-brands fa-linkedin"></i>
                      <p>Linkedin</p>
                    </button>

              </a>
              
           </section>

    </div>
  )
}
