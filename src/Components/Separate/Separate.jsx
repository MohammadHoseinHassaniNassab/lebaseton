
function Separate(props)
{
    let price = props.price;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




export default Separate;