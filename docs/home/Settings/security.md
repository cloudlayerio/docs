---
sidebar_position: 4
slug: /settings/security

title: Security
---

The security section is where you can control the security of your account.

## Two Factor Authentication

Two Factor Authentication (2FA) is used to help protect your account from unauthorized access by requiring you to enter a security code when you sign in.

### Enabling Two Factor Auth

![Enabled Two Auth](/img/settings_security.png)
To enable two factor authentication, toggle the switch to enabled. Once you do that a popup will come to begin the enrollment process.

### Enrollment

![Two Auth Enrollment](/img/settings_security_2auth_enrollment.png)
When the popup comes up you will be shown a QRCode and an Enrollment Code at the bottom. You can either take a picture with your Two Auth application of choice such as `Google Authenticator`, `Authy`, or whichever one you choose.

If your two auth application does not accept taking a photo, you can enter the Enrollment Code instead.

Follow the instructions of your Two Factor Authentication App.

#### Verify & Save Enrollment

In order to complete the enrollment you will need to verify and save first.
![Verify and Save](/img/settings_security_2auth_enrollment_verify.png)

1. Enter the code from your Two Factor authentication app.
2. Click Verify & Save

If you enrolled correctly it will accept the code and close the dialog. You have now successfully protected your account with two factor authentication.

### Sign-In with Two Factor

The sign-in process with Two Factor Auth enabled is mostly the same, with one additional step. Once you enter your sign-in credentials or click your social login provider it will ask for your Two Factor Auth code.

![Sign-in Two Factor](/img/signin_twofactor.png)