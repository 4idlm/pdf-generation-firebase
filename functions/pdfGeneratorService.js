let pdf = require('html-pdf');
let ejs = require('ejs');

let pdfGeneratorService = (req, res) => {
  let data = "vinoth";
  let options = {
    base: "file:///" + __dirname + "/style/",
    orientation: "portrait",
    // Zooming option, can be used to scale images if `options.type` is not pdf
    zoomFactor: "1", // default is 1
    directory: "/tmp",
    // File options
    type: "pdf",             // allowed file types: png, jpeg, pdf
    quality: "75",          // only used for types png & jpeg
    height: "10.5in",        // allowed units: mm, cm, in, px
    width: "8in",            // allowed units: mm, cm, in, px
    format: "Letter",

  };

  ejs.renderFile('./views/template.ejs', data, function (err, html) {
    if (err) {
      return err;
    } else {
      pdf.create(html, options).toStream((err, stream) => {
        if (err) {
          return err;
        }
        if (req.query.download == "1") {
          //download the pdf file in response
          res.writeHead(200, {
            'Content-Type': 'application/force-download',
            'Content-disposition': 'attachment; filename=receipt.pdf'
          });
          stream.pipe(res);
        }
        else {
          //render the pdf file in response
          stream.pipe(res);
        }
      });
    }
  });

}

module.exports = pdfGeneratorService;