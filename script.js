document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const orderResult = document.getElementById('order-result');
  
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'es-ES';
  
      recognition.onstart = function() {
        startBtn.textContent = 'Escuchando...';
      };
  
      recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        orderResult.textContent = 'Orden identificada: ' + result;
      };
  
      recognition.onerror = function(event) {
        console.error('Error de reconocimiento: ' + event.error);
      };
  
      recognition.onend = function() {
        startBtn.textContent = 'Iniciar Identificación';
      };
  
      startBtn.addEventListener('click', function() {
        recognition.start();
      });
    } else {
      startBtn.style.display = 'none';
      orderResult.textContent = 'El reconocimiento de voz no es compatible con este navegador.';
    }
  });
  