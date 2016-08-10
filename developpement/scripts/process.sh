#!/bin/bash

# css processing
echo Processing less files...
lessc developpement/less/large/styles.less css/large/styles.dev.css
lessc developpement/less/ipad/styles.less css/ipad/styles.dev.css

pleeease compile

# javascript processing
echo Processing coffee scripts...
cat developpement/coffee/jquery.coffee developpement/coffee/variables.coffee developpement/coffee/animations.coffee developpement/coffee/interactions.coffee developpement/coffee/navigation.coffee | coffee --compile --stdio --bare > js/main.js
uglifyjs js/main.js --compress --mangle --output js/main.min.js

echo Assets processed