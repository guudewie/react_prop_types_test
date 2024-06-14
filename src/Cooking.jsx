import { Link, useParams } from "react-router-dom";
import Pasta from "./Pasta";
import Doener from "./Doener";

const Cooking = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from the Cooking Page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>Follow the links to get to the recipes you like:</h2>
      <ul>
        <li>
          <Link to="/cooking/doener">Doener</Link>
        </li>
        <li>
          <Link to="/cooking/pasta">Pasta</Link>
        </li>
      </ul>
      {name === "doener" ? (
        <Doener />
      ) : name === "pasta" ? (
        <Pasta />
      ) : (
        <Pasta />
      )}
    </div>
  );
};

export default Cooking;
