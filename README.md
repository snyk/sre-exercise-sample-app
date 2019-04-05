# Block Town

A Node.js web server with severe event loop blocking challenges, for use with Snyk's SRE practical exercise.

## Installation

```
$ git clone git@github.com:snyk/sre-exercise-sample-app.git .

$ npm install
```

## Running the server

The server can be started by running `bin/start` after installation.

Set the port to listen on by specifying `PORT` on the environment (defaults to `3000`).

A Dockerfile is also included.

## Generating traffic

Run `bin/blast` to generate a lot of traffic against the various routes of this server, using [Apache Bench](https://httpd.apache.org/docs/2.4/programs/ab.html).
