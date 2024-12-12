import Social from "@components/Social";
import config from "@config/config.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";

const Footer = () => {
  const { copyright, footer_content } = config.params;

  return (
    <footer className="section bg-theme-light pb-0 relative"> 
      <div className="container">
        {/* Mensajes en linea*/}
        <div className="row mb-6">
          <div className="col-12 text-center">
            {/* linea 1 */}
            <p className="text-2xl font-bold text-white mb-2">
              Facultad de Ciencias Exactas y Naturales - UBA
            </p>
            {/* linea 2 */}
            <p className="text-2xl font-bold text-white mb-2">
              Av. Int. Cantilo, C1428 Cdad. Autónoma de Buenos Aires
            </p>
            {/* linea 3*/}
            <p className="text-2xl font-bold text-black">
              Hecho con 💕 por ETEC-UBA
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-6">
          {markdownify(copyright, "p", "text-sm")}
        </div>
      </div>

      {/* icons */}
      <div className="absolute bottom-0 right-0 p-6">
        <Social source={social} className="social-icons" />
      </div>
    </footer>
  );
};

export default Footer;
