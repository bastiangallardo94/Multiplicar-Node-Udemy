const fs = require('fs');
const colors = require('colors');

let listar = (base, limite) => {

    if (!Number(base) && !Number(limite)) {
        reject(`El valor introducido -> ${base} <- no es un número`);
        return;
    }

    return new Promise((reject, resolve) => {

        console.log("===========================".green);
        console.log(`Tabla de ${base} hasta el ${limite}`.green);
        console.log("===========================".green);
        for (let i = 1; i <= limite; i++) {

            console.log(`${base} * ${i} = ${base*i}`);

        }
    })
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido -> ${base} <- no es un número`);
            return;
        }

        let datos = '';

        for (let i = 1; i <= limite; i++) {

            datos += `${ base } * ${ i } = ${base*i} \n`;
        }

        fs.writeFile(`tablas/Tabla-${ base }.txt`, datos, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla-${base}.txt`);
        });

    });

}


module.exports = {
    crearArchivo,
    listar
}