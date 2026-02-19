import React, { useEffect, useState } from 'react';
import * as d from './DAO_API';

export const ListarTelevisores = () => {

  const [televisores, setTelevisores] = useState([]);

  const listarTelevisores = async () => {
      const res = await d.obtenerTelevisores();
      setTelevisores(res);
  }

  useEffect(() => {
    listarTelevisores()
  }, []);

  const botonEliminar = async (idEliminar) => {
    if(window.confirm("¿Está Seguro(a) De Querer Eliminar El Registro ("+idEliminar+")?")){
      const msg = await d.eliminarTelevisor(idEliminar);
      document.getElementById("mensajes").innerHTML = msg;
      listarTelevisores();
    }
    console.clear();
  }

  return (
    <div className="container  mt-3  pb-3"  style={{ backgroundColor:"lightgray"}}>

      <div id="mensajes" className="pt-2   pb-2"></div>

      <h1 className="text-center">Listado de Eventos</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>CODIGO</th>
            <th>NOMBRE</th>
            <th>FECHA</th>
            <th>UBICACION</th>
            <th>ORGANIZADOR</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>

          { televisores.map((x) => (
            
            <tr className="text-center" key={ x.id }>
              <td>{ x.id }</td>
              <td>{ x.codigo_evento }</td>
              <td>{ x.nombre_del_evento}</td>
              <td>{ x.fecha}</td>
              <td>{ x.ubicacion}</td>
              <td>{ x.organizador}</td>

              <td>
                <button className="btn btn-outline-dark"  onClick={ () => botonEliminar(x.id) }>
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>

          )) }

        </tbody>
      </table>

    </div>
  )
}
