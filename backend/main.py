from fastapi import FastAPI
import socketio
from socket_server import sio

app = FastAPI()

socket_app = socketio.ASGIApp(sio, app)

@app.get("/ping")
def ping():
    return {"status": "Backend running"}
