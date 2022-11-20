function kalkulaator() {
    var sada = raskus / (1.0278 - 0.278 * kordused)
    var uheksakmnd = raskus / (1.0278 - 0.278 * kordused) * 0.9
    var kaheksakmnd = raskus / (1.0278 - 0.278 * kordused) * 0.8
    var seitsekmnd = raskus / (1.0278 - 0.278 * kordused) * 0.7
    var kuuskmnd = raskus / (1.0278 - 0.278 * kordused) * 0.6
    var viiskmnd = raskus / (1.0278 - 0.278 * kordused) * 0.5
    window.location.href = 'tulemused.html'
}