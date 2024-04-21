import React, { useEffect } from 'react';
import './BlogDetail.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogsCard } from '../../Slice/BlogsCardSlice';
import { useParams } from 'react-router-dom'; // useParams ekledim

const BlogDetail = () => {
    const { id } = useParams(); // Parametreleri al

    const dispatch = useDispatch();
    const BlogsCard = useSelector((state) => state.blogsCard.items);

    useEffect(() => {
        dispatch(fetchBlogsCard());
    }, [dispatch]);

    // Tıklanan blogun verisini al
    const selectedBlog = BlogsCard.find(blog => blog.id === id);

    return (
   <div className='blogDetail'>
   {selectedBlog && (
       <div className='detail'  key={selectedBlog.id}>
       <div className='back'></div>
          <div className='detailTop'>
          <div className='star'><img src={selectedBlog.author} alt='img'/><p>{selectedBlog.authorName}</p></div>
          <ul style={{display:"flex",gap:"30px",color:"gray"}} className='baxis'>
           <li>6 Baxis</li>
           <li>21.04.2024</li>
           <li>1 deq oxuma</li>
          </ul>
          <h1>{selectedBlog.title}</h1>
          <p>{selectedBlog.text}</p>
          </div>
          <div className='detailBody'>
          <img src={selectedBlog.image} alt='img'/>
          </div>
          <div className='detailBottom'>
          <p>{selectedBlog.text}</p>
          </div>
       </div>
   )}

   </div>
    )
}

export default BlogDetail;
