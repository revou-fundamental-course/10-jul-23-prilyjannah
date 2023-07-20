document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit

    // Mengambil nilai berat dan tinggi dari input
    var berat = parseFloat(document.getElementById("berat").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    // Menghitung BMI
    var bmi = berat / ((tinggi/100) * (tinggi/100));

    // Menampilkan hasil
    var hasil = document.getElementById("hasil");
    var nomor = document.getElementById("nomor");
    nomor.innerHTML = bmi.toFixed(1);

    if (bmi.toFixed(1) > 30) {
        hasil.innerHTML = "Kegemukan";
    }
    
    else if (bmi.toFixed(1) >= 25 && bmi.toFixed(1) <= 29.9){
        hasil.innerHTML = "Kelebihan Berat Badan";
    }
    else if (bmi.toFixed(1) >= 18.5 && bmi.toFixed(1) <= 24.9){
        hasil.innerHTML = "Normal";
    }
     else if (bmi.toFixed(1) < 18.5){
        hasil.innerHTML = "Kekurangan Berat Badan";
    } else{

    }
});
