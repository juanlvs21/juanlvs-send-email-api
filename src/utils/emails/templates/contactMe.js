const year = new Date().getFullYear();

function contactMeTemplate(name, message) {
  return `
    <div>
      <h3>Hola Juan, <i><b> ${name}</b></i> se ha puesto en contacto contigo.</h3>
      <p>
        ${message}
      </p>
      <footer style="text-align: center;background-color: #e8e8e8;padding: 5px 0px;color: #424242;">
        <p style="margin: 5px;">
          <i
            >Copyright © ${year}
            <a style="color: #2a4365; font-weight: bold;text-decoration: none;" href="http://juanlvs.netlify.app">Juanlvs</a>
          </i>
        </p>
        <p style="margin: 5px;"><i>Venezuela, Nueva Esparta</i></p>
        <p style="margin: 5px;"><i>All rights reserved.</i></p>
      </footer>
    </div>
  `;
}

module.exports = contactMeTemplate;
