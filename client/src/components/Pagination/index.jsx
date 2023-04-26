import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';
import { Link } from 'react-router-dom';
import Dog from '../Dog';
import style from './pagination.module.css';

const Pagination = ({ dogs }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage); // seteo el nro de la pag actual igual a state redux.

  const [recordsPerPage] = useState(8); // seteo cantidad de elementos por página.
  const pageNumbers = Math.ceil(dogs.length / recordsPerPage); // seteo nro de cantidad de páginas del paginado. ceil devuelve el entero mayor o igual más próximo.
  const arrayPageNumbers = [...Array(pageNumbers)].map((_, index) => index + 1); // creo un array con la cantidad de páginas del paginado y cambio sus indices para que comienze en 1.
  const indexOfLastRecord = currentPage * recordsPerPage; // seteo el indice del último elemento de la página actual.
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; // seteo el indice del primer elemento de la página actual.
  const currentRecords = dogs.slice(indexOfFirstRecord, indexOfLastRecord); // array de dogs de la página actual. slice devuelve una copia de una parte del array.
  if (!currentRecords.length) dispatch(setCurrentPage(1)); // si dogs.slice devuelve array vacio seteo currentPage
  const nextPage = () => {
    if (currentPage !== pageNumbers) dispatch(setCurrentPage(currentPage + 1)); // si no estoy en la ultima página sumo 1 a currentPage con una action de redux.
  };
  const prevPage = () => {
    if (currentPage !== 1) dispatch(setCurrentPage(currentPage - 1)); // si no estoy en la primer página resto 1 a currentPage con una action de redux..
  };
  return (
    <div className={style.pagination}>
      <nav className={style.nav}>
        <button className={style.pageItem} onClick={prevPage}>
          &#11207;
        </button>
        {arrayPageNumbers.map(pageNumber => {
          return (
            <button
              key={pageNumber}
              className={`${style.pageItem} ${currentPage === pageNumber ? style.active : ''}`}
              onClick={() => dispatch(setCurrentPage(pageNumber))}>
              {pageNumber}
            </button>
          );
        })}
        <button className={style.pageItem} onClick={nextPage}>
          &#11208;
        </button>
      </nav>

      <div className={style.cards}>
        {currentRecords.map((dog, id) => (
          <Link key={dog.id} to={`/dog/${dog.id}`}>
            <Dog
              name={dog.name}
              temperament={dog.temperament}
              weight={dog.weight}
              image={dog.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
