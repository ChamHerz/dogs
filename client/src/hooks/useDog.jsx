import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDogDetail, cleanDetail } from '../redux/actions';

const useDog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dog = useSelector(state => state.dogDetail);

  useEffect(() => {
    dispatch(getDogDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
    // eslint-disable-next-line
  }, [id]);

  return dog;
};

export default useDog;
