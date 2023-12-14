import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseAllNews = () => {
  const {
    data: allNews = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["allNewsData"],
    queryFn: async () => {
      const resData = await axios
        .get(`https://rbc-server.vercel.app/api/news/view`)
        .then((res) => {
          const ArraysData = res?.data?.payload?.allNews;
          console.log(ArraysData);
          return ArraysData;
        });
      return resData;
    },
  });
  refetch();
  return [allNews, isPending, refetch];
};

export default UseAllNews;
