import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';
import classes from './button.module.css';

interface ButtonProps {
    children: string;
    link?: string;
    onClick?: () => void;
}

function Button({ children, link, onClick }: ButtonProps) {
    return (
        <>
            {link ? (
                <div className={classes.btn}>
                    <Link href={link}>
                        <a className={classes.btntext} >{children}</a>

                    </Link>
                    <MdArrowForward className={classes.icon} />
                </div>
            ) :
                <button onClick={onClick} className={classes.btn}>
                    <a className={classes.btntext} >{children}</a>
                </button>
            }


        </>

    )
}

export default Button;