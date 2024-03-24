import { useLoaderData } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const {title, description, published_at, cover_image, id, tags, body_html} = blog
    return (
        <div
        to={`/blogs/${id}`}
        className="max-w-full mx-auto p-2 group border border-opacity-30 focus:no-underline "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || placeholderImage}
        />
        <div className="flex flex-wrap py-6 gap-2 dark:border-gray-600">
          
          {
            tags.map((tag,idx) => (
                <a key={idx}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 opacity-90 rounded-sm hover:underline "
              >
                #{tag}
              </a>
            ))
          }
          
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>

         <div className="overflow-hidden">
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
         </div>
         
        </div>
      </div>
    );
};

export default Content;