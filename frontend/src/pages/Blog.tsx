import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom';
import { SingleBlog } from '../components/SingleBlog';
import { Appbar } from '../components/Appbar';
import { Spiner } from '../components/Spiner';

export const Blog = () => {

  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || ""
  });

  if (loading || !blog) {
    return <div>
      <Appbar/>
      <div className='flex justify-center items-center'>
        <Spiner />
      </div>
    </div>
  }

  return <div>
    <Appbar />
    <div className='flex justify-center mt-40'>
      <SingleBlog blog={blog} />

    </div>
  </div>
}
