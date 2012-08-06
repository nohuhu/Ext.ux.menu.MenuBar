/*
 * Menu bar item.
 *
 * Copyright (c) 2012 Alexander Tokarev.
 *
 * This component is not intended to be used directly.
 *
 * This code is licensed under the terms of the Open Source LGPL 3.0 license.
 * Commercial use is permitted to the extent that the code/component(s) do NOT
 * become part of another Open Source or Commercially licensed development library
 * or toolkit without explicit permission.
 * 
 * License details: http://www.gnu.org/licenses/lgpl.html
 */

Ext.define('Ext.ux.menu.menubar.Item', {
    extend: 'Ext.menu.Item',
    alias:  'widget.menubaritem',
    
    renderTpl: [
        '<tpl if="plain">',
            '{text}',
        '<tpl else>',
            '<a id="{id}-itemEl" class="' + Ext.baseCSSPrefix + 'menu-item-link {uxLinkClass}" href="{href}" <tpl if="hrefTarget">target="{hrefTarget}"</tpl> hidefocus="true" unselectable="on">',
                '<img id="{id}-iconEl" src="{icon}" class="' + Ext.baseCSSPrefix + 'menu-item-icon {iconCls}" />',
                '<span id="{id}-textEl" class="' + Ext.baseCSSPrefix + 'menu-item-text" <tpl if="arrowCls">style="margin-right: 17px;"</tpl> >{text}</span>',
                '<img id="{id}-arrowEl" src="{blank}" class="{arrowCls}" />',
            '</a>',
        '</tpl>'
    ],
    
    beforeRender: function() {
        var me = this;
        
        me.callParent();
        
        if ( me.icon === false ) {
            Ext.apply(me.renderData, {
                uxLinkClass: 'ux-menubar-item-link-noicon',
                iconCls:     'ux-menubar-item-noicon'
            });
        }
        else {
            Ext.apply(me.renderData, {
                uxLinkClass: ''
            });
        };
    }
});
