import Card from './card.jsx'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="new">Calorie Read Only</h1>
        <div className="box">
          <Card title="Pizza" calorie = "56"/>
          <Card title="Burger" calorie = "69"/>
          <Card title="Coke" calorie = "500"/>
          <Card title="Browne" calorie = "180"/>
          <Card title="Fried Rice" calorie = "90"/>
          <Card title="Lassania" calorie = "200"/>
          <Card title="Pani Puri" calorie = "10"/>
        </div>
      </div>
    </div>
  );
}

export default App;
