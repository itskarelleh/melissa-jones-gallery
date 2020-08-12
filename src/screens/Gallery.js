import React, { useState, useContext } from 'react';
import {ImageForm, ImageGrid, Modal}  from '../components/image-grid';
import { AuthContext } from '../components/admin/AuthProvider';
import '../components/image-grid/ImageGrid.css';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const { currentUser } = useContext(AuthContext);
    return (
        <div>
            <h1 className="page-header"> Gallery </h1>
            { !currentUser ? null : <ImageForm /> }
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    )
}

export default Gallery;
