
export default function Pods(props) {

    return (

        <div>
             <div className="container-deals">
            <div className="deals-card">
                <img src={props.pods.image} alt="headpones"/>
                <h4 className="title">{props.pods.title}</h4>
                <h5 className="price">{props.pods.price}</h5>
                <p className="Items-left">{props.pods.items}</p>
            </div>           
        </div>
            
        </div>
    )
}