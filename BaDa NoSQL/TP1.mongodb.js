use ('veterinaria');

db.createCollection('clientes');

db.clientes.insertOne(

    {
        "nombre": "Joel Barrientos",
        "dirección": "Calle falsa 123",
        "teléfono": "1122334455",
        "mascotas":[
            {
            "nombre": "Benji", 
            "especie": "Perro",
            "raza": "Labrador",
            "edad": 5, 
            "sexo": "Macho",
            "historial clínico": [
                {
                "fecha": "2023-09-01",
                "veterinario": "Dr. Peterson",
                "motivo_consulta": "Vacunación anual",
                "tratamiento": "Vacuna antirrábica",
                "observaciones": "Todo en orden"
                }
               ]
                
            }
        ]
    }
)

db.clientes.find();

db.createCollection('veterinarios');

db.veterinarios.insertOne(
{
    "nombre": "Dr. Peterson",
    "especialidad": "Medicina interna",
    "telefono": "1120304050",
    "consultas_realizadas": [
      {
        "cliente": "Joel Barrientos",
        "mascota": "Benji",
        "fecha": "2023-09-01",
        "motivo_consulta": "Vacunación anual",
        "tratamiento": "Vacuna antirrábica"
      }
    ]
  }
)

db.veterinarios.find();

//Show database name
db.getName();

//Rename database name
db.copyDatabase("test", "veterinaria");