Hex Colour JS Clock
============

Interested in a concept I saw, http://www.jacopocolo.com/hexclock/, I deciced to implement a version myself

A hex clock being a JavaScript clock where a colour on screen, in this case the page background, corresponds to the current time. For example, for the time of 12:00:00 the background would be the colour of #120000.

The concept is not of my own, however, all code is original with none being used from the example above.

TL;DR - Simple piece of code for a js hex clock

### Configuration

#### element

Type: `Element Object`
Default: `None`
Optional: `No`

The element that the hex colour clock will inject HTML into. 
This is the only required config property.

#### render_time

Type: `Boolean`
Default: `true`
Optional: `Yes`

Show/hide the time

#### clock_element

Type: `Element Object`
Default: `null`

A custom element can be passed in render the time inside of the provided DOM Element. 


