import LinkCo from "../components/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <div className="bg-white p-8 rounded-md mt-8">
        <h1 className="font-extrabold w-full px-4 py-2 text-center mb-3">
          Routing
        </h1>
        <LinkCo link="/signup" title="signup" />
        <LinkCo link="/signin" title="signin" />
        <LinkCo link="/user" title="user" />
      </div>
    </div>
  );
}
