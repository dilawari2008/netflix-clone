import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useFavorites = () => {
  const { mutate, data, error, isLoading } = useSWR("api/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useFavorites;
