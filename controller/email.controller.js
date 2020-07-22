// Utils
const validateEmail = require("../utils/validators/validateEmail");
const sentEmailContactMe = require("../utils/emails/sendEmail");

async function contactMe(req, res) {
  try {
    const { name, email, subject, message } = req.body;

    const errors = [];
    if (!name)
      error.push({ field: "name", message: "El nombre es obligatiorio" });
    if (!subject)
      error.push({ field: "subject", message: "El asunto es obligatiorio" });
    if (!message)
      error.push({ field: "message", message: "El mensaje es obligatiorio" });
    if (!email)
      error.push({
        field: "email",
        message: "El correo electrónico es obligatiorio",
      });
    else if (!validateEmail(email))
      error.push({
        field: "email",
        message: "Ingrese un correo electrónico válido",
      });

    if (errors.length) res.status(442).json({ data: errors });

    sentEmailContactMe(email, name, subject, message)
      .then(() => {
        res.status(200).json({ status: "Ok!" });
      })
      .catch(() => {
        res.status(400).json({ status: "Error desconocido" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Internal Server Error!" });
  }
}

module.exports = {
  contactMe,
};
