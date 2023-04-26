import style from './landingPage.module.css'; // estilo module de react se importa como un objeto
import video from '../../video/video.mp4';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className={style.container}>
      <video muted autoPlay loop>
        {/* etiqueta video funciona usando import, variable y atributos muted y autoPlay(P mayúscula) */}
        <source src={video} type="video/mp4" />
      </video>
      <Link to="home" className={style.button}>
        HENRY DOGS
      </Link>
    </div>
  );
}

export default LandingPage;
