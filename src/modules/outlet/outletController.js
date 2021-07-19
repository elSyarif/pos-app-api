import asyncHandler from "express-async-handler";
import Outlet from "../../models/outletModel.js";

export const getOutlet = asyncHandler(async (req, res) => {
  try {
      const id = req.outlet._id
      const currentPage = Number(req.query.page) || 1;
      const perPage = Number(req.query.page) || 5;
      let outlet;
      let count; 
      if(req.user.roles.name !== 'Admin'){
          outlet = await Outlet.findById(id)
          count = await Outlet.countDocuments({$where : {_id : id}})
      }else{
          outlet = await Outlet.find().skip((currentPage - 1) * perPage).limit(perPage);
          count = await Outlet.countDocuments()
      }

      res.status(200).json({
          message : "Get Outlet successfully",
          data : outlet,
          total_data: count,
          per_page: perPage,
          current_page: currentPage,
      })
  } catch (error) {
    throw new Error(error.message);
  }
});

export const createOutlet = asyncHandler(async (req, res) => {
  try {
    const { name, address, website, phone, email } = req.body;

    const outlet = await Outlet.create({
      name: name,
      address: address,
      website: website,
      phone: phone,
      email: email,
    });

    if (outlet) {
      res.json({
        message: "Outlet craete successfully",
        data: outlet,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Outlet data");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const updateOutlet = asyncHandler(async (req, res) => {
  try {
    const id = req.params.is;
    const { name, address, website, phone, email } = req.body;

    const outlet = await Outlet.findBId(id);

    if (outlet) {
      outlet.name = name || outlet.name;
      outlet.address = address || outlet.address;
      outlet.website = website || outlet.website;
      outlet.phone = phone || outlet.phone;
      outlet.email = email || outlet.email;

      const update = await outlet.save();

      res.json({
        message: "Update outlet successfully",
        data: update,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Outlet not found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const deleteOulet = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;

    const outlet = await Outlet.findById(id);

    if (outlet) {
      const del = await Outlet.deleteOne(id);

      res.json({
        message: "Delete outlet successfully",
        data: del,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Outlet not found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});
