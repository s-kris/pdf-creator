const fs = require('fs');
const PDFDocument = require('pdfkit');

const { testData } = require('./data/sample');
const { createTable } = require('./api/pdf');

(() => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('./output/output.pdf'));

  doc.font('Helvetica-Bold', 10);
  doc.fillColor('red');
  doc.text('Hello World', { align: 'center' });
  doc.moveDown(1);

  doc.fillColor('black');
  createTable(doc, testData);
  doc.end();
})();
