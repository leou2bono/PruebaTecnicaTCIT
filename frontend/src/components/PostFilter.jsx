import { useDispatch, useSelector } from 'react-redux';
import { setFilterName } from '../postsSlice';

function PostFilter() {
  const dispatch = useDispatch();
  const filterName = useSelector((state) => state.posts.filterName);

  const handleChange = (e) => {
    dispatch(setFilterName(e.target.value));
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        Filtro de Nombre:{' '}
        <input
          type="text"
          value={filterName}
          onChange={handleChange}
          placeholder="Buscar por nombre"
        />
      </label>
    </div>
  );
}

export default PostFilter;
