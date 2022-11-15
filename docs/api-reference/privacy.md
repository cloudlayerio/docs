---
sidebar_position: 4
slug: /privacy
title: Privacy
---

<head>
  <title>Privacy | Docs - Document Generation Service</title>
  <meta
    name="description"
    content="cloudlayer.io is a service for helping you automate your document generation processes using our PDF Generation and Image Generation services."
  />
</head>


Privacy is important to us and we take every measure possible to ensure that your data is protected.

## Data Storage
Data is stored in your accounts cloud storage by default unless storage parameters are passed into the request to disable storage or to you use your own personal storage.

- For synchronous calls, the data gets removed immediately after the request connection is closed.    

- For asynchronous calls, the data is either stored based on the storage settings set up in your account or stored based on the storage parameters defined in the request JSON parameters.

## Secret Storage
Secrets such as authentication username and password, cookies, HTML contents, etc. never get stored in our system. This information gets redacted from our logs and database before storage. All you will see in the activity logs is a "...", which indicates the redaction of sensitive information.

