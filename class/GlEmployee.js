const { glEmployee, account, sequelize } = require("../models");
const { Op } = require("sequelize");

class GlEmployee {
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

    handleEmployees(list){
        return list.map(item => {
            return {
                id: item.employee_id,
                name: item.account.name,
                account_id: item.account.id
            }
        })
    }

    async getEmployeeName(){
        try {
            glEmployee.belongsTo(account, {foreignKey:'account_id', targetKey:'id'})
            const accountIds = await glEmployee.findAll(
                {
                    include: [ { model: account, attributes: ['id','name'] } ],
                    attributes: ["employee_id"] ,
                    raw: true,
                    nest: true
            });
            const { error } = accountIds;
			if(error) throw new Error("Some Error")
			return this.res.json(this.handleEmployees(accountIds));
		} catch (error) {
			this.handleError(error)
		}	
    }
}

module.exports = GlEmployee;