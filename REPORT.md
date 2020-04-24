# OAuth Comparative Analysis -  Auth0

Research Conducted By: 
- Clayton Jones
- Madison Stehle
- Randee Orion
- Sian Culligan

## General Comments
- Auth0 is a cloud-based tool that helps businesses manage user profiles. AuthO gives you the ability to connect any API or application written in any programming language all with adequate documentation. 

## Pros and Cons

#### Pros
- Generally easy to follow documentation
- Logs and error messages from auth0 as we tried to debug
- Supports a ton of different programming languages

#### Cons
- Trying to get Auth0 to work with localhost - kept getting errors that we needed to dig deeper on
- The answers were not in one place, sometimes we didn't even know where to look, but we got through it! 


## Documentation
To learn more on how to implement this OAuth provider, please review the [Auth0 Docs](https://auth0.com/docs/quickstart/spa/vanillajs#integrate-auth0-in-your-application)

## Ramp-Up Projections

- To implement AuthO, it would likely take between 1-1.5 hours. 

## Community Support and Adoption levels
 - Seems that Auth0 is a fairly popular authorization management service. Many of the bigger companies using this service are heath care providers, there are outliers, but most of the referenced companies have something to do with healthcare. 

Big companies using Auth0:
* Blue Cross/Blue Shield
* Mazda
* Sage
* Siemens


## Links and Resources
- [Getting Token](https://auth0.com/docs/api/authentication?http#get-token dev-fvs424s2.authO.com)
- [Auth0 Docs](https://auth0.com/docs/quickstart/spa/vanillajs#integrate-auth0-in-your-application)
- [Auth0 Code Flow Docs](https://auth0.com/docs/flows/concepts/auth-code)

## Code Demos

* [Deployed Heroku Link](https://gitauthoed.herokuapp.com/)
* [Code Repo](https://github.com/randee-401-advanced-javascript/lab12-0auth)

## Operating Instructions
- Clone repo, add your own ``.env`` file with the following information :
``PORT=3000``
``TOKEN_SERVER=https://dev-91omc5qe.auth0.com/oauth/token``
``REMOTE_API=https://dev-91omc5qe.auth0.com/userinfo``
``CLIENT_ID=8gdoH2LeewXcqpgdGubBOV0S0qHGfTr4``
``CLIENT_SECRET=k2gFWyWxyBoKKXZq-rasXH_T4vLXWDw7jgYgdjCM7hdJTpiumo7MEp37koaJcI38``
``API_SERVER=http://localhost:3000/oauth``

- Run ``npm node dev`` from terminal to get the server up & running
- Go to http://localhost:3000/
- Click 'Login' > Sign-up > Choose an account you want to sign-in with
