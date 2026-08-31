import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Srinjay"
        age={21}
        img="https://plus.unsplash.com/premium_photo-1668456012219-e3299fd0307e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Aritra"
        age={24}
        img="https://images.unsplash.com/photo-1787946178275-abedbdd2cf70?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Ritesh"
        age={27}
        img="https://images.unsplash.com/photo-1751601382303-f23fb4738449?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
