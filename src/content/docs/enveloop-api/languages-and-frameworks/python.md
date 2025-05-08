---
title: "Python"
layout: default
parent: Languages and Frameworks
---

# Python

## Install the Enveloop node package

#### pip

```
python3 -m pip install enveloop-py
```

## Send Messages

```javascript
from enveloop_py import enveloop

client = enveloop.connect("test_eYLQRrzxLcLAlmb2H5BXIFSUor3h/tRr")

enveloop.sendMessage({
  template="user-welcome",
  to="leslie@knope.com",
  from_address="Chris Traeger <chris@pawnee.parksandrec.gov>",
  subject="Welcome to Pawnee",
  template_variables={
    "name": "Leslie Knope"
  }
})
```
