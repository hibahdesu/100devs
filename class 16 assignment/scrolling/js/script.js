const visible = new IntersectionObserver((e) => {
    e.forEach((item) => {
        console.log(item);
        if (item.isIntersecting) {
            item.target.classList.add('show');
        } 
        else {
            item.target.classList.remove('show');
        }
    })
})

const hiddenItems = document.querySelectorAll('.hidden');

hiddenItems.forEach((e) => {
    visible.observe(e);
})

