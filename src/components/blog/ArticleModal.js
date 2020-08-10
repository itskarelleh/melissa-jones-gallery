import React from 'react';
import { motion } from 'framer-motion';
const ArticleModal = ({ setSelectedArticle, selectedArticle }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedArticle(null);
        }
    }
    return(
        <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
            <h3>{selectedArticle}</h3>
        </motion.div>
    )
}

export default ArticleModal;