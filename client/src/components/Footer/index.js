import style from './footer.module.css';
import email from '../../img/email.svg';
import github from '../../img/github.svg';
import linkedin from '../../img/linkedin.svg';

const Footer = props => {
  return (
    <footer className={style.footer}>
      <p>&copy; 2023 HENRY DOGS by Ulises Nahuel Dante Chambi</p>
      <div className={style.imgContainer}>
        <a
          href="https://www.linkedin.com/in/ulises-chambi/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" className={style.img} />
        </a>
        <a href="https://github.com/uliseschambi" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className={style.img} />
        </a>
        <a href="mailto:uliseschambi@gmail.com">
          <img src={email} alt="email" className={style.img} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
