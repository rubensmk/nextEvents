import classes from './comment-list.module.css';
import { Comment } from './new-comment';

type CommentFromMongo = {
    email?: string;
    name?: string;
    text?: string;
    eventId?: string | string[];
    _id?: {};
    id?: string;
}

interface CommentListProps {
    items: CommentFromMongo[]

}

function CommentList({ items }: CommentListProps) {
    return (
        <div className={classes.commentsSection}>
            <h1>Comments</h1>
            <ul className={classes.comments}>
                {items.map(item => (
                    <li key={item.id}>
                        <p>{item.text}</p>
                        <div>
                            By <address>{item.name}</address>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default CommentList;