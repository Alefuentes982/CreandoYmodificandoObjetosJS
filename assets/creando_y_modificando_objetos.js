
// Constructor del objeto Consultorio
function Consultorio(cname, patients) {
    let _cnombre = cname
    let _pacientes = patients;


    // Definiendo propiedades de objeto Consultorio(nombre y pacientes)

    Object.defineProperty(this, 'cnombre', {
        get: function () {
            return _cnombre;
        },
        set: function (cname) {
            _cnombre = cname;
        }
    });


    Object.defineProperty(this, 'pacientes', {
        get: function () {
            return _pacientes;
        },
        set: function (pacientesNuevos) {
            _pacientes = pacientesNuevos;   //En caso que a futuro se quieran agregar nuevos pacientes
        }
    });
}


//Constructor del objeto Paciente

function Paciente(pnombre, edad, rut, diagnostico) {
    let _pnombre = pnombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    Object.defineProperty(this, 'pnombre', {
        get: function () {
            return _pnombre;
        },
        set: function (nombre) {
            _pnombre = nombre;
        }
    });

    Object.defineProperty(this, 'edad', {
        get: function () {
            return _edad;
        },
        set: function (edad) {
            _edad = edad;
        }
    });

    Object.defineProperty(this, 'rut', {
        get: function () {
            return _rut;
        },
        set: function (rut) {
            _rut = rut;
        }
    });

    Object.defineProperty(this, 'diagnostico', {
        get: function () {
            return _diagnostico;
        },
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    });

};
    //Metodos "customizados" 
    
    // mostrar todos

    Consultorio.prototype.todos = function () {
        const encontrados = this.pacientes;
        let todostodos = '';
        encontrados.forEach((objeto, indice, arreglo) => {
            todostodos += `Nombre ${objeto.pnombre}, Edad ${objeto.edad}, Rut ${objeto.rut}, Diagnostico ${objeto.diagnostico} \n`;
        });
        return todostodos;
    };

      // Busca usuarios por nombre

      Consultorio.prototype.buscaUsuario = function (nombre) {
        const encontrados = this.pacientes.filter(
            (paciente) => paciente.pnombre == nombre);

        let coincidencias = '';
          encontrados.forEach((objeto, indice, arreglo) => {
            coincidencias += `Nombre:${objeto.pnombre}, Edad: ${objeto.edad}, Rut: ${objeto.rut}, Diagnostico: ${objeto.diagnostico} \n`
        });
        return coincidencias;
    };


    // Agrega nuevos pacientes

    Consultorio.prototype.setPacientes = function (pacientesNuevos) {
        this.pacientes = pacientesNuevos;
    };


    var p1 = new Paciente("Javier", 18, "1-0", "covid");
    var p2 = new Paciente("Pablo", 23, "2-1", "influenza");
    var p3 = new Paciente("Pedrito", 14, "3-3", "adenovirus");
    var p4 = new Paciente("Javier", 18, "1-0", "influenza");

    var consultorioCentral = new Consultorio("Central", [p1, p2, p3, p4]);

    console.log("Busca al usuario Pedrito \n");
    console.log (consultorioCentral.buscaUsuario("Pedrito")); // busca por nombre
    console.log ("\n");
    console.log ("Lista todos los usuarios \n" )
    console.log (consultorioCentral.todos()); // busca todos 
    console.log ("\n");
    console.log("Busca al usuario Javier \n"); //aparece 2 veces en la lista
    console.log (consultorioCentral.buscaUsuario("Javier")); // busca por nombre
    console.log ("\n");
