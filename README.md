[Read this](https://arnaudcortisse.com/blog/trying-out-nestjs-part-1/)

# Troubleshooting
If you try serving the app via Docker and you get a message saying that a module cannot be found, try running the following commands:

```
docker-compose down -v
docker-compose up --build
```
The issue may stem from using an outdated volume with node modules from before installing new packages. These commands will remove the old volumes and ensure that a new one is built from the current node modules. The 