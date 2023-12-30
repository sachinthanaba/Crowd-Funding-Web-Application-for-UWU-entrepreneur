import * as Constant from "./constants";


// export const getComments = async () => {
//     return [
//       {
//         id: "1",
//         body: "Company GrowGreen - Contact me for donations aws@gmail.com",
//         username: "W.S. Weerasingha",
//         userId: "1",
//         parentId: null,
//         createdAt: "2021-08-16T23:00:33.010+02:00",
//       },
//       {
//         id: "2",
//         body: "Tea Center - Nice work",
//         username: "Thilina Rodrigo",
//         userId: "2",
//         parentId: null,
//         createdAt: "2021-08-16T23:00:33.010+02:00",
//       },
//       {
//         id: "3",
//         body: "Should improve more on finance plan.",
//         username: "S.S. Lal",
//         userId: "2",
//         parentId: "1",
//         createdAt: "2021-08-16T23:00:33.010+02:00",
//       }, 
//       {
//         id: "4",
//         body: "Happy to support.",
//         username: "Maleesha Gunawardhana",
//         userId: "2",
//         parentId: "2",
//         createdAt: "2021-08-16T23:00:33.010+02:00",
//       },
//     ];
//   };

export const getComments = async () => {
  const response = await fetch(`${Constant.SERVICE_URL}/api/comment`);
  const json = await response.json()
  return json;
};
export const createComment = async (text, parentId = null) => {

  var id = Math.random().toString(36).substr(2, 9);
  var body = text;
  var userName = window.localStorage.getItem("fullName");
  var userId = window.localStorage.getItem("userEmail");
  var createdAt = new Date().toISOString();

  const commentRequest = { id, body, parentId, userId, userName, createdAt };

  const response = await fetch(`${Constant.SERVICE_URL}/api/comment`, {
    method: 'POST',
    body: JSON.stringify(commentRequest),
    headers: {
      'Content-Type': 'application/json'
    }
  })


  const json = await response.json();
  console.log(json.toString);

  if (!response.ok) {
   // setError(json.error);

  }

  return json;
}

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};


export const createPost = async (text, image_path) => {

  var id = Math.random().toString(36).substr(2, 9);
  var img = image_path;
  var name = window.localStorage.getItem("fullName");
  var desc = text;
  var likes = getRandomInt(10,1000);
  var liked = false;
  var status = "PENDING"
 // var createdAt = new Date().toISOString();

  const postRequest = { id, img, name, desc, likes,liked,status};

  const response = await fetch(`${Constant.SERVICE_URL}/api/post`, {
    method: 'POST',
    body: JSON.stringify(postRequest),
    headers: {
      'Content-Type': 'application/json'
    }
  })
return response;

};


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}