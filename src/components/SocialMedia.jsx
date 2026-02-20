
import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/ebrima-konteh-89b47b1aa/">
      <BsLinkedin />
      </a>   
    </div>

    <div>
     <a href="https://twitter.com/konteh_gm">
     <BsTwitter />
     </a> 
    </div>

    <div>
      <a href="https://www.facebook.com/konteh.gm/">
      <FaFacebookF />
      </a>
    </div>

    <div>
      <a href="https://www.instagram.com/kontehgraphics/">
      <BsInstagram />
      </a>   
    </div>
    <div>
      <a href="https://wa.me/2203344167">
      <BsWhatsapp/>
      </a>   
    </div>
    
  </div>
);

export default SocialMedia;