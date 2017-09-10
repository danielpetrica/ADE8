# a-d-e8-pad package

# ADE8 is a Grammar highlighter for ADE8 Instruction Set.

### Ade8 is a proccesor created by unimore professors for teacing purpose


## Known bugs:
- [ ] Not al mnemonic names suported
  - We support al mnemonic names in the case-sensitive version, present on the 8.6 version manual, the "All letters uppercase" and all letters lowercase.

I collori dipendo dal temma scelto.

## Istruzioni:

Il nome delle ettichette deve iniziare con una lettera maiuscola e finire con ":" se posti davanti a un istruzione, oppure senza ":" se posto come parametro.
Si possono usare ettichete mono caratere (es: A B C) ma avranno un altro colore rispetto alle altre ettichete.

I comandi vanno scritti in una delle seguenti tre modalità:
- Quello presente sul manuale versione 8.6
- Tutte le lettere in Maiuscolo
- Tutte le lettere in Minuscolo


I numeri esadecimali iniziano con un numero tra "0" e "9" e  possono finire con "h".
Se il numero esadecimale inizia con lettera va posizionato un zero davanti, esempio:
ff -> 0ff oppure 0ffh
 es: 1a 0f1 0ffh 000h

I commenti iniziano con ";" e duranno fino alla fine della riga.
Il file va salvato come file di testo ma in formato .ade8 oppure .ade8.txt (l'Assemblatore può leggerlo comunque ma questo plugin non lo legge se non ha qeste estensioni)

Una volta salvato il file, va assemblato con l'assemblatore fornito dal prof.

Esempio di codice

```asembly

;Commento su una linea

Inizio: ld A
;sinonimo di
;Inizio:
;       ld A
  ADD B
  ST  C
  JMP Inizio

A:  07h
B:  0ffh
C:  000h

```
Screenshot: ![A screenshot of your package](http://danielpetrica.pw/a-d-e8-pad/screenshoot.png)
