'use client';
import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import QuoteForm from "@/components/QuoteForm";
import TopPage from "@/components/TopPage";
import Loading from "@/components/Loading";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/blogs/list`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const blogsData = await response.json();
        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means this will run once when the component mounts

  return (
    <div>
      <TopPage cureentText={"Blogs"} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-2xl font-bold border-solid border-b-4 border-custom-green w-max pb-1">Latest Blogs</h1>
        </div>
        <div className="flex flex-wrap">
          {loading ? (
            <div ><Loading/></div>
          ) : blogs.length !== 0 ? (
            blogs.map((blog, index) => <BlogCard key={index} {...blog} />)
          ) : (
            <div>Blogs will be added soon. Stay in touch!</div>
          )}
        </div>
      </div>
      {/* looking for quote form */}
      <QuoteForm />
    </div>
  );
};

export default Blogs;
