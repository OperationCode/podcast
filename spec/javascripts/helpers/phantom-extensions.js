//Phantomjs does not implement the click function for html elements.
//This is needed because the jquery $.fn.click function does not 
//dispatch to the native function on <a> elements and wont execute
//the tracking events.
if (window._phantom) {
  if (!HTMLElement.prototype.click) {
    HTMLElement.prototype.click = function() {
      var ev = document.createEvent('MouseEvent');
      ev.initMouseEvent(
          'click',
          /*bubble*/true, /*cancelable*/true,
          window, null,
          0, 0, 0, 0, /*coordinates*/
          false, false, false, false, /*modifier keys*/
          0/*button=left*/, null
      );
      this.dispatchEvent(ev);
    };
  }
}