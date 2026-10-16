# Kućne režije: Android aplikacija

Svi ukućani instaliraju istu aplikaciju i vide iste podatke uživo. Samo ti, nakon prijave, možeš dodavati račune, mijenjati imena, spajati grupe i označavati povrate. Ostali sve vide bez prijave.

---

## 1. Firebase (jednom, oko 5 minuta)

U [Firebase konzoli](https://console.firebase.google.com) otvori svoj projekt.

**a) Prijava emailom**
1. **Build → Authentication → Sign-in method** → uključi **Email/Password** → Save.
2. **Users → Add user** → upiši svoj email i lozinku. S njima ćeš se prijavljivati u aplikaciju.

**b) Baza i pravila**
1. **Build → Firestore Database**. Ako baza još ne postoji: **Create database** → lokacija `eur3 (europe-west)` → *Production mode*.
2. Kartica **Rules** → obriši sve što piše → zalijepi sadržaj datoteke `firestore.rules` iz ovog projekta.
3. U pravilima zamijeni `ZAMIJENI@gmail.com` svojim emailom iz koraka a) → **Publish**.

**c) Podaci za spajanje**
1. ⚙️ **Project settings → General → Your apps**. Ako nema web aplikacije, klikni ikonu `</>`, upiši bilo koji naziv i registriraj je.
2. Kopiraj vrijednosti iz bloka `firebaseConfig` u datoteku **`www/config.js`**.
3. U istoj datoteci upiši svoj email u `OWNER_EMAIL`.

> Ove vrijednosti nisu tajne. Podatke štite pravila iz koraka b), pa ih nitko osim tebe ne može mijenjati.

---

## 2. Izgradnja APK-a na GitHubu (besplatno, bez instalacije)

1. Na [github.com](https://github.com) napravi besplatni račun i klikni **New repository**.
   - Naziv: `kucne-rezije`
   - **Public**, da ukućani mogu preuzeti APK s linka.
2. Na stranici novog repozitorija klikni **uploading an existing file** i povuci **sve datoteke i mape** iz ovog projekta → **Commit changes**.
3. Provjeri je li se prenijela mapa `.github`. Ako ne vidiš `.github/workflows/build-apk.yml`:
   **Add file → Create new file** → naziv `.github/workflows/build-apk.yml` → zalijepi sadržaj te datoteke → Commit.
4. Kartica **Actions**: izgradnja se pokrene sama i traje oko 5 minuta. Kad dobije zelenu kvačicu ✓, APK je spreman.
5. Desno na glavnoj stranici repozitorija → **Releases** → **kucne-rezije.apk**.

Link na Releases pošalji ukućanima:
`https://github.com/TVOJE-IME/kucne-rezije/releases/latest`

---

## 3. Instalacija na mobitel

1. Otvori link na Releases i preuzmi **kucne-rezije.apk**.
2. Otvori preuzetu datoteku. Android će pitati smije li Chrome instalirati aplikacije → **Dopusti** → **Instaliraj**.
   (Na Samsungu: Postavke → Aplikacije → Chrome → *Instaliranje nepoznatih aplikacija* → uključi.)
3. Ti u aplikaciji klikneš **Prijava za uređivanje** i upišeš email i lozinku iz koraka 1a. Prijava se pamti.

---

## Nove verzije

Svaka promjena u repozitoriju na GitHubu sama izgradi novi APK. Ukućani ga preuzmu s istog linka i instaliraju preko stare verzije. Podaci ostaju jer su u Firebaseu.

---

## Alternativa: Android Studio

Ako imaš Android Studio i Node.js:

```
npm install
npm run build
```

Zatim u Android Studiju otvori mapu `android` i odaberi **Build → Build APK(s)**.

---

## Što je u projektu

| Datoteka | Što je |
|---|---|
| `www/index.html` | cijela aplikacija (izgled i logika) |
| `www/config.js` | **ovdje upisuješ Firebase podatke i svoj email** |
| `firestore.rules` | pravila za Firebase: svi čitaju, samo ti uređuješ |
| `src/firebase.js` | spajanje na Firebase |
| `.github/workflows/build-apk.yml` | automatska izgradnja APK-a |
| `android/` | Android projekt |

---

## Obavijesti o dugu

Pri prvom otvaranju aplikacija pita **čiji je to mobitel**. Ukućanin odabere sebe i dopusti obavijesti.

- Od **10. u mjesecu, svaki dan u 12:00**, stiže podsjetnik s iznosom koji duguje (za grupu zajednički iznos).
- Kad mu označiš da je platio, podsjetnici prestaju čim se aplikacija na njegovom mobitelu sljedeći put otvori ili osvježi.
- Na tvom mobitelu odaberi sebe. Tebi podsjetnici ne stižu.
- Osobu možeš promijeniti tipkom 🔔 u zelenom zaglavlju.

## Izmjene izgleda

`src/page.html` je jedina izvorna datoteka (ista se koristi i kao Claude artifact).
`npm run build` iz nje napravi `www/index.html`.
