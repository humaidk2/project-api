# Project api

Description:
a REST API service for serving project information for users

# Development:

If you're installing a new npm package,
you will need to rebuild your app by doing docker-compose build

To run this service for development,

docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up

# Tech Stack

-   Node
-   Express

## Dev Dependencies

-   Eslint
-   Prettier
-   Mocha
-   Chai

# Todo

-   [x] Initialize app on github
-   [x] Setup basic project service returning dummy data
-   [x] Setup Docker for development using dockerfile and compose
-   [x] Setup typescript for type inference
-   [x] Setup eslint to easily detect inspection errors
-   [x] Setup prettier to have a standard code format and fix eslint errors easily
-   [] Move routes to separate files for maintainability
-   [] Test each route using unit testing using mocha, chai
-   [] Look in to integration testing
-   [] Setup docker for production
-   [] Move start script to node, add sigterm for process management?
-   [] Deploy code to heroku?
-   [] Look in to end to end testing?
-   [] Setup husky for precommit, prepush testing?
-   [] Setup github actions for continuous integration/continuous deployment?
-   [] Setup Database schema/Database?
-   [] Setup projects to fetch data from github api/sdk?
-   [] Setup front-end using next js
-   [] Design page to display user and project data
-   [] Make use of the project-api in the front-end
-   [] Test front-end using jest
-   [] Deploy front-end?

### Author

> (Humaid Khan)[https://humaidkhan.com]
