# 8 BITS BATTLE

Juego multijugador de navegador para el aula. El servidor Node.js conserva el estado de la partida y sincroniza a los jugadores mediante WebSockets.

## Ejecutar en local

1. Instala Node.js.
2. En la carpeta del proyecto ejecuta `npm install`.
3. Arranca con `npm run dev` (o abre `INICIAR.bat`).
4. Abre `http://localhost:3000`. El primer navegador que se conecte será el profesor; abre esta página primero en el equipo del profesor.
5. Los demás jugadores entran usando la misma dirección de red local del equipo del profesor.

## Publicar para jugar desde cualquier red

El frontend se publica en Vercel y el servidor Node/WebSocket en Render. Render mantiene una conexión WebSocket persistente para la partida; Vercel sirve la web pública.

1. Importa este repositorio en Render como **Web Service**. Render detecta `render.yaml` y ejecuta `npm install` y `npm start`. Espera a que termine el primer despliegue y copia la URL del servicio, por ejemplo `https://8bits-battle-server.onrender.com`.
2. Importa el mismo repositorio en Vercel. En **Settings → Environment Variables**, añade `GAME_SERVER_URL` con la URL HTTPS del servicio Render (sin `/` al final). Vuelve a desplegar para que el frontend incluya esa dirección.
3. Comparte la URL pública de Vercel con la clase. El profesor debe abrirla primero; será el anfitrión. El resto entra a esa misma URL y escribe su nombre.

También puedes jugar directamente con la URL pública de Render; en ese caso el frontend y el servidor comparten origen y no hace falta configurar Vercel.

## Reglas y controles

- Cada jugador tiene 3 vidas y 10 disparos por partida.
- WASD o flechas para moverse; ratón para apuntar; clic o espacio para disparar; M activa o desactiva el sonido.
- La zona se cierra desde los 25 segundos y daña a quien quede fuera.

## Despliegue

- `npm run dev`: servidor local con web y WebSocket.
- `npm start`: comando de arranque usado por Render.
- `npm run build`: genera `dist/` y configura el endpoint WebSocket desde `GAME_SERVER_URL`.
- `vercel.json`: publica `dist/` como frontend estático.
- `render.yaml`: configura el servidor Node público que acepta las conexiones WebSocket.
