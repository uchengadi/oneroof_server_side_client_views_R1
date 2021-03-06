/*
 * File: app/view/ProductConstituentMainpanel.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('cobuy.view.ProductConstituentMainpanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.productconstituentmainpanel',

    requires: [
        'cobuy.view.ProductConstituentGridPanel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.grid.Panel'
    ],

    height: 250,
    width: 400,
    layout: 'fit',
    title: 'Product Constituent Management',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'addBtn',
                            iconCls: 'add',
                            text: 'Add Product Constituent'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'editBtn',
                            iconCls: 'edit',
                            text: 'Edit Product Constituent'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'deleteBtn',
                            iconCls: 'delete',
                            text: 'Delete Product Constituent'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'productconstituentgridpanel1'
                }
            ]
        });

        me.callParent(arguments);
    }

});