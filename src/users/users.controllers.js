const uuid = require("uuid");
const Users = require("../models/users.models");
const { hashPassword } = require("../utils/crypto");

const getAllUsers = async () => {
  const data = await Users.findAll({
    were: {
      status: "active",
    },
  });
  return data;
};

const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id,
      status: "active",
    },
  });
  return data;
};

const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPassword(data.password),
        profileImage: data.profileImage,
        phone: data.phone,
    })
    return newUser
}

const updateUser = async (id, data) => {
  const result = await Users.update(data, {
    where: {
      id,
    },
  });
  return result;
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id,
    },
  });
  return data;
};

const getUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: {
      email: email,
      status: "active",
    },
  });
  return data;
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
};
