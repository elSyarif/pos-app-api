import mongoose from 'mongoose'
import dotenv from 'dotenv'

import connectDB from './config/database.js'
import Supplier from './models/supplierModel.js'
import Category from './models/categoryModel.js'
import Product from './models/productModel.js'

dotenv.config()
connectDB()

const importData = async () =>{
    try {
        await Supplier.deleteMany()
        // await Category.deleteMany()
        // await Product.deleteMany()

        await Supplier.insertMany()
        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}


if (process.argv[2] === '-d') {
    // destroyData()
  } else {
    importData()
  }