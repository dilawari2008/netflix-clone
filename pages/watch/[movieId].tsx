import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";


const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  console.log('data',data)

  return (
    <div className="h-screen w-screen bg-black">
      <nav
      className="
      fixed
      w-full
      p-4
      z-10
      flex
      flex-row
      items-center
      gap-8
      bg-black
      bg-opacity-70
      ">
        <FaArrowLeft className="text-white cursor-pointer" size={40} onClick={() => router.push('/')}/>
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>

      <video
      className="h-full w-full"
      src={data?.videoUrl}
      autoPlay
      controls
      ></video>

    </div>
  );
};

export default Watch;
