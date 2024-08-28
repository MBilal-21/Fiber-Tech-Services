export default function Page({ params }) {
  const slug = decodeURIComponent(params.slug);

  return <div>My Post: {slug}</div>;
}
