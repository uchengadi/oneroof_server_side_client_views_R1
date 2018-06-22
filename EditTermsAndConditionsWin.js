/*
 * File: app/view/EditTermsAndConditionsWin.js
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

Ext.define('cobuy.view.EditTermsAndConditionsWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.edittermsandconditionswin',

    requires: [
        'cobuy.view.TermsAndConditionsForm',
        'Ext.form.Panel'
    ],

    height: 650,
    width: 1350,
    layout: 'fit',
    title: 'Terms & Conditions',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'termsandconditionsform'
                }
            ]
        });

        me.callParent(arguments);
    }

});