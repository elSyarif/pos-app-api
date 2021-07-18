import RoleModel from '../../models/roleModel.js'

export default class roleService{
    async getRoles(){
        const count = await RoleModel.countDocuments()

        const Roles = await RoleModel.find()
        return Roles
    }
}