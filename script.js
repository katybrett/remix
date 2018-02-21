$(document).ready(function(){

    var audioElement = document.createElement('audio');
    $(this).keypress(function(e){
        var x;
        var code = e.keyCode || e.which;

        if(code == 97) { 
            x = Math.floor((Math.random() * 180) + 1);
            audioElement.setAttribute('src', 'a.mp3');
            audioElement.play();
            $("img").css("z-index", "1");
            $('#a').css({
                "z-index" : "2",
                '-webkit-transform' : 'rotate(' + x + 'deg)',
                '-moz-transform'    : 'rotate(' + x + 'deg)',
                '-ms-transform'     : 'rotate(' + x + 'deg)',
                '-o-transform'      : 'rotate(' + x + 'deg)',
                'transform'         : 'rotate(' + x + 'deg)'
            });
            $("#a").show()
        }

        if(code == 98) { 
            x = Math.floor((Math.random() * 180) + 1);
            $("img").css("z-index", "1");
            audioElement.setAttribute('src', 'b.mp3');
            audioElement.play();
            $('#b').css({
                "z-index" : "2",
                '-webkit-transform' : 'rotate(' + x + 'deg)',
                '-moz-transform'    : 'rotate(' + x + 'deg)',
                '-ms-transform'     : 'rotate(' + x + 'deg)',
                '-o-transform'      : 'rotate(' + x + 'deg)',
                'transform'         : 'rotate(' + x + 'deg)'
            });
            $("#b").show()
        }

        if(code == 99) { 
            x = Math.floor((Math.random() * 180) + 1);
            audioElement.setAttribute('src', 'c.mp3');
            audioElement.play();
            $("img").css("z-index", "1");
            $('#c').css({
                "z-index" : "2",
                '-webkit-transform' : 'rotate(' + x + 'deg)',
                '-moz-transform'    : 'rotate(' + x + 'deg)',
                '-ms-transform'     : 'rotate(' + x + 'deg)',
                '-o-transform'      : 'rotate(' + x + 'deg)',
                'transform'         : 'rotate(' + x + 'deg)'
            });
            $("#c").show()
        }
        
        if(code == 100) { 
            x = Math.floor((Math.random() * 180) + 1);
            audioElement.setAttribute('src', 'd.mp3');
            audioElement.play();
            $("img").css("z-index", "1");
            $('#d').css({
                "z-index" : "2",
                '-webkit-transform' : 'rotate(' + x + 'deg)',
                '-moz-transform'    : 'rotate(' + x + 'deg)',
                '-ms-transform'     : 'rotate(' + x + 'deg)',
                '-o-transform'      : 'rotate(' + x + 'deg)',
                'transform'         : 'rotate(' + x + 'deg)'
            });
            $("#d").show()
        }

        if(code == 101) { 
            x = Math.floor((Math.random() * 180) + 1);
            audioElement.setAttribute('src', 'e.mp3');
            audioElement.play();
            $("img").css("z-index", "1");
             $('#e').css({
                "z-index" : "2",
                '-webkit-transform' : 'rotate(' + x + 'deg)',
                '-moz-transform'    : 'rotate(' + x + 'deg)',
                '-ms-transform'     : 'rotate(' + x + 'deg)',
                '-o-transform'      : 'rotate(' + x + 'deg)',
                'transform'         : 'rotate(' + x + 'deg)'
            });
            $("#e").show()
        }

        if(code == 102) { 
            x = Math.floor((Math.random() * 180) + 1);
            audioElement.setAttribute('src', 'f.mp3');
            audioElement.play();
            $("img").css("z-index", "1");
             $('#f').css({
                "z-index" : "2",
                '-webkit-transform' : 'rotate(' + x + 'deg)',
                '-moz-transform'    : 'rotate(' + x + 'deg)',
                '-ms-transform'     : 'rotate(' + x + 'deg)',
                '-o-transform'      : 'rotate(' + x + 'deg)',
                'transform'         : 'rotate(' + x + 'deg)'
            });
            $("#f").show()
        }
    })
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
  })