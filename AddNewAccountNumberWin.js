/*
 * File: app/view/AddNewAccountNumberWin.js
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

Ext.define('cobuy.view.AddNewAccountNumberWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.addnewaccountnumberwin',

    requires: [
        'cobuy.view.AddNewAccountNumberForm',
        'Ext.form.Panel'
    ],

    height: 390,
    width: 660,
    title: 'Add New Account Number',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'addnewaccountnumberform'
                }
            ]
        });

        me.callParent(arguments);
    }

});