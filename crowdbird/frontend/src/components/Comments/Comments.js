import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState, useEffect} from "react";
import { getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi, } from "../../api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";


const Comments = ({ currentUserId }) => {

const [backendComments, setBackendComments] = useState([]);
const rootComments = backendComments.filter((backendComment) => backendComment.parentId===null);

const getReplies = (commentId) => {
  return backendComments.filter((backendComment) => backendComment.parentId 
    === commentId).sort((a,b) => new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime()); 
};

console.log("backendComments",backendComments);
const addComment = ( text, parentId ) => {
  console.log('addComment, text, parentId'); 
createCommentApi(text, parentId).then(comment => {
  setBackendComments([comment,...backendComments]);
});
};
const deleteComment = (commentId) => {if(window.confirm("Are you sure that you want to remove comment?")){
  deleteCommentApi(commentId).then(() => {const updatedBackendComments = 
    backendComments.filter(backendComment => backendComment.id !== commentId);
    setBackendComments(updatedBackendComments);
  });    
}
};
useEffect(()=> {
    getCommentsApi().then(data =>{
      setBackendComments(data);
    });
  },[]); 

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>


      <CommentForm submitLabel = "Post" handleSubmit = {addComment}/> 

      <div className="comments-container">
          {rootComments.map((rootComment) => (
            <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)}
            currentUserId = {currentUserId}
            deleteComment = {deleteComment}
          
            />
          ))}
        </div>  
    </div>  
  );
  // return <div>Comments</div>;
};







export default Comments;














































// import React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import img1 from "../../img/img1.jpg";
// import img2 from "../../img/img2.jpg";
// import img3 from "../../img/img3.jpg";

// const Comments = () => {
//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//     <ListItem alignItems="flex-start">
//       <ListItemAvatar>
//         <Avatar alt="Remy Sharp" src={img1} />
//       </ListItemAvatar>
//       <ListItemText
//         primary="Username"
//         secondary={
//           <React.Fragment>
//             <Typography
//               sx={{ display: 'inline' }}
//               component="span"
//               variant="body2"
//               color="text.primary"
//             >
//               This is comment
//             </Typography>
            
//           </React.Fragment>
//         }
//       />
//     </ListItem>
//     <Divider variant="inset" component="li" />
    
//     <ListItem alignItems="flex-start">
//       <ListItemAvatar>
//         <Avatar alt="Cindy Baker" src={img3} />
//       </ListItemAvatar>
//       <ListItemText
//         primary="Oui Oui"
//         secondary={
//           <React.Fragment>
//             <Typography
//               sx={{ display: 'inline' }}
//               component="span"
//               variant="body2"
//               color="text.primary"
//             >
//               Sandra Adams
//             </Typography>
//             {' — Do you have Paris recommendations? Have you ever…'}
//           </React.Fragment>
//         }
//       />
//     </ListItem>
//   </List>
//   )
// }

// export default Comments

