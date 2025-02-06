import LinkCo from "../components/link";

export default function Home() {
  return (
    <section className="h-screen w-full bg-black flex justify-center items-center">
      <div className="bg-white p-8 rounded-md mt-8">
        <h1 className="font-extrabold w-full px-4 py-2 text-center mb-3">
          Routing
        </h1>
        <LinkCo link="/signup" title="signup" />
        <LinkCo link="/signin" title="signin" />
        <LinkCo link="/user" title="user" />
        <LinkCo link="/blog/1" title="blog-1" />
        <LinkCo link="/blog/2" title="blog-2" />
        <LinkCo link="/blog/3" title="blog-3" />
        <LinkCo link="/blog/4" title="blog-4" />
        <LinkCo link="/blog/5" title="blog-5" />
      </div>
    </section>
  );
}
