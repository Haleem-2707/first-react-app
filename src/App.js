import "./App.css";
import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Card
          image="assets/angular.png"
          name="Angular"
          email="oladiranhaleem@gmail.com"
        />
        <Card
          image="assets/css.png"
          name="Cascading Style Sheet"
          email="oladiranayomide@gmail.com"
        />
        <Card
          image="assets/typescript.png"
          name="Typescript"
          email="oladiranolamilekan@gmai.com"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
