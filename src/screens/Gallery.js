import React, { useState } from 'react';
import {ImageForm, ImageGrid, Modal}  from '../components/image-grid';
// import ImageForm from '../components/image-grid/ImageForm';
// import ImageGrid from '../components/image-grid/ImageGrid';
// import Modal from '../components/image-grid/Modal';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div>
            <h1 className="page-header"> Gallery </h1>
            <ImageForm />
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    )
}

export default Gallery;
