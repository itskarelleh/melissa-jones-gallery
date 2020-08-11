import React, { useContext, useState } from 'react';
import { ArticleList, ArticleForm } from '../components/blog';
import { AuthContext } from '../components/admin/AuthProvider';

const Blog = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const { currentUser } = useContext(AuthContext);
    return(
        <div>
            <h1 className="page-header">Blog</h1>
            { !currentUser ? null : <ArticleForm /> }
            <ArticleList setSelectedArticle={selectedArticle} />
        </div>
    )
}

export default Blog;