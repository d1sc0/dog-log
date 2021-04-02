# Dog Log

A little prototype project built whilst learning Vue. Not designed for production build just dev environments. The register form isn't hooked up to anything.

App allows adding, editing, deleting, pinning and filtering a set of Dogs. Data is all served in a json file - read and updated using json-server. 

## Project setup
```
npm install
```

### Run the json-server to have access to data via API endpoints
```
npx json-server --watch _data/db.json
```

### Compiles and hot-reloads for development
```
npm run serve
```

### compile styles after updates to _sass/sass_styles.scss (requires sass-cli)
```
sass --no-source-map _sass/sass-styles.scss:src/assets/styles.css
```