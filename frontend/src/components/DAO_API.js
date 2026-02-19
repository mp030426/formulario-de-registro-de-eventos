
export const obtenerTelevisores = async () => {
    const res = await fetch('http://127.0.0.1:8000/eventos/');
    if (!res.ok) throw new Error("Error al listar televisores");
    return await res.json();
}





export const eliminarTelevisor = async (idEliminar) => {
    console.log("ID a eliminar:", idEliminar);

    const response = await fetch(`http://127.0.0.1:8000/eventos/${idEliminar}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const msg =`
            <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h4>¡ Evento  (${ idEliminar }) Eliminado Correctamente !</h4>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        return msg;
    } else {
        const msg =`
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <h4>¡ Erro al Eliminar Evento :  (${ response.status }) : ${ response.statusText } !</h4>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        return msg;
    }
}





export const registrarTelevisor = async (televisor) => {
    
    const url = "http://127.0.0.1:8000/eventos/";

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": parseInt(televisor.id),
            "codigo_evento": parseInt(televisor.codigo_evento),
            "nombre_del_evento": String(televisor.nombre_del_evento).trim(),
            "fecha": String(televisor.fecha).trim(),
            "ubicacion": String(televisor.ubicacion).trim(),
            "organizador": String(televisor.organizador).trim()
        })
    });
    
    //return await response.json();

}