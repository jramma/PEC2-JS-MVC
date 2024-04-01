
# Aplicación de seguimiento de gastos

Esta aplicación permite a los usuarios llevar un seguimiento de sus gastos. Los usuarios pueden agregar, editar y eliminar gastos, y la aplicación muestra una lista de todos los gastos registrados.

El código proporcionado es para el controlador de la aplicación, que actúa como intermediario entre el modelo (que gestiona los datos de la aplicación) y la vista (que muestra los datos al usuario).

El controlador tiene varias responsabilidades:

- Al iniciar, se vincula a varios eventos del modelo y la vista. Por ejemplo, se vincula al evento `bindExpenseListChanged` del modelo, que se dispara cuando la lista de gastos cambia. Cuando este evento se dispara, el controlador actualiza la vista para mostrar la nueva lista de gastos.
- Cuando el usuario agrega un gasto, el controlador decide si debe crear un nuevo gasto o actualizar un gasto existente, dependiendo de si la aplicación está en modo de edición o no.
- Cuando el usuario elige editar un gasto, el controlador busca el gasto correspondiente y actualiza la vista para mostrar los detalles del gasto en los campos de entrada.
- Cuando el usuario elige eliminar un gasto, el controlador le indica al modelo que elimine el gasto correspondiente.

En resumen, el controlador se encarga de coordinar el modelo y la vista, asegurándose de que trabajen juntos para proporcionar la funcionalidad deseada.

# Default readme

## Expense Tracker

Keep track of income and expenses. Add and remove items and save to local storage

## Project Specifications

- Create UI for project
- Display transaction items in DOM
- Show balance, expense and income totals
- Add new transation and reflect in total
- Delete items from DOM
- Persist to local storage
