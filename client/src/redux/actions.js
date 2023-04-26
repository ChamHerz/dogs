export const GET_DOGS_ALL = 'GET_DOGS_ALL';
export const GET_DOGS = 'GET_DOGS';
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const FILTER_ORIGIN = 'FILTER_ORIGIN';
export const FILTER_TEMPERAMENT = 'FILTER_TEMPERAMENT';
export const ORDER = 'ORDER';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const getDogsAll = () => {
  return function (dispach) {
    fetch('http://localhost:3001/dogs')
      .then(response => response.json())
      .then(dogsAll => {
        dispach({ type: GET_DOGS_ALL, payload: dogsAll });
      })
      .catch(() => {
        alert('No pudo cargarse las razas de perros. Intentelo nuevamente por favor.');
      });
  };
};

export const getDogs = name => {
  return function (dispach) {
    fetch(`http://localhost:3001/dogs?name=${name}`)
      .then(response => response.json())
      .then(dogs => {
        dispach({ type: GET_DOGS, payload: dogs });
      })
      .catch(() => {
        alert('No hay raza de perro que contengan ese nombre.');
      });
  };
};

export const getDogDetail = id => {
  return function (dispatch) {
    fetch(`http://localhost:3001/dogs/${id}`)
      .then(response => response.json())
      .then(dog => {
        dispatch({
          type: GET_DOG_DETAIL,
          payload: dog,
        });
      })
      .catch(() => {
        alert('No hay perros con ese ID');
      });
  };
};

export const filterOrigin = origin => {
  return function (dispatch) {
    fetch(`http://localhost:3001/dogs?origin=${origin}`)
      .then(response => response.json())
      .then(dogs => {
        if (!dogs.length) return alert('No existe ninguna raza creada.');
        dispatch({
          type: FILTER_ORIGIN,
          payload: dogs,
        });
      })
      .catch(() => {
        alert('No pudo cargarse el origen de los datos. Intentelo nuevamente por favor.');
      });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const filterTemperament = temperament => {
  return {
    type: FILTER_TEMPERAMENT,
    payload: temperament,
  };
};

export const order = order => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const setCurrentPage = currentPage => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};
