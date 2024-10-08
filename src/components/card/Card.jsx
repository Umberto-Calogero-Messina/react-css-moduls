import Button from '../button/Button';
import styles from './Card.module.css';

const Card = ({ name, text }) => {
  const title = name.toUpperCase();
  return (
    <div>
      <img src={'/asset/images/' + name + '.svg'} alt="" />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{text}</p>
      <Button></Button>
    </div>
  );
};

export default Card;
