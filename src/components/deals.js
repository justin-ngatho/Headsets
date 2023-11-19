

export default function  TopDeals (props) {
   
    
    return (
        <div className="deals">
             <div className="container-deals">
            <div className="deals-card">
                <img src={props.reviews.image} alt="headpones"/>
                <h4 className="title">{props.reviews.title}</h4>
                <h5 className="price">{props.reviews.price}</h5>
                <p className="Items-left">{props.reviews.items}</p>
            </div>           
        </div>
            
        </div>
        

    )
}

