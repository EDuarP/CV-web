import "./cv.css";
import pp from "./assets/pp.jpg";
import Navbar from "./navbar.jsx";
import sql from "./assets/sql.png";
import python from "./assets/python.png";
import powerbi from "./assets/powe-bi.png";
import powerapps from "./assets/powerapp.png";
import powerautomate from "./assets/power-automate.png";
import visualstudio from "./assets/visual-studio.png";
import iconreact from "./assets/react.svg";
import fastapi from "./assets/fastapi-seeklogo.png";

export default function Cv() {

    const descargarCV = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/download/cv", {
                method: "GET",
                mode: "cors"
            });
            if (!response.ok) throw new Error("No se pudo descargar el CV");

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "CV_Eduardo_Duarte.pdf";
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error("Error al descargar el CV:", error);
        }
        };
    return ( 
    <><Navbar />
    <div className="page">
        <aside className="sidebar info">
            <img src={pp} alt="Pp" className="Pp"/>
            <h3>Eduardo J. Duarte Peña</h3>
            <p>Colombia</p>
            <div className="info">
                <a href="mailto:eduardo.jose881@gmail.com">Email </a>
                <a>
                   - 
                </a>
                <a href="https://www.linkedin.com/in/eduardo-duarte-penna/">  LinkedIn</a>
                <a href="https://github.com/EDuarP"></a>
            </div>
            <p></p>
            <button className="btn primary" onClick={descargarCV}>Descargar CV</button>
            <div className="social">
                <img 
                    src={python} 
                    className="logos" />
                <img 
                    src={sql}
                    className="logos" />
                <img 
                    src={powerbi}
                    className="logos" />
                <img 
                    src={visualstudio}
                    className="logos" />
            </div>
            <div className="social">
                <img 
                    src={iconreact} 
                    className="logos" />
                <img 
                    src={fastapi}
                    className="logos" />
                <img 
                    src={powerapps}
                    className="logos" />
                <img 
                    src={powerautomate}
                    className="logos" />
            </div>
        </aside>
        <main className="cv">
        <div className="content">
            <h2>Educación</h2>
            <ul>
                <li>Universidad Santo Tomás – Ingeniería Mecatrónica</li>
                <li>Coursera / Google – Especialización en Análisis de Datos (Abril 2023 - Septiembre 2023)</li>
            </ul>

            <h2>Experiencia</h2>
            <h3>Desarrollador de Automatización Industrial – TAYRONAMA SAS (Marzo 2025 - Julio 2025)</h3>
            <ul>
                <li>Desarrollé una aplicación en Python con Tkinter para trazabilidad del pesaje de cerdos.</li>
                <li>Automatización de captura de datos con comunicación serial.</li>
                <li>Procesamiento de datos con Pandas y reportes automáticos.</li>
                <li>Integración de API de WhatsApp para envío de reportes.</li>
                <li>Diseño de interfaz en Figma y dashboards en Power BI.</li>
            </ul>

            <h3>Practicante de Innovación y Tecnología – MSD (Julio 2024 - Febrero 2025)</h3>
            <ul>
                <li>Optimización de procesos ahorrando más de 30 horas.</li>
                <li>Creación de KPIs en Power BI para control de desempeño.</li>
                <li>Automatización con Power Apps y Power Automate.</li>
                <li>Análisis de datos con Python, SQL y Machine Learning.</li>
            </ul>

            <h3>Científico de Datos / Joven Investigador – Universidad Santo Tomás (Junio 2023 - Noviembre 2023)</h3>
            <ul>
                <li>Análisis de datos de transporte público en Bucaramanga con Python y SQL.</li>
                <li>Creación de panel interactivo en Power BI.</li>
                <li>Construcción de modelos de Machine Learning para predicción de rutas.</li>
                <li>Publicación de artículo científico sobre IA en transporte público.</li>
            </ul>

            <h2>Cursos y Certificados</h2>
            <ul>
                <li>Data Science Inteligencia Artificial – MinTIC (2023)</li>
                <li>Process Improve – Harvard ManageMentor (2024)</li>
                <li>Machine Learning Fundamentals – DataCamp (2023)</li>
                <li>Python for Data Science – Coursera (2022)</li>
                <li>Databases and SQL for Data Science – Coursera (2023)</li>
                <li>Deep Learning in Python – DataCamp (2023)</li>
            </ul>

            <h2>Idiomas</h2>
            <ul>
                <li>Español: Nativo</li>
                <li>Inglés: B2</li>
            </ul>

            <h2>Reconocimientos</h2>
            <ul>
                <li>1er puesto en CienTIoN 2023 (Investigación e innovación).</li>
                <li>3er premio en Huawei ICT Competition - Cloud Track (2022-2023).</li>
            </ul>

            <h2>Habilidades Técnicas</h2>
            <ul>
                <li>Python, SQL, Power BI, Power Apps, Power Automate</li>
                <li>Data Analytics, Machine Learning, IA, Computer Vision</li>
                <li>Microsoft Office, CRISP-DM, Process Improve, Automatización</li>
            </ul>

            <h2>Publicaciones</h2>
            <p>
                Advances in solutions on public transportation problems with artificial intelligence.  
                <a href="https://philolinginvestigations.com/index.php/journal/article/view/227" target="_blank">
                Ver publicación
                </a>
            </p>
            </div>
    </main>
    </div>
    </>
  );
}