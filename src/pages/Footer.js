import "./Footer.css";
export function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4> RENZO PAUL VENTURA GALLEBO </h4>
            <ul className="list-unstyled">
              <li>+639874555565 </li>
              <li> SAN FRANCISCO, AGUSAN DEL SUR</li>
              <li> 6501 </li>
            </ul>
          </div>
          {/* column1 */}
          <div className="col">
            <h4> VJ AT ALBA</h4>
            <ul className="list-unstyled">
              <li> +639998760289 </li>
              <li> LUZOIN PHILIPPINES </li>
              <li> 8501 </li>
            </ul>
          </div>

          {/* column1 */}
          <div className="col">
            <h4> KODEGO BOOTCAMP</h4>
            <ul className="list-unstyled">
              <li> help@kodego.ph </li>
              <li> PHILIPINES </li>
              <li> +636127747856 </li>
            </ul>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} VJ AND RPG SHOPPY | All right
              reserved | Terms of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
