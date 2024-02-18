import React from 'react'
import {Link} from "react-router-dom"
import "./footer.css"
import linkdin from "../../assets/linkedin.svg"
import git from "../../assets/github.svg"
import phone from "../../assets/telephone.svg"
import email from "../../assets/email.svg"
import house from "../../assets/house.svg"
import web from "../../assets/web.jpg"

export default function Footer() {
  console.log(phone,git)
  return (
    <footer className="footer-distributed">
  <div className="footer-left">
    <img src={web} alt="" width={150} height={100} />
    <p className="footer-company-name">Bangin © 2021</p>
  </div>
  <div className="footer-center">
    <div>
      <img src={house} alt="img" />
      <p>
        <span>Noida</span> Uttar Pradesh
      </p>
    </div>
    <div>
      <img src={phone} alt="img" />
      <p>91 8235923556</p>
    </div>
    <div>
      <img src={email} alt="img" />
      <p>
        navinmanohar8235@gmail.com
      </p>
    </div>
  </div>
  <div className="footer-right">
    <p className="footer-company-about">
      <span>About</span> Mentor at Geeksforgeeks
    </p>
    <div className="footer-icons">
      <Link to="https://www.linkedin.com/in/navin-manohar-48b1a5226/">
      <img src={linkdin}/>
      </Link>
      <Link href="https://github.com/Navinmanohar">
        <img src={git} alt="git" />
      </Link>
    </div>
  </div>
</footer>

  )
}
