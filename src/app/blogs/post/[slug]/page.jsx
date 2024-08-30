"use client";
import { useState } from "react";
import Link from "next/link";
import { FolderIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
export default function Page({ params }) {
  const slug = decodeURIComponent(params.slug);
  console.log(slug);

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

  return (
    <>
      <article>
        <header className="mb-8">
          <div className="relative isolate  pageTop ">
            <div className="px-6 lg:px-8">
              <div className="mx-auto py-24">
                <div
                  className="text-center animate-fadeInUp"
                  style={{ backdropFilter: "blur(3px)" }}
                >
                  <p className="mb-4 text-lg leading-6 text-custom-blue font-semibold flex justify-center  gap-2">
                    <FolderIcon className="w-6 h-6 text-custom-blue" /> category
                  </p>
                  <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-50 ">
                    {slug}
                  </h1>
                  <p className="mt-4 text-lg leading-6 text-custom-blue font-semibold flex justify-center gap-8">
                    <span> August 23, 2024</span>

                    <span> {"cureentText"}</span>
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
                <Image
                  src="/Assets/blog-images/Why-You-Choose-Zee-Medical-Billing-Services-in-Illinois.webp" // Replace with the correct path
                  alt="Description of the image"
                  layout="responsive"
                  width={1200}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="prose prose-lg py-4">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro officiis facilis maiores dolor, eligendi nisi earum cum
                  maxime explicabo doloremque nemo ipsum autem veritatis
                  consequuntur vero odio possimus, repellendus natus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus totam quas et in, obcaecati corrupti, ab vel fugit
                  enim culpa aperiam quos facilis reprehenderit facere. Cum quam
                  architecto ullam doloribus! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Delectus totam quas et in,
                  obcaecati corrupti, ab vel fugit enim culpa aperiam quos
                  facilis reprehenderit facere. Cum quam architecto ullam
                  doloribus!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quidem facilis tempore cumque. Optio, officia. A et
                  optio omnis quod sequi soluta voluptatem sunt, rerum iusto
                  nulla reprehenderit enim illum in magni quibusdam odit minus,
                  sit quasi non quaerat ut. Molestias nesciunt cum, impedit
                  temporibus, saepe tempore delectus iusto et nam nulla nobis!
                  Amet architecto earum deleniti consequatur voluptates
                  repellendus dolor esse perferendis! Ipsa tenetur cupiditate
                  exercitationem quibusdam magnam saepe nesciunt deleniti odio.
                  Sed amet odit quod nam assumenda rerum fugiat, ratione
                  possimus pariatur exercitationem voluptatem iure facere
                  obcaecati inventore placeat cum maiores repellat reiciendis!
                  Esse in, a molestias rerum quia consequatur aut libero,
                  suscipit eveniet quo autem voluptatum perspiciatis
                  consequuntur sequi fuga neque dolorum modi facere eos odit
                  alias porro ea beatae. Quod, maiores error, dolores temporibus
                  quaerat pariatur fugit ullam ipsa cumque atque eius non. Enim
                  in, qui aut vitae, maiores reiciendis facere sunt pariatur
                  iure quibusdam, laboriosam at. Error mollitia tempora eaque
                  quis unde, est, fugiat qui, sapiente quam repellendus et
                  suscipit harum quia debitis tempore perspiciatis corrupti
                  minus quos. Neque ab voluptatum id rerum tenetur, adipisci
                  impedit? Illum quos, distinctio officiis commodi rerum cum
                  ipsa, ipsum dolorem beatae voluptate harum dolor nobis eaque
                  recusandae? Rerum illum, enim pariatur debitis consequatur
                  explicabo distinctio deserunt omnis quo nam atque magni
                  delectus nesciunt iure tempore fugiat perspiciatis? In
                  necessitatibus, mollitia porro corrupti tenetur, reprehenderit
                  voluptatem ex rem placeat minus animi blanditiis quia
                  obcaecati eligendi ratione, dignissimos debitis perferendis
                  fugit. Maxime esse velit et ullam eum ad labore voluptatibus
                  est ipsam corrupti aut temporibus aperiam eaque similique
                  tempora, blanditiis unde nostrum, ipsum possimus voluptate
                  iusto adipisci? Earum dicta cupiditate voluptates ipsa culpa
                  nisi ad mollitia, necessitatibus, suscipit cum vitae?
                  Aspernatur, quia accusamus pariatur aliquam omnis quis sit
                  impedit numquam, velit distinctio laudantium. Quia voluptatum
                  veritatis accusamus odit labore dolorum praesentium quo eaque
                  dignissimos. Incidunt autem dolor laudantium esse sed adipisci
                  reprehenderit at iure similique, placeat quas quisquam libero
                  inventore eaque vitae unde. Vel ducimus facilis accusamus a
                  iusto eaque illo aperiam sit deserunt voluptatibus pariatur
                  molestiae, perspiciatis ipsa voluptate assumenda laborum.
                  Necessitatibus quam animi provident laboriosam quaerat
                  consequatur explicabo perspiciatis ratione? Non cupiditate vel
                  perspiciatis nemo ipsam nisi quae totam earum suscipit dicta,
                  reprehenderit ullam deleniti sunt maiores soluta officiis
                  fugiat consequatur ut praesentium cum nobis mollitia neque ea.
                  Suscipit, iusto quos deserunt, quod quia dolorem, magni unde
                  et praesentium cum sapiente in inventore eos ullam eveniet
                  repudiandae. At debitis veniam pariatur laborum itaque aliquid
                  quos incidunt? Facilis expedita debitis sapiente ipsa sunt, at
                  reprehenderit cupiditate, placeat suscipit in porro commodi
                  officiis dolor. Inventore dolore sapiente hic placeat
                  corporis! Ab obcaecati blanditiis harum odit delectus a ipsam
                  rerum architecto minus temporibus. Quibusdam consectetur
                  eligendi dolor soluta! Explicabo nobis ullam consequatur totam
                  rerum accusamus voluptatum provident error nihil nisi sunt
                  iure, beatae aspernatur ea incidunt magni dicta pariatur,
                  voluptate harum ipsum est exercitationem natus enim! Minus hic
                  dolorum aliquid aut, qui, corporis odio architecto distinctio
                  cumque ipsa ipsam. Ex ea et nesciunt officia voluptas in
                  placeat accusamus, similique perspiciatis? Repellat deserunt
                  expedita ex magni, qui unde voluptatem reiciendis labore vero
                  incidunt veritatis dolor iusto obcaecati quas excepturi
                  laboriosam, recusandae aliquid pariatur, assumenda nobis eaque
                  numquam molestias neque animi? Maxime amet dignissimos
                  laboriosam, ea sit eligendi optio commodi voluptates
                  consectetur excepturi qui cum magnam ut autem eaque nobis
                  voluptatum obcaecati? Temporibus nobis nisi iste. Quas impedit
                  recusandae, magnam quod assumenda placeat nihil nam incidunt
                  commodi, libero a sunt, repellendus nisi. Itaque temporibus
                  magni adipisci, repellendus animi blanditiis assumenda.
                  Impedit, voluptas? Vero eos excepturi voluptas molestias
                  veniam recusandae cumque. Odio molestias rerum, quasi dolorum
                  delectus perferendis sint quam porro ipsum hic magni
                  voluptate, necessitatibus aspernatur corporis ex architecto
                  libero. Animi assumenda numquam deserunt eum similique
                  repellat voluptate obcaecati error veniam exercitationem,
                  doloremque eius, qui commodi provident aliquam eos sed
                  explicabo excepturi dignissimos officia labore pariatur, nobis
                  dolores nisi? Eos voluptates voluptatem nam eveniet maxime
                  fuga in sunt illo consectetur magnam? Odio ad similique
                  necessitatibus. Quasi quis officia ex esse inventore ut hic
                  dolorum veniam dolore ipsam distinctio maxime obcaecati
                  repellat voluptatibus, dolores tempore reprehenderit voluptas
                  eveniet sed corporis, dolor sunt aut! Fugit, dignissimos
                  doloremque maiores rem ipsum quaerat blanditiis sequi
                  exercitationem deserunt delectus dolores reprehenderit,
                  nesciunt hic earum similique illo dolorem perferendis.
                  Reiciendis reprehenderit, facere aspernatur animi et tempora
                  temporibus excepturi nulla, non doloremque atque asperiores
                  nemo? Deleniti accusantium exercitationem officiis illo, eum
                  cupiditate atque, nisi repudiandae non molestias hic! Veniam
                  eveniet itaque ea autem maiores, ab quo debitis ut obcaecati
                  esse quia. Distinctio dolore quae nobis fugiat id sit
                  delectus! A illo aliquid cupiditate voluptate delectus culpa
                  consequuntur perferendis magni dolore eligendi. Nisi expedita,
                  ratione ex ipsum tempora dolorem culpa quis placeat repellat
                  itaque voluptates consequatur distinctio, veritatis
                  reprehenderit, doloremque quae ea iusto tenetur. Suscipit id
                  consequuntur harum corrupti placeat reiciendis temporibus
                  possimus sint cumque nostrum. Molestiae quibusdam possimus
                  modi eius eum temporibus. Aut blanditiis ut minus at enim
                  quisquam voluptatum exercitationem excepturi in nostrum
                  ducimus quidem reiciendis assumenda perspiciatis ex eaque
                  dicta, vitae nemo incidunt similique. Possimus tempore sint ea
                  animi doloribus dolore saepe blanditiis eaque ut ratione
                  debitis enim incidunt alias vel similique nam magnam dicta
                  harum aperiam dolores officia, quas in. Possimus fugiat
                  voluptatibus sit magnam iste labore ipsum necessitatibus
                  laborum impedit delectus, magni cupiditate incidunt optio
                  reiciendis vel. Vitae reprehenderit tempore dicta molestiae
                  culpa nesciunt nostrum quam repudiandae vero architecto
                  suscipit porro quae eius tenetur, ea sed exercitationem minus?
                  Blanditiis tempora sint vel eveniet quam autem, odio
                  consequatur aliquid laborum commodi, fugit molestiae suscipit
                  dolor reprehenderit repellat? Consequatur fugit quam tempore
                  reiciendis, voluptatum velit asperiores accusamus sed
                  expedita. Exercitationem, fugiat distinctio numquam reiciendis
                  quisquam vero voluptate natus qui corporis deleniti, error et
                  at earum iste, nobis ea. Vel qui explicabo facere sed! Modi
                  possimus reiciendis magni, explicabo, ea ut soluta libero ad
                  quas similique repellendus quasi maiores quos vero iusto nobis
                  aut. Deleniti asperiores nulla similique facere ducimus
                  assumenda ullam cum harum, obcaecati neque suscipit sapiente
                  id ut pariatur saepe ratione? Vero earum, inventore unde eius
                  rem eos! Eum minus totam, saepe ipsam amet aperiam laudantium
                  similique temporibus!
                </p>
              </div>
            </div>
              {/* comments section start*/}
      
      <div className="max-w-2xl mx-auto p-4">
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
                {/* <p className="text-gray-800">
                  <strong>Email:</strong> {comment.email}
                </p> */}
               
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
      </div>
    
      {/* comments section end*/}
          </div>
          <div className="w-full lg:w-3/12  p-2 sticky top-0">
            <div>
              <div className="bg-custom-blue p-8">
                <h2 className="text-gray-50 border-b-2 py-2 border-blue-500 text-2xl font-semibold">
                  Latest Posts
                </h2>
                {/* *****map the blogs***** */}
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
                </div>

                {/* latest blogs end */}
              </div>
            </div>
          </div>
        </section>
      </article>
    
    </>
  );
}
