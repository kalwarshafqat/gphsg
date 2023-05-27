import styles from './CommentList.module.css';
import Comment from '../Comment/Comment';
function CommentList({comments}){

    return (
        <div className={styles.commentListWrapper}>
            <div className={styles.commentList}>
            {comments.length === 0 ? (<div className={styles.noComments}>No Comments</div>)
            :
            comments.map(comment =>(
                <Comment key={comments._id} comment={comment}/>
            ))


        }
        </div>

        </div>
    )

}

export default CommentList;