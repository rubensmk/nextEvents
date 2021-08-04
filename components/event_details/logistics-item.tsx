import React from 'react';
import { MdEvent, MdPlace } from 'react-icons/md';
import classes from './logistics-item.module.css';

interface LogisticsItemProps {
  children: string;
  icon: 'event' | 'place';
}

function LogisticsItem({ children, icon }: LogisticsItemProps) {

  return (
    <li className={classes.item}>
      {icon === 'event' ? (
        <MdEvent />) : (
        <MdPlace />
      )
      }
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
