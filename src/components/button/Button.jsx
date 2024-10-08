import styles from './Button.module.css';

console.log(styles);

const Button = (props) => {
  return <button className={`${styles.button} ${props.className}`}>Learn More</button>;
};

export default Button;
