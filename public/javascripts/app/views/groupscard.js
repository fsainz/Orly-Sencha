//ToolbarDemo.views.Groupscard = Ext.extend(Ext.Panel, {
//    title: "groups",
//    html: "prueba"
//
//});
ToolbarDemo.views.Groupscard = Ext.extend(Ext.List, {
id:'grouplist',
itemTpl:'<div>{name}</div>',
store:ToolbarDemo.GroupListStore

});

Ext.reg('groupscard', ToolbarDemo.views.Groupscard);
