import './style.css'

function Info() {
  const fondoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1kimk6GBcp1v9043N4rivoqYlrQ6gnTHw1L28zrA3Q&s=10";

  return (
    <div className="info-container">
      <div 
        className="info-card"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('${fondoUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="info-title">FAKE API</h1>
        <p className="info-author">Jhan Sebastián Rivera</p>

        <div className="info-logo-placeholder">
          <img 
            src="https://raw.githubusercontent.com/dullangrat768/PokeAPI-webview-version/refs/heads/main/Pokemon-Icono.png"
            alt="FakeAPI Logo" 
            className="info-logo-img" 
          />
        </div>

        {/* Cuadro de descripción */}
        <div className="info-badge">
          <p>API con catálogo e información de productos y e-commerce</p>
        </div>

        {/* Enlace a GitHub y Versión */}
        <div className="info-footer">
          <a 
            href="https://github.com/dullangrat768" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="info-github-link"
          >
            github.com/dullangrat768
          </a>
          <span className="info-version">v 1.0.0</span>
        </div>
      </div>
    </div>
  );
}

export default Info;