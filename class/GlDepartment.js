const { glDepartment, glDepartmentEmployee, glEmployee } = require("../models");
const { Op } = require("sequelize");

class GlDepartment {
    constructor( req, res ) {
		this.req = req;
		this.res = res;
	}


	handleError(error){
		return this.res.json({
			error: true,
			msg: error
		})
	}
	async getDepartmentById(departmentID){
		try {
			const results = await glDepartment.findAll({where: {department_id: departmentID }});
			const { error } = results;
			if(error) throw new Error("Some Error")
			return this.res.json({
				error: error,
				data: results
			});
		} catch (error) {
			this.handleError(error)
		}
    }

    async getDepartmentEmplyeeId(departmentID){
        try {
            const employeeIds = await glDepartmentEmployee.findAll(
                {
                    where: {department_id: departmentID },
                    attributes: ["employee_id"] 
            });
            return this.res.json({
                error: error,
                data: employeeIds
            });	
        } catch (error) {
			this.handleError(error)
            
        }
            
    }

    async getDepartmentMembers(id){
        let temp = this.getDepartmentEmplyeeId(id).data;
        console.log(temp)
        try {
            const accountIds = await glEmployee.findAll(
                {
                    where: {
                        [Op.or]: [...temp]
                    },
                    attributes: ["account_id"] 
            });
            const { error } = accountIds;
			if(error) throw new Error("Some Error")
			return this.res.send(accountIds);
		} catch (error) {
			this.handleError(error)
		}	
    }
}

module.exports = GlDepartment;