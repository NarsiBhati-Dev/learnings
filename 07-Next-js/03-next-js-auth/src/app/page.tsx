import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen w-screen flex  flex-col justify-center items-center ">
      <div className="border p-8 rounded-md bg-white text-black ">
        <h1 className="font-extrabold mb-8 text-center text-2xl">
          Todo Application
        </h1>
        <Link
          href="/login"
          className=" border px-4 py-2 rounded-md m-2 font-extrabold cursor-pointer"
        >
          Login to Todo App{" "}
        </Link>
        <Link
          href="/signup"
          className=" border px-4 py-2 rounded-md m-2 font-extrabold cursor-pointer"
        >
          signup to Todo App{" "}
        </Link>
      </div>
    </section>
  );
}
