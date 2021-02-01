function Goods(props) {
    return(
        <div className="goods-block" key={props.title}>
            <h3>{props.title}</h3>
            <p>{props.cost}</p>
            <img src={props.image} alt={props.title}></img>
        </div>
    )
}

export default Goods;