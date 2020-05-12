	//******************  Section One  **************************************
new TypeIt("#thirdLineMain", {
  speed: 150,
  waitUntilVisible: true,
  startDelay: 250,
  nextStringDelay:750,
  cursorSpeed:800
})
.pause(1000)
  .type('A digital marketer.')
  .move(-1)
  .pause(1000)
  .delete(16)
  .type('Ui / Ux designer')
  .pause(1000)
   .delete(16)
  .type("web developer")
	.move("END")
  .go();
	//******************  Section One  **************************************
  AOS.init({
    duration: 0,
  });

  	//******************  Section Two  **************************************
    function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  	//******************  Section scroll  **************************************


    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }




    $(window).on('load', function () {
    $("#loading").hide();
    });



    function openNavv() {
      document.getElementById("myNavRight").style.width = "100%";
    }

    function closeNavv() {
      document.getElementById("myNavRight").style.width = "0%";
    }
