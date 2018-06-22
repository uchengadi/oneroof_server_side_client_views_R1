/*
 * File: app/view/FailedPaymentMainpanel.js
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

Ext.define('cobuy.view.FailedPaymentMainpanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.failedpaymentmainpanel',

    requires: [
        'cobuy.view.FailPaymentGridpanel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.grid.Panel'
    ],

    height: 250,
    width: 400,
    layout: 'fit',
    title: 'Failed Payment Management',

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
                            itemId: 'viewBtn',
                            iconCls: 'preview',
                            text: 'View Payment'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'failpaymentgridpanel'
                }
            ]
        });

        me.callParent(arguments);
    }

});