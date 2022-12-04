function kalkulaator(raskus, kordused) {

    for (let i = 0; i < 12; i++) {
        var muudetav = document.getElementById("th" + i.toString());
        var vastus = Math.ceil(((raskus / (1.0278 - (0.0278 * kordused))) * (1 - 0.05 * i)) / 5) * 5;
        muudetav.innerHTML = vastus.toString()
    }
}
