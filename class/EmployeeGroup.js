
const { employeeGroup, glEmployee, account, sequelize } = require("../models");
const { Op } = require("sequelize");

class EmployeeGroup {
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
	
	handleEmployeesList(list){
        return list.map(item => {
            return {
                id: item.account_id,
                name: item.account.name,
            }
        })
    }

    async getAllEmployeeGroup(){
		try {
			const results = await employeeGroup.findAll();
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

    async getGroupMembers(id){
        const employeeId = `SELECT employee_id FROM employee_group WHERE group_id = ${id}`;
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
			return this.res.json(this.handleEmployeesList(accountIds));
		} catch (error) {
			this.handleError(error)
		}		
    }
}

module.exports = EmployeeGroup;