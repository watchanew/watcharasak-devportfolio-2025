import { socialImgs } from "../constants/index.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a 
              key={index} 
              href={socialImg.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon hover:scale-110 transition-transform duration-300"
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} social icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Watcharasak P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;