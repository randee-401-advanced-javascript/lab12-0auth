# oAuth Lab - Class 12

## Project Name: 
* lab12-Oauth

## Authors:
- Clayton Jones
- Madison Stehle
- Randee Orion
- Sian Culligan

## Links and Resources:
- [Auth0 Docs](https://auth0.com/docs/quickstart/spa/vanillajs#integrate-auth0-in-your-application)
- - [Getting Token](https://auth0.com/docs/api/authentication?http#get-token dev-fvs424s2.authO.com)
- [Auth0 Docs](https://auth0.com/docs/quickstart/spa/vanillajs#integrate-auth0-in-your-application)
- [Auth0 Code Flow Docs](https://auth0.com/docs/flows/concepts/auth-code)

<br><br>

* [Deployed Heroku Link](https://gitauthoed.herokuapp.com/)
* [Code Repo](https://github.com/randee-401-advanced-javascript/lab12-0auth) 

## Setup
**.env requirements**
``PORT=3000``
``TOKEN_SERVER=https://dev-91omc5qe.auth0.com/oauth/token``
``REMOTE_API=https://dev-91omc5qe.auth0.com/userinfo``
``CLIENT_ID=8gdoH2LeewXcqpgdGubBOV0S0qHGfTr4``
``CLIENT_SECRET=k2gFWyWxyBoKKXZq-rasXH_T4vLXWDw7jgYgdjCM7hdJTpiumo7MEp37koaJcI38``
``API_SERVER=http://localhost:3000/oauth``


## How to initialize/run your application (where applicable)
- Run ``npm node dev`` from terminal to get the server up & running
- Go to http://localhost:3000/
- Click 'Login' > Sign-up > Choose an account you want to sign-in with
<br>
**OR**
<br>
- Use the deployed Heroku link, then click 'Login' > Sign-up > Choose an account you want to sign-in with

## Tests
- Not required for this lab

## UML
UML Image
![UML][./assets/oAuth_UML.jpg]