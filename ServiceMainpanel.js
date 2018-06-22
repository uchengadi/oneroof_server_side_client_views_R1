/*
 * File: app/view/ServiceMainpanel.js
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

Ext.define('cobuy.view.ServiceMainpanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.servicemainpanel',

    requires: [
        'cobuy.view.ServicesGridpanel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.grid.Panel'
    ],

    height: 250,
    width: 400,
    layout: 'fit',
    title: 'Service Management',

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
                            text: 'Add New Service'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'editBtn',
                            iconCls: 'edit',
                            text: 'Edit Service'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'deleteBtn',
                            iconCls: 'delete',
                            text: 'Delete Service'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'servicesgridpanel'
                }
            ]
        });

        me.callParent(arguments);
    }

});