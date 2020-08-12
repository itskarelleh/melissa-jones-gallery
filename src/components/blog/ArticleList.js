import React from 'react';
import useFireStore from '../../hooks/useFireStore';
import moment from 'moment';

const ArticleList = () => {

    const { docs } = useFireStore('articles');
    return(
        <div className="articles">
            <div className="list">
                { docs && docs.map(doc => (
                <div className="article">
                    <span className="category-label">{doc.category}</span>
                    <br />
                    <h3>{doc.title}</h3>
                    <p>{moment(doc.createdAt.toDate()).calendar()}</p>
                        <p>{doc.content}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ArticleList;