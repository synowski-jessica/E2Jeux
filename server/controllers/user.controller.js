const User = require("../models/user.model");

const createUser = async (req, res) => {
  const { pseudo, email, password } = req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(400).json({ error: "L'utilisateur existe déjà" });
    }

    const newUser = await User.create({
      pseudo,
      email,
      password,
    });

    res.status(201).json(newUser);
    res.send("Bienvenue, " + req.body.pseudo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  const emailUser = req.body.email;
  console.log(emailUser);
  try {
    await User.destroy({
      where: {
        email: emailUser,
      },
    });
    res.status(201).json(`l'utilisateur ${emailUser} a été supprimé`);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  deleteUser,
};
