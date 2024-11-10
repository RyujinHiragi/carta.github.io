$(document).ready(function(){
    // Al cargar la página, ocultamos las cortinas
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');
  
    // Evento de clic en .valentines-day
    $('.valentines-day').click(function(){
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
        
        // Desaparecer la carta y el corazón dentro del sobre
        $('.envelope').fadeOut(800, function() {
            // Ocultar elementos dentro de .valentines-day
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Mostrar el #card con una animación ondulante
            $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});

            // Recalcular la escala dependiendo del tamaño de la pantalla
            var screenWidth = $(window).width();
            var scaleFactor = 1; // Escala base

            if (screenWidth <= 480) {
                scaleFactor = 0.8; // Reducir el tamaño de la animación en pantallas muy pequeñas
            } else if (screenWidth <= 768) {
                scaleFactor = 0.9; // Un poco más pequeño en pantallas medianas
            }

            $('#card').animate({'opacity': 1}, {
                duration: 1000, 
                step: function(now, fx) {
                    var scale = scaleFactor + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala con el factor ajustado
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            }); // Animación de ondulación
        });
    });
    
    // Ajustar comportamiento dinámico cuando la ventana cambia de tamaño
    $(window).resize(function(){
        var screenWidth = $(window).width();

        // Aquí puedes poner más ajustes si lo necesitas
        if (screenWidth <= 480) {
            // Realiza algún ajuste si la pantalla es muy pequeña
            $('.valentines-day').css('max-width', '300px');
        } else {
            // Restablecer el tamaño si la pantalla es más grande
            $('.valentines-day').css('max-width', '100%');
        }
    });
});
