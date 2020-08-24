var opciones = document.querySelectorAll('#select option');

validacionCorrecta = false;

select.addEventListener('change', function() {
    input.value = '';
    if(select.value == 0){
        input.addEventListener('keydown', function() {
            reg = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
            if(reg.test(input.value)){
                validacionCorrecta = true;
            }else {
                validacionCorrecta = false;
            }
        });
    }else if (select.value == 1){
        input.addEventListener('keydown', function() {
            reg = /^(http:\/\/|https:\/\/|ftp:\/\/)(www).?\w.?\w/;
            if(reg.test(input.value)){
                validacionCorrecta = true;
            }else {
                validacionCorrecta = false;
            }
        });
    }else if (select.value == 2){
        input.addEventListener('keydown', function() {
            reg = /^\S+@\S+\.\S+$/;
            if(reg.test(input.value)){
                validacionCorrecta = true;
            }else {
                validacionCorrecta = false;
            }
        });
    }
});

button.addEventListener('click', function() {
    if(validacionCorrecta == true){
        alert('Formato correcto!');
    }else {
        alert('Formato incorrecto');
    }
});
