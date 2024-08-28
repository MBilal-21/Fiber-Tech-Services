// components/BlogCard.js
'use client';
import Image from 'next/image';
import { FolderIcon } from "@heroicons/react/24/outline";


const BlogCard = ({ title, category, date, author, shortDiscription }) => {
    return (
        <div className="p-4 md:w-1/3">
            <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className='lg:h-48 md:h-36 overflow-hidden'>
                <Image
                    className="group-hover:scale-110 group-hover:brightness-50 transition-all h-full w-full object-cover object-center"
                    src="/Assets/fiber-tech-service-about1.jpg"
                    width={720}
                    height={400}
                    alt="Blog Image"
                />
                </div>
                <div className="p-6">
                    <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        <FolderIcon className="h-4 w-4 text-gray-500 mr-2" />
                        {category.toUpperCase()}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3">{shortDiscription}</p>
                    <div className="flex items-center flex-wrap">
                        <a href={`/blogs/post/${title}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</a>
                        <span className="text-gray-400 mr-auto inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r border-gray-200">
                            Posted by {author}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
