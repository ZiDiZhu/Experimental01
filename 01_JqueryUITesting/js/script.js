/****
Experiment with jQueryUI

*****/

//draggable:
//$(`#prisoner`).draggable();

//separate functions by comma!
$(`#prisoner`).draggable({
  //axis: `x`,
  containment: `#prison`,
  //anon function that calls when the dragging starts
  start:function(){
    $(`#prisoner`).css(`text-decoration`, `underline`);
    $(`#prisoner`).css(`color`, `red`);
    //animates the text to blue in 750miliseconds
    $(this).animate({
      "color": `#4444ff`
    }, 750);
  },
  stop:function(){
    //this refers to #prisoner
    $(this).css(`text-decoration`, `none`);
    $(this).css(`color`, `black`);
    $(this).animate({
      "color": `0000ff`
    }, 750);
  }
});

$(`#escape-tunnel`).droppable({
  drop: function(event, ui){
    ui.draggable.remove();
  }
})
