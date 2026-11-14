/* Fulbolito · medios locales por pais. No lo usa la pagina; es la referencia para la actualizacion diaria.
   Regla: 1) RSS del medio, 2) portada del mismo medio, 3) el medio alternativo que figura abajo.

   BLOQUEADOS (no se dejan leer automaticamente, ni web ni RSS). USAR SIEMPRE EL ALTERNATIVO:
   - BBC (Inglaterra, Escocia, Gales, Irlanda del Norte) -> The Guardian: https://www.theguardian.com/uk/rss
   - Marca (Espana) -> AS: https://as.com/rss/  |  Mundo Deportivo: https://www.mundodeportivo.com/rss/home.xml
   - Aktuality (Eslovaquia) -> Pravda: https://www.pravda.sk/rss/xml/  |  SME: https://sme.sk
   - Sportal.bg (Bulgaria): carga pero no trae notas de partido -> Topsport.bg: https://topsport.bg  |  Gong.bg: https://gong.bg
   - Mozzart Sport (Serbia): la portada falla, pero su RSS de futbol SI funciona:
     https://www.mozzartsport.com/rss/1.xml  (indice: https://www.mozzartsport.com/rss)

   MEDIOS QUE YA FUNCIONARON: Voetbal International (NL), SNportal (SI), Moldfootball (MD), L'essentiel (LU),
   Vaterland (LI), A Bola (PT), TV4 (SE), Tiroler Tageszeitung (AT), Flashscore Rumania (RO),
   The Irish News (IE/NIR), Express & Star (WAL).

   SUDAMERICA (usados y funcionando): Argentina: La Capital, El Grafico, Los Andes, A24, Noticias Argentinas.
   Chile: Al Aire Libre, Cooperativa, El Rancagueino, BioBioChile, Redgol, La Cuarta, Emol.
   Colombia: Futbolred, La Patria. Peru: RPP, Libero, Depor, Infobae Peru, El Comercio.
   Brasil: VAVEL, CNN Brasil, Lance!, ABC do ABC. */
const FUENTES={
 "Albania":"https://www.panorama.com.al/sport/",
 "Alemania":"https://www.kicker.de",
 "Andorra":"https://www.diariandorra.ad",
 "Armenia":"https://armsport.am",
 "Austria":"https://www.laola1.at",
 "Azerbaiyan":"https://www.azerisport.com",
 "Belgica":"https://www.dhnet.be/sports/football/",
 "Bielorrusia":"https://pressball.by",
 "Bosnia y Herzegovina":"https://sportsport.ba",
 "Bulgaria":"https://topsport.bg",
 "Chipre":"https://www.kerkida.net",
 "Croacia":"https://sportske.jutarnji.hr",
 "Dinamarca":"https://sport.tv2.dk/fodbold",
 "Escocia":"https://www.theguardian.com/uk/rss",
 "Eslovaquia":"https://www.pravda.sk/rss/xml/",
 "Eslovenia":"https://snportal.si",
 "Espana":"https://as.com/rss/",
 "Estonia":"https://soccernet.ee",
 "Finlandia":"https://www.iltalehti.fi/rss/lajit/urheilu.xml",
 "Francia":"https://www.lequipe.fr",
 "Gales":"https://www.theguardian.com/uk/rss",
 "Georgia":"https://crystalsport.ge",
 "Gibraltar":"https://www.chronicle.gi",
 "Grecia":"https://www.gazzetta.gr/football",
 "Hungria":"https://www.nemzetisport.hu",
 "Inglaterra":"https://www.theguardian.com/uk/rss",
 "Irlanda":"https://www.the42.ie/soccer",
 "Irlanda del Norte":"https://www.theguardian.com/uk/rss",
 "Islandia":"https://www.mbl.is/feeds/",
 "Islas Feroe":"https://www.dimma.fo",
 "Israel":"https://www.one.co.il",
 "Italia":"https://www.gazzetta.it",
 "Kazajistan":"https://sports.kz/",
 "Kosovo":"https://www.gazetaexpress.com",
 "Letonia":"https://sportacentrs.com/futbols",
 "Liechtenstein":"https://www.vaterland.li/sport",
 "Lituania":"https://www.lrytas.lt/sportas/futbolas",
 "Luxemburgo":"https://www.lessentiel.lu/fr/sports/football",
 "Macedonia del Norte":"https://gol.mk",
 "Malta":"https://www.maltatoday.com.mt",
 "Moldavia":"https://moldfootball.com",
 "Montenegro":"https://www.vijesti.me/sport/fudbal",
 "Noruega":"https://www.vg.no/sport/fotball",
 "Paises Bajos":"https://www.vi.nl",
 "Polonia":"https://sport.onet.pl/pilka-nozna",
 "Portugal":"https://www.abola.pt",
 "Republica Checa":"https://isport.blesk.cz/fotbal",
 "Rumania":"https://www.gsp.ro",
 "San Marino":"https://www.sanmarinortv.sm/sport/calcio",
 "Serbia":"https://www.mozzartsport.com/rss/1.xml",
 "Suecia":"https://www.fotbollskanalen.se",
 "Suiza":"https://www.srf.ch/sport/fussball",
 "Turquia":"https://www.fanatik.com.tr",
 "Ucrania":"https://ua.tribuna.com/football/"
};
/* Segunda opcion donde el principal ya fallo o donde conviene tener recambio. */
const FUENTES_ALT={
 "Bulgaria":"https://gong.bg",
 "Escocia":"https://www.theguardian.com/football/scottish-premiership",
 "Eslovaquia":"https://sme.sk",
 "Espana":"https://www.mundodeportivo.com/rss/home.xml",
 "Serbia":"https://www.b92.net"
};
