function hesapla() {
  let vize = document.getElementById("vize").value;
  let yilici = document.getElementById("yilici").value;
  let final = document.getElementById("final").value;
  let but = document.getElementById("but").value;
  let devamsiz = document.getElementById("devamsiz").checked;
  let sinavaGirdim = document.getElementById("sinavaGirdim").value;
  let card = document.getElementById("sonuc");

  card.classList.add("show");

  if (devamsiz) {
    document.getElementById("harf").innerText = "Harf Notu: F1";
    document.getElementById("durum").innerText = "Durum: Kaldı (Devamsız)";
    document.getElementById("aciklama").innerText = "Devamsız olduğunuz için F1 , kaldınız.";
    document.getElementById("basari").innerText = "Başarı Notu: -";
    return;
  }

  if (sinavaGirdim === "hayir") {
    document.getElementById("harf").innerText = "Harf Notu: F2";
    document.getElementById("durum").innerText = "Durum: Kaldı (Sınava girmediniz.)";
    document.getElementById("aciklama").innerText = "Sınava girmediğiniz için F2 , kaldınız.";
    document.getElementById("basari").innerText = "Başarı Notu: -";
    return;
  }

  if (vize === "" || (final === "" && but === "")) {
    alert("Vize ve en az bir sınav (Final veya Bütünleme) girmelisiniz.");
    return;
  }

  vize = Number(vize);
  yilici = yilici === "" ? vize : Number(yilici);
  final = final === "" ? null : Number(final);
  but = but === "" ? null : Number(but);

  let sinav = but !== null ? but : final;

  let basari = 0.4 * yilici + 0.6 * sinav;
  basari = Math.round(basari * 100) / 100;

  if (sinav < 50) {
    document.getElementById("harf").innerText = "Harf Notu: F3";
    document.getElementById("durum").innerText = "Durum: Kaldı";
    document.getElementById("aciklama").innerText = "Final/Bütünleme < 50 olduğu için F3 , kaldınız.";
    document.getElementById("basari").innerText = "Başarı Notu: " + basari;
    return;
  }

  if (basari < 60) {
    document.getElementById("harf").innerText = "Harf Notu: F3";
    document.getElementById("durum").innerText = "Durum: Kaldı";
    document.getElementById("aciklama").innerText = "Başarı notu < 60 olduğu için F3 , kaldınız.";
    document.getElementById("basari").innerText = "Başarı Notu: " + basari;
    return;
  }

  let harf = "";
  if (basari >= 90) harf = "A1";
  else if (basari >= 80) harf = "A2";
  else if (basari >= 70) harf = "B1";
  else if (basari >= 65) harf = "B2";
  else if (basari >= 60) harf = "C";

  document.getElementById("harf").innerText = "Harf Notu: " + harf;
  document.getElementById("durum").innerText = "Durum: Geçtiniz.";
  document.getElementById("aciklama").innerText = "Tebrikler, geçtiniz.";
  document.getElementById("basari").innerText = "Başarı Notu: " + basari;
}

function sifirla() {
  document.querySelector("form").reset();
  let card = document.getElementById("sonuc");
  card.classList.remove("show");
  document.getElementById("basari").innerText = "Başarı Notu: - ";
  document.getElementById("harf").innerText = "Harf Notu: - ";
  document.getElementById("durum").innerText = "Durum: - ";
  document.getElementById("aciklama").innerText = "Açıklama: - ";
}
