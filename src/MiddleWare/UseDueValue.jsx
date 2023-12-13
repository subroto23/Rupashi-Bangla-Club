import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseDueValue = () => {
  const {
    isPending,
    data: dueViewsLoader = [],
    refetch,
  } = useQuery({
    queryKey: ["dueViews"],
    queryFn: async () => {
      const resData = await axios
        .get("https://rbc-server.vercel.app/due/details")
        .then((res) => {
          const ArraysData = res?.data?.payload;
          return ArraysData;
        });
      return resData;
    },
  });
  return [dueViewsLoader, isPending, refetch];
};

export default UseDueValue;
