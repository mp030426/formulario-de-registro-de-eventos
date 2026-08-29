# Sistema de gestión de eventos

Proyecto académico full stack para administrar eventos mediante una API REST construida con Django REST Framework y una interfaz web en React.

> **Estado:** prototipo académico orientado a demostrar integración frontend–backend, persistencia en MySQL y operaciones CRUD. No está preparado para producción.

## Arquitectura

```text
React + Vite  →  API REST Django  →  MySQL
```

## Tecnologías

**Backend**

- Python y Django
- Django REST Framework
- MySQL
- django-cors-headers

**Frontend**

- React
- Vite
- React Router
- Fetch API

## Funcionalidades

- Listado, creación, consulta, actualización y eliminación de eventos.
- Asociación de cada evento con un organizador.
- Validación de datos mediante serializadores.
- Cliente web conectado a la API.
- Administración de datos mediante Django Admin.

## Endpoints principales

| Método | Ruta | Acción |
|---|---|---|
| `GET` | `/eventos/` | Listar eventos |
| `POST` | `/eventos/` | Crear un evento |
| `GET` | `/eventos/<id>/` | Consultar un evento |
| `PUT` | `/eventos/<id>/` | Actualizar un evento |
| `DELETE` | `/eventos/<id>/` | Eliminar un evento |

## Instalación

### 1. Backend

Crea la base de datos `eva3_back_end` en MySQL y configura las variables de entorno indicadas en `backend/.env.example`.

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt

export DJANGO_SECRET_KEY="reemplazar-por-una-clave-local"
export DJANGO_DEBUG="True"
export MYSQL_DATABASE="eva3_back_end"
export MYSQL_USER="root"
export MYSQL_PASSWORD="tu_clave"
export MYSQL_HOST="127.0.0.1"
export MYSQL_PORT="3306"

python backend/manage.py migrate
python backend/manage.py runserver
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

## Decisiones de seguridad

- La clave de Django y las credenciales de MySQL se leen desde variables de entorno.
- `DEBUG` está desactivado por defecto.
- CORS se limita a los orígenes locales utilizados durante el desarrollo.
- Los nuevos archivos `.env`, entornos virtuales, dependencias y archivos compilados quedan excluidos mediante `.gitignore`.
- Se retiró del código activo un modelo académico que almacenaba contraseñas directamente; la autenticación debe implementarse con el sistema seguro de Django.

## Limitaciones y próximos pasos

- Incorporar autenticación y permisos por endpoint.
- Agregar pruebas automatizadas de API y frontend.
- Validar autorización antes de modificar o eliminar recursos.
- Configurar despliegue, HTTPS y gestión de secretos para un entorno productivo.

## Autor

Maximiliano Pincheira — estudiante de Ingeniería Informática en INACAP.
