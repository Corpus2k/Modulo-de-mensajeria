# Módulo de Mensajería  
Aplicación desarrollada con React que permite gestionar el envío de mensajes a través de distintos canales (WhatsApp, SMS y correo electrónico). Los usuarios pueden ingresar un mensaje, cambiar entre canales y enviar la información de forma dinámica.  

## 🔹 Tecnologías usadas  
- ✅ React  
- ✅ React Router  
- ✅ Context API  
- ✅ Styled Components  

## 🔹 Características  
- ✅ Selección de canales dinámicos.  
- ✅ Persistencia temporal de los datos.  
- ✅ Navegación controlada entre pasos.  

## 🔹 Flujo de Uso  

### 1️⃣ Selección del Tipo de Mensaje  
El usuario elige entre diferentes categorías de mensajes, como:  
- 📩 Invitación  
- ⏳ Recordatorio de proceso  
- ✍️ Personalizado  

*(Se pueden agregar más tipos según sea necesario.)*  

### 2️⃣ Selección del Canal de Envío  
El usuario escoge el medio por el cual se enviará el mensaje:  
- 📧 **Correo Electrónico**  
- 📱 **Mensaje de Texto (SMS)**  
- 💬 **WhatsApp**  

*(Se pueden agregar más canales según los requerimientos.)*  

### 3️⃣ Edición y Personalización del Mensaje  
- El sistema carga un mensaje predefinido según el tipo y el canal seleccionado.  
- El usuario puede modificar el mensaje según sus necesidades.  
- **Si el usuario cambia de canal o tipo de mensaje, los datos ingresados se preservan.**  

### 4️⃣ Envío del Mensaje  
- Una vez configurado el mensaje, el usuario puede enviarlo.  
- Actualmente, los mensajes se visualizan en la **consola** para pruebas.  
