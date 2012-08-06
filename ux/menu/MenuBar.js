/*
 * Plain old boring (and missing from Ext JS) menu bar widget.
 *
 * Version 0.01.
 *  
 * Copyright (c) 2012 Alexander Tokarev.
 *
 * Usage: see demo application.
 *  
 * This code is licensed under the terms of the Open Source LGPL 3.0 license.
 * Commercial use is permitted to the extent that the code/component(s) do NOT
 * become part of another Open Source or Commercially licensed development library
 * or toolkit without explicit permission.
 * 
 * License details: http://www.gnu.org/licenses/lgpl.html
 */

Ext.define('Ext.ux.menu.MenuBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias:  'widget.menubar',
    
    requires: [
        'Ext.menu.Menu',
        'Ext.ux.menu.menubar.Item'
    ],
    
    /*
     * @cfg {Array} items Menu items, may include submenus as well
     */
    items: [],
    
    cls:    'ux-menubar',
    frame:  false,
    border: false,
    
    initComponent: function() {
        var me = this,
            items;
        
        items    = Ext.Array.map(me.items || [], me.mapTopMenuItem, me);
        me.items = items;
        
        me.callParent();
    },
    
    mapTopMenuItem: function(item) {
        var me = this,
            newItem = {};
        
        Ext.apply(newItem, item, {
            xtype: 'button'
        });
    
        me.setDefaultType(newItem);
        
        return newItem;
    },
    
    setDefaultType: function(menu) {
        var me = this;
        
        if ( !menu ) return;
        
        if ( Ext.isArray(menu) ) {
            for ( var i = 0, l = menu.length; i < l; i++ ) {
                menu[i].xtype = 'menubaritem';
                
                if ( menu[i].menu ) {
                    me.setDefaultType(menu[i].menu);
                };
            };
        }
        else if ( Ext.isObject(menu) ) {
            menu.defaultType = 'menubaritem';
            
            if ( menu.menu ) {
                me.setDefaultType(menu.menu);
            };
            
            if ( menu.items ) {
                me.setDefaultType(menu.items);
            };
        }
    }
});
