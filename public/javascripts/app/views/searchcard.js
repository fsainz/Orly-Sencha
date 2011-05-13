ToolbarDemo.views.Searchcard = Ext.extend(Ext.Panel, {
    title: "search",
    iconCls: "team",
    styleHtmlContent: true,
    html: "placeholder text",
    initComponent: function() {
        Ext.apply(this, {
            dockedItems: [{
                xtype: "toolbar",
                title: "Search"
            },
            {
                xtype: 'groupscard'
            }
            ]
        });
        ToolbarDemo.views.Searchcard.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('searchcard', ToolbarDemo.views.Searchcard);
