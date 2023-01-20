### Few changes to be done in node module after setup
1. Navigate to the node_modules/next-auth/client directory
2. Open the _utils.js file
3. At the top of the file, import the node-fetch package by adding the following line:
```typescript
var nodeFetch = require('node-fetch');
```
4. Replace all instances of fetch with nodeFetch. You will find the following line:
```typescript
return fetch(url, options);
```
change it to

```typescript
return nodeFetch(url, options);
```
5. Save the changes and you are good to go!
