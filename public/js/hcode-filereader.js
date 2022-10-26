class HcodeFileReader {

    constructor (inputEl, imgEl){

        this.inputel = inputE1;
        this.imgEl = imgEl;

        this.initInputEvent();

     }

        initInputEvent(){

            document.queryselector(this.inputE1).addEventListener("change", e=>{



                this.reader(e.target.files[0]).then(result => {

                    document.querySelector(this.imgEl).src = results; 

             });

         });

        }

     reader(file){

        return new Promise((resolve, reject)=>{

            let reader = new FileReader();

            reader.onload = function () {

                resolve(reader.result);

            }

            reader.onerror = function() {

                reject("Não foi possível ler a imagem");

            }

            reader.readAsDataURL(file);

        });

    }

}