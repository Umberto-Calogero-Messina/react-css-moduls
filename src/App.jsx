import Card from './components/card/Card';
import styles from './components/card/Card.module.css';

const App = () => {
  return (
    <div className={styles.card}>
      <Card
        color="orange"
        name="sedans"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      ></Card>
      <Card
        color="blue"
        name="suvs"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      ></Card>
      <Card
        color="green"
        name="luxory"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
      ></Card>
    </div>
  );
};

export default App;
