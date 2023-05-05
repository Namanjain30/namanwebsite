import React from "react";
import {AiOutlineYoutube} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {RxDiscordLogo} from "react-icons/rx"
import "../App.css"
const Footer = () => {
  return (
    <div className="masterfooter">
    <div className="mainfooter">
        <div className="footer">
          <div className="ffooter">
            <div className="contentf">
              <div>Ready to get started?</div>
              <div>Talk to us today</div>
            </div>
            <button className="bttn1">Get Started</button>
          </div>
          <div className="sfooter">
            <div className="sfone">
                <div>Naman Jain</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
            <div className="sftwo">
                <div>Subscribe to get umportant updates</div>
                <div className="input">
                    <input type="text" />
                    <button className="bttn1">SUBSCRIBE</button>
                </div>
            </div>
            <div className="sfthree">
                <h5>Follow us</h5>
                <div className="imagesfooter">
                    <AiOutlineInstagram/>
                    <RxDiscordLogo/>
                    <AiOutlineYoutube />
                </div>
            </div>
            <div className="sffour">
                <div>call us</div>
                <div>+91 123456789</div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Footer;
