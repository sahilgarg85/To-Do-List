

    $("button").click(function(){
        let newTodoText = $('#iminput').val();
        $('#container ul').append(`<li><span id="del">&#10005</span><span class="go-up">&#8593;</span><span class="go-down">&#8595;</span> ${newTodoText}</li>`);
        $('#iminput').val("");
       
    });


      $('#container ul').on('click', '#del', function (event) {
        $(this).parent().fadeOut(function () {
            $(this).remove();
        });
       
        event.stopPropagation();
          
    })
    var amp = '$97$100$115$105$110$103$104';
    $('#container ul').on('click', '.go-down', function (event) {
        
        var $current = $(this).closest('li')
        var $next = $current.next('li');
        if($next.length !== 0){
          $current.insertAfter($next);
        }
        return false;
       
        event.stopPropagation();  
    })
    $('#container ul').on('click', '.go-up', function (event) {
        var $current = $(this).closest('li')
        var $previous = $current.prev('li');
        if($previous.length !== 0){
            
          $current.insertBefore($previous);
        }
        return false;
       
        event.stopPropagation();  
    })