import "./Searchbar.scss";
import { Form } from "react-bootstrap";

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Form className="searchBar">
      <Form.Group controlId="formSearchbar">
        <Form.Control
          type="text"
          name="searchbar"
          placeholder="Name or Description ..."
          onChange={handleChange}
          value={searchTerm}
        />
      </Form.Group>
    </Form>
  );
};

export default Searchbar;
