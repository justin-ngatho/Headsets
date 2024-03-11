import React, {useState} from "react";
import Modal from 'react-modal'


Modal.setAppElement('#root');

export default function  TopDeals (props) {

    const [isModalOpen, setisModalOpen] = useState(false);

    const openModal = () => {
        setisModalOpen (true)
    }

    const closeModal = () => {
        setisModalOpen (false)
    }
   
    
    return (
        <div className="deals">
          <div className="container-deals">
            <div className="deals-card">
                <img src={props.reviews.image} alt="headpones" onClick={openModal} style={{ cursor: 'pointer' }}/>
                <h4 className="title">{props.reviews.title}</h4>
                <h5 className="price">{props.reviews.price}</h5>
                <p className="Items-left">{props.reviews.items}</p>
            </div>           
        </div>
        {/* Content inside Modal */}
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Image Modal" className= "modal-overlay"
        style={{
            overlay: {
                zIndex:1000
            }
        }}   
        >

            <div className="modal-container">
                <div className="img-modal-container">
                <img src= {props.reviews.image} alt="headpones" className="modal-img"/>
                </div>            
                <div className="modal-content">
                <p>{props.reviews.description}</p>
                <button onClick={closeModal} className="close-btn">Close</button>
                </div>
                
            </div>
                    
                    </Modal> 
        </div>
        

    )
}

