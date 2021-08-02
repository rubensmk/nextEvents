import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';
import classes from './button.module.css';

interface ButtonProps {
    children: string;
    link: string;
}

function Button({ children, link }: ButtonProps) {
    return (
        <div className={classes.btn}>
            <Link href={link}>
                <a className={classes.btntext} >{children}</a>

            </Link>
            <MdArrowForward className={classes.icon} />
        </div>

    )
}

export default Button;