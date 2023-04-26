import useDog from '../../hooks/useDog';
import Spinner from '../Loader';
import style from './detail.module.css';

const Detail = () => {
  const dog = useDog();

  console.log(dog);

  return dog?.name ? (
    <section className={style.section}>
      <div className={style.data}>
        <div className={style.title}>
          <h1>{dog.name}</h1>
        </div>
        <div className={style.detail}>
          <h2>CODE: {dog.id}</h2>
          <h2>HEIGHT: {dog.height} cm</h2>
          <h2>WEIGHT: {dog.weight} kg</h2>
          <h2>LIFE SPAN: {dog.life_span}</h2>
          <h2>TEMPERAMENTS: {dog.temperament}</h2>
        </div>
      </div>
      <img src={dog.image} alt="" className={style.img} />
    </section>
  ) : (
    <section className={style.loader}>
      <Spinner />
    </section>
  );
};

export default Detail;
