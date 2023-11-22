import axios from "axios";
import useCurrentUser from "./useCurrentuser";
import UseOneUser from "./useOneUser";

const useFollow = (userid: any) => {
  const {mutate:currentuserFetch}=useCurrentUser();
  const {mutate:FetchedSingleuser} = UseOneUser(userid);
  const addFollow = async ({
    userid,
    followid,
  }: {
    userid: string;
    followid: string;
  }) => {
    try {
      await axios.post("/api/users/follow", { userid, followid });
      currentuserFetch();
      FetchedSingleuser();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFollow = async ({
    followid,
    userid,
  }: {
    followid: string;
    userid: string;
  }) => {
    try {
      //console.log(userid)
      await axios.delete("/api/users/follow", {
        data: { userid, followid },
      });
      currentuserFetch();
      FetchedSingleuser();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addFollow,
    removeFollow,
  };
};

export default useFollow;
