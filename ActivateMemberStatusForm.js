/*
 * File: app/view/ActivateMemberStatusForm.js
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

Ext.define('cobuy.view.ActivateMemberStatusForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.activatememberstatusform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Hidden',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill'
    ],

    height: 500,
    width: 600,
    bodyPadding: 10,
    header: false,
    title: 'My Form',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Login Info',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'User Name',
                            labelWidth: 110,
                            name: 'username'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Email',
                            labelWidth: 110,
                            name: 'email',
                            inputType: 'email',
                            vtype: 'email'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            disabled: true,
                            hidden: true,
                            fieldLabel: 'Password',
                            labelWidth: 110,
                            name: 'password',
                            inputType: 'password'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            disabled: true,
                            hidden: true,
                            fieldLabel: 'Confirm Password',
                            labelWidth: 110,
                            name: 'passwordCompare',
                            inputType: 'password'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'id'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'city_id'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'state_id'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'country_id'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'User Info',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'First Name',
                            labelWidth: 110,
                            name: 'firstname',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Middle Name',
                            labelWidth: 110,
                            name: 'middlename',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Last Name',
                            labelWidth: 110,
                            name: 'lastname',
                            readOnly: true
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Gender',
                            labelWidth: 110,
                            name: 'gender',
                            readOnly: true,
                            editable: false,
                            displayField: 'gender',
                            store: 'Gender',
                            valueField: 'gender'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Country',
                            labelWidth: 110,
                            name: 'country',
                            readOnly: true,
                            editable: false,
                            displayField: 'name',
                            store: 'Countries',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'State',
                            labelWidth: 110,
                            name: 'state',
                            readOnly: true,
                            editable: false,
                            displayField: 'name',
                            store: 'States',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'City',
                            labelWidth: 110,
                            name: 'city',
                            readOnly: true,
                            editable: false,
                            displayField: 'name',
                            store: 'Cities',
                            valueField: 'id'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Status & Role',
                    items: [
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Role Assigned',
                            labelWidth: 110,
                            name: 'role',
                            readOnly: true,
                            editable: false,
                            displayField: 'name',
                            store: 'UserRole',
                            valueField: 'name'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Status',
                            labelWidth: 110,
                            name: 'status',
                            readOnly: true,
                            editable: false,
                            displayField: 'status',
                            store: 'MemberStatus',
                            valueField: 'status'
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
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'activateBtn',
                            iconCls: 'activation',
                            text: 'Activate This User'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});