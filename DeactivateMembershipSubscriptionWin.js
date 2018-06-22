/*
 * File: app/view/DeactivateMembershipSubscriptionWin.js
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

Ext.define('cobuy.view.DeactivateMembershipSubscriptionWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.deactivatemembershipsubscriptionwin',

    requires: [
        'cobuy.view.DeactivateMembershipSubscriptionForm',
        'Ext.form.Panel'
    ],

    height: 380,
    width: 610,
    title: 'Deactivate Membership Subscription',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'deactivatemembershipsubscriptionform1'
                }
            ]
        });

        me.callParent(arguments);
    }

});