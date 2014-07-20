Hex Colour JS Clock
============


Interested in a concept I saw, http://www.jacopocolo.com/hexclock/, I deciced to implement a version myself.

A hex clock being a JavaScript clock where a colour on screen, in this case the page background, corresponds to the current time. For example, for the time of 12:00:00 the background would be the colour of #120000.

This is by no means a serious piece of code and has not been given the benefit of unit tests, wide browser compatibility tests etc. It is mainly proposed as a reference for myself and anyone who wishes to get insight from, if any, the code held in the module. 

Whilst the concept is not of my own all code is original and from scratch. The implementation uses the JavaScript module pattern, specifically the [Christian Heilmann's revealing pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript "Revealing Pattern reference") and as such does not require newing up.

TL;DR - Simple piece of code for a js hex colour clock


### Simple Usage

There is only one public function, the .init() function. Prior to which a configuration object is required as a parameter when invoking the method.

```js
Hex_Clock({
    element: document.getElementById('hex-clock-wrap')
}).init();
```

### Configuration


#### element

Type: `[Element] Object`
Default: `None`
Optional: `No`

The element that the hex colour clock will inject HTML into. 
This is the only required config property.


#### render_time

Type: `Boolean`
Default: `true`
Optional: `Yes`

Show/hide the time.


#### clock_element

Type: `[Element] Object`
Default: `null`
Optional: `Yes`

A custom element, present on the page, to render the time inside of. `render_time` must be true for this to take effect.


### Example Usage
```js
var clock = Hex_Clock({
    element: document.getElementById('hex-clock-wrap')
});

clock.init();
```
```js
Hex_Clock({
    // Element that the hex clock will be added to
    element: document.getElementById('hex-clock-wrap'),

    //Bool for displaying / hiding the time
    //Defaults to true, only shown for example purposes
    render_time: true,
        
    //Custom Element to render the clock in
    clock_element: document.getElementById('custom-clock-element')
}).init();
```
