import { useDispatch, useSelector } from 'react-redux';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { setPage } from '../store/characterSlice';
import { AppDispatch, RootState } from '../store/store';

const Paginator = () => {
  const page = useSelector((state: RootState) => state.characters.page);
  const info = useSelector((state: RootState) => state.characters.info);
  const dispatch = useDispatch<AppDispatch>(); 
  return (
    <ResponsivePagination
      current={Number(page)}
      total={info.pages}
      onPageChange={(page: number) => dispatch(setPage(page.toString()))}
    />
  )
}

export default Paginator