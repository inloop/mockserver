# mockserver

[![Build Status](https://travis-ci.org/namshi/mockserver.svg?branch=master)](https://travis-ci.org/namshi/mockserver)

**mockserver** is a library that will help you mock your APIs
in **a matter of seconds**: you simply organize your mocked
HTTP responses in a bunch of js files and it will serve them
like they were coming from a real API; in this way you can
write your frontends without caring too much whether your
backend is really ready or not.

## Installation

Mockserver can be installed globally if you need
to run it as a command:

```
$ npm install -g mockserver

$ mockserver -p 8080 -m test/mocks
Mockserver serving mocks under "test/mocks" at http://localhost:8080
```

or as a regular NPM module if you need to use it as
a library within your code:

``` bash
npm install mockserver
```

then in your test file:

``` javascript
var http    =  require('http');
var mockserver  =  require('mockserver');

http.createServer(mockserver('path/to/your/mocks')).listen(9001);
```

This will run a simple HTTP webserver, handled by mockserver, on port
9001.

At this point you can simply define your first mock: create a file in
`path/to/your/mocks/example-response` called `GET.js`:

```
const status = 200

const headers = [
  "Access-Control-Allow-Origin: *",
]

const body = {
  OK: Math.random() < 0.5
}

module.exports = {
  headers,
  status,
  body
}

```

If you open your browser at `http://localhost:9001/example-response`
you will see something like this:

![example output](https://raw.githubusercontent.com/namshi/mockserver/readme/bin/images/example-response.png)

And it's over: now you can start writing your frontends without
having to wait for your APIs to be ready, or without having to spend
too much time mocking them, as mockserver lets you do it in seconds.
