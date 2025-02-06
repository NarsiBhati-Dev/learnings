import { getServerSession } from "next-auth";
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession();

  return <div>{JSON.stringify(session)}</div>;
}

// return (
//   <SessionProvider>
//     <RealHome />
//   </SessionProvider>
// );

// function RealHome() {
//   const session = useSession();
//   return (
//     <section className="w-screen h-screen flex justify-center items-start">
//       <nav className="bg-white px-6 py-3 shadow-lg max-w-7xl w-full m-auto mt-4 rounded-md flex justify-end">
//         <div>
//           {session.status == "authenticated" && (
//             <button
//               className="bg-blue-600 px-6 py-3 rounded-md hover:bg-gray-700"
//               onClick={() => {
//                 signOut();
//               }}
//             >
//               Sign Out
//             </button>
//           )}
//           {session.status == "unauthenticated" && (
//             <button
//               className="bg-blue-600 px-6 py-3 rounded-md hover:bg-gray-700"
//               onClick={() => {
//                 signIn();
//               }}
//             >
//               Sign in
//             </button>
//           )}
//         </div>
//       </nav>
//     </section>
//   );
// }
