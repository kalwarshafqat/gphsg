import styles from './UpdateBlog.module.css';
import TextInput from '../../components/TextInput/TextInput';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getBlogById, updateBlog } from '../../api/internal';


function UpdateBlog(){

    const params = useParams();
    const blogId = params.id;

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState('');

    const navigate = useNavigate();
    const author = useSelector(state => state.user._id);

    const updateHandler = async () =>{

    // http:backend_server:port/storage/filename
    // base64
    let data;
    if(photo.includes('http')){
        data = {
            author, title, content, blogId
        };
    } else {
        data = {
            author, title, content, photo, blogId
        };
    }
    const response = await updateBlog(data);
        if(response.status === 200){
            navigate('/');
        }
    }

    useEffect(() => {
        async function getBlogDetails(){
            const response = await getBlogById(blogId);
            if(response.status === 200){
                setTitle(response.data.blog.title);
                setContent(response.data.blog.content);
                setPhoto(response.data.blog.photo);
            }
        }
        getBlogDetails();
    }, []);

    const getPhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPhoto(reader.result);
        }
    }

    return (
        <div className={styles.submitBlogWrapper}>
            <div className={styles.header}>Edit your blog</div>

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
                {<img src={photo} width={150} height={150} alt={title}/>}
            </div>
            <button className={styles.updateButton} onClick={updateHandler}
            disabled={title ==='' || content ==='' || photo === ''}
            >Update</button>
        </div>
    );
}

export default UpdateBlog;