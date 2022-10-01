
        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;
        
        // đóng, mở mobile menu
        mobileMenu.onclick = function(){
           var isClosed = header.clientHeight === headerHeight;
           if(isClosed){
                header.style.height='auto';
           }
           else{
                header.style.height = null;
           }
        }

        // tự động đóng menu
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for (var i = 0; i < menuItems.length ; i++){
            var menuItem = menuItems[i];
            
            
            /* console.log(menuItem.nextElementSibling); */ /* anh chi em lien ke*/
            
            menuItem.onclick = function(event){
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                if (!isParentMenu) {
                    header.style.height = null;
                }
                else {
                    event.preventDefault();
                }
                
            }
        }
