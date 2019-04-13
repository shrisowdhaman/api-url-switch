
   'use strict';
 
   function startSwitching (srcFile: string, descFIle: string) {

    var filePath = '';
    // File the filepath
    fs.readdir( distDirPath, function (err, content) {
        filePath = content.find(res => res.match(/main.*.js/))
    });

  // Replace main file and replacethe file
   dir.readFiles(distDirPath, {
       match: /main.*.js/,
       exclude: /^\./
     }, function(err, content, next) {
       if (err) throw err;
       // Replace logic
       if(srcFile && descFile ){
         var result = replaceAll(srcFile, descFile, content);
         fs.writeFile(distDirPath + filePath, result, 'utf8', function(err) {
           if (err) {
             return console.log(err);
           };
         });
       } else {
         process.ex
       }
      }

    });


   // Replace All
   function replaceAll(find, replace, content) {
     while( content.indexOf(find) > -1) {
       content = content.replace(find, replace);
     }
     return content;
   }