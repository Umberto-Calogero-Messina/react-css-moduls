import Card from './components/card/Card';

const App = () => {
  return (
    <div>
      <Card
        color="orange"
        t_color="text_orange"
        name="sedans"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      ></Card>
      <Card
        color="blue"
        t_color="text_blue"
        name="suvs"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      ></Card>
      <Card
        color="green"
        t_color="text_green"
        name="luxory"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
      ></Card>
    </div>
  );
};

export default App;
