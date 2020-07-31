import React from 'react';
import useFireStore from '../../hooks/useFireStore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFireStore('images');
    console.log(docs);
    return (
        <div className="images">
            <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(doc.url)}>
                <motion.img src={doc.url} alt="pic by melissa jones"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}/>
                </motion.div>
            ))}
            </div>
        </div>
    )
}

export default ImageGrid;