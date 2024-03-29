"use strict";
const f = require("cross-fetch");

/** @module paymenter-api */
/** 
 * @class Class representing the Paymenter API client 
 *@example 
*/

module.exports.PaymenterAPI = class {
    /**
     * Create a Paymenter API client.
     * @constructor
     * @param {string} baseurl The base url where the api is
     * @param {string} apikey The api key for the paymenter endpoint
     */

    constructor(baseurl, apikey) {
        this.baseurl = baseurl;
        this.apikey = apikey;
    }

    /**
     * Gets all Tickets
     * @returns {JSON} Ticket data JSON
     * @example
     * await paymenterApi.getTickets()
     * */
    async getTickets() {
        return f(`${this.baseurl}/api/client/v1/tickets`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apikey}`
            }
        }).then(async res => {
            const j = await res.json().catch();
            return j;
        });
    }

    /**
     * Get Ticket by ID
     * @returns {JSON} Ticket data JSON
     * @example
     * await paymenterApi.getTicket()
     * */
    async getTicket(ticketId) {
        return f(`${this.baseurl}/api/client/v1/tickets/${ticketId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apikey}`
            }
        }).then(async res => {
            const j = await res.json().catch();
            return j;
        });
    }

    /**
     * Post a response to an active ticket
     * @returns {JSON} Success JSON
     * @example
     * await paymenterApi.replyToTicket()
     * */
    async replyToTicket(ticketId, message) {
        return f(`${this.baseurl}/api/client/v1/tickets/${ticketId}/reply`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apikey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "message": message
            })
        }).then(async res => {
            const j = await res.json().catch();
            return j;
        });
    }

    /**
     * Create a new ticket
     * @returns {JSON} Success JSON
     * @example
     * await paymenterApi.createTicket()
     * */
    async createTicket(title, message, priority) {
        return f(`${this.baseurl}/api/client/v1/tickets`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apikey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": title,
                "message": message,
                "priority": priority //low, medium, high
            })
        }).then(async res => {
            const j = await res.json().catch();
            return j;
        });
    }

    /**
     * Get messages from a ticket
     * @returns {JSON} Ticket data JSON
     * @example
     * await paymenterApi.getTicketMessages()
     * */
    async getTicketMessages(ticketId) {
        return f(`${this.baseurl}/api/client/v1/tickets/${ticketId}/messages`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apikey}`
            }
        }).then(async res => {
            const j = await res.json().catch();
            return j;
        });
    }

    /**
     * Delete a ticket
     * @returns {JSON} Delete success JSON
     * @example
     * await paymenterApi.deleteTicket()
     * */
    async deleteTicket(ticketId) {
        return f(`${this.baseurl}/api/client/v1/tickets/${ticketId}/close`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apikey}`
            }
        }).then(async res => {
            const j = await res.json().catch();
            return j;
        });
    }

    /**
     * Get all invoices
     * @returns {JSON} Invoice JSON
     * @example
     * await paymenterApi.getAllInvoices()
     * */
    async getAllInvoices() {
        return f(`${this.baseurl}/api/client/v1/invoices`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apikey}`
            }
        }).then(async res => {
            const j = await res.json().catch();
            return j;
        });
    }

    /**
     * Get invoice by ID
     * @returns {JSON} Invoice JSON
     * @example
     * await paymenterApi.getInvoice()
     * */
    async getInvoice(invoiceId) {
        return f(`${this.baseurl}/api/client/v1/invoices/${invoiceId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apikey}`
            }
        }).then(async res => {
            const j = await res.json().catch();
            return j;
        });
    }

    /**
     * Get invoice by ID
     * @returns {JSON} Invoice JSON
     * @example
     * await paymenterApi.getInvoice()
     * */
    async payInvoice(invoiceId, method) {
        return f(`${this.baseurl}/api/client/v1/invoices/${invoiceId}/pay`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apikey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "payment_method": method // PayPal, Stripe, ect
            })
        }).then(async res => {
            const j = await res.json().catch();
            return j;
        });
    }

    /**
     * Get token permissions 
     * @returns {JSON} Token permissions
     * @example
     * await paymenterApi.getPermissions()
     * */
    async getPermissions() {
        return f(`${this.baseurl}/api/client/v1/permissions`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apikey}`
            }
        }).then(async res => {
            const j = await res.json().catch();
            return j;
        });
    }
};
