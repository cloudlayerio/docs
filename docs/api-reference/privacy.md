---
sidebar_position: 1
slug: /privacy
title: Privacy
---

Privacy is important to us and we take every measure possible to ensure that your data is protected.

## Data Storage
Data is never stored unless storage options are configured in your account or storage parameters are passed into the request. 

- For synchronous calls, the data gets removed immediately after the request connection is closed.    

- For asynchronous calls, the data is either stored based on the storage settings set up in your account or stored based on the storage parameters defined in the request JSON parameters.

## Secret Storage
Secrets such as authentication username and password, cookies, HTML contents, etc. never get stored in our system. This information gets redacted from our logs and database before storage. All you will see in the activity logs is a "...", which indicates the redaction of sensitive information.

