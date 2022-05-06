const { wlWorkload, account, glDepartment, sequelize } = require("../models");
const { Op } = require("sequelize");

class Workload {
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

    async getWorkload(){
        try {
            const sql = `SELECT wl_workload.id,
            gl_department.name AS department_name,
            wl_category.name AS category_name,
            gl_group.name AS group_name,
            wl_workload.short_description, 
            wl_workload.long_description,
            wl_status.value,
            wl_workload.priority,
            account1.name AS customer_name, 
            account2.name AS resolver_name,
            wl_workload.parent_ticket_id,
            wl_workload.ticket_type,
            wl_workload.item,
            wl_workload.reference_number,
            wl_workload.expected_due_date
            FROM wl_workload
            INNER JOIN gl_department ON wl_workload.department_id = gl_department.id
            INNER JOIN wl_category ON wl_workload.wl_category_id = wl_category.id
            INNER JOIN wl_status ON wl_workload.status = wl_status.id
            INNER JOIN gl_group ON wl_workload.group_id = gl_group.id
            INNER JOIN gl_employee e1 ON wl_workload.customer_id = e1.employee_id
            INNER JOIN account account1 ON e1.account_id = account1.id
            INNER JOIN gl_employee e2 ON wl_workload.resolver_id = e2.employee_id
            INNER JOIN account account2 ON e2.account_id = account2.id;`;
		    const [ results ] = await sequelize.query( sql, { raw: true } );
			return this.res.json(results);
		} catch (error) {
			this.handleError(error)
		}	
    }
}

module.exports = Workload;