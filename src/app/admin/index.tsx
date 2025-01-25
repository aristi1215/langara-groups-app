import { Redirect } from "expo-router";

const index = () => {
  return <Redirect href={"/admin/groups/index"} />;
};

export default index;
