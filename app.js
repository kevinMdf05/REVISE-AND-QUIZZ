const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.json());

// Configuration Nodemailer
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kevmouf@gmail.com',  
    pass: 'hdyk xfoq qtqg ypvv'        
  }
});

// Fonction d'envoi d'email
function sendEmail(subject, message) {
  let mailOptions = {
    from: 'kevmouf@gmail.com',
    to: 'kevmouf@gmail.com',  // Envoie à toi-même
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erreur : ' + error);
    } else {
      console.log('Email envoyé : ' + info.response);
    }
  });
}

// Route pour les inscriptions d'utilisateurs (exemple)
app.post('/api/users', (req, res) => {
  const { username, email } = req.body;
  
  if (!username || !email) {
    return res.status(400).send('Le nom d\'utilisateur et l\'email sont requis.');
  }

  const newUser = { id: Date.now(), username, email };

  // Envoyer une alerte d'inscription par email
  sendEmail('Nouvelle inscription', `Un nouvel utilisateur s'est inscrit : ${username}, ${email}`);
  
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});