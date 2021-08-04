import Link from "next/link";
import classes from './main-header.module.css';
import { MdNextWeek, MdCollectionsBookmark } from 'react-icons/md'

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <MdNextWeek />
                <p>NEXT</p>
                <Link href="/">Events</Link>
            </div>
            <nav className={classes.navigation}>
                <MdCollectionsBookmark />
                <Link href="/events"> Browse All Events</Link>
            </nav>
        </header>
    )
}

export default MainHeader;