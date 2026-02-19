import React, { useState } from 'react';
import * as d from './DAO_API';

export const FormRegistrar = () => {

    const [id, setId] = useState("");
    const [codigo_evento, setCodigo] = useState("");
    const [nombre_del_evento, setNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [organizador, setOrganizador] = useState("");

    

    const botonGuardar = async (e) => {
        //--- Para evitar que la página se recargue ---
        e.preventDefault();
        
        //--- Para obtener los registrod y validar que "id" NO se repita ---
        const res = await d.obtenerTelevisores();
        const datos = res;

        let r = false;
        r = datos.some(x => parseInt(id) === parseInt(x.id));

        //--- Si El ID ya existe, error, de lo contrario, se procede a insertar ---
        if(r === true){
            const msg =`
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <h4>¡ El Id (${ id }) Ya Existe. Ingrese Un Id Diferente !</h4>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            document.getElementById("mensajes").innerHTML = msg;
            document.getElementById("txtid").value = "";
            document.getElementById("txtid").focus();
        }else{

            // Genera el objeto en formato JSON, con los datos del formulario.
            var miObjeto = { id, codigo_evento, nombre_del_evento, fecha, ubicacion, organizador };
            
            try{
                const res = await d.registrarTelevisor(miObjeto);

                // Limpia el contenido de las variables de estado.
                setId("");
                setCodigo("");
                setNombre("");
                setFecha("");
                setUbicacion("");
                setOrganizador("");

                // Mensaje de acción correcta.
                const msg =`
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <h4>¡ Televisor (${ id }) Registrado Correctamente !</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                document.getElementById("mensajes").innerHTML = msg;

                // Limpia los campos del formulario.
                document.getElementById("miFormulario").reset();

            }catch(err){
                console.log("ERROR : "+err);
            }
            
        }

    } // Cierra la función "botonGuardar".



  return (
    <div className="container mt-3  pt-3  pb-3"  style={{ backgroundColor:"lightgray"}}>
        
        <div id="mensajes" className="pt-2   pb-2"></div>
        
        <h1 className="text-center">Formulario De Registro De Eventos</h1>
        <center>
            <form id="miFormulario"   method="POST"  onSubmit={ botonGuardar }  className="col-9" >

                <div className="mb-3">
                    <select  onChange={(e) => setOrganizador(e.target.value)}  id="cbomar" name="cbomar" className="form-select" required>
                        <option value="">Seleccione Un Organizador Del Evento</option>
                        <option value="1">Maximiliano</option>
                        <option value="2">Adallet</option>
                        <option value="3">Arael</option>
                        <option value="4">Alexandra</option>
                        <option value="5">Anastasia</option>
                        <option value="6">Jayline</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input type="number"  onChange={(e) => setCodigo(e.target.value)}  id="txtmod" className="form-control" placeholder="Digite Codigo"  required/>
                </div>
                <div className="mb-3">
                    <input type="text"  onChange={(e) => setNombre(e.target.value)}  id="txtpre" className="form-control" placeholder="Digite Nombre"  required/>
                </div>
                <div className="mb-3">
                    <input type="date"  onChange={(e) => setFecha(e.target.value)}  id="txtpre" className="form-control" placeholder="Digite Fecha"  required/>
                </div>
                <div className="mb-3">
                    <input type="text"  onChange={(e) => setUbicacion(e.target.value)}  id="txtubi" className="form-control" placeholder="Digite Ubicacion"  required/>
                </div>
                <button className="btn btn-dark btn-lg">Registrar Evento</button>
            </form>
        </center>
    </div>
  )
}
