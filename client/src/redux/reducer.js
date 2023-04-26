import {
  GET_DOGS_ALL,
  GET_DOGS,
  GET_DOG_DETAIL,
  CLEAN_DETAIL,
  FILTER_ORIGIN,
  FILTER_TEMPERAMENT,
  ORDER,
  SET_CURRENT_PAGE,
} from './actions';

const initialState = {
  dogsAll: [],
  dogs: [],
  dogDetail: {},
  currentPage: 1,
};

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Aca va tu codigo;

    case GET_DOGS_ALL: {
      return {
        ...state,
        dogsAll: action.payload,
        dogs: action.payload,
      };
    }

    case GET_DOGS: {
      return {
        ...state,
        dogs: action.payload,
      };
    }

    case GET_DOG_DETAIL: {
      return {
        ...state,
        dogDetail: action.payload,
      };
    }

    case CLEAN_DETAIL: {
      return {
        ...state,
        dogDetail: {},
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case FILTER_ORIGIN: {
      return {
        ...state,
        dogs: action.payload,
      };
    }

    case FILTER_TEMPERAMENT: {
      return {
        ...state,
        dogs:
          action.payload === 'all'
            ? state.dogsAll
            : state.dogsAll.filter(dogs => {
                // console.log(dogs.temperament?.toUpperCase().includes(action.payload.toUpperCase()));
                return dogs.temperament?.toUpperCase().includes(action.payload.toUpperCase());
              }),
      };
    }

    case ORDER: {
      // sort() modifica el array original
      // split convierte string a array, trim elimina espacios al inicio y final, ~~ conviert de string a nro.
      return {
        ...state,
        dogs:
          action.payload === 'AaZ'
            ? [...state.dogs].sort((dog1, dog2) => {
                if (dog1.name.toLowerCase() < dog2.name.toLowerCase()) return -1;
                if (dog1.name.toLowerCase() > dog2.name.toLowerCase()) return 1;
                return 0;
              })
            : action.payload === 'ZaA'
            ? [...state.dogs]
                .sort((dog1, dog2) => {
                  if (dog1.name.toLowerCase() < dog2.name.toLowerCase()) return -1;
                  if (dog1.name.toLowerCase() > dog2.name.toLowerCase()) return 1;
                  return 0;
                })
                .reverse()
            : action.payload === 'min-a+'
            ? [...state.dogs].sort(
                (dog1, dog2) =>
                  ~~dog1.weight.split('-')[0].trim() - ~~dog2.weight.split('-')[0].trim()
              )
            : action.payload === 'min+a-'
            ? [...state.dogs]
                .sort(
                  (dog1, dog2) =>
                    ~~dog1.weight.split('-')[0].trim() - ~~dog2.weight.split('-')[0].trim()
                )
                .reverse()
            : action.payload === 'max-a+'
            ? [...state.dogs].sort((dog1, dog2) => {
                const dog1found = dog1.weight.split('-')[1] || dog1.weight.split('-')[0];
                const dog2found = dog2.weight.split('-')[1] || dog2.weight.split('-')[0];
                return ~~dog1found.trim() - ~~dog2found.trim();
              })
            : action.payload === 'max+a-'
            ? [...state.dogs]
                .sort((dog1, dog2) => {
                  const dog1found = dog1.weight.split('-')[1] || dog1.weight.split('-')[0];
                  const dog2found = dog2.weight.split('-')[1] || dog2.weight.split('-')[0];
                  return ~~dog1found.trim() - ~~dog2found.trim();
                })
                .reverse()
            : state.dogsAll,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
