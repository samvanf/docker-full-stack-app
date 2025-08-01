[Read this](https://arnaudcortisse.com/blog/trying-out-nestjs-part-1/)

# Troubleshooting
If you try serving the app via Docker and you get a message saying that a module cannot be found, try running the following commands:

```
docker-compose down -v
docker-compose up --build
```
The issue may stem from using an outdated volume with node modules from before installing new packages. These commands will remove the old volumes and ensure that a new one is built from the current node modules.

# Serving the app notes

When you run `npm run serve-nest` and go to http://localhost:3001/api you can see the Swagger doc. There are some weird errors happening, I'm not sure what to do about them, though.

# ECR

1. Serve the Nest app by running `npm run serve-nest`.
2. Authenticate with the ECR repo by running `aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 365761451491.dkr.ecr.us-east-1.amazonaws.com/todo-list-app`
3. Find all currently running images by running `docker images`
4. 