var aFx = 60,
    trF = 4;  
$('.js-tilt-image').on('mousemove',function(e){   
  var cH = $(this).closest('.photo').innerHeight(),
      cW = $(this).closest('.photo').innerWidth(),
      eX = e.offsetX,
      eY = e.offsetY;

    TweenMax.set(this,{
      transformOrigin: ((eX / (cW*trF) / 100 * 10000) + (trF * 10))+'% '+((eY / (cH*trF) / 100 * 10000) + (trF * 10))+'%',
      transformPerspective: 1500});
    TweenMax.to(this, 0.5, { 
      rotationX: ((eY - cH / 2) / aFx), 
      rotationY: ((eX - cW / 2) / aFx),
      y:(eY - (cH / 2)) / (70),  
      x:(eX - (cW / 2)) / (70)
    });
 

}).on('mouseout',function(e){
    TweenMax.to(this, 1, {
      delay:.2,
      y:0,
      x:0,
      rotationX: 0,
      rotationY: 0,
      transformPerspective:'1500' 
  });
});