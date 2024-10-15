const oracionInput = document.getElementById('oracion');
const palabraBuscarInput = document.getElementById('palabra-buscar');
const buscarButton = document.getElementById('buscar');
const palabras = document.getElementById('palabras');
const reemplazarButton = document.getElementById('reemplazar');
const resultado = document.getElementById('resultado');

const sinonimos = {
        algoritmo: ['procedimiento', 'metodo'],
        programacion: ['desarrollo', 'codificacion'],
        lenguaje: ['idioma', 'dialecto'],
        codigo: ['secuencia', 'instruccion'],
        redes: ['conexiones', 'infraestructura'],
        tipado: ['clasificacion', 'declaración'],
        terminal: ['consola', 'interfaz'],
        compilador: ['traductor', 'procesador'],
        interpretador: ['ejecutor', 'analizador'],
        navegador: ['browser', 'explorador'],
        servidor: ['Host', 'proveedor'],
        compatibilidad: ['coherencia', 'interoperabilidad'],
        simple: ['sencillo', 'llano'],
        complejo: ['intrincado', 'complicado'],
        automata: ['maquina', 'robot']
};

buscarButton.addEventListener('click', () => {
    const palabraBuscar = palabraBuscarInput.value.toLowerCase();
    const oracion = oracionInput.value.toLowerCase();
    
    if (oracion.includes(palabraBuscar)) {
        Swal.fire({
          icon: "success",
          title: "Palabra encontrada",
          text: `La palabra "${palabraBuscar}" se encontró en la oración.`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Palabra no encontrada",
          text: `La palabra "${palabraBuscar}" no se encontró en la oración.`,
        });
      }
  });

reemplazarButton.addEventListener('click', () => {
    const palabraSelecionada = palabras.value;
    const oracion = oracionInput.value.trim();

    if (oracion === '') {
        alert('ingrese una oracion, campo vacio');
        return;
    }

    const sinonimo = sinonimos[palabraSelecionada][Math.floor(Math.random() * 2)];

    const regex = new RegExp(palabraSelecionada, 'gi');
    const resultadoText = oracion.replace(regex, sinonimo);

    resultado.textContent = resultadoText;
});