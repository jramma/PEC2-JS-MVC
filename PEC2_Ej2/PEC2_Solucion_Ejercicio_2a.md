# Pregunta sobre Ejer2–1-TODO

a. **¿Por qué es el valor de this es undefined?**

Cuando cambias `this.view.bindAddTodo(this.handleAddTodo);` por `this.view.bindAddTodo(this.service.addTodo);`, estás pasando la función `addTodo` del servicio directamente como un callback.

En JavaScript, el valor de `this` dentro de una función depende de cómo se llama a esa función. Cuando pasas `this.service.addTodo` como un callback, pierdes el contexto original de `this` (que apunta al objeto del servicio en el momento de la definición de la función). Entonces, cuando se llama a `addTodo` desde `bindAddTodo`, `this` no apunta al objeto del servicio, sino que es `undefined` (o en modo estricto, apunta al objeto global, que es `window` en un navegador o `global` en Node.js).

Esto sucede porque `this` en JavaScript es dinámico, no está vinculado al método o al objeto que lo contiene, sino al contexto de la llamada de la función. Cuando pasas un método como un callback, como en `this.view.bindAddTodo(this.service.addTodo);`, el método se separa de su objeto original.

Por otro lado, cuando usas `this.view.bindAddTodo(this.handleAddTodo);`, estás pasando un método de la clase `TodoController` que internamente llama a `this.service.addTodo`. En este caso, `this` dentro de `handleAddTodo` se refiere a la instancia de `TodoController` debido a la sintaxis de la función de flecha que mantiene el contexto de `this` al nivel de la clase.
