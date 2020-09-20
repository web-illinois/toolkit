(function(){

    function handleStyleClick(evt) {
        const style = evt.currentTarget.getAttribute('data-font-style');
        document.querySelector('.icons').setAttribute('data-style', style);
    }

    document.querySelectorAll('button.font-style').forEach(button => {
        button.addEventListener('click', handleStyleClick);
    });

    document.querySelectorAll('.icons .icon').forEach(icon => {
        icon.addEventListener('click', evt => evt.currentTarget.classList.toggle('expanded'));
    });

})();
