 $(document).ready(function(){
      $('.parallax').parallax();
       $('.scrollspy').scrollSpy();
         $('.button-collapse').dropdown({
      inDuration: 500,
      outDuration: 225,
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 20, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );

      // var option = [
      // 	{
	     //  	selector:'#hedaer', offset: 100, 
	     //  	callback: '$(this).addClass("animated")'   
	     //  },
      // ];
      //  Materialize.scrollFire(options);
      	$('#hedaer *').addClass("animated fadeInDown");
    });
