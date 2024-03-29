# Paymenter JS Wrapper

This is a JavaScript wrapper for the Paymenter API, providing easy access to various endpoints for managing tickets and invoices.

## Installation

To use this wrapper, you can include it in your project using npm:

```bash
npm install paymenterjs
```

## Usage

### Constructor

```javascript
const { PaymenterAPI } = require('paymenterjs');
const paymenterApi = new PaymenterAPI(process.env.PANEL, process.env.APIKEY); // Panel URL & API Key
```

### Methods

#### `getTickets()`

Get all tickets.

```javascript
const tickets = await paymenterApi.getTickets();
console.log(tickets);
```

```json
{
  "success": true,
  "message": "Ticket successfully retrieved.",
  "data": {
    "ticket": {
      "id": 2,
      "title": "New ticket",
      "status": "open",
      "priority": "high",
      "order_id": null,
      "assigned_to": null,
      "created_at": "2023-04-15T12:35:21.000000Z",
      "updated_at": "2023-04-15T12:35:21.000000Z"
    }
  }
}
```

#### `getTicket(ticketId)`

Get a ticket by ID.

```javascript
const ticket = await paymenterApi.getTicket(ticketId);
console.log(ticket);
```

```json
{
  "id": 2,
  "title": "New ticket",
  "status": "open",
  "priority": "high",
  "order_id": null,
  "assigned_to": null,
  "created_at": "2023-04-15T12:35:21.000000Z",
  "updated_at": "2023-04-15T12:35:21.000000Z"
}
```

#### `replyToTicket(ticketId, message)`

Post a response to an active ticket.

```javascript
const response = await paymenterApi.replyToTicket(ticketId, message);
console.log(response);
```

```json
{
  "success": true,
  "message": "Message successfully sent."
}
```

#### `createTicket(title, message, priority)`

Create a new ticket.

```javascript
const response = await paymenterApi.createTicket(title, message, priority);
console.log(response);
```

```json
{
  "success": true,
  "message": "Ticket successfully created.",
  "data": {
    "ticket": {
      "id": 2,
      "title": "New ticket",
      "status": "open",
      "priority": "high",
      "order_id": null,
      "assigned_to": null,
      "created_at": "2023-04-15T12:35:21.000000Z",
      "updated_at": "2023-04-15T12:35:21.000000Z"
    }
  }
}
```

#### `getTicketMessages(ticketId)`

Get messages from a ticket.

```javascript
const messages = await paymenterApi.getTicketMessages(ticketId);
console.log(messages);
```

#### `deleteTicket(ticketId)`

Delete a ticket.

```javascript
const response = await paymenterApi.deleteTicket(ticketId);
console.log(response);
```


#### `getAllInvoices()`

Get all invoices.

```javascript
const invoices = await paymenterApi.getAllInvoices();
console.log(invoices);
```


#### `getInvoice(invoiceId)`

Get an invoice by ID.

```javascript
const invoice = await paymenterApi.getInvoice(invoiceId);
console.log(invoice);
```


#### `payInvoice(invoiceId, method)`

Pay an invoice.

```javascript
const response = await paymenterApi.payInvoice(invoiceId, method);
console.log(response);
```

#### `getPermissions()`

Get token permissions .

```javascript
const response = await paymenterApi.getPermissions();
console.log(response);
```


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
