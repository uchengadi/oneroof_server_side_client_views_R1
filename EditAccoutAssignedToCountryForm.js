/*
 * File: app/view/EditAccoutAssignedToCountryForm.js
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

Ext.define('cobuy.view.EditAccoutAssignedToCountryForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.editaccountsassignedtocountryform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        'Ext.form.field.Radio',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill',
        'Ext.form.field.Hidden'
    ],

    height: 300,
    width: 600,
    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Bank Account to Country Assignment',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Country',
                            labelWidth: 150,
                            name: 'country',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Account Number',
                            labelWidth: 150,
                            name: 'account_number',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Account Title',
                            labelWidth: 150,
                            name: 'account_name'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Bank Name',
                            labelWidth: 150,
                            name: 'bank_name'
                        },
                        {
                            xtype: 'fieldset',
                            layout: 'column',
                            title: 'Payment Mode',
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'payment_mode',
                                    boxLabel: 'Bank Transfer',
                                    checked: true,
                                    inputValue: 'bank_transfer'
                                },
                                {
                                    xtype: 'radiofield',
                                    margin: '0 0 0 20',
                                    name: 'payment_mode',
                                    boxLabel: 'Online Payment',
                                    inputValue: 'online'
                                },
                                {
                                    xtype: 'radiofield',
                                    margin: '0 0 0 20',
                                    name: 'payment_mode',
                                    boxLabel: 'Cash ',
                                    inputValue: 'cash'
                                },
                                {
                                    xtype: 'radiofield',
                                    margin: '0 0 0 20',
                                    name: 'payment_mode',
                                    boxLabel: 'Hybrid',
                                    inputValue: 'hybrid'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Label',
                    name: 'bank_id'
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Label',
                    name: 'country_id'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'cancelBtn',
                            iconCls: 'cancel',
                            text: 'Cancel'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'assignBtn',
                            iconCls: 'country_account',
                            text: 'Assign This Number To This Country'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});