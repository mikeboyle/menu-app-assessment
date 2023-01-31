import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";

import Menu from "./Components/Menu/Menu";
import Searchbar from "./Components/Searchbar/Searchbar";
import Loading from "./Components/Loading/Loading";

const App = () => {
  const API =
    process.env.REACT_APP_API_URL ||
    "https://px32id5fdg.execute-api.us-east-1.amazonaws.com/data";

  const [menuItems, setMenuItems] = useState();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError("");
        setLoading(true);

        await axios
          .get(API)
          .then((res) => {
            setMenuItems(res.data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []); // eslint-disable-line

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <h1>ERROR: {error}</h1>;
    } else {
      return <Menu menuItems={menuItems} searchTerm={searchTerm} />;
    }
  };

  return (
    <section className="mainSection">
      <h3>Our Menu</h3>
      <div className="searchbarContainer--sticky">
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <br />
      <div>{renderContent()}</div>
    </section>
  );
};

export default App;
