/*
 * File: app/view/MakeSubscriptionPaymentForm.js
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

Ext.define('cobuy.view.MakeSubscriptionPaymentForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.makesubscriptionpaymentform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number',
        'Ext.form.field.File',
        'Ext.form.field.Checkbox',
        'Ext.button.Button'
    ],

    height: 700,
    width: 600,
    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Subscription Payment',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            margin: '0 0 0 10',
                            title: 'Payments',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Subscription Detail',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'typeCombo',
                                            fieldLabel: 'Membership Type',
                                            labelWidth: 150,
                                            name: 'membership_type',
                                            editable: false,
                                            displayField: 'name',
                                            store: 'MembershipTypes',
                                            valueField: 'id'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'numberofyearsCombo',
                                            fieldLabel: 'Number of Years',
                                            labelWidth: 150,
                                            name: 'number_of_years',
                                            editable: false,
                                            displayField: 'number_of_years',
                                            store: 'NumberOfYears',
                                            valueField: 'number_of_years'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Payment Summary',
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            itemId: 'grossField',
                                            fieldLabel: 'Total Subscription',
                                            labelWidth: 150,
                                            name: 'gross',
                                            value: 'Display Field',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            itemId: 'discountedField',
                                            fieldLabel: 'Applicable Discount',
                                            labelWidth: 150,
                                            name: 'discount',
                                            value: 'Display Field',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            itemId: 'netamountField',
                                            fieldLabel: 'Net Amount',
                                            labelWidth: 150,
                                            name: 'net',
                                            value: 'Display Field',
                                            readOnly: true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            margin: '0 0 0 10',
                            title: 'Picture',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 8,
                                    title: 'Upload User Picture(.png & .jpg formats)',
                                    items: [
                                        {
                                            xtype: 'filefield',
                                            anchor: '100%',
                                            fieldLabel: 'User Picture',
                                            name: 'picture',
                                            buttonOnly: true
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    title: 'Terms & Conditions',
                                    items: [
                                        {
                                            xtype: 'container',
                                            margin: '',
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'checkboxfield',
                                                    flex: 10,
                                                    itemId: 'termCheckbox',
                                                    name: 'is_term_acceptable',
                                                    boxLabel: 'Accept Terms & Conditions',
                                                    inputValue: '1'
                                                },
                                                {
                                                    xtype: 'button',
                                                    flex: 3.2,
                                                    disabled: true,
                                                    itemId: 'termsBtn',
                                                    margin: '0 0 0 3',
                                                    text: 'Terms & Conditions'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});