import Social from "@components/Social";
import config from "@config/config.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";

const Footer = () => {
  const { copyright, footer_content } = config.params;

  return (
    <footer className="section bg-theme-light pb-4 pt-4 relative"> 
      <div className="container">
        {/* Mensajes en línea*/}
        <div className="row mb-4 mt-4"> 
          <div className="col-12 text-center">
            {/* línea 1 */}
            <p className="text-2xl font-bold text-white mb-1">
              Facultad de Ciencias Exactas y Naturales - UBA
            </p>
            {/* línea 2 */}
            <p className="text-1xl font-bold text-white mb-1">
              Av. Int. Cantilo, C1428 Cdad. Autónoma de Buenos Aires
            </p>
            {/* línea 3 */}
            <p className="text-2xl font-bold text-black">
              Hecho con 💕 por ETEC-UBA
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4">
          {markdownify(copyright, "p", "text-sm")}
        </div>
      </div>

      {/* Icons */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4">
        <Social source={social} className="social-icons" />
      </div>
    </footer>
  );
};

export default Footer;
