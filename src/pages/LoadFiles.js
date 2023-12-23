import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const LoadFiles = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [documents, setDocuments] = useState([]);
  const [hoveredDocument, setHoveredDocument] = useState(null);

  useEffect(() => {
    setSelectedCategory(props.pCategory);

    if (selectedCategory) {
      fetchDocuments(selectedCategory);
    } else {
      setDocuments([]);
    }
  }, [selectedCategory, props]);

  const fetchDocuments = async (category) => {
    try {
      const response = await fetch(`http://localhost:5000/documents?category=${category}`);

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const files = await response.json();
      setDocuments(files);
    } catch (error) {
      console.error('Error fetching documents:', error.message);
    }
  };

  const handleDocumentClick = (document) => {
    const encodedCategory = encodeURIComponent(selectedCategory);
    const encodedDocument = encodeURIComponent(document);
    window.open(`http://localhost:5000/documents?category=${encodedCategory}&document=${encodedDocument}`, '_blank');
  };

  return (
    <div>
      <h2 className='prueba'>Documentos</h2>
      <ul className='prueba'>
        {documents.map((document, index) => (
          <li
            key={index}
            onClick={() => handleDocumentClick(document)}
            style={{
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
              transform: hoveredDocument === document ? 'scale(1.1)' : 'scale(1)',
              marginBottom: '7px', // Ajusta el valor según el espacio que desees entre elementos
            }}
            onMouseEnter={() => setHoveredDocument(document)}
            onMouseLeave={() => setHoveredDocument(null)}
          >
            <FontAwesomeIcon icon={faFilePdf} style={{ marginRight: '10px' , color: 'red' }} />
            {document}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { LoadFiles };
