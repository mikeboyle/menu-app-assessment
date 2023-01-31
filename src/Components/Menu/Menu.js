import "./Menu.scss";

const Menu = ({ menuItems, searchTerm }) => {
  let dataToDisplay = menuItems;

  if (searchTerm) {
    dataToDisplay = menuItems.filter((item) => {
      const { name, shortDescription } = item;
      return (
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }

  const renderContent = () => {
    if (dataToDisplay.length < 1) {
      return <div>No results for {searchTerm}.</div>;
    } else {
      return (
        <div>
          {dataToDisplay.map((items) => {
            return (
              <ul key={items.id} className="itemsCard">
                <li>ID: {items.id}</li>
                <li>Name: {items.name}</li>
                <li>Price: ${items.price.toFixed(2)}</li>
                <li>{items.shortDescription}</li>
              </ul>
            );
          })}
        </div>
      );
    }
  };

  return <section className="menuSection">{renderContent()}</section>;
};

export default Menu;
