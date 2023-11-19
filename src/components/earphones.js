export default function Earphones (props) {
    return (
        <div className="earphones">
             <div className="container-deals">
            <div className="deals-card">
                <img src={props.earphones.image} alt="headpones"/>
                <h4 className="title">{props.earphones.title}</h4>
                <h5 className="price">{props.earphones.price}</h5>
                <p className="Items-left">{props.earphones.items}</p>
            </div>           
        </div>
            
        </div>
    )
}