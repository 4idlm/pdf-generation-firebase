# pdf-generation-firebase
 EJS-to-html  PDFgeneration using firebase and node.js

#Get Started  

It's easy to install EJS with NPM.

    $ npm install ejs

#Usage

                 let template = ejs.compile(str, options);
                 template(data);
                // => Rendered HTML string

                 ejs.render(str, data, options);
                 // => Rendered HTML string

                ejs.renderFile(filename, data, options, function(err, str){
                // str => Rendered HTML string
                });


After converting EJS to HTML string and we pass the html string to the  html-pdf(node-html-pdf).


Install the html-pdf utility via npm:

       $ npm install -g html-pdf


Code example

     var fs = require('fs');
     var pdf = require('html-pdf');
     var html = fs.readFileSync('./test/businesscard.html', 'utf8');
     var options = { format: 'Letter' };
 
    pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
     if (err) return console.log(err);
      console.log(res); // { filename: '/app/businesscard.pdf' }
    });
    
    API
       var pdf = require('html-pdf');
       pdf.create(html).toFile([filepath, ]function(err, res){
       console.log(res.filename);
        });
 
      pdf.create(html).toStream(function(err, stream){
      stream.pipe(fs.createWriteStream('./foo.pdf'));
      });
 
     pdf.create(html).toBuffer(function(err, buffer){
     console.log('This is a buffer:', Buffer.isBuffer(buffer));
     });
 
 
     // for backwards compatibility
     // alias to pdf.create(html[, options]).toBuffer(callback)
    pdf.create(html [, options], function(err, buffer){});


 using this we can converted the pdf file

                       Refer pdfgeneratorservices.js file.   
