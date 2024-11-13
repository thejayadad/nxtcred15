
import {FcGoogle} from "react-icons/fc"

export default function Home() {
  return (
    <div>
      <div className=" mx-auto text-center p-3">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Book Your Training Sessions with Ease
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto">
          Discover expert trainers, book personalized sessions, and level up your skills, all in one place.
        </p>
        <button className="flex items-center max-w-screen-sm mx-auto space-x-5 justify-center p-4 border w-full rounded-md">
          <FcGoogle className="h-5 w-5  rounded-md" />
          <span className="text-neutral">Sign Up with Google</span>
        </button>
      </div>

    </div>
  );
}
