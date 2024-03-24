import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'



const BlogCard = ({blog}) => {
   
    const {title, description, published_at, cover_image, id} = blog


   
    return (
        <Link
        to={`/blogs/${id}`}
        className="max-w-sm mx-auto group border-2 border-primary hover:border-secondary hover:shadow-xl transform transition duration-500 hover:scale-105 rounded-md border-opacity-30  hover:no-underline focus:no-underline "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString}</span>
          <p>
            {description}
          </p>
        </div>
      </Link>
    );
};

export default BlogCard;