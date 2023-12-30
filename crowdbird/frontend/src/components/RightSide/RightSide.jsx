import React from 'react'
import Comments from '../Comments/Comments'
import SendIcon from '@mui/icons-material/Send'
import './RightSide.css'
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button} from '@material-ui/core'
import { FileDownload } from "@mui/icons-material";


const RightSide = () => {
  return (
    <div className="Comments">
        <Comments currentUserId = "1"/>
        
        
    {/* <form className="post_form">
        <TextField
        label = "add comment"
        size = "small"
        variant = "outlined"
        className = "post_input"
        placeholder = "add comment"
        />
         
        <Button
           variant="contained"
           size="small"
           endIcon={<SendIcon/>}
           type="submit"
           >
            Send
        </Button>
    </form> */}
    </div>
     
  )
}

export default RightSide


