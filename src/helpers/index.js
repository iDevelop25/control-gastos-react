

export const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const keyFecha = Date.now().toString(36)

    return random + keyFecha;
}

export const formatearFecha = (fecha) => {
    const opciones = { 
        weekday:"long", 
        year:"numeric", 
        month:"short", 
        day:"numeric"
    }
    const fechaNueva = new Date(fecha).toLocaleDateString('es-ES', opciones);
    return fechaNueva;
}