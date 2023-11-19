
export default function Headphones (props) {
    return (
        <div className="#headphones"> 
             <div className="container-deals">
            <div className="deals-card">
                <img src={props.headphones.image} alt="headpones"/>
                <h4 className="title">{props.headphones.title}</h4>
                <h5 className="price">{props.headphones.price}</h5>
                <p className="Items-left">{props.headphones.items}</p>
            </div>           
        </div>
            
        </div>
    )
}