const { animals, employees, hours, prices } = require("./data");

/**
 * Calculates the total cost of entry tickets based on the number of entrants.
 *
 * @param {Object} entrants - An object representing the number of entrants for each category.
 * @returns {string} - The total cost of entry tickets as a string with two decimal places.
 */
function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  let total = 0;
  const prices = { Adult: 49.99, Senior: 24.99, Child: 20.99 };
  for (let entrant in entrants) {
    if (prices.hasOwnProperty(entrant)) {
      total += prices[entrant] * entrants[entrant];
    }
  }
  return total.toFixed(2);
}

/**
 * Converts the opening and closing hours to a string representation.
 *
 * @param {Object} hours - The object containing the opening and closing hours.
 * @param {number} hours.open - The opening hour in 24-hour format.
 * @param {number} hours.close - The closing hour in 24-hour format.
 * @returns {string} - The string representation of the opening and closing hours.
 */
function hoursToString(hours) {
  if (hours.open === 0 && hours.close === 0) {
    return "CLOSED";
  } else {
    return `Open from ${hours.open}am until ${hours.close % 12}pm`;
  }
}

/**
 * Generates a schedule of opening hours for the zoo.
 * @param {string} dayName - The name of the day for which to generate the schedule. If not provided, the schedule for all days will be generated.
 * @returns {Object} - An object representing the schedule of opening hours. The keys are the day names and the values are the opening hours for each day.
 */
function schedule(dayName) {
  const hoursFiltered = !dayName ? hours : { [dayName]: hours[dayName] };
  return Object.entries(hoursFiltered).reduce((acc, [day, hours]) => {
    acc[day] = hoursToString(hours);
    return acc;
  }, {});
}

/**
 * Calculates the count of animals for each species or the count of a specific species.
 *
 * @param {string} [species] - The species of the animal. If not provided, returns the count of all species.
 * @returns {number|Object} - The count of animals for the specified species, or an object containing the count of animals for each species.
 */
function animalCount(species) {
  // Utilizamos el método `reduce` para crear un objeto que mapea cada especie de animal a su recuento
  const animalsCount = animals.reduce((accum, { name, residents }) => {
    // Para cada animal, calculamos el número de residentes
    accum[name] = residents.length;
    // Y lo añadimos al resultado
    return accum;
  }, {});

  // Podemos utilizar la notación de "corchetes" para acceder a una propiedad de un objeto
  // Por ejemplo, animalsCount['lions'] devolvería 4
  // Si no se proporciona una especie, devolvemos el objeto completo. Si se proporciona una especie, devolvemos el recuento de esa especie.
  return !species ? animalsCount : animalsCount[species];
}

/**
 * Maps the animals based on their location and filters them by sex if provided.
 * @param {Object} options - The options for mapping the animals.
 * @param {boolean} options.includeNames - Whether to include the names of the animals.
 * @param {string} options.sex - The sex to filter the animals by.
 * @returns {Object} - The mapped animals based on their location.
 */
function animalMap({ includeNames, sex } = { includeNames: null, sex: null }) {
  // Creamos la estructura inicial del objeto
  const initialValue = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  // Usamos `reduce` para recorrer el array de animales y almacenarlos en el objeto según los parámetros proporcionados
  return animals.reduce((locations, { location, name, residents }) => {
    // Filtramos los residentes por sexo si se proporciona `sex`
    const residentsFilter = sex
      ? residents.filter((resident) => resident.sex === sex)
      : residents;

    // Si `includeNames` es `true`, mapeamos cada especie a un array de nombres. Si no, solo incluimos el nombre de la especie.
    const withNames = includeNames
      ? { [name]: residentsFilter.map((resident) => resident["name"]) }
      : name;

    // Usamos el operador de propagación para añadir el nuevo elemento al array correspondiente en el objeto
    locations[location] = [...locations[location], withNames];

    return locations;
  }, initialValue);
}

/**
 * Returns an object containing the names of animals grouped by their popularity rating,
 * or an array of animal names with a specific popularity rating.
 *
 * @param {number} [rating] - The popularity rating of the animals to filter by.
 * @returns {Object|Array} - An object with popularity ratings as keys and arrays of animal names as values,
 *                           or an array of animal names with the specified popularity rating.
 */
function animalPopularity(rating) {
  if (!rating) {
    return animals.reduce((acc, animal) => {
      if (!acc[animal.popularity]) {
        acc[animal.popularity] = [];
      }
      acc[animal.popularity].push(animal.name);
      return acc;
    }, {});
  }
  return animals
    .filter((animal) => animal.popularity === rating)
    .map((animal) => animal.name);
}

/**
 * Retrieves an array of animals based on their IDs.
 * @param {string|string[]} ids - The ID(s) of the animals to retrieve.
 * @returns {Animal[]} - An array of animals matching the provided IDs.
 */
function animalsByIds(ids) {
  if (!ids) {
    return [];
  }
  if (typeof ids === "string") {
    return animals.filter((animal) => animal.id === ids);
  }
  return animals.filter((animal) => ids.includes(animal.id));
}

/**
 * Finds an animal by its name.
 * @param {string} animalName - The name of the animal to search for.
 * @returns {object} - The resident object of the found animal, including the species name.
 */
function animalByName(animalName) {
  if (!animalName) {
    return {};
  }

  for (let animal of animals) {
    let resident = animal.residents.find((res) => res.name === animalName);
    if (resident) {
      return { ...resident, species: animal.name };
    }
  }

  return {};
}

/**
 * Retrieves an array of employees based on their IDs.
 * @param {string|string[]} ids - The IDs of the employees to retrieve. Can be a single ID or an array of IDs.
 * @returns {Employee[]} - An array of employees matching the provided IDs.
 */
function employeesByIds(ids) {
  if (!ids) {
    return [];
  }
  if (typeof ids === "string") {
    return employees.filter((employee) => employee.id === ids);
  }
  return employees.filter((employee) => ids.includes(employee.id));
}

/**
 * Retrieves an employee object by their first name or last name.
 * @param {string} employeeName - The first name or last name of the employee.
 * @returns {object} - The employee object matching the given name, or an empty object if not found.
 */
function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return (
    employees.find(
      (employee) =>
        employee.firstName === employeeName ||
        employee.lastName === employeeName
    ) || {}
  );
}

/**
 * Retrieves the managers for a given employee based on their ID or name.
 *
 * @param {string|number} idOrName - The ID or name of the employee.
 * @returns {Object} - An object containing the employee's details and an array of their managers' names.
 */
function managersForEmployee(idOrName) {
  const employee = employees.find(
    (emp) =>
      emp.id === idOrName ||
      emp.firstName === idOrName ||
      emp.lastName === idOrName
  );
  if (!employee) {
    return {};
  }
  return {
    ...employee,
    managers: employee.managers.map((managerId) => {
      const manager = employees.find((emp) => emp.id === managerId);
      return `${manager.firstName} ${manager.lastName}`;
    }),
  };
}

/**
 * Retrieves the coverage information for an employee based on their ID or name.
 * If no argument is provided, returns the coverage information for all employees.
 *
 * @param {string|number} idOrName - The ID or name of the employee.
 * @returns {Object} - The coverage information for the employee(s).
 */
function employeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.reduce((acc, employee) => {
      acc[`${employee.firstName} ${employee.lastName}`] =
        employee.responsibleFor.map(
          (id) => animals.find((animal) => animal.id === id).name
        );
      return acc;
    }, {});
  }
  const employee = employees.find(
    (emp) =>
      emp.id === idOrName ||
      emp.firstName === idOrName ||
      emp.lastName === idOrName
  );
  return {
    [`${employee.firstName} ${employee.lastName}`]: employee.responsibleFor.map(
      (id) => animals.find((animal) => animal.id === id).name
    ),
  };
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage,
};
