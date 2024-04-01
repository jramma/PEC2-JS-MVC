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

// Se crea una nueva función asíncrona 'findUsers' para manejar las promesas con 'async/await'.
// Esta función acepta un array de nombres de usuarios y busca a los usuarios en la lista en paralelo.
const findUsers = async (names) => {
    try {
        // Se utiliza 'Promise.all' para ejecutar todas las promesas en paralelo.
        // 'Promise.all' devuelve una promesa que se resuelve cuando todas las promesas en el array se han resuelto.
        // Se utiliza 'map' para crear un array de promesas, una por cada nombre en el array 'names'.
        const users = await Promise.all(names.map(name => findOne(users, { key: 'name', value: name })));
        // Se imprime el nombre de cada usuario.
        users.forEach(user => console.log(`user: ${user.name}`));
    } catch (error) {
        // Si alguna de las promesas se rechaza, se captura el error con 'catch'.
        console.log(error.message);
    }
};

// Se busca a 'Carlos' y 'Fermin' en la lista de usuarios utilizando la nueva función 'findUsers'.
// Las búsquedas se ejecutan en paralelo, por lo que no hay que esperar a que concluya la primera para ejecutar la segunda.
findUsers(['Carlos', 'Fermin']);

/*
//wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/