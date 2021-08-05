import { FormEvent, useEffect, useRef, useState } from 'react';
import classes from './new-comment.module.css';

export type Comment = {
    email: string;
    name: string;
    text: string;
}
interface NewCommentProps {
    onAddComment: ({ ...Comment }: Comment) => void;
}

function NewComment({ onAddComment }: NewCommentProps) {
    const [isInvalid, setIsInvalid] = useState(false);

    const emailInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const commentInputRef = useRef<HTMLTextAreaElement>(null);

    function sendCommentHandler(event: FormEvent) {
        event.preventDefault();

        let enteredEmail = emailInputRef.current?.value;
        let enteredName = nameInputRef.current?.value;
        let enteredComment = commentInputRef.current?.value;

        if (
            !enteredEmail ||
            enteredEmail.trim() === '' ||
            !enteredEmail.includes('@') ||
            !enteredName ||
            enteredName.trim() === '' ||
            !enteredComment ||
            enteredComment.trim() === ''
        ) {
            setIsInvalid(true);
            return;
        }

        onAddComment({
            email: enteredEmail,
            name: enteredName,
            text: enteredComment,
        });
        enteredEmail = '';
        enteredName = '';
        enteredComment = '';
    }

    return (
        <form className={classes.form} onSubmit={sendCommentHandler}>
            <div className={classes.row}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your email</label>
                    <input type='email' id='email' ref={emailInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your name</label>
                    <input type='text' id='name' ref={nameInputRef} />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='comment'>Your comment</label>
                <textarea id='comment' rows={5} ref={commentInputRef}></textarea>
            </div>
            {isInvalid && <p>Please enter a valid email address and comment!</p>}
            <button>Submit</button>
        </form>
    );
}

export default NewComment;