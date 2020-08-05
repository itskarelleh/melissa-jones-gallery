import React, { useState, useEffect } from 'react';

const ArticleForm = () => {
    const [ title, setTitle ] = useState(null); 
    const [ error, setError ] = useState(null);
    const [ body, setBody ] = useState(null);

    const onSubmit = () => {
        const docRef = db.collection('')
    }

    return(
        <div>
            <form>
                <label className="label-form">Title</label>
                    <input type="text" />
                <br/>
                <label className="label-form">Content </label>
                <textarea placeholder="start typing here"></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ArticleForm;