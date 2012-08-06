/*
 * Ext.ux.menu.MenuBar demo application.
 *  
 * Copyright (c) 2012 Alexander Tokarev.
 *  
 * This code is licensed under the terms of the Open Source LGPL 3.0 license.
 * Commercial use is permitted to the extent that the code/component(s) do NOT
 * become part of another Open Source or Commercially licensed development library
 * or toolkit without explicit permission.
 * 
 * License details: http://www.gnu.org/licenses/lgpl.html
 */

Ext.Loader.setConfig({
    enabled:        true,
    disableCaching: true,
    paths: {
        'Ext.ux':  'ux'
    }
});

Ext.require([
    'Ext.panel.Panel',
    'Ext.ux.menu.MenuBar',
    'Ext.window.MessageBox'
]);

var panel, menu;

Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();

    var onClick = function(menuItem) {
        Ext.Msg.show({
            title:   'Click!',
            msg:     'You clicked item "' + menuItem.text + '"',
            icon:    Ext.Msg.INFO,
            buttons: Ext.Msg.OK
        });
    };

    panel = new Ext.panel.Panel({
        renderTo: Ext.getBody(),
        
        width:  400,
        height: 200,
        
        tbar: {
            xtype: 'menubar',
            
            items: [{
                text: 'Foo menu',
                menu: {
                    plain: true,
                    items: [{
                        icon: false,
                        text: 'Item 1',
                        handler: onClick
                    }, {
                        icon: false,
                        text: 'Item 2',
                        handler: onClick
                    },
                    '-',
                    {
                        icon: false,
                        text: 'Item 3 (submenu)',
                        menu: {
                            plain: true,
                            items: [{
                                icon: false,
                                text: 'Submenu item',
                                handler: onClick
                            }]
                        },
                        handler: onClick
                    }]
                }
            }, {
                text: 'Bar menu',
                menu: {
                    plain: true,
                    items: [{
                        icon: false,
                        text: 'Item 1',
                        handler: onClick
                    }, {
                        icon: false,
                        text: 'Item 2',
                        handler: onClick
                    }]
                }
            }]
        }
    });
});
