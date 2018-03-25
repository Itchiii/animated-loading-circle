## Open on [CodePen](https://codepen.io/Itchiii/pen/yKzJVR) !

### How can I use it?
1. You need SASS: look here for instructions: [Link](http://sass-lang.com/install)
2. Add the following lines to your main .scss file:
```scss
  //define your circles here:
  //$name: (class name (like in HTML), percent, size, border width, , animation-time, foreground color, background color, text size, color of text, inner shadow, outer shadow, animation-timing-function)
  $circle1: (circleCounter1, 80, 120px, 10px, 2, #f16529, #000, 140%, #fff, 'yes', 'no', ease);

  $circleList: ($circle1,); //add here your circles, if it contains only one element, then finish it with a comma

  @import 'circleCounter';
```
3. Add the following lins to your .html file:
```html
<!-- You can change the class name "circleCounter1", but it must be the same as in your .scss file (2.)-->
<!--data-animationTime and data-percent must match with the .scss file-->
    <div class="circleCounter1" data-animationTime="2" data-percent="80" data-percentId="circleCounter1-text">
      <div class="circle-progressBar"></div>
      <div class="circle-part-1"></div>
      <div class="circle-part-2"></div>
      <div class="circle-part-3"></div>
      <div class="circle-part-4"></div>
      <div class="circle-part-5"></div>
      <div class="circle-inside"></div>
      <div class="circle-outside"></div>
      <div class="percent-circle1" id="circleCounter1-text"></div>
    </div>
```
4. Change the $circle1, in your scss file, the way you would like it. The parameters are explained above.
5. (optional): Add a new circle with `$NEW-NAME: (PARAMETERS);`.
6. (optional): If you added a new circle, you have to refresh the list `$circleList: ($circle1, $NEW-NAME);`.
7. (optional): If you added a new circle, you have to add 3. again with the appropriate attributes.
