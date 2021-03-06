/*
 * File: app/view/AssignmentOfBankAccountNumberToCountryMainpanel.js
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

Ext.define('cobuy.view.AssignmentOfBankAccountNumberToCountryMainpanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.assignmentofbankaccountnumbertocountrymainpanel',

    requires: [
        'cobuy.view.ListOfCountriesOnThePlatform',
        'Ext.grid.Panel',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 350,
    width: 600,
    title: 'Assignment of Bank Account Number to Country',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'listofcountriesontheplatform',
                    flex: 1
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    hidden: true,
                    title: 'My Panel'
                },
                {
                    xtype: 'form',
                    flex: 1,
                    hidden: true,
                    itemId: 'countryidform',
                    bodyPadding: 10,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'id'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'assignBtn',
                            iconCls: 'country_account',
                            text: 'Assign Account Number to Country'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});