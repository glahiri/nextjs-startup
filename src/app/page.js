import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-dvh min-w-full bg-gray-300 flex items-center justify-center">
      <div className="h-90 w-150 bg-white rounded-lg shadow-lg grid justify-center">
        <h1 className="text-4xl text-purple-800 my-5 mx-auto">Play & Learn</h1>
        <p className="my-2 mx-auto w-md">
          Laborum sit sunt ex ullamco. Nulla labore id magna minim commodo sint
          est tempor exercitation fugiat. Elit ea ut excepteur aute enim
          adipisicing nulla sit irure culpa qui cupidatat proident. Et commodo
          minim tempor in. Aliqua ea minim non eiusmod laborum sit reprehenderit
          mollit consequat elit culpa minim fugiat sunt. Qui veniam velit dolore
          aliquip.
        </p>
        <Link href="/home">
          <button className="mt-6 mb-15 mx-auto px-5 py-3 bg-purple-800 text-white rounded hover:cursor-pointer flex gap-6 justify-center items-center">
            <span>Get Started</span>
            <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
}
