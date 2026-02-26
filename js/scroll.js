// scroll.js

function enableHorizontalDragScroll(selector) {

    const container = document.querySelector(selector);
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
    });

    container.addEventListener('mousemove', (e) => {

        if (!isDown) return;

        e.preventDefault();

        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;

        container.scrollLeft = scrollLeft - walk;
    });
}

document.addEventListener("DOMContentLoaded", () => {

    enableHorizontalDragScroll('.category-scroll');
    enableHorizontalDragScroll('.trending-scroll');

});
