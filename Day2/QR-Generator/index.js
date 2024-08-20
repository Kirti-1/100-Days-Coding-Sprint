
/*
    Inquirer ease the process of asking question, parsing input, validating answers
 */


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
/*
 for node above 12 the ECMAScript(EJS) comes into picture which standardize the way you write your code like using import statement
 for CJS(commonjs) we use require keyword to import any library, write down "type":"commonjs" which is by default implemented.
 when written "type":"module" it will shape the code in ECMAScript format.
*/

inquirer
    .prompt([
            {
                message:"Enter the URL",
                name: "URL"
            }
        ])
        .then((answers) => {
            
            //Write down your code here for the URL received and generate its qr image using qr-image npm library

            const url = answers.URL;            
            var qr_png = qr.image(url, { type: 'png' });
            qr_png.pipe(fs.createWriteStream('URL_qr.png'));

            fs.writeFile("qr-image-name.txt", url, (err) => {
                if(err){
                    console.log(`Error in writing into the file, please check logs ${err}`);
                    throw err;
                }
                console.log("Successfully added to the file.")
            })

        })
        .catch((err) => {
            console.log(err);
        });