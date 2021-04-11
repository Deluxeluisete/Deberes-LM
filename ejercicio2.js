


verAsignaturas(["Pepito","DAMB","ED","LM"])
verAsignaturas(["Juan","DAMB","ED","LM"],["Sara","DAMB","Asignatura1"])
verAsignaturas(["Luis","DAMB","ED","LM"],["Marta","DAMB","Asignatura1"],["Cris","DAMZ","Lengua","Ingles"])
verAsignaturas()
function verAsignaturas(...Alumnos)
{   
    if (Alumnos.length==0){
        document.write("no hay datos para mostrar")
        return
    }
    
    for(let Alumno of Alumnos){
        let i=0, salida=''
        for(let valor of Alumno){
            if (i==0){
                salida ="Nombre: " + valor
            }else if (i==1){
                salida +=" Curso: " + valor
            }else if (i==2){
                salida +=" Asignaturas: " + valor
            }else if (i>2){
                salida +=" / " + valor
            }
            i+=1
        }
        salida +=" <br/>"

        document.write(salida)
    }
    
}