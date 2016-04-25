# copy-event-attributes

This was pulled out of [yo-yo](https://github.com/maxogden/yo-yo) because I wanted the nicer [morphdom](https://github.com/patrick-steele-idem/morphdom) it provides, but without the dependency on [bel](https://github.com/shama/bel)

### usage

```javascript
var copyEvents = require('copy-event-attributes')

copyEvents(fromEl, toEl)
```

### usage with morphdom

```javascript
var copyEvents = require('copy-event-attributes')
var morphdom = require('morphdom')

morphdom(fromEl, toEl, {
  onBeforeMorphEl: copyEvents
})
```

### usage with custom events


```javascript
var copyEvents = require('copy-event-attributes')
var morphdom = require('morphdom')

function copyCustomEvents (fromEl, toEl) {
  return copyEvents(fromEl, toEl, ['onmyevent'])
}

morphdom(fromEl, toEl, {
  onBeforeMorphEl: copyCustomEvents
})
```
