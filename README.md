# Countries App

## Estructura de carpetas

La estructura base está determinada por el enrutamiento de Next.js basado en carpetas para cada subpath. En este caso solo se tiene la ruta principal (index.tsx) y la ruta para ver el detalle de un país ([countryname].tsx).

Adicionalmente se tiene una carpeta "components" para ubicar los componentes reutilizables y posiblemente transversales a varias rutas. Así como una carpeta raíz para los tipos de TypeScript y otra para las utilidades.
## Tipos

Los tipos de TypeScript se dividen en tipos "payload" para representar los objetos obtenidos de los endpoints, y tipos "entity" para representar el objeto "payload" transformado a una versión más simple para su uso en el código.

En la carpeta "utils" se agregó un archivo "map.utils.ts" para almacenar funciones de mapeo de tipos "payload" a tipos "entity".
## State Management

Dado que la cantidad total de países no es tan grande se optó por consultarlos y mostrarlos todos en la carga inicial de la app. Sin embargo, por falta de tiempo no se implementaron optimizaciones para evitar consultar los datos innecesariamente . Podría ser buena opción usar Context API para evitar consultar el detalle de un país en caso de que se tenga cacheado.
## Testing

Tamabién por falta de tiempo se omitió la implementación de tests. Sin embargo, es recomendable usar TestingLibrary para testear la funcionalidad  de cada componente.