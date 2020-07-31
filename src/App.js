import React, { useState } from 'react';
import './App.css';
import SideNav from './components/sidebar/SideNav';
import ImageGrid from './components/image-grid/ImageGrid';
import ImageForm from './components/image-grid/ImageForm';
import Modal from './components/image-grid/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <SideNav />
      <div>
        <h1 className="page-header">Gallery</h1>
        <ImageForm />
        <ImageGrid setSelectedImg={setSelectedImg}/>
        
      </div>
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
    </div>
  );
}

export default App;
