document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('myAudio');
    const timestamps = document.querySelectorAll('.timestamp');

    timestamps.forEach(span => {
        span.addEventListener('click', function() {
            const targetTime = parseFloat(this.getAttribute('data-time'));

            if (!isNaN(targetTime) && targetTime >= 0) {
                audioPlayer.currentTime = targetTime;

                // Опитва се да пусне аудиото, но може да бъде блокирано от браузъра
                if (audioPlayer.paused) {
                    audioPlayer.play().catch(e => console.error("Грешка при автоматично пускане:", e));
                }
            }
        });
    });
});
