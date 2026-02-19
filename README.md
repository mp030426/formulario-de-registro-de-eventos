# 📌 Sistema de Registro de Eventos — Django REST + MySQL + React/Vite

Proyecto académico que implementa un sistema completo de gestión de eventos.  
Incluye un backend desarrollado con **Django REST Framework** conectado a **MySQL**, y un frontend construido con **React + Vite**, permitiendo realizar operaciones CRUD de forma dinámica y con mensajes de éxito al usuario.

---

## 🚀 Tecnologías utilizadas

### 🔹 Backend (API REST)
- Python  
- Django  
- Django REST Framework  
- MySQL  
- Autenticación integrada de Django  

### 🔹 Frontend
- React  
- Vite  
- Axios  
- CSS (o framework que estés usando)

---

## 🎯 Funcionalidades principales

- **CRUD completo de eventos**  
  - Crear evento  
  - Listar eventos  
  - Editar evento  
  - Eliminar evento  

- **Datos del evento**
  - Código  
  - Nombre  
  - Fecha  
  - Ubicación  
  - Organizador  

- **Frontend totalmente conectado a la API**
  - Página para listar eventos  
  - Formulario reactivo para crear y editar  
  - Mensajes de éxito y error  
  - Actualización automática al modificar datos  

- **Autenticación**
  - Uso del sistema de usuarios de Django  
  - Control de permisos básico

---

## 📁 Estructura general del proyecto

```
project/
│── backend/
│   ├── manage.py
│   ├── api/
│   ├── eventos/
│   ├── settings/
│   └── ...
│
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── ...
│
└── README.md
```

---

## ⚙️ Instalación del Backend (Django)

```bash
cd backend
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Asegúrate de configurar tu conexión MySQL en `settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'eventos_db',
        'USER': 'tu_usuario',
        'PASSWORD': 'tu_contraseña',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

---

## ⚙️ Instalación del Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

El frontend debe apuntar a la URL del backend, por ejemplo:

```javascript
const API_URL = "http://127.0.0.1:8000/api/eventos/";
```

---

## 📡 Endpoints principales (API REST)

```
GET    /api/eventos/          → Listar eventos  
POST   /api/eventos/          → Crear evento  
PUT    /api/eventos/<id>/     → Actualizar evento  
DELETE /api/eventos/<id>/     → Eliminar evento  
```

---

## 🎓 Objetivo del proyecto

Este proyecto fue creado para demostrar habilidades en:

- Conexión frontend ↔ backend  
- Creación de APIs REST con Django  
- Uso de bases de datos SQL  
- Gestión de estado y consumo de APIs en React  
- Validación de información en formularios  
- Arquitectura CRUD moderna  

---

## 👨‍💻 Autor

**Maximiliano Pincheira**  
Estudiante de Ingeniería Informática – INACAP  
