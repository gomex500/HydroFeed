import React, { Component } from "react";
import '../../css/footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid footer">
        <div className="foot" id="footer">
          <a
            href="https://www.facebook.com/profile.php?id=100095312241878&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer">
            <i class="bi bi-facebook"></i>
          </a>
          <a
            href="https://wa.me/message/TYF5RNNKI3YZM1"
            target="_blank"
            rel="noopener noreferrer">
            <i class="bi bi-whatsapp"></i>
          </a>
          <a
            href="https://instagram.com/hydro_feed?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
            rel="noopener noreferrer">
            <i class="bi bi-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer">
            <i class="bi bi-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer">
            <i class="bi bi-youtube"></i>
          </a>
          <h3 className="slogan">Terminos de use - Politicas de Privacidad</h3>
          <p>&copy; 2023 HydroFeed</p>
        </div>
      </div>
    );
  }
}