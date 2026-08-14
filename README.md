# Dashboard Monitoring (Demo)

Halaman statis ini adalah demo monitoring sederhana. File yang dibuat:

- index.html — tampilan dashboard
- assets/style.css — styling
- assets/script.js — logic demo (meng-generate metrik acak)
- .github/workflows/deploy.yml — workflow untuk mendeploy ke GitHub Pages (branch gh-pages)

URL publik setelah workflow selesai: https://lnhaba7167.github.io/dashboard-monitoring/

Catatan:
- Workflow otomatis akan dijalankan tiap kali ada push ke branch `main` dan akan menerbitkan konten ke branch `gh-pages`.
- Tunggu beberapa menit setelah workflow selesai untuk melihat situs di URL di atas.
- Jika ingin menampilkan metrik nyata, ganti isi `assets/script.js` agar melakukan fetch ke API metrik kamu lalu pushData ke chart.
