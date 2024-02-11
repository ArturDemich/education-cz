import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        
          <div className="row">
            <div className="column footer-social">
              <a href="https://www.facebook.com/" target="_blank">
                <IoLogoFacebook />
              </a>
              <a href="#" target="_blank">
                <FaSquareInstagram />
              </a>
              <a href="#" target="_blank">
                <BiLogoTelegram />
              </a>
            </div>
            <div className="footer-contact column flex-center">
            <div>
              <p>
              <Image
                  src="/flag.png"
                  alt="Logo"
                  width={20}
                  height={15}
                  className="logo"
                />
                <a href="tel:+420228000000"> +420 228 000 000 (Чехия)</a>
              </p>
              <div className="footer-email">
                <MdOutlineEmail />
                <a href="mailto:testovich@gmail.com">testovich@gmail.com</a>
              </div>
              </div>
            </div>
            <div className="column flex-center">
                <div>
              <p>Офис в Праге:</p>
              <p>ул. Вашингтонова, 25</p>
              </div>
            </div>
            
            <div className="column flex-center">
              <div className="logo-container">
              <span>Образование - CZ</span>
                <Image
                  src="/flag.png"
                  alt="Logo"
                  width={30}
                  height={20}
                  className="logo"
                />
                
              </div>
              
            </div>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;
