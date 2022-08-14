window.onload = () =>{
    let keyboard = document.querySelector('.keyboard');
    if(keyboard){
        document.addEventListener('keydown', function(event) {
            console.log(event.code);
            event.preventDefault();
            let item = document.querySelector('[data-keyCode="'+ event.code + '"]');
            item.classList.add('active')
        });

        document.addEventListener('keyup', function(event) {
            event.preventDefault();
            let items = document.querySelectorAll('.active');
            items.forEach((item)=>{
                item.classList.remove('active');
            });
        });
    }
}