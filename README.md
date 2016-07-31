# Genesis

# About
Genesis is a base project for Backbone Applicactions based on Gulp and Browserify. 


Build
```
docker-compose build
```


## DEV environment

1. Start Web container

  ```
  docker-compose up -d www
  ```
2. Install dependencies at your folder

  ```
  docker-compose run builder npm install
  ```
4. Generate public js and css folders (only first time).

  ```
  docker-compose run builder npm run-script builder
  ```

5. Run builder watcher. Rebuild when a file changes.

  ```
  docker-compose run builder npm run-script builder-watcher
  ```

## Production environment

1. Run builder to generate style.css and main.js minify files

  ```
  docker-compose run builder npm run-script builder
  ```