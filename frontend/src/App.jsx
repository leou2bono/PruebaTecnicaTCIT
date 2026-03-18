import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Solo se llama una vez al cargar la vista
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>Posts</h1>
      <PostFilter />
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;

