import React from 'react';
import { ArticleList, ArticleForm } from '../components/blog';

const Blog = () => {
    return(
        <div>
            <h1 className="page-header">Blog</h1>
            <ArticleForm />
            <ArticleList />
        </div>
    )
}

export default Blog;