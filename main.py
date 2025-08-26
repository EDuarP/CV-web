from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/", StaticFiles(directory="dist", html=True), name="frontend")

# Endpoint para descargar CV
@app.get("/api/download/cv")
async def download_cv():
    file_path = os.path.join(os.path.dirname(__file__), "dist", "HV.pdf")
    if not os.path.exists(file_path):
        return {"error": "El archivo no existe"}
    return FileResponse(
        path=file_path,
        media_type="application/pdf",
        filename="CV_Eduardo_Duarte.pdf"
    )

# Middleware SPA fallback
@app.middleware("http")
async def spa_fallback(request: Request, call_next):
    response = await call_next(request)

    # Si no encontró la ruta y no es una API
    if response.status_code == 404 and not request.url.path.startswith("/api"):
        index_path = os.path.join(os.path.dirname(__file__), "dist", "index.html")
        if os.path.exists(index_path):
            return FileResponse(index_path)

    return response
