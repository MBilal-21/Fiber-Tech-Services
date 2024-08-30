"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic"; // Import dynamic to load ReactQuill only on client
import { useRouter } from "next/navigation";
// import moment from "moment";
// import Image from "next/image";

// Dynamically load ReactQuill with no SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const WritePost = () => {
  const router = useRouter();
  const state = router.query;
  const blah = useRef();
  const [shortDescription, setShortDescription] = useState(state?.shortDescription || "");
  const [title, setTitle] = useState(state?.title || "");
  const [content, setContent] = useState(state?.content || "");
  const [file, setFile] = useState(null);
  const [imageName, setImageName] = useState("");
  const [altText, setAltText] = useState("");
  const [cat, setCat] = useState(state?.cat || "");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      router.push("/admin");
    }
  }, [router]);

  const readURL = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        blah.current.src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("shortDescription", shortDescription);
    formData.append("content", content);
    formData.append("category", cat || "UNCategories");
    if (file) {
        console.log(file.name);
        
      formData.append("file", file);
      formData.append("imageName", imageName);
      formData.append("altText", altText);
    }
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

    try {
      // Replace with your API endpoint
      const response = await fetch("https://example.com/api/posts", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle success (e.g., redirect to another page or show a success message)
        console.log("Post submitted successfully!");
        router.push("/success"); // Redirect to a success page
      } else {
        // Handle error
        console.error("Failed to submit post");
      }
    } catch (error) {
      console.error("An error occurred while submitting the post", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto  max-w-7xl  px-6  lg:px-8 flex flex-wrap py-16">
        <div className="w-full md:w-8/12 p-2 flex flex-col">
          <input
            type="text"
            className="mb-4"
            value={title}
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="mb-4"
            name="shortDescription"
            cols="20"
            rows="5"
            value={shortDescription}
            placeholder="short Description"
            required
            onChange={(e) => setShortDescription(e.target.value)}
          ></textarea>
          <div >
            <ReactQuill
              className="mb-4 h-screen w-full"
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </div>
        </div>
        <div className="w-full md:w-4/12 p-4">
          <div className="border-2 border-gray-500 p-4">
            {file && (
              <img ref={blah} src="#" alt={altText} width={100} height={100} />
            )}
            <div className="flex flex-col gap-2">
              <h1>Publish</h1>
              <input
                type="file"
                id="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  readURL(e.target);
                }}
              />
              <input
                type="text"
                className="mb-2"
                value={imageName}
                placeholder="Image Name"
                onChange={(e) => setImageName(e.target.value)}
              />
              <input
                type="text"
                className="mb-2"
                value={altText}
                placeholder="Alt Text"
                onChange={(e) => setAltText(e.target.value)}
              />
              <label className="file" htmlFor="file">
                Upload Image
              </label>

              <div className="buttons">
                <button
                  className="theme-btn bg-custom-blue text-gray-900 after:bg-custom-green hover:text-white"
                  type="submit"
                >
                  {state?.id ? "Update" : "Publish"}
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-lg font-bold py-2">Category</h1>
              {["Art", "Science", "Technology", "Design","UNCategories"].map((category) => (
                <div key={category} className="flex gap-2 my-2 items-center">
                  <input
                    type="radio"
                    checked={cat === category}
                    name="cat"
                    value={category}
                    id={category}
                   
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default WritePost;
