import style from './dog.module.css';

const Dog = ({ name, temperament, image, weight }) => {
  return (
    <div className={style.container}>
      <img src={image} alt="" className={style.img}></img>
      <div className={style.information}>
        <h2>{name}</h2>
        <div>{weight} Kg</div>
        <div>{temperament}</div>
      </div>
    </div>
  );
};

export default Dog;
