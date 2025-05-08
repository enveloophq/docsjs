---
title: "NodeJS"
layout: default
parent: Languages and Frameworks
---

# 🟢 NodeJS

## Install the Enveloop node package

#### yarn

```
yarn add enveloop
```

#### npm

```
npm install --save enveloop
```

## Send Messages

```javascript
const Enveloop = require("enveloop")
const enveloop = new Enveloop({ apiKey: "test_eYLQRrzxLcLAlmb2H5BXIFSUor3h/tRr" })

enveloop.sendMessage({
  template: "user-welcome",
  to: "leslie@knope.com",
  from: "Chris Traeger <chris@pawnee.parksandrec.gov>",
  subject: "Welcome to Pawnee",
  templateVariables: {
    name: "Leslie Knope"
  }
})
.then(res => console.log(res))
.catch(err => console.log(err))
```
