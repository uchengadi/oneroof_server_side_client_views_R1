/*
 * File: app/view/HamperContainersMainpanel.js
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

Ext.define('cobuy.view.HamperContainersMainpanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.hampercontainersmainpanel',

    requires: [
        'cobuy.view.HamperContainersGrid',
        'Ext.grid.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator'
    ],

    height: 250,
    width: 400,
    layout: 'fit',
    title: 'Hamper Containers Management',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'hampercontainersgrid'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'addcontainerBtn',
                            iconCls: 'add',
                            text: 'Add New Hamper Container'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'edithamperBtn',
                            iconCls: 'edit',
                            text: 'Edit Hamper container Information'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'deletehamperBtn',
                            iconCls: 'delete',
                            text: 'Remove Hamper Container'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});