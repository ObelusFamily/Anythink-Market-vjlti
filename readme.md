# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

## To Get Started

To get started, run the following commands in your terminal

```bash
git clone git@github.com:ObelusFamily/Anythink-Market-vjlti.git

cd Anythink-Market-vjlti

```

## Next Steps
Install Docker and Docker Compose [here](https://docs.docker.com/get-docker/)

omce docker is installed, run the following commands in your terminal from the root of the project

```bash
docker-compose up
```

also to migrate the database run the following command

```bash
docker-compose run backend rails db:migrate
```

Navigate to [http://localhost:3000/api/ping](http://localhost:3000/api/ping) to view the Backend
and  [http://localhost:3001](http://localhost:3001) to view the Frontend