# SUBMITTING A NEW NOTE

![Solution](./Untiled.png)

```
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
server-->browser: Status Code 302 -> redirect to https://studies.cs.helsinki.fi/exampleapp/notes

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code Status Code 200
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: Status Code 200 -> main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: Status Code 200 -> main.js

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "My New Note", date: "2021-04-20" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```