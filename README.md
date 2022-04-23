# :shark: XharkTank 

This is backend for the application XharkTank, provides endpoints to pitch ideas to investors and to make counter-offers to entrepreneurs.

- Pitch your one in a million idea to the panel of sharks  :money_with_wings:
- Invest in the next big thing :chart_with_upwards_trend:

Live Deployed [here](https://xharktank-harsh-vardhan.herokuapp.com/).

## Tech



- [Node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](https://www.npmjs.com/package/express) - fast node.js network app framework
- [MongoDB](https://www.mongodb.com) - cross-platform document-oriented database program


## Installation

XharkTank requires [Node.js](https://nodejs.org/) v14+ and [MongoDB](https://www.mongodb.com) v4+ to run.

Install the dependencies and devDependencies.
```sh
cd harsh-vardhan320-ME_BUILDOUT_XHARKTANK/
npm install
```
Setup environments variables. (fill in .env template)
```sh
mv src/config/.env.template src/config/.env
```
Start the server
```sh
npm run start
```

## Features
### Endpoints 

```sh
GET /pitches
```
#### Response
returns json of all pitches in reverse chronological  order.

```javascript
[
   {
      "id":string,
      "entrepreneur":string,
      "pitchTitle":string,
      "pitchIdea":string,
      "askAmount":float,
      "equity":float,
      "offers":[
         {
            "id":string,
            "investor":string,
            "amount":float,
            "equity":float,
            "comment":string
         }
      ]
   }
]
```
| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 500 | `INTERNAL SERVER ERROR` |
---
```sh
GET /pitches/<pitch_id>
```
#### Response
returns json of a pitch

```javascript
{
      "id":string,
      "entrepreneur":string,
      "pitchTitle":string,
      "pitchIdea":string,
      "askAmount":float,
      "equity":float,
      "offers":[
         {
            "id":string,
            "investor":string,
            "amount":float,
            "equity":float,
            "comment":string
         }
      ]
   }
```
| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
---
```sh
POST /pitches
```
#### Request
request body
```javascript
{
   "entrepreneur":string,
   "pitchTitle":string,
   "pitchIdea":string,
   "askAmount":float,
   "equity":float
}
  ```
#### Response
returns id of the saved document
```javascript
{
  "id" : string
}
```
| Status Code | Description |
| :--- | :--- |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 500 | `INTERNAL SERVER ERROR` |
---
```sh
POST /pitches/<pitch_id>/makeOffer
```
#### Request
request body
```javascript
{
   "investor":string,
   "amount":float,
   "equity":float,
   "comment":string
}
  ```

#### Response
returns id of the saved document
```javascript
{
  "id" : string
}
```
| Status Code | Description |
| :--- | :--- |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
---

## Deployment


### Heroku Deployment
```sh
heroku login -i
heroku git:remote -a <your-app-name>
git push heroku master
```
Set up environment variables 
```sh
heroku config:set ENV_VAR=<value>
```
## Authors
* **Harsh Vardhan** - *Initial work* - [desert3agle](https://github.com/desert3agle)
