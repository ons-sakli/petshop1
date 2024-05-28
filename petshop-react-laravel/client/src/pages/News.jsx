import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'; // Assurez-vous que le chemin est correct
import Modal from './Modal'; // Importer le composant Modal
import logo from '../logo.png'; // Assurez-vous d'avoir un fichier logo.png dans le dossier src
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom pour créer un lien

const News = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const defaultUrl = "https://www.akc.org/expert-advice/health/intestinal-blockage-in-dogs/";
      try {
        const response = await axios.get(`http://localhost:5000/extract-text/${encodeURIComponent(defaultUrl)}`);
        if (response.status !== 200) {
          throw new Error('Failed to extract text from URL.');
        }
        setData(response.data);
        setError('');
      } catch (error) {
        setError('Failed to extract text from URL.');
        setData(null);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Pets News</h1>
        </nav>
      </header>
      <Link to="/" className="back-button">Return To home page</Link>
      {error && <p className="error">{error}</p>}
      {data && (
        <div className="card-b">
          <div className="card-body">
            {data.titles.map((title, index) => (
              <div className='card' key={index} onClick={() => setSelectedArticle({ title, content: data.paragraphs[index] })}>
                <h3>{title}</h3>
                {data.paragraphs[index] && <p>{data.paragraphs[index]}</p>}
                {/* Vous pouvez également afficher les images ici s'il y en a */}
                {/* {data.images[index] && <img src={data.images[index]} alt={`Image ${index}`} />} */}
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedArticle && <Modal article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
    </div>
  );
};

export default News;
