Sistem informatic pentru programarea digitală a unei căsătorii
Nume: Udrescu Daiana Elena
Grupa 1119
https://github.com/udrescudaiana18/CloudComputingFrontend.git
https://github.com/udrescudaiana18/CloudProjectBackend.git
https://vimeo.com/709842871/fce12f4774
1. Introducere
Funcționalitatea principală a sistemului este cea prin care cetățeanul are posibilitatea de a-și
programa o căsătorie. Utilizatorul are posibilitatea de a-și alege oficiul stării civile dintr-o
listă ce conține mai multe instituții. De asemenea, pentru finalizarea formularului și implicit a
programării, cetățeanul trebuie să selecteze data și ora la care va avea loc căsătoria. Ulterior
apăsării butonului principal, programarea este adăugată în baza de date a sistemului, iar
cetățeanului îi este confirmată adăugarea programării.
2. Descriere problemă
Pentru implementarea aplicației am folosit Node.js pentru partea de backend. De
asemenea, pentru persistența datelor am avut nevoie de a crea o instanță MySQL cu
ajutorul platformei Google Cloud.
Partea de fronend folosește React, iar pentru a face deploy am folosit platforma Heroku.
3. Descriere API
Am folosit soluția SendGrid pentru a putea trimite e-mailuri.Acesta este unul dintre cele
mai populare servicii pentru expedierea mail-urilor în Cloud. Este rapid, sigur, ușor de
configurat, integrat și folosit și are o ofertă gratuită mai mult decât suficientă pentru
nevoile acestei aplicatii.
In imaginea de mai jos se observa functia creata pentru a trimite mail-uri:
 4. Flux de date
▪ Exemple de request / response
Un expempu este afisat în figura de mai jos. Prin intermediul acestei
metode înregistrăm o programare în baza de date
▪ Metode HTTP
Metodele HTTP folosie în aplicație sunt GET și POST. Prima pentru a
afișa toate programările existente în baza de date, iar cea de a doua pentru
a adăuga o programare nouă
▪ Autentificare și autorizare servicii utilizate
Autentificarea și autorizarea s-a realizat prin intermediul anumitor chei furnizate de serviciile
utilizare cum ar fi cheia API necesară pentru a trimite un mail prin SendGrid.
5. Capturi ecran aplicație
Captura ecran efectuată ulterior adăugării unei programări:
6. Referințe
https://gurita-alexandru.gitbook.io/cloud-computing-2022-simpre/
https://heroku.com
https://sendgrid.com/
