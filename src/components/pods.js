import React, {useState} from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root');
export default function Pods(props) {

    const [isModalOpen, setisModalOpen] = useState(false);

    const openModal = () => {
        setisModalOpen (true)
    }

    const closeModal = () => {
        setisModalOpen (false)
    }
   
    

    return (

        <div>
             <div className="container-deals">
            <div className="deals-card">
                <img src={props.pods.image} alt="headpones" onClick={openModal} style={{ cursor: 'pointer' }}/>
                <h4 className="title">{props.pods.title}</h4>
                <h5 className="price">{props.pods.price}</h5>
                <p className="Items-left">{props.pods.items}</p>
            </div>           
        </div>           
        

        {/* CONTENT INSIDE MODAL */}

        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Image Modal" className= "modal-overlay"
        style={{
            overlay: {
                zIndex:1000
            }
        }}   
        >

<div className="modal-container">
                <div className="img-modal-container">
                <img src= {props.pods.image} alt="headpones" className="modal-img"/>
                </div>            
                <div className="modal-content">
                <h4 >{props.pods.title}</h4>
                <h5 >{props.pods.price}</h5>
                <p >{props.pods.items}</p>    
                <p>{props.pods.description}</p>
                <button onClick={closeModal} className="close-btn">Close</button> 
                </div>
                <button className="buy-now-btn">Buy Now</button> 
                
            </div>

        </Modal>
        </div>
    )
}