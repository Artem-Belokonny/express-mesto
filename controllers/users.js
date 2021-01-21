const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send({ data: user });
    })
    .catch(() => {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(400).send({ message: 'Произошла ошибка при отправке данных' }));
};

const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { name: '' })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(400).send({ message: 'Произошла ошибка при отправке данных' }));
};

const updateAvatar = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { avatar: '' })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(400).send({ message: 'Произошла ошибка при отправке данных' }));
};

module.exports = {
  getUsers, getUser, createUser, updateUser, updateAvatar,
};
