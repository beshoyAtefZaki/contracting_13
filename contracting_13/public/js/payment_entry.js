frappe.ui.form.on("Payment Entry", {
 
  refresh: function (frm) {
    frm.events.get_cost_centrt(frm)
    },
     
  project:function(frm){
    
        frm.events.get_cost_centrt(frm)
  },

  get_cost_centrt:function(frm){
    if(frm.doc.project && !frm.doc.cost_center){
    frm.call({
      'method':"frappe.client.get_value",
      'args': {
        'doctype': 'Project',
        'filters': {
          'name': frm.doc.project
        },
        'fieldname':'cost_center'
      },
      'callback': function(res){
        if (res.message.cost_center)  {
          if (res.message.callback.length > 2 ){
            frm.set_value("cost_center", res.message.cost_center)
            frm.refresh_field("cost_center")
          }
            
        }
        
      },
    })
  }
}
});
