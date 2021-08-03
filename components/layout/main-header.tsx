import Link from "next/link";
import classes from './main-header.module.css';
import { MdNextWeek } from 'react-icons/md'

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <MdNextWeek />
                <p>NEXT</p>
                <Link href="/">Events</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href="/events"> Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;