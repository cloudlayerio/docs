---
sidebar_position: 1.5
slug: /account
---

# Account
Get information about your account, such as usage, credits, number of documents created, etc.

## Endpoint

### GET /account

Returns a JSON object containing the information about your account. Uses any API Key on your account for authentication.

```html title="GET /account"
https://api.cloudlayer.io/v1/account

```

:::tip
Make sure your `Content-Type` gets set to `application/json`, and that you have placed your `X-API-Key` header with your API Key from your account.
:::

## Account Response
The account values for each account response. If an error occurs the appropriate [HTTP Status Code](/#http-status-codes) will be returned.

:::info
An account usage threshold email gets sent to you if your nearing one of your limits or credit is low.
:::

### `calls`
The total number of api calls used.

### `subscription`
The name of the current subscription.

### `bytesTotal`
The total number of bytes processed.

### `bytesLimit`
Current accounts byte limit, if exceeded you will get errors. If empty, the account does not have a limit.

### `computeTimeTotal`
The total number of seconds spent on compute cycles.

### `computeTimeLimit`
Current accounts compute time limit, if exceeded you will get errors. If empty, the account does not have a limit.

### `subType`
The current type of subscription. Either `limit` or `usage`.

### `uid`
The account owners user id.

### `credit`
If account type is `usage` this is the amount of `credit` remaining.

### `subActive`
If the account is `active` or `inactive`.  If your account is inactive, you will need to contact support or update billing.

### `successJobs`
Number of successful jobs for the lifetime of the account.

### `errorJobs`
Number of jobs in error for the lifetime of the account.

### `totalJobs`
Total number of jobs for the lifetime of the account.



