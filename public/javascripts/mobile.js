//Ext.setup({
//	tabletStartupScreen: 'tablet_startup.png',
//	phoneStartupScreen: 'phone_startup.png',
//	icon: 'icon.png',
//	glossOnIcon: false,
//	onReady: function() {
//
//		var panel, homePanel, peoplePanel;
//
//		homePanel = new Ext.Component({
//			title: 'Home',
//			cls: 'home',
//			scroll: 'vertical',
//			tpl: [
//				'<ul class="groups">',
//                                    '<tpl for=".">',
//					'<li>',
//                                            '<h2>{group.name}</h2>',
//					'</li>',
//                                    '</tpl>',
//				'</ul>'
//			]
//		});
//
//                peoplePanel = {
//                    title: "People",
//                    html: "gentecilla"
//                }
//
//		panel = new Ext.TabPanel({
//			fullscreen: true,
//			cardSwitchAnimation: 'slide',
//			ui: 'light',
//			items: [homePanel, peoplePanel]
//		});
//
//                refresh = function() {
//                                Ext.Ajax.request({
//                                        url: '/groups.json',
//                                        success: function(resp) {
//                                               var data= Ext.decode(resp.responseText);
//                                               homePanel.update(data);
//                                        }
//
//                                });
//                        };
//
//                refresh();
//
//
//	}
//});
