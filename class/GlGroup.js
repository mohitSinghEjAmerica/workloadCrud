
const { glGroup } = require("../models");

class GlGroup {
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

	async getCategoriesByDepartmentLead(departmentLead){
		try {
			const results = await glGroup.findAll({where: {ag_lead_id:departmentLead }});
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

	async getCategoriesByDepartment(departmentID){
		try {
			const results = await glGroup.findAll({where: {department_id: departmentID }});
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
}

module.exports = GlGroup;