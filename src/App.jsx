import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Philipps Blog</h1>
      <p></p>
      <p>Click the link to get stroll through my hobbies</p>
      <nav>
        <ul>
          <li>
            <Link to="cooking">Cooking</Link>
          </li>
          <li>
            <Link to="ErrorPage">Coding</Link>
          </li>
          <li>
            <Link to="ErrorPage">Sport</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
