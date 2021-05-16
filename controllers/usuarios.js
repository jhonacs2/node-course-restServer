const { response } = require("express");

const usuariosGet = (req, res = response) => {

  const {q, nombre = 'No name', apikey } = req.query;

  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey
  });
};

const usuariosPut = (req, res = response) => {
  
  const id = req.params.id;
  
  res.json({
    msg: "put API - controlador",
    id
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "Post API - controlador",
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "Delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
