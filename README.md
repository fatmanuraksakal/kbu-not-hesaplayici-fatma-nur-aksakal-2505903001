# 🎓 KBÜ Not Hesaplayıcı 

## 📘 Proje Açıklaması
Bu proje, **Karabük Üniversitesi not yönetmeliğine uygun olarak** öğrencilerin dönem sonu ders başarı notlarını hesaplayan bir JavaScript uygulamasıdır.  
Kullanıcı; **vize, yıl içi çalışma, final veya bütünleme** notlarını ve **devam durumunu** girerek başarı notunu, harf notunu ve geçip kalma durumunu otomatik olarak öğrenir.

Uygulama; JavaScript ile kullanıcı girdisi alma, doğrulama, koşullu kontrol, hesaplama, DOM manipülasyonu ve hata yönetimi konularını kapsar.

---

## 🧮 Hesaplama Mantığı (KBÜ Kurallarına Göre)

**Formül:**

Başarı Notu = (Yıl İçi * 0.40) + (Final veya Bütünleme * 0.60)


**Kurallar:**
1. Eğer “Devamsızım” işaretliyse → **F1 (Kaldı)**  
2. Eğer sınava girmediyse → **F2 (Kaldı)**  
3. Bütünleme girilmişse → **Final yerine geçer**  
4. Final/Bütünleme notu `< 50` → **F3 (Kaldı)**  
5. Başarı notu `< 60` → **F3 (Kaldı)**  
6. Her iki koşul da sağlanıyorsa harf notu atanır:
   - 90–100 → **A1 (4.00)**
   - 80–89 → **A2 (3.50)**
   - 70–79 → **B1 (3.00)**
   - 65–69 → **B2 (2.75)**
   - 60–64 → **C (2.50)**
7. Harf notu belirlenince “Geçti” durumu gösterilir.
8. Sonuçlar iki ondalık basamağa kadar yuvarlanır.

---

## ⚙️ Kullanım Talimatı

### 1️⃣ Dosya Yapısı

/ (kök)
├─ index.html
├─ style.css
└─ script.js


### 2️⃣ Çalıştırma
1. Tüm dosyaları aynı klasörde bulundur.
2. `index.html` dosyasını bir tarayıcıda aç.
3. Not alanlarını doldur:
   - **Yıl İçi (Vize)**  
   - **Yıl İçi Çalışma (Opsiyonel)**  
   - **Final veya Bütünleme (Opsiyonel)**  
   - **Devamsızım** kutusunu işaretleyebilirsin.  
   - **Sınava girdiniz mi?** seçeneğini belirt.
4. “**Hesapla**” butonuna bas → Sonuçlar kartta görüntülenir.
5. “**Sıfırla**” butonuna basarak formu temizleyebilirsin.


## 🧪 Test Senaryoları

| Senaryo | Girdi | Beklenen Sonuç |
|----------|-------|----------------|
| **1. Normal geçme** | Yıl içi: 70, Final: 60 | Başarı = 64 → **C**, Geçti |
| **2. Final düşük** | Yıl içi: 95, Final: 48 | Final < 50 → **F3**, Kaldı |
| **3. Bütünleme düşük** | Yıl içi: 58, Bütünleme: 55 | Başarı = 56.2 → **F3**, Kaldı |
| **4. Devamsız öğrenci** | “Devamsızım” işaretli | **F1**, Kaldı |
| **5. Sınava girmedi** | Devam var, sınava girmedi | **F2**, Kaldı |

---

## 💻 Teknik Bilgiler
- Sadece **HTML, CSS, JS** kullanılmıştır.  
- Kütüphane veya framework kullanılmamıştır.  
- Mobil uyumlu ve sade bir tasarım hedeflenmiştir.  
- Bütünleme girildiğinde **final yerine geçme mantığı** otomatik uygulanır.  
- Hata kontrolü: Boş veya geçersiz not girişlerinde uyarı mesajı verilir.

---

## 🏗️ Geliştirme & Katkı
Kodlar sade ve eğitim amaçlıdır.

---

## 📦 Canlı Demo
🔗 [GitHub Pages Üzerinde Görüntüle](https://kullaniciadi.github.io/kbu-not-hesaplayici-nuraksakal/)

---

## 🧾 Lisans
Bu proje Karabük Üniversitesi “JavaScript ile Not Hesaplayıcı” ödevi kapsamında geliştirilmiştir.