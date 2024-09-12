import BlogCard from "@/components/BlogCard";
import QuoteForm from "@/components/QuoteForm";
import TopPage from "@/components/TopPage";
const Blogs = () => {
  const blogs = [
    // Example blog data
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "name",
      imageSrc:"/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp",
      shortDiscription:"Short description of the blog post...",
      slug: "scope-of-medical-billing-in-pakistan", 
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "name",
      imageSrc:"/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp",
      shortDiscription:"Short description of the blog post...",
      slug: "scope-of-medical-billing-in-pakistan", 
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "name",
      imageSrc:"/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp",
      shortDiscription:"Short description of the blog post...",
      slug: "scope-of-medical-billing-in-pakistan", 
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "name",
      imageSrc:"/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp",
      shortDiscription:"Short description of the blog post...",
      slug: "scope-of-medical-billing-in-pakistan", 
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "name",
      imageSrc:"/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp",
      shortDiscription:"Short description of the blog post...",
      slug: "scope-of-medical-billing-in-pakistan", 
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "name",
      imageSrc:"/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp",
      shortDiscription:"Short description of the blog post...",
      slug: "scope-of-medical-billing-in-pakistan", 
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "name",
      imageSrc:"/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp",
      shortDiscription:"Short description of the blog post...",
      slug: "scope-of-medical-billing-in-pakistan", 
    },
    {
      title:
        "Scope of Medical Billing in Pakistan: Advantages and Disadvantages",
      category: "Uncategorized",
      date: "July 13, 2024",
      author: "name",
      imageSrc:"/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp",
      shortDiscription:"Short description of the blog post...",
      slug: "scope-of-medical-billing-in-pakistan", 
    },
    // Add more blog entries...
  ];

  return (
    <div>
      <TopPage cureentText={"Blogs"} />
      <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
        <div className="py-12">
          <h1 className="text-2xl font-bold border-solid border-b-4 border-custom-green w-max pb-1">Latest Blogs</h1>
        </div>
        <div className="flex flex-wrap">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
        {/* looking for quote form */}
        <QuoteForm/>
    </div>
  );
};

export default Blogs;
