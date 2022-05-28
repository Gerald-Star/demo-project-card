import React from 'react'
import Facebook from './images/FacebookIcon.png'
import GitHub from './images/GitHubIcon.png'
import Twitter from './images/TwitterIcon.png'
import Instagram from './images/InstagramIcon.png'
import './Footer.css'


// Used passing of images throuth the src.
// To learn the calling of the fucntion using javascript
// curly bracket.

// Diff from when passing image through the public.You dont't use the
// import call rather pass the image direc on the src.


export default function Footer() {
  return (
    <div className='background-shadow'>
        <div className='social-icons'>
              
          <img src={Facebook} alt="Twitter" />
          <img src={GitHub} alt="GitHub" />
          <img src={Twitter} alt="Instagram" />
          <img src={Instagram} alt="" />
        </div>
          


          

        




          
          {/* <a href="https://www.facebook.com/" className='fa-fa-facebook'>
              <i class="fa-brands fa-facebook-square"></i></a>
          
          <a href="https://twitter.com/home" className='fa-fa-twitter'>
              <i class="fa-brands fa-twitter"></i>
          </a>

          <a href="https://www.instagram.com/?hl=en" className='fa-fa-instagram'>
              <i class="fa-brands fa-instagram-square"></i>
          </a>

          <a href="https://github.com/" className='fa-fa-github'>
              <i class="fa-brands fa-github"></i>
          </a> */}
    </div>
  )
}
