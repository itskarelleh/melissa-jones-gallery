import React from 'react';
import useFireStore from '../../hooks/useFireStore';
import { motion } from 'framer-motion';
const ArticleList = () => {

    const { docs } = useFireStore('articles');
    console.log(docs);
    return(
        <div className="articles">
            <div className="list">
                <div>
                { docs && docs.map(doc => (
                <h3>{doc.title}</h3>
            ))}
            </div>
        </div>
        </div>
    )
}

export default ArticleList;