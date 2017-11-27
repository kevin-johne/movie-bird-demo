# Movie Bird Demo

This website is the result of an assignment.

## Requirements
Node version 6 or higher

## UP and Running
First install all dependencies `npm install`

Run the App `npm start`. This will start a local server listening on port 3000. All '/api/:calls' api call running through a proxy to avoid CORS

After the Server is up, put the `localhost:3000` in the web browser bar. If it is not opening by itself.

Have fun exploring different Sets and Episodes. First you will see all sets of our program. Every Set can be open to see their content. For example new episodes.

## Testing
Is using `jest`, but no testing is implemented. I would test the API service (`service/api.js`)first

## Redux
Not implemented, but I would have created `actions`, and `reducers` for Sets and Episodes. To collect and cache the data in the `store`. My `api.js` would split up in those two action files. 

## Folder Structure
```
|- public (static files) 
|- src
|- index.js (entrance logic)
|--- components (smart components for react)
|--- service (util services i.e. API calls)

```


