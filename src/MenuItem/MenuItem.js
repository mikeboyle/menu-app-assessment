
const MenuItem = ({menuItem}) => {
    let {id, name, price, shortDescription} = menuItem;

    return (
        <div className="MenuItem">
            <ul>
                <li>id: {id}</li>
                <li>name: {name}</li>
                <li>price: ${price.toFixed(2)}</li>
                <li>{shortDescription}</li>
            </ul>
        </div>
    );
}

export default MenuItem;