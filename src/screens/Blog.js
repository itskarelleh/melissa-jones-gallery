import React, { useContext } from 'react';
import { ArticleList, ArticleForm } from '../components/blog';
import { AuthContext } from '../components/admin/AuthProvider';
import '../components/blog/Blog.css';

const Blog = () => {
    const { currentUser } = useContext(AuthContext);
    return(
        <div>
            <h1 className="page-header">Blog</h1>
            { !currentUser ? null : <ArticleForm /> }
            <ArticleList />
        </div>
    )
}

export default Blog;