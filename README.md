# PEC2-JS-MVC
## DESCRIPCIÓN

Estructura:

    .
    ├── PEC2_Ej1
    │   ├── ejer1-a.js
    │   ├── ejer1-b.js
    │   ├── ejer1-c.js
    │   └── ejer1-d.js
    ├── PEC2_Ej2
    │   ├── Ejer2-2-expense-tracker
    │   │   ├── controllers
    │   │   │   └── expense.controller.js
    │   │   ├── models
    │   │   │   └── expense.model.js
    │   │   ├── services
    │   │   │   └── expense.service.js
    │   │   ├── views
    │   │   │   └── expense.views.js
    │   │   ├── app.js
    │   │   ├── index.html
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── script.js
    │   │   ├── style.css
    │   │   └── uoc.ico
    │   └── PEC2_Solucion_Ejercicio_2a.md
    └── PEC2_Ej3
        ├── a_map
        ├── b_filter
        ├── c_reduce
        ├── d_every
        ├── e_some
        └── f_zoo

**A tener en cuenta:**
Para ejecutar `Ejer2-2-expense-tracker`, debes utilizar el comando `http-server` en el directorio donde se encuentra el archivo `app.js`.

Durante el desarrollo, me encontré con **problemas relacionados con el caché**. Los datos de versiones anteriores de `Ejer2-2-expense-tracker` persistían y generaban conflictos con las nuevas versiones. Para solucionar este problema, puedes desactivar el caché de la siguiente manera:

1. Haz clic derecho en la página y selecciona "Inspeccionar".
2. Ve a la pestaña "Red".
3. Busca y selecciona la opción para desactivar el caché.

Ten en cuenta que este problema solo debería afectar en modo de desarrollo. Esta es la última versión de `Ejer2-2-expense-tracker` y no debería presentar problemas. Sin embargo, si pruebas otras versiones de `Ejer2-2-expense-tracker` en el mismo navegador, podrías encontrarte con este problema de nuevo.

## Instalación de http-server

Para instalar `http-server`, necesitarás tener `node` y `npm` ya instalados en tu sistema. `node` es un entorno de ejecución para JavaScript y `npm` es un gestor de paquetes para Node.js.

Sigue estos pasos para instalar `http-server`:

1. Verifica que tienes `node` y `npm` instalados ejecutando los siguientes comandos en tu terminal:

```bash
node --version
npm --version
```

Si ambos comandos muestran una versión, entonces ya tienes `node` y `npm` instalados. Si no es así, necesitarás instalarlos primero.

2. Una vez que tienes `node` y `npm` instalados, puedes instalar `http-server` ejecutando el siguiente comando en tu terminal:

```bash
npm install --global http-server
```

Esto instalará `http-server` globalmente en tu sistema, lo que te permitirá usarlo en cualquier proyecto.

3. Para verificar que `http-server` se instaló correctamente, puedes ejecutar el siguiente comando:

```bash
http-server --version
```

Si el comando muestra una versión, entonces `http-server` se instaló correctamente. Ahora estás listo para usar `http-server` en tus proyectos.
