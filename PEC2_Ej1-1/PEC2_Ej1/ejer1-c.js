// La función 'findOne' sigue siendo la misma, devolviendo una promesa.
const findOne = (list, { key, value }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const element = list.find(element => element[key] === value);
            element ? resolve(element) : reject(new Error('ERROR: Element Not Found'));
        }, 2000);
    });
};

// 'users' es un array de objetos, cada uno representando a un usuario.
const users = [
{
    name: 'Carlos',
    rol: 'Teacher'
},
{
    name: 'Ana',
    rol: 'Boss'
}
];

// Se crea una nueva función asíncrona 'findUser' para manejar las promesas con 'async/await'.
// Esta función acepta el nombre de un usuario y busca al usuario en la lista.
const findUser = async (name) => {
    try {
        // Se utiliza 'await' para esperar a que la promesa se resuelva antes de continuar.
        // Si la promesa se resuelve, 'user' contendrá el resultado.
        const user = await findOne(users, { key: 'name', value: name });
        console.log(`user: ${user.name}`);
    } catch (error) {
        // Si la promesa se rechaza, se captura el error con 'catch'.
        console.log(error.message);
    }
};

// Se imprime un mensaje para indicar que se va a buscar un elemento.
console.log('findOne success');
// Se busca a 'Carlos' en la lista de usuarios utilizando la nueva función 'findUser'.
findUser('Carlos');

// Se imprime un mensaje para indicar que se va a buscar un elemento.
console.log('findOne error');
// Se busca a 'Fermin' en la lista de usuarios utilizando la nueva función 'findUser'.
findUser('Fermin');

/*
findOne success
findOne error
//wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/