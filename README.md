# 🧠 ArtCare — Platform Edukasi Kesehatan Mental & Self-Injury

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-12-red?logo=laravel" alt="Laravel" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Filament-v3-purple" alt="Filament" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/AOS-2.3.4-orange" alt="AOS" />
</p>

---

**ArtCare** adalah sebuah aplikasi edukatif yang bertujuan untuk meningkatkan kesadaran dan pemahaman masyarakat tentang **kesehatan mental**, khususnya **self-injury** (melukai diri sendiri). Aplikasi ini dibangun dengan kombinasi teknologi modern seperti **Laravel 12**, **React**, dan **Filament** untuk menghadirkan pengalaman pengguna yang interaktif dan informatif.

---

## 🚀 Fitur Utama

- 📚 Konten edukatif tentang self-injury dan kesehatan mental
- 🛠️ Admin panel CRUD menggunakan [Filament](https://filamentphp.com/)
- 💫 Animasi modern menggunakan [Framer Motion](https://www.framer.com/motion/) & [AOS](https://michalsnik.github.io/aos/)
- 🔧 RESTful API menggunakan Laravel
- 🎨 Frontend interaktif dengan React dan Tailwind CSS

---

## 🛠️ Teknologi yang Digunakan

| Layer         | Teknologi                            |
| ------------- | ------------------------------------- |
| Backend       | Laravel 12                           |
| Admin Panel   | Filament PHP                         |
| Frontend      | React, Tailwind CSS, Vite            |
| Animasi       | Framer Motion, AOS                   |
| Database      | MySQL / PostgreSQL (sesuaikan)       |

---

## 📸 Screenshot

### 🏠 Halaman Utama
<img src="https://raw.githubusercontent.com/hjrsmail/artcare/master/public/assets/images/home.png" alt="Homepage Screenshot" width="100%"/>

---

## 📦 Instalasi

```bash
# 1. Clone repository
git clone https://github.com/username/artcare.git
cd artcare

# 2. Install dependency backend
composer install

# 3. Install dependency frontend
npm install

# 4. Salin file environment
cp .env.example .env
php artisan key:generate

# 5. Jalankan migrasi database
php artisan migrate

# 6. Jalankan server dev frontend
npm run dev

# 7. Jalankan server backend
php artisan serve
