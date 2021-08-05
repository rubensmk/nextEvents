import classes from './comment-list.module.css';
import { Comment } from './new-comment';

type CommentFromMongo = {
    name: string;
    email: string;
    text: string;
    _id: string;
}

interface CommentListProps {
    items: CommentFromMongo[]

}

function CommentList({ items }: CommentListProps) {
    return (
        <ul className={classes.comments}>
            {items.map(item => (
                <li key={item._id}>
                    <p>{item.text}</p>
                    <div>
                        By <address>{item.name}</address>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CommentList;