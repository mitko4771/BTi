window.onload = function() {

    var accordion = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');

    for (var i = 0; i < accordion.length; i++) {
        accordion[i].onclick = function() {
            var setClasses = !this.classList.contains('active');
            setClass(accordion, 'active', 'remove');
            setClass(panel, 'show', 'remove');

            
            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
                
            }


            if ( $(this).hasClass( "active" ) ) {
                $(this).text( "Click to close" );
            } else {
                $(this).text( "Click to open" );
            }
           
             
        }
    }

    function setClass(element, className, fnName) {
        for (var i = 0; i < element.length; i++) {
            element[i].classList[fnName](className);
            
        }
    }

    ////////////////////////

    var buttonDropdown = document.getElementsByClassName("drop-down__btn");
    var panelContent = document.getElementsByClassName('drop-down__content');

    for (var i = 0; i < buttonDropdown.length; i++) {
        buttonDropdown[i].onclick = function() {
            var setClassesBtn = !this.classList.contains('active-btn');
            setClassBtn(buttonDropdown, 'active-btn', 'remove');
            setClassBtn(panelContent, 'show', 'remove');

            
            if (setClassesBtn) {
                this.classList.toggle("active-btn");
                this.nextElementSibling.classList.toggle("show"); 
            }
        }
    }

    function setClassBtn(element, className, fnName) {
        for (var i = 0; i < element.length; i++) {
            element[i].classList[fnName](className);
        }
    }
      

}