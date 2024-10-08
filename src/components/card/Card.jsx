import Button from '../button/Button';
import styles from './Card.module.css';

const Card = ({ color, t_color, name, text }) => {
  const title = name.toUpperCase();


  console.log(styles)

  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <img className={styles.img} src={'/asset/images/' + name + '.svg'} alt="" />
      <h2 className={`${styles.title} ${styles.title_margin}`}>{title}</h2>
      <p className={`${styles.subtitle} ${styles.title_margin}`}>{text}</p>
      <Button className={styles[t_color]}></Button>
    </div>
  );
};

export default Card;
