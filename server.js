const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

const documentRoot = 'D:\\pdfs';
const categories = ['category1', 'category2', 'category3'];

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use('/pdfs', express.static(documentRoot));

app.get('/categories', (req, res) => {
  res.json(categories);
});

app.get('/documents', (req, res) => {
  const { category, document } = req.query;

  if (!category || !categories.includes(category)) {
    res.status(400).json({ error: 'Invalid category' });
    return;
  }

  try {
    if (document) {
      const decodedCategory = decodeURIComponent(category);
      const decodedDocument = decodeURIComponent(document);

      const categoryPath = path.join(documentRoot, decodedCategory);
      const filePath = path.join(categoryPath, decodedDocument);

      if (fs.existsSync(filePath) && filePath.toLowerCase().endsWith('.pdf')) {
        res.sendFile(filePath);
      } else {
        res.status(404).json({ error: 'Document not found' });
      }
    } else {
      // Devolver solo la lista de documentos cuando no se proporciona un documento específico
      const categoryPath = path.join(documentRoot, decodeURIComponent(category));
      const files = fs.readdirSync(categoryPath);
      const pdfFiles = files.filter((file) => file.toLowerCase().endsWith('.pdf'));
      res.json(pdfFiles);
    }
  } catch (error) {
    console.error('Error reading folder:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Redirigir a /categories desde la raíz
app.get('/', (req, res) => {
  res.redirect('/categories');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});