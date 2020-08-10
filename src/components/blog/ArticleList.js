import React from 'react';
import useFireStore from '../../hooks/useFireStore';
import { motion } from 'framer-motion';

const ArticleList = ({ setSelectedArticle }) => {

    const { docs } = useFireStore('articles');
    console.log(docs);
    return(
        <div className="articles">
            <div className="list">
                { docs && docs.map(doc => (
                <div>
                    <h3>{doc.title}</h3>
                    <span>{doc.category}</span>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ArticleList;