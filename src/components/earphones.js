import React, {useState} from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root');




export default function Earphones (props) {

    const [isModalOpen, setisModalOpen] = useState(false);

    const openModal = () => {
        setisModalOpen (true)
    }

    const closeModal = () => {
        setisModalOpen (false)
    }
   
    
    return (
        <div className="earphones">
             <div className="container-deals">
            <div className="deals-card">
            <img src={props.earphones.image} alt="headpones" onClick={openModal} style={{ cursor: 'pointer' }}/>
                <h4 className="title">{props.earphones.title}</h4>
                <h5 className="price">{props.earphones.price}</h5>
                <p className="Items-left">{props.earphones.items}</p>
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
                <img src= {props.earphones.image} alt="headpones" className="modal-img"/>
                </div>            
                <div className="modal-content">
                <h4 >{props.earphones.title}</h4>
                <h5 >{props.earphones.price}</h5>
                <p >{props.earphones.items}</p>    
                <p>{props.earphones.description}</p>
                <button onClick={closeModal} className="close-btn">Close</button> 
                </div>
                <button className="buy-now-btn">Buy Now</button> 
                
            </div>
        </Modal>
        </div>
    )
}