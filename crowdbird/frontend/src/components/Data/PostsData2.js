import postPicl from '../../img/postPic1.JPG';
import postPic2 from '../../img/postPic2.jpg';
import postPic3 from '../../img/postPic3.jpg';
import postPic4 from '../../img/postPic4.jpg';

import * as Constant from "../../constants";






export const PostsData1 = async () => {

    const response = await fetch(`${Constant.SERVICE_URL}/api/post`);
    const json     = await response.json();
   
    return json;
  };