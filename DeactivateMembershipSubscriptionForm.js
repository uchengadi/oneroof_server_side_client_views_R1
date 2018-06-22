/*
 * File: app/view/DeactivateMembershipSubscriptionForm.js
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

Ext.define('cobuy.view.DeactivateMembershipSubscriptionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.deactivatemembershipsubscriptionform1',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.Hidden',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill'
    ],

    height: 340,
    width: 600,
    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Membership Subscription Details',
                    items: [
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Name',
                            labelWidth: 180,
                            name: 'name',
                            readOnly: true,
                            displayField: 'firstname',
                            store: 'AllMembers'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'New Subscription Type',
                            labelWidth: 180,
                            name: 'membertype',
                            readOnly: true,
                            editable: false,
                            displayField: 'name',
                            store: 'MembershipTypes',
                            valueField: 'id'
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Membership Start Date',
                            labelWidth: 180,
                            name: 'membership_start_date',
                            readOnly: true,
                            format: 'd/m/Y',
                            submitFormat: 'm/d/Y'
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Subscription End Date',
                            labelWidth: 180,
                            name: 'membership_end_date',
                            readOnly: true,
                            format: 'd/m/Y',
                            submitFormat: 'm/d/Y'
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Number of Months',
                            labelWidth: 180,
                            name: 'number_of_months',
                            readOnly: true,
                            minValue: 1
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
                            name: 'member_id',
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
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Status',
                            labelWidth: 180,
                            name: 'status',
                            readOnly: true
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
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'deactivateBtn',
                            iconCls: 'deactivation',
                            text: 'Deactivate Subscription'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});