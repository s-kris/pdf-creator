# pdf-creator
Simple nodejs script to generate hello world pdf with pdfkit library with custom table support (dynamic) 

### usage 

`git clone`

`yarn`  or `npm i`

`node app.js`

You can see the ***output.pdf*** in **output** folder

### sample data

    const testData = [
      [
        {
          text: 'row1 column1',
          width: 0.3,
        },
        {
          text: 'row1 column2',
          width: 0.7,
        },
      ],
      [
        {
          text: 'row2 column1',
          width: 0.3,
        },
        {
          text: 'row2 column2',
          width: 0.7,
        },
      ],
    ];

### preview
[![Screenshot-2019-10-12-at-7-25-58-PM.png](https://i.postimg.cc/prqG3QWh/Screenshot-2019-10-12-at-7-25-58-PM.png)](https://postimg.cc/m11yHHFB)
