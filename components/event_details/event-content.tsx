import classes from './event-content.module.css';

function EventContent(props) {
  return (
    <section className={classes.content}>
      <strong>Description</strong>
      {props.children}
    </section>
  );
}

export default EventContent;
