import React, { FormEvent } from "react";
import { useRef } from "react";
import Button from "../ui/button";
import classes from './event-search.module.css';

interface EventsSearchProps {
    onSearch: (month: string, year: string) => void;
}

function EventsSearch({ onSearch }: EventsSearchProps) {
    const yearInputRef = useRef<HTMLSelectElement>(null);
    const monthInputRef = useRef<HTMLSelectElement>(null);

    function submitHandler(event: FormEvent) {
        event.preventDefault();


        const selectedMonth = monthInputRef.current?.value;
        const selectedYear = yearInputRef.current?.value;

        if (selectedMonth && selectedYear) {
            onSearch(selectedMonth, selectedYear)
        }
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef} >
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventsSearch;