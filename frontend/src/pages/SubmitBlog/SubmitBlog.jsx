import { submitBlog } from "../../api/internal";
import styles from './SubmitBlog.module.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import TextInput from "../../components/TextInput/TextInput";
import { useNavigate } from "react-router-dom";

function SubmitBlog(){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState('');

    const author = useSelector(state => state.user._id);

    const navigate = useNavigate();

    const getPhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPhoto(reader.result);
        }
    }

    const submitHandler = async () =>{
        const data = {
            author, title, content, photo
        };

        const response = await submitBlog(data);

        if(response.status === 201){
            navigate('/blogs');
        }

    }

    return (
        <div className={styles.submitBlogWrapper}>
            <div className={styles.header}>Create a blog!</div>

            <TextInput 
            type = "text"
            name = "title"
            placeholder = "Blog Title"
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
            style = {{width: "60%"}}
            />
            <textarea 
            type="text"
            name="content"
            placeholder="Your content goes here..."
            maxLength={400}
            value={content}
            className={styles.content}
            onChange={(e) => setContent(e.target.value)}
            />
            <div className={styles.photoPrompt}>
                <p>Choose a photo</p>
                <input
                type="file"
                name="photo"
                id="photo"
                accept="image/jpg, image/jpeg, image/png"
                onChange={getPhoto}
                />
                {photo !== "" ? <img src={photo} width={150} height={150} alt="preview"/> : ""}
            </div>
            <button className={styles.submitButton} onClick={submitHandler}
            disabled={title ==='' || content ==='' || photo === ''}
            >Submit</button>
        </div>
    );

}

export default SubmitBlog;