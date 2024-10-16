
import React, {useState} from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root');

export default function Headphones (props) {
    const [isModalOpen, setisModalOpen] = useState(false);

    const openModal = () => {
        setisModalOpen (true)
    }

    const closeModal = () => {
        setisModalOpen (false)
    }
   
    
    return (
        <div className="#headphones"> 
             <div className="container-deals">
            <div className="deals-card">
            <img src={props.headphones.image} alt="headpones" onClick={openModal} style={{ cursor: 'pointer' }}/>
                <h4 className="title">{props.headphones.title}</h4>
                <h5 className="price">{props.headphones.price}</h5>
                <p className="Items-left">{props.headphones.items}</p>
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
                <img src= {props.headphones.image} alt="headpones" className="modal-img"/>
                </div>            
                <div className="modal-content">
                <h4 >{props.headphones.title}</h4>
                <h5 >{props.headphones.price}</h5>
                <p >{props.headphones.items}</p>    
                <p>{props.headphones.description}</p>
                <button onClick={closeModal} className="close-btn">Close</button> 
                </div>
                <button className="buy-now-btn">Buy Now</button> 
                
            </div>
        </Modal>
        </div>
    )
}