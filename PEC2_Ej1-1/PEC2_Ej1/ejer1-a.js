// La función 'findOne' busca un elemento en una lista basándose en una clave y un valor proporcionados.
// Si encuentra el elemento, ejecuta la función 'onSuccess'; si no, ejecuta la función 'onError'.
const findOne = (list, { key, value }, { onSuccess, onError }) => {
        // 'setTimeout' se utiliza para simular una operación asincrónica, como una solicitud a una base de datos.
        setTimeout(() => {
            // 'find' es un método de los arrays que devuelve el primer elemento que cumple la condición proporcionada.
            const element = list.find(element => element[key] === value);
            // Si 'element' es verdadero (es decir, si se encontró un elemento), se ejecuta 'onSuccess'. Si no, se ejecuta 'onError'.
            element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
        }, 2000); // La operación se retrasa 2 segundos.
};

// 'onSuccess' es una función que se ejecuta cuando se encuentra un elemento. Imprime el nombre del elemento.
const onSuccess = ({ name }) => console.log(`user: ${name}`);
// 'onError' es una función que se ejecuta cuando no se encuentra un elemento. Imprime un mensaje de error.
const onError = ({ msg }) => console.log(msg);

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
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

// Se imprime un mensaje para indicar que se va a buscar un elemento.
console.log('findOne error');
// Se busca a 'Fermin' en la lista de usuarios. Como 'Fermin' no está en la lista, se ejecutará 'onError'.
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/