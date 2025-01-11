const API = import.meta.env.VITE_API_URL;

const GuardarUsuarios = async () => {
    const response = await fetch(`${API}/users`, {
        method: 'POST',
        headers:{
            'content-type': 'aplication/json'
        },
        body: JSON.stringify({
            dni: FormData.dni,
            nombres: FormData.nombres,
            apellidos: FormData.apellidos,
            direccion: FormData.direccion,
            email: FormData.email,
            telefono: FormData.telefono
        })
    })
}