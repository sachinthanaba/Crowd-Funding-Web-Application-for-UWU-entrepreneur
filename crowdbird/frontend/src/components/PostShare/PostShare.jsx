import React, {useState, useRef} from 'react'
import Profile from '../../img/ProfilePic.jpg'
import './PostShare.css'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilFilePlus } from '@iconscout/react-unicons'
import { UilEye } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { createPost as createPostApi} from "../../api";

const PostShare = () => {

    const [image,  setImage] = useState(null)
    const [text, setText] = useState("");
    const [image_p,  setImagep] = useState(null)
    const imageRef = useRef()

    let image_path = "N/A";

    const onImageChange=(event) => {
        if(event.target.files && event.target.files [0]){
            let img=event.target.files[0];
            image_path = "../../img/"+img.name;
            setImagep(image_path)
          
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    }

    function refreshPage() {
        window.location.reload(false);
      }

    const createPost=() => {
        if(null != image && text !=""){

            createPostApi(text,image_p).then(data =>{
                console.log(data.status);
            });
          refreshPage();
        }else{
            window.alert("No Post or no image selected");
        }
    }
  return (
    <div className="PostShare">
     <img src={Profile} alt="" />

     <div>
        <input type="text" placeholder="Have an amazing business idea?" value={text} onChange={(e) => setText(e.target.value)}/>

    <div className="PostOptions">
        <div className="option" style = {{color: 'green'}}
        onClick={()=>imageRef.current.click()}>
            <UilScenery/>
            Photo    
        </div>  

        <div className="option" style = {{color: 'blue'}}>
            <UilPlayCircle/>
            Video    
        </div>

        <div className="option" style = {{color: 'red'}}>
            <UilFilePlus/>
            Document    
        </div>

        <div className="option" style = {{color: 'purple'}}>
            <UilEye/>
            Eye    
        </div>

        <button className="button ps-button" onClick={createPost} > Share </button>
        <div style={{display: "none"}}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
        </div>  
    </div>
    {image && (
        <div className="previewImage">
            <UilTimes onClick={()=> setImage(null)}/>
            <img src={image.image} alt="" />
        </div> 
    )}   
    </div>
    </div>

    
  )
}

export default PostShare 
