/*
 * File: app/view/TheUnverifiedPaymentWin.js
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

Ext.define('cobuy.view.TheUnverifiedPaymentWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.theunverifiedpaymentwin',

    requires: [
        'cobuy.view.TheUnverifiedPaymentForm',
        'Ext.form.Panel'
    ],

    height: 590,
    width: 710,
    title: 'Verified Payments',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'theunverifiedpaymentform1'
                }
            ]
        });

        me.callParent(arguments);
    }

});