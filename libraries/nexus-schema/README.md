# Nexus Schema with Nexus Plugin Prisma

A simple Nexus Schema with Nexus Plugin Prisma test.

## How to run this locally

### Environment variables

The environment variable `LIBRARY_NEXUS_SCHEMA_PG_URL` should point to a postgres database.
In CI, it uses our internal e2e test database using `library-nexus-schema` as database URL.
Please check our internal 1Password E2E vault for a ready-to-use environment variable or  
set up your own database and set the environment variable accordingly.

### Run tests

```shell script
sh run.sh
```
