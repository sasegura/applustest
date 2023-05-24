# Descripción del proyecto

El objetivo de esta prueba técnica es evaluar tus habilidades en el desarrollo de una aplicación web utilizando el framework React.js en JavaScript (ES6), la gestión de estados con Redux utilizando hooks, y la comunicación con APIs mediante Axios y Redux-Sagas.

Debes construir una aplicación que permita a los usuarios iniciar sesión, ver una lista de productos y agregar productos a una cesta de compra. Se deben realizar validaciones adicionales, como redirigir al usuario al registro si el inicio de sesión falla y redirigir al inicio de sesión si se intenta comprar sin haber iniciado sesión.

## Requisitos técnicos

    *   Utilizar el framework React.js y JavaScript (ES6) para desarrollar la aplicación.
    *   Implementar el control de estados utilizando Redux y Redux-Sagas.
    *   La aplicación debe tener una página de inicio de sesión que incluya campos para ingresar el nombre de usuario y contraseña.
    *   Al enviar el formulario de inicio de sesión, la aplicación debe hacer una solicitud a una API utilizando Axios para verificar las credenciales del usuario.
    *   Si las credenciales son válidas, la aplicación debe almacenar la información de inicio de sesión en el estado de Redux y redirigir al usuario a una página de lista de productos.
    *   Si las credenciales son inválidas, la aplicación debe redirigir al usuario a una página de registro para dar de alta un nuevo usuario.
    *   En la página de lista de productos, la aplicación debe mostrar una lista de productos disponibles.
    *   Cada producto debe tener un botón "Agregar a la cesta" que permita agregar el producto a la cesta de compra.
    *   La aplicación debe tener una página de cesta de compra que muestre los productos agregados a la cesta.
    *   Si se intenta acceder a la página de cesta de compra sin haber iniciado sesión, la aplicación debe redirigir al usuario a la página de inicio de sesión.
    *   En la página de cesta de compra, debe haber un botón "Comprar" que simule la compra de los productos y muestre un mensaje de confirmación.

## Consideraciones adicionales

    >   Puedes utilizar cualquier librería o enfoque para el enrutamiento (por ejemplo, React Router) y para la validación de formularios (por ejemplo, Formik).
    >   Para las APIs, puedes utilizar una API simulada o una API real (por ejemplo, una API de prueba como JSONPlaceholder).
    >   Se recomienda organizar el código en componentes reutilizables y mantener una estructura de proyecto clara.
    >   La interfaz de usuario y el diseño visual son importantes, pero no es necesario que sean extremadamente elaborados. Puedes utilizar componentes de UI > preexistentes o frameworks como Bootstrap para agilizar el proceso.
    >   Se valorará el uso adecuado de los conceptos y patrones mencionados, así como la calidad y legibilidad del código.
    >   La prueba técnica no tiene una duración específica, pero se espera que el desarrollo y la implementación de las funcionalidades mencionadas se realicen en un tiempo razonable.

¡Buena suerte con la prueba técnica! Si tienes alguna pregunta adicional, no dudes en hacerla.
