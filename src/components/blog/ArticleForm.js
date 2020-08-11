import React, { useState, useEffect, useCallback } from 'react';
import config, { projectFireStore, timestamp } from '../../firebase/config';
import useForm from '../../hooks/useForm';

const ArticleForm = () => {
    const [ title, setTitle ] = useState(null);
    const [ content, setContent ] = useState(null);
    const [ error, setError ] = useState();
    
    const categories = [ "Photography", "Lifestyle", "Writing", "Travel", "Other", "Poem"];
    const [ selectedCategory, setCategory] = useState(null);
    
    const db = projectFireStore.collection('articles');

    const handleCategoryChange = e => setCategory(e.target.value);
    const handleTitleChange = e => setTitle(e.target.value);
    const handleContentChange = e => setContent(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const createdAt = timestamp();
        const category = selectedCategory;
        db.add({ title, content, category, createdAt});

        setTitle(null);
        setContent(null);
        setCategory(null);
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label-form">Title</label>
                    <input onChange={handleTitleChange} type="text" value={title}/>
                </div>
                <br/>
                <div className="form-group">
                    <label className="label-form">Category</label>
                    <select onChange={handleCategoryChange} required>
                        <option disabled selected value> -- select an option -- </option>
                        {categories.map(category => <option value={category}>{category}</option>)}
                    </select>
                </div>
                <br/>
                <div className="form-group">
                    <label className="label-form">Content </label>
                    <textarea onChange={handleContentChange} value={content} placeholder="start typing here"></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ArticleForm;