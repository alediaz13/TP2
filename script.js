function validarFormulario() {
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = parseInt(document.getElementById('edad').value, 10);
    const altura = parseInt(document.getElementById('altura').value, 10);
    const email = document.getElementById('email').value.trim();
    
    // Validar nombre y apellido
    if (nombre === '' || apellido === '') {
      mostrarResultado('Nombre y Apellido son requeridos.', 'rojo');
      return;
    }
    
    if (nombre.length > 50 || apellido.length > 50) {
      mostrarResultado('Nombre y Apellido deben tener máximo 50 caracteres.', 'rojo');
      return;
    }
    
    // Validar edad
    if (edad < 0 || edad < 18) {
      mostrarResultado('La edad debe ser mayor o igual a 18.', 'rojo');
      return;
    }
    
    // Validar altura
    if (altura < 0 || altura > 230) {
      mostrarResultado('La altura debe estar entre 0 y 230 cm.', 'rojo');
      return;
    }
    
    // Validar correo electrónico
    if (!email.includes('@')) {
      mostrarResultado('Correo electrónico no válido.', 'rojo');
      return;
    }
    
    // Si todas las validaciones pasan, mostrar mensaje verde
    mostrarResultado('Formulario válido. ¡Envío exitoso!', 'verde');
  }
  
  function mostrarResultado(mensaje, color) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
    resultado.className = `resultado-${color}`;
  }