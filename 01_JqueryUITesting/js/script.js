/****
Experiment with jQueryUI

*****/

//draggable:
//$(`#prisoner`).draggable();

//separate functions by comma!

$(`#escape-tunnel`).hide();

$(`#intro-dialog`).dialog({
  modal: true,
  resizable: false,
  buttons: {
    "Imagination": function() {
      $(this).dialog(`close`);
      $(`#prisoner`).draggable(`option`,`containment`,`none`);
    },
    "tunnel": function(){
      $(this).dialog(`close`);
      $(`#escape-tunnel`).show();
    }
  }
});


$(`#prisoner`).effect({
  effect: `shake`,
  duration: 2000,
  times:15,
  distance:7,
  complete: makePrisonerDraggable
})

function makePrisonerDraggable(){
  $(`#prisoner`).draggable({
    //axis: `x`,
    containment: `#prison`,
    //anon function that calls when the dragging starts
    start:function(){
      $(`#prisoner`).css(`text-decoration`, `underline`);
      //$(`#prisoner`).css(`color`, `red`);
      //animates the text to blue in 750miliseconds
      $(this).animate({
        "color": `#4444ff`
      }, 750);
    },
    stop:function(){
      //this refers to #prisoner
      $(this).css(`text-decoration`, `none`);
      //animation can be
      $(this).animate({
        "color": `#000000`
      }, 750);
    }
  });
}

$(`#escape-tunnel`).droppable({
  drop: function(event, ui){
    ui.draggable.remove();
    $(this).hide({
      effect: `blind`,
      duration:500
    });
  }
})
