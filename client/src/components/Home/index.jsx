import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDogsAll, getDogs, filterOrigin, filterTemperament, order } from '../../redux/actions';
import Pagination from '../Pagination';
import Spinner from '../Loader';
import style from './home.module.css';

function Home() {
  const dispatch = useDispatch();
  const dogsAll = useSelector(state => state.dogsAll);
  const dogs = useSelector(state => state.dogs);
  const [search, setSearch] = useState('');
  const [temperaments, setTemperaments] = useState([]);

  useEffect(() => {
    if (!dogsAll.length) dispatch(getDogsAll());
    // eslint-disable-next-line
  }, []);

  if (!temperaments.length)
    fetch('http://localhost:3001/temperaments')
      .then(response => response.json())
      .then(response => setTemperaments(response))
      .catch(() => {
        alert('No pudo cargarse los temperamentos. Intentelo nuevamente por favor.');
      });

  const onSearch = name => {
    if (!name) return alert('Ingrese un raza de perro por favor.');
    dispatch(getDogs(search));
  };

  const handlerSearch = event => setSearch(event.target.value);

  return (
    <section className={style.section}>
      <div className={style.menu}>
        <div className={style.searchBar}>
          <input
            className={style.searchInput}
            type="search"
            value={search}
            onChange={e => handlerSearch(e)}
            onFocus={() => setSearch('')}
          />
          <button className={style.searchButton} onClick={() => onSearch(search)}>
            BUSCAR
          </button>
        </div>

        <div className={style.filters}>
          <div>
            <label className={style.label}>Origen:</label>
            <select
              name="origin"
              className={style.select}
              onChange={e => dispatch(filterOrigin(e.target.value))}>
              <option value="all">Todos</option>
              <option value="api">comunidad</option>
              <option value="db">creados</option>
            </select>
          </div>
          <div>
            <label className={style.label}>Temperamento:</label>
            <select
              name="temperament"
              className={style.select}
              onChange={e => dispatch(filterTemperament(e.target.value))}>
              <option value="all">Todos</option>;
              {temperaments.map((temperament, index) => (
                <option key={index} value={temperament.name}>
                  {temperament.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={style.label}>Orden:</label>
            <select
              name="order"
              className={style.select}
              onChange={e => dispatch(order(e.target.value))}>
              <option value="all">Todos</option>
              <option value="AaZ">raza: de la A a la Z</option>
              <option value="ZaA">raza: de la Z a la A</option>
              <option value="min-a+">peso mín: de (-) a (+)</option>
              <option value="min+a-">peso mín: de (+) a (-)</option>
              <option value="max-a+">peso máx: de (-) a (+)</option>
              <option value="max+a-">peso máx: de (+) a (-)</option>
            </select>
          </div>
        </div>
      </div>

      {dogs.length ? (
        <Pagination dogs={dogs} />
      ) : (
        <div className={style.loader}>
          <Spinner />
        </div>
      )}
    </section>
  );
}

export default Home;
