import BlogCard from "@/components/BlogCard";
import TopPage from "@/components/TopPage";
const Blogs = () => {
  const blogs = [
    // Example blog data
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "shams",
      shortDiscription:"Short description of the blog post...",
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "shams",
      shortDiscription:"Short description of the blog post...",
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "shams",
      shortDiscription:"Short description of the blog post...",
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "shams",
      shortDiscription:"Short description of the blog post...",
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "shams",
      shortDiscription:"Short description of the blog post...",
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "shams",
      shortDiscription:"Short description of the blog post...",
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "shams",
      shortDiscription:"Short description of the blog post...",
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "shams",
      shortDiscription:"Short description of the blog post...",
    },
    // Add more blog entries...
  ];

  return (
    <div>
      <TopPage cureentText={"Blogs"} />
      <div className="md:container md:mx-auto px-4">
        <div className="py-12">
          <h1 className="text-2xl font-bold border-solid border-b-4 border-custom-green w-max pb-1">Latest Blogs</h1>
        </div>
        <div className="flex flex-wrap">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
