# 📘 TCIT Challenge – React + Redux + Node.js + PostgreSQL

Este repositorio contiene la solución al challenge técnico solicitado por **TCIT Cloud Solutions**, cuyo objetivo es desarrollar una aplicación web para gestionar *Posts* utilizando:

- **Frontend:** React + Redux Toolkit  
- **Backend:** Node.js + Express  
- **Base de datos:** PostgreSQL  
- **Buenas prácticas:** JSON camelCase, JS camelCase  

---

## 🚀 Funcionalidades Implementadas

### **Frontend (React + Redux)**
- Crear posts  
- Eliminar posts  
- Listar posts  
- Filtrar posts por nombre (filtro local, sin llamadas adicionales al backend)  
- Llamada al endpoint de listado **solo una vez** al cargar la vista  

### **Backend (Node.js + Express + PostgreSQL)**
- `GET /posts` → Retorna todos los posts  
- `POST /posts` → Crea un post y retorna el creado  
- `DELETE /posts/:id` → Elimina un post y retorna el eliminado  
- Conexión a PostgreSQL mediante `pg`  
- Variables de entorno con `dotenv`  

---


# 🛠️ Requisitos Previos

Asegúrate de tener instalado:

- Node.js (LTS recomendado)
- PostgreSQL
- npm o yarn
- macOS o Linux (probado en macOS)

---

# 🗄️ Configuración de la Base de Datos

### 1. Crear base de datos

```bash
createdb posts_db_tcit
