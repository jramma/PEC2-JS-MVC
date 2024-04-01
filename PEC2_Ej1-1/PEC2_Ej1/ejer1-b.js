// La función 'findOne' ahora devuelve una promesa en lugar de aceptar callbacks.
// Si encuentra el elemento, resuelve la promesa con el elemento; si no, rechaza la promesa con un error.
const findOne = (list, { key, value }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const element = list.find(element => element[key] === value);
            // Si 'element' es verdadero, se resuelve la promesa. Si no, se rechaza.
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

// Se imprime un mensaje para indicar que se va a buscar un elemento.
console.log('findOne success');
// Se busca a 'Carlos' en la lista de usuarios.
// En lugar de pasar callbacks, se encadenan los métodos 'then' y 'catch' a la promesa.
findOne(users, { key: 'name', value: 'Carlos' })
    .then(user => console.log(`user: ${user.name}`)) // 'then' se ejecuta si la promesa se resuelve.
    .catch(error => console.log(error.message)); // 'catch' se ejecuta si la promesa se rechaza.

// Se imprime un mensaje para indicar que se va a buscar un elemento.
console.log('findOne error');
// Se busca a 'Fermin' en la lista de usuarios. Como 'Fermin' no está en la lista, se ejecutará 'catch'.
findOne(users, { key: 'name', value: 'Fermin' })
    .then(user => console.log(`user: ${user.name}`)) // 'then' se ejecuta si la promesa se resuelve.
    .catch(error => console.log(error.message)); // 'catch' se ejecuta si la promesa se rechaza.

/*
findOne success
findOne error
//wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/