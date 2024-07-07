# chromatogram-sim

kromatogramlar HPLC (Yüksek Performanslı Sıvı Kromatografisi) cihazından elde edilmiştir. HPLC, bir karışımdaki bileşenleri ayırmak ve analiz etmek için kullanılan bir tekniktir. Kromatogramlar, bir karışımdaki farklı bileşenlerin ne zaman ve hangi yoğunlukta dedektörden çıktığını gösteren grafiklerdir.

Bu raporda yer alan kromatogramların çoğu iki farklı bileşeni göstermektedir. Bu bileşenler, sodyum benzoat (koruyucu) ve siklopiroks olamin (aktif farmasötik bileşen) olabilir. Kromatogramlarda piklerin konumu (retansiyon süresi), bileşenlerin kimyasal özelliklerine ve kullanılan HPLC koşullarına bağlıdır. Piklerin alanı ise bileşenlerin miktarı hakkında bilgi verir.

**Simülasyon Programı İçin Prompt:**

**Gereksinimler:**

*   **Programlama Dili:** Python
*   **Kütüphaneler:** NumPy (veri işleme), SciPy (grafik oluşturma), Streamlit (web arayüzü)
*   **Veri:** Kromatogram verileri (zaman, sinyal yoğunluğu)
*   **Model:** HPLC'nin temel prensiplerini (örneğin, van Deemter denklemi, çözünürlük) içeren matematiksel bir model

**Özellikler:**

1.  **Veri Yükleme:**
    *   Kullanıcıların kendi kromatogram verilerini (CSV veya Excel formatında) yüklemelerine izin ver.
    *   Veri doğrulama ve ön işleme (örneğin, gürültü azaltma, taban çizgisi düzeltme) yap.
2.  **Parametre Ayarları:**
    *   HPLC kolon özellikleri (örneğin, uzunluk, iç çap, partikül boyutu)
    *   Mobil faz bileşimi (örneğin, su, asetonitril, metanol oranları)
    *   Akış hızı
    *   Kolon sıcaklığı
    *   Enjeksiyon hacmi
    *   Gradyan programı (isteğe bağlı)
3.  **Simülasyon:**
    *   Belirtilen parametrelere ve HPLC modeline göre kromatogramı hesapla.
    *   Piklerin alıkonma sürelerini, genişliklerini ve alanlarını belirle.
    *   Çözünürlük, teorik plaka sayısı ve kuyruklanma faktörü gibi kromatografik parametreleri hesapla.
4.  **Görselleştirme:**
    *   Simüle edilen kromatogramı etkileşimli bir grafik olarak göster.
    *   Kullanıcıların pikleri seçip bilgilerini (örneğin, alıkonma süresi, alan) görüntülemelerine izin ver.
    *   Farklı parametrelerin kromatograma etkisini göstermek için simülasyonları gerçek zamanlı olarak güncelle.
5.  **Analiz ve Raporlama:**
    *   Kalibrasyon eğrileri oluştur ve doğrusallık analizleri yap.
    *   Belirleme katsayısı (R\^2), eğim ve kesişim gibi istatistiksel parametreleri hesapla.
    *   LOD (Algılama Limiti) ve LOQ (Kantitasyon Limiti) değerlerini belirle.
    *   Simülasyon sonuçlarını ve analizleri içeren bir rapor oluştur.

**Ek Özellikler (İsteğe Bağlı):**

*   **Veri Tabanı Entegrasyonu:** Bileşiklerin ve çözücülerin özelliklerini depolamak için bir veri tabanı kullan.
*   **Makine Öğrenimi:** Kromatogram piklerini otomatik olarak tanımlamak ve analiz etmek için makine öğrenimi algoritmaları kullan.
*   **Bulut Tabanlı Uygulama:** Kullanıcıların simülasyonları kaydetmelerine ve paylaşmalarına olanak tanıyan bir bulut tabanlı uygulama geliştir.

**Kullanıcı Arayüzü (UI) Tasarımı:**

*   Kullanıcı dostu ve sezgisel bir arayüz tasarla.
*   Parametre girişleri için uygun kontroller (kaydırıcılar, açılır menüler vb.) kullan.
*   Kromatogram grafiğini ve sonuçları net bir şekilde göster.
*   Raporlama için özelleştirilebilir seçenekler sun.

**Doğrulama ve Geçerleme:**

*   Simülasyon sonuçlarını gerçek HPLC verileriyle karşılaştırarak modeli doğrula ve geçerle.
*   Farklı HPLC cihazları ve koşulları için simülasyonu test et.

Bu prompt, HPLC simülasyon programının temel özelliklerini ve gereksinimlerini özetlemektedir. Geliştiriciler, bu promptu başlangıç noktası olarak kullanabilir ve ihtiyaçlarına göre daha fazla detay ve özellik ekleyebilirler.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/chromatogram-sim.git
cd chromatogram-sim
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
