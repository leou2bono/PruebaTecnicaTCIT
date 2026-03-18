import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../postsSlice';

function PostList() {
  const dispatch = useDispatch();
  const { items, status, error, filterName } = useSelector((state) => state.posts);

  const filtered = items.filter((post) =>
    post.name.toLowerCase().includes(filterName.toLowerCase())
  );

  if (status === 'loading') return <p>Cargando...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <table border="1" cellPadding="8" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((post) => (
          <tr key={post.id}>
            <td>{post.name}</td>
            <td>{post.description}</td>
            <td>
              <button onClick={() => dispatch(deletePost(post.id))}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
        {filtered.length === 0 && (
          <tr>
            <td colSpan="3">No hay posts</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default PostList;
