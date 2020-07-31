import React from 'react';
import { motion } from 'framer-motion';
const Modal = ({ setSelectedImg, selectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }
    return(
        <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
            <motion.img src={selectedImg} alt="amazing image" />
        </motion.div>
    )
}

export default Modal;