import React, { useEffect } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import blog_item_1 from '../../images/blog_items1.webp'
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Slice/BlogsSlice";

const Blog = () => {
  let dispatch = useDispatch();

  const Blogs = useSelector((state) => state.blogs.items);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);


  return (
    <div className="blog">
      <div className="blog_container">
        {Blogs &&
          Blogs.map((item)=>(
          <section  className="blog_first_section">
          <div  className="blog_first_section_left blog_sec">
            <div  className="blog_first_section_left_img">
              <Link>
                <img src={item.blogImage} alt="blog1" />
              </Link>
            </div>
            <div className="blog_first_section_left_body">
              <Link>
                <h1>{item.title}</h1>
              </Link>
              <Link>
              <p>
                  Daha cox
                  <GoArrowRight />
                  </p>
                  </Link>
            </div>
          </div>
          <div  className="blog_first_section_right blog_sec">
          <div className="blog_first_section_right_item">
          <div className="blog_first_section_right_item_img">
            <Link>
              <img src={item.blogImage} alt="blog1" />
            </Link>
          </div>
          <div className="blog_first_section_right_item_body">
          <Link><h2>{item.title}</h2></Link>
          <Link>
          <p>
          Daha cox <GoArrowRight />
         </p>
          </Link>
          </div>
        </div>
        <div className="blog_first_section_right_item">
        <div className="blog_first_section_right_item_img">
          <Link>
            <img src={item.blogImage} alt="blog1" />
          </Link>
        </div>
        <div className="blog_first_section_right_item_body">
        <Link><h2>{item.title}</h2></Link>
        <Link>
        <p>
        Daha cox <GoArrowRight />
       </p>
        </Link>
        </div>
      </div>
      <div className="blog_first_section_right_item">
      <div className="blog_first_section_right_item_img">
        <Link>
          <img src={item.blogImage} alt="blog1" />
        </Link>
      </div>
      <div className="blog_first_section_right_item_body">
      <Link><h2>{item.title}</h2></Link>
      <Link>
      <p>
      Daha cox <GoArrowRight />
     </p>
      </Link>
      </div>
    </div>
          </div>
        </section>

        // 
        ))}
        <section className="blog_cards">
            <div className="blogs_container">
              <div className="blogs_item">
               <div className="blog_item_img">
               <Link><img src={blog_item_1} alt="img"/></Link>
               </div>
               <div className="blog_item_body">
               <h2><Link>Güzgü nağılı dinlə - Azərbaycan dilində uşaq kanalı @Ulduzluyol</Link></h2>
               <p>Başlıq: Güzgü nağılı | Zahid Xəlil | Nağıllar və Hekayələr Müəllif: Zahid Xəlil</p>
               </div>
              </div>
              <div className="blogs_item">
              <div className="blog_item_img">
              <Link><img src={blog_item_1} alt="img"/></Link>
              </div>
              <div className="blog_item_body">
              <h2><Link>Güzgü nağılı dinlə - Azərbaycan dilində uşaq kanalı @Ulduzluyol</Link></h2>
              <p>Başlıq: Güzgü nağılı | Zahid Xəlil | Nağıllar və Hekayələr Müəllif: Zahid Xəlil</p>
              </div>
             </div>
             <div className="blogs_item">
             <div className="blog_item_img">
             <Link><img src={blog_item_1} alt="blog_item_1"/></Link>
             </div>
             <div className="blog_item_body">
             <h2><Link>Güzgü nağılı dinlə - Azərbaycan dilində uşaq kanalı @Ulduzluyol</Link></h2>
             <p>Başlıq: Güzgü nağılı | Zahid Xəlil | Nağıllar və Hekayələr Müəllif: Zahid Xəlil</p>
             </div>
            </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
