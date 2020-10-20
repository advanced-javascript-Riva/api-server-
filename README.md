# api-server
## Lab-06

**Author: Riva Davidowski**

#### This app is all about building a dynamic API

**Phase 1 Requirements:**

- Build a simple API (with no code) to gain some clarity and visuals on proper route structure and the data contracts.
- Use ‘json-server’ to build a simple API server that fulfills all of our business requirements in a “sandbox”
- Specifically, we will be building an API to serve data for a virtual storefront, which displays categories and products to a potential shopper

*For the first phase, this API will perform CRUD operations using ReST methods on 2 data models using json-server, an installable and configurable API application used to “spin up” servers for testing purposes.*

## Setup

### How to initialize/run the application:
**The following software is required to be installed on your system:**

- Install npm: `npm i -g` and then use  `npm init`
- Install json-server: `npm install json-server`
    - Create a `db.json` file with some data
    - Start JSON Server: `json-server --watch db.json`
    - Note that json-server does not validate your data, it’ll just save whatever you send it.
    - Visit [npmjs.com](https://www.npmjs.com/package/json-server) for more info
- Use httpie (command line), Insomnia, Postman, or any other “ReST” testing application to POST some categories and products, using JSON, into your API so you have data to work with.


### Testing:

**Phase 1:**

- Create an account at swagger.io and used the Inspector application to test api
- Wrote and published swagger documentation with Swagger Inspector, this published it to Swagger Hub
- Converted the `YAML` to `JSON` and then copied and pasted swagger.json from the editor and add to your server project.

