"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FolderIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Loading from "@/components/Loading";

function BlogContent({ content }) {
  return (
    <div className="prose prose-lg"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}


export default function Page({ params }) {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latestBlogs, setLatestBlogs] = useState(null);
  const [loading2, setLoading2] = useState(true);
  const slug = decodeURIComponent(params.slug);
  console.log(slug);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/blogs/blog-details/${slug}`);
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/service/details/4`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const blogsData = await response.json();
        console.log( blogsData);
        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    const fetchLatestBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/blogs/latest`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const blogsData = await response.json();
        console.log("latest Blogs",blogsData);
        
        setLatestBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading2(false);
      }
    };

    fetchBlogs();
    fetchLatestBlogs();
  }, [slug]);



 

  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, formData]);
    setFormData({ name: "", email: "", website: "", comment: "" });
  };

  // if (loading) return <Loading />;
  // if (!blogs) return <div>No blog found</div>;
  return (
    <>
     {loading? <Loading className={"h-screen"}/>: <article>
        <header className="mb-8">
          <div className="relative isolate  pageTop ">
            <div className="px-6 lg:px-8">
              <div className="mx-auto py-24">
                <div
                  className="text-center animate-fadeInUp"
                  style={{ backdropFilter: "blur(3px)" }}
                >
                  <p className="mb-4 text-lg leading-6 text-custom-blue font-semibold flex justify-center  gap-2">
                    <FolderIcon className="w-6 h-6 text-custom-blue" /> {blogs?.category||"UNCATEGORIES"}
                  </p>
                  <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-50 ">
                    {/* {slug} */}
                    {blogs?.title || "No Title"}
                  </h1>
                  <p className="mt-4 text-lg leading-6 text-custom-blue font-semibold flex justify-center gap-8">
                    <span> {new Date(blogs?.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    {/* <span> August 23, 2024</span> */}

                    {/* <span> {"cureentText"}</span> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="flex flex-wrap mx-auto  max-w-7xl  px-6  lg:px-8 relative">
          <div className="w-full lg:w-9/12 p-2">
            <div className=" p-4">
              <div className="relative w-full max-w-lg mx-auto">
                <img
                  src={`${process.env.NEXT_PUBLIC_BLOG_IMAGE_PATH}/${blogs?.image}`}
                  // src="/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp" // Replace with the correct path
                  alt={blogs?.title}
                  layout="responsive"
                  width={1200}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="prose py-4">
                {/* blog content */}
                {/* {blogs?.details || "No details available"} */}
               
                 <BlogContent content={ blogs?.details || "No Content Found Something Went Wrong. Please Refresh The Page Or <a href='/contact' className='text-custom-blue'>Contact US!</a>"}/>
                
              </div>
            </div>
              {/* comments section start*/}
      
      {/* <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Leave a Reply</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-gray-700"
            >
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Post Comment
            </button>
          </div>
        </form>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                <p className="text-gray-800">
                <strong>Name:</strong> {comment.name}
                </p>
               
               
                <p className="text-gray-800">
                  <strong>Comment:</strong> {comment.comment}
                </p>
                {comment.website && (
                  <p className="text-gray-800">
                    <strong>Website:</strong>{" "}
                    <a
                      href={comment.website}
                      className="text-blue-600 hover:underline"
                    >
                      {comment.website}
                    </a>
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div> */}
    
      {/* comments section end*/}
          </div>
          <div className="w-full lg:w-3/12  pl-2 pb-4 sticky top-0">
            <div>
              <div className="bg-custom-blue py-8 px-2">
                <h2 className="text-gray-50 border-b-2 py-2 border-blue-500 text-2xl font-semibold">
                  Latest Posts
                </h2>
                {/* *****map the blogs***** */}
                {loading2 ? <div>Loading...</div>:
              latestBlogs?.map((e,i)=>   <div key={i}
                  className="gap-2  my-2 px-2 items-end"
                  style={{ display: "grid", gridTemplateColumns: "5rem 1fr" }}
                >
                  <div className="w-[5rem] h-[5rem]  rounded-full overflow-hidden">
                    <img
                      // src="/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp"
                      src={`${process.env.NEXT_PUBLIC_BLOG_IMAGE_PATH}/${e?.image}`}
                      width={1200}
                      height={600}
                      alt={e?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link href={`/blogs/post/${e.id}`} className="w-full pl-2">
                      {" "}
                      <h3 className="text-white text-md font-medium py-2 hover:text-black leading-4">
                       {e?.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-300 font-medium ">
                    {new Date(e?.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </div>)}
                {/* <div
                  className="gap-2 place-items-center my-2"
                  style={{ display: "grid", gridTemplateColumns: "5rem 1fr" }}
                >
                  <div className="w-[5rem] h-[5rem]  rounded-full overflow-hidden">
                    <Image
                      src="/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp"
                      width={1200}
                      height={600}
                      alt="why choose us"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link href={"/blogs"} className="w-full pl-2">
                      {" "}
                      <h3 className="text-white text-md font-medium py-2 hover:text-custom-green leading-4">
                        Scope of Medical Billing in Pakistan: Advantages and
                        Disadvantages
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-300 font-medium ">
                      August 12, 2024
                    </p>
                  </div>
                </div>
                <div
                  className="gap-2 place-items-center my-2"
                  style={{ display: "grid", gridTemplateColumns: "5rem 1fr" }}
                >
                  <div className="w-[5rem] h-[5rem]  rounded-full overflow-hidden">
                    <Image
                      src="/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp"
                      width={1200}
                      height={600}
                      alt="why choose us"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link href={"/blogs"} className="w-full pl-2">
                      {" "}
                      <h3 className="text-white text-md font-medium py-2 hover:text-custom-green leading-4">
                        Scope of Medical Billing in Pakistan: Advantages and
                        Disadvantages
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-300 font-medium ">
                      August 12, 2024
                    </p>
                  </div>
                </div>
                <div
                  className="gap-2 place-items-center my-2"
                  style={{ display: "grid", gridTemplateColumns: "5rem 1fr" }}
                >
                  <div className="w-[5rem] h-[5rem]  rounded-full overflow-hidden">
                    <Image
                      src="/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp"
                      width={1200}
                      height={600}
                      alt="why choose us"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link href={"/blogs"} className="w-full pl-2">
                      {" "}
                      <h3 className="text-white text-md font-medium py-2 hover:text-custom-green leading-4">
                        Scope of Medical Billing in Pakistan: Advantages and
                        Disadvantages
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-300 font-medium ">
                      August 12, 2024
                    </p>
                  </div>
                </div> */}

                {/* latest blogs end */}
              </div>
            </div>
          </div>
        </section>
      </article>}
    
    </>
  );
}
