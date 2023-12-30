
import * as Constant from "./constants";






export const PostsData1 = async () => {

    const response = await fetch(`${Constant.SERVICE_URL}/api/post`);
    const json     = await response.json();
   
    return json;
  };