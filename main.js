// Функции автоплей
function startAutoPlay() {
    console.log("startAutoPlay");
    // ваш код для запуска автоплей
}

function stopAutoPlay() {
    console.log("stopAutoPlay");
    // ваш код для остановки автоплей
}

let resizeTimeout;
let resizeInProgress = false;

// Обработчик события изменения размера окна
function onResize() {
    if (!resizeInProgress) {
        stopAutoPlay();
        resizeInProgress = true;
    }
    
    clearTimeout(resizeTimeout);
    
    resizeTimeout = setTimeout(() => {
        startAutoPlay();
        resizeInProgress = false;
    }, 200); // 200 мс - примерное время ожидания после завершения изменения размера
}

// Добавляем обработчик события resize
window.addEventListener('resize', onResize);
