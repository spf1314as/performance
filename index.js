// The primary difference between the two metrics is FP marks the point when the browser renders anything that is visually different from what was on the screen prior to navigation. By contrast, FCP is the point when the browser renders the first bit of content from the DOM, which may be text, an image, SVG, or even a canvas element.

// Paint: the browser has performed a "paint" (or "render") when it has converted the render tree to pixels on the screen. This is formally defined as the when update the rendering happens in event loop processing.
//First Paint entry contains a DOMHighResTimeStamp reporting the time when the browser first rendered after navigation. This excludes the default background paint, but includes non-default background paint and the enclosing box of an iframe. This is the first key moment developers care about in page load – when the browser has started to render the page.
// First Contentful Paint entry contains a DOMHighResTimeStamp reporting the time when the browser first rendered any text, image (including background images), non-white canvas or SVG. This excludes any content of iframes, but includes text with pending webfonts. This is the first time users could start consuming page content.


// FP
var observer = new PerformanceObserver(function(list) {
    var perfEntries = list.getEntries();
      for (var i = 0; i < perfEntries.length; i++) {
          console.log(perfEntries[i], i)
          
          // Process entries
          // report back for analytics and monitoring
          // ...
      }
    });

    // register observer for paint timing notifications
    // observer.observe({entryTypes: ["paint"]});
    observer.observe({entryTypes: ["resource", "longtask", "paint"]});
    console.log('test')