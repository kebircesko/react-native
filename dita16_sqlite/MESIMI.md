# Dita 16 — Databaza SQLite

Qëllimi: ndërtojmë një aplikacion shënimesh me katër veprimet CRUD:
shtim (CREATE), lexim (READ), ndryshim (UPDATE) dhe fshirje (DELETE).

## Nisja në PC-në e mësuesit ose të nxënësit

Duhet Node.js/npm në PC dhe Expo Go i përputhshëm me SDK 57 në telefon.
Nga folderi kryesor i projektit:

```bash
cd dita16_sqlite
npm install
npm start
```

Skano QR-në me Expo Go në Android ose me kamerën në iPhone.
PC-ja dhe telefoni duhet të jenë në të njëjtin Wi-Fi. Për rrjete të ndryshme,
provo `npx expo start --tunnel`; Expo mund të kërkojë instalimin e @expo/ngrok.
Kjo lidhje kërkon internet. Ky mësim është për Android/iOS, jo shfletuesin.

## Rendi i shpjegimit në klasë (45–60 minuta)

1. **5 min — State dhe databaza:** state shfaq listën në ekran; SQLite e ruan
   në skedarin lokal `shenimet.db`, edhe kur aplikacioni mbyllet.
2. **10 min — Tabela:** hap `database.js`. `CREATE TABLE IF NOT EXISTS` krijon
   tabelën `notes`; `id` është çelësi unik dhe `title` është teksti i shënimit.
3. **10 min — Shtimi dhe leximi:** shpjego `INSERT INTO` dhe `SELECT`.
   Në `App.js`, pas ruajtjes lexohet lista përsëri me `getNotes()`.
4. **10 min — Ndryshimi dhe fshirja:** shpjego `UPDATE`, `DELETE` dhe
   `WHERE id = ?`. Pa `WHERE`, veprimi do të prekte të gjitha rreshtat.
5. **10 min — Demonstrimi:** shto dy shënime, ndrysho njërin, fshi tjetrin.
   Mbylle plotësisht aplikacionin dhe hape sërish: shënimi mbetet.
6. **5–15 min — Ushtrimi:** nxënësit shtojnë një buton që e rendit listën
   sipas titullit (`ORDER BY title ASC`) dhe një numërues me `notes.length`.

## Pikat kryesore

- `database.js` përmban SQL-në; `App.js` formularin dhe listën.
- `await` pret përfundimin e veprimit para leximit të listës së re.
- `?` lidh vlerat e përdoruesit në mënyrë të sigurt; mos bashko tekstin e
  përdoruesit direkt me SQL-në. Provo një shënim me apostrof: `Libri i Anës: 'SQL'`.
- `trim()` pengon ruajtjen e shënimeve bosh.
- SQLite është lokale: çdo telefon ka databazën e vet. Ndryshimi i Wi-Fi-t nuk
  i fshin shënimet, por ato nuk sinkronizohen në pajisje të tjera përmes Git-it.
- Çinstalimi i aplikacionit ose pastrimi i të dhënave mund ta fshijë databazën.

Referenca: [Expo SQLite, SDK 57](https://docs.expo.dev/versions/v57.0.0/sdk/sqlite/).
