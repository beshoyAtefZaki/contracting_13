// Copyright (c) 2024, dynamic and contributors
// For license information, please see license.txt
/* eslint-disable */


frappe.require("assets/erpnext/js/financial_statements.js", function() {
	frappe.query_reports["Comparison Project Cost"] = {
		"filters": [
			{
				fieldname: "from_date",
				label: __("From Date"),
				fieldtype: "Date",
				default: frappe.datetime.get_today(),
				reqd: 1
			},
			{
				fieldname: "to_date",
				label: __("To Date"),
				fieldtype: "Date",
				default: frappe.datetime.add_days(frappe.datetime.get_today(),1),
				// reqd: 1
			},
			{
				fieldname: "comparison",
				label: __("Comparison"),
				fieldtype: "Link",
				options: "Comparison",
				// reqd: 1
			},
			{
				fieldname: "customer",
				label: __("Customer"),
				fieldtype: "Link",
				options: "Customer",
			},
			{
				fieldname: "project",
				label: __("Project"),
				fieldtype: "Link",
				options: "Project",
			},
			
	
		],
		// "formatter": function(value, row, column, data, default_formatter) {
			
		// 	value = default_formatter(value, row, column, data);
	
		// 	if (data && (data.indent == 0 )) {
		// 		value = $(`<span>${value}</span>`);
		// 		var $value = $(value).css("font-weight", "bold");
		// 		value = $value.wrap("<p></p>").parent().html();
		// 	}
	
		// 	return value;
		// }
	};
})

