import asyncHandler from "express-async-handler";
import Roles from "../../models/roleModel.js";
import Permission from "../../models/permissionModel.js";

export const getRoles = asyncHandler(async (req, res, next) => {
  try {
    const currentPage = Number(req.query.page) || 1;
    const perPage = Number(req.query.page) || 5;
    let totalItems;
    const count = await Roles.countDocuments();
    totalItems = count;

    const roles = await Roles.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    res.json({
      message: "Get data roles successfully",
      data: roles,
      total_data: totalItems,
      per_page: perPage,
      current_page: currentPage,
    });
  } catch (error) {
    next(error);
  }
});

export const createRoles = asyncHandler(async (req, res, next) => {
  try {
    const { name, description, permissions } = req.body;

    const roles = new Roles({
      name: name,
      description: description,
      permissions: [],
    });

    for (let i = 0; i <= permissions.length - 1; i++) {
      const getPermission = await Permission.findById({
        _id: permissions[i],
      });

      roles.permissions.push({
        name: getPermission.name,
        permission: permissions[i],
      });
    }
    const createRole = await roles.save();
    res.status(201).json({
      message: "create roles successfully",
      data: createRole,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getRoleById = asyncHandler(async (req, res, next) => {
  try {
    const id = req.params.id;

    const roles = await Roles.findById({ _id: id });

    if (!roles) {
      res.status(404).json({
        messages: "Role not found",
      });
    } else {
      res.json({
        messages: "Get roles by ID successfully",
        data: roles,
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const deleteRoles = asyncHandler(async (req, res, next) => {
  try {
    const id = req.params.id;

    const roles = await Roles.findById({ _id: id });

    if (roles) {
      await roles.remove();
      res.json({
        message: `Role id : ${roles._id} removed`,
        data: roles,
      });
    } else {
      res.status(404).json({
        message: `Role id : ${id} not found`,
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const addRolePermission = asyncHandler(async (req, res, next) => {
  try {
    const id = req.params.id;
    const { permissions } = req.body;

    const roles = await Roles.findById({ _id: id });

    if (!roles) {
      res.satus(404);
      throw Error("Roles not found");
    }

    for (let i = 0; i <= permissions.length - 1; i++) {
      const getPermission = await Permission.findById({
        _id: permissions[i].permission,
      });

      roles.permissions.push({
        name: getPermission.name,
        permission: permissions[i].permission,
      });
    }

    const addPermission = await roles.save();
    res.json({
      message: "Add Role Permission successfully",
      data: addPermission,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

export const deleteRolePermission = asyncHandler(async (req, res, next) => {
  try {
    const id = req.params.id;
    const permission = req.params.permission;

    const roles = await Roles.findById({ _id: id });

    if (!roles) {
      res.satus(404);
      throw Error("Roles not found");
    }

    const permis = roles.permissions.filter((element, index) => { 
        return element.permission != permission
    });
    roles.permissions = permis

    const removePermission = await roles.save()
    res.json({
      message: "Add Role Permission successfully",
      data: removePermission,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});
