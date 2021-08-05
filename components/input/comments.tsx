import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment, { Comment } from './new-comment';
import classes from './comments.module.css';
import { useCallback } from 'react';

interface CommentProps {
    eventId: string;
}
function Comments({ eventId }: CommentProps) {

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);


    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    const addCommentHandler = useCallback((commentData: Comment) => {
        fetch('/api/comments/' + eventId, {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())

    }, [eventId])

    useEffect(() => {
        if (showComments) {
            fetch('/api/comments/' + eventId)
                .then(response => response.json()).then(data => setComments(data.comments))
        }
    }, [showComments, eventId, addCommentHandler])

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList items={comments} />}
        </section>
    );
}

export default Comments;