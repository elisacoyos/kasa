import "./Footer.scss";
import logo from "../../assets/logo-black.png"

function Footer() {
  return (
    <div className='footer'>
        <div >
        <img src={logo} alt="logo" width="80" />
                 
        </div>
        <div className='footer__text'>
            © 2020 Kasa. All rights reserved
        </div>
    </div>
  )
}

export default Footer