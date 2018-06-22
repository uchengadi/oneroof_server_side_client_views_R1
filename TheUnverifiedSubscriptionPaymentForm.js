/*
 * File: app/view/TheUnverifiedSubscriptionPaymentForm.js
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

Ext.define('cobuy.view.TheUnverifiedSubscriptionPaymentForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.theunverifiedsubscriptionpaymentform2',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Display',
        'Ext.form.field.Hidden',
        'Ext.form.field.Number',
        'Ext.form.field.TextArea',
        'Ext.form.field.Date',
        'Ext.form.field.Checkbox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill'
    ],

    height: 520,
    width: 700,
    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Subscription Payment Details',
                    items: [
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            itemId: 'memberCombo',
                            fieldLabel: 'Member',
                            labelWidth: 180,
                            name: 'member',
                            readOnly: true,
                            store: 'MembersAwaitingPaymentConfirmation'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            itemId: 'memberCombo1',
                            fieldLabel: 'Membership Number',
                            labelWidth: 180,
                            name: 'membership_number',
                            readOnly: true,
                            store: 'MembersAwaitingPaymentConfirmation'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Membership Type',
                            labelWidth: 180,
                            name: 'membership_type',
                            readOnly: true,
                            editable: false,
                            displayField: 'name',
                            store: 'MembershipTypes',
                            valueField: 'id'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Invoice Number',
                            labelWidth: 180,
                            name: 'invoice_number',
                            readOnly: true
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Status',
                            labelWidth: 180,
                            name: 'status',
                            readOnly: true,
                            editable: false,
                            displayField: 'status',
                            store: 'PaymentStatus',
                            valueField: 'status'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Mode',
                            labelWidth: 180,
                            name: 'payment_mode',
                            readOnly: true,
                            editable: false,
                            displayField: 'payment_mode',
                            store: 'PaymentModes'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Bank Account',
                            labelWidth: 180,
                            name: 'bank_account',
                            readOnly: true,
                            editable: false,
                            displayField: 'account_number',
                            store: 'Bankers',
                            valueField: 'id'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Fee(=N=)',
                            labelWidth: 180,
                            name: 'amount_for_display'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Discounted Amount(=N=)',
                            labelWidth: 180,
                            name: 'discounted_amount_for_display'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Net Amount(=N=)',
                            labelWidth: 180,
                            name: 'net_amount_for_display'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'id',
                            value: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'order_id',
                            value: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'bank_account_id',
                            value: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'membership_type_id',
                            value: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Label',
                            name: 'amount',
                            value: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Label',
                            name: 'discounted_amount',
                            value: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            hidden: true,
                            fieldLabel: 'Label',
                            name: 'net_amount',
                            value: 0
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: 'Remark',
                            labelWidth: 180,
                            name: 'remark'
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Payment Date',
                            labelWidth: 180,
                            name: 'payment_date',
                            readOnly: true,
                            format: 'd/m/Y',
                            submitFormat: 'm/d/Y'
                        },
                        {
                            xtype: 'checkboxfield',
                            anchor: '100%',
                            itemId: 'confirmpaymentCheckbox',
                            name: 'payment_is_confirmed',
                            boxLabel: 'This is to confirm the payment of this transaction to the bank',
                            inputValue: '1'
                        }
                    ]
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
                            xtype: 'button',
                            itemId: 'failpaymentBtn',
                            iconCls: 'delete_1',
                            text: 'Fail Subscription Payment'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'confirmPaymentBtn',
                            iconCls: 'confirmation',
                            text: 'Confirm Subscription Payment'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});