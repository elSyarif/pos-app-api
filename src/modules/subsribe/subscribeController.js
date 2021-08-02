import asyncHandler from "express-async-handler";
import Subscribe from "../../models/subscriberModel.js";

export const createSubcriber = asyncHandler(async(req, res) =>{
    try {
        for (let i = 0; i < req.body.length; i++) {
            const { name, email, password, subscribe} = req.body[i]

            const subscriber = new Subscribe({
                name: name,
                email: email,
                password: password,
                subscribe: subscribe
            })
            
            const createSubscribe = await subscriber.save()
        }

        res.status(201).json({
            message: "Create Subcribe successfully",
          });
    } catch (error) {
        throw new Error(error.message);
    }
})