const { glDepartment, glDepartmentEmployee, glEmployee, account, sequelize } = require("../models");
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

    handleDepartmentList(list){
        return list.map(item => {
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                lead: item.department_lead_id
            }
        })
    }

    handleMemberList(list){
        return list.map(item => {
            return {
                id: item.account_id,
                name: item.account.name,
            }
        })
    }

    async getAllDepartments(){
		try {
			const results = await glDepartment.findAll();
			const { error } = results;
			if(error) throw new Error("Some Error")
			return this.res.json(this.handleDepartmentList(results));
		} catch (error) {
			this.handleError(error)
		}
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
            glDepartment
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
        const employeeId = `SELECT employee_id FROM gl_department_employee WHERE department_id = ${id}`;
        const [results] = await sequelize.query(employeeId, {raw: true})
        try {
            glEmployee.belongsTo(account, {foreignKey:'account_id', targetKey:'id'})
            const accountIds = await glEmployee.findAll(
                {
                    where: { [Op.or]: results },
                    include: [ { model: account, attributes: ['id','name'] } ],
                    attributes: ["account_id"] ,
                    raw: true,
                    nest: true
            });
            const { error } = accountIds;
			if(error) throw new Error("Some Error")
			return this.res.json(this.handleMemberList(accountIds));
		} catch (error) {
			this.handleError(error)
		}	
    }
}

module.exports = GlDepartment;