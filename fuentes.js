/* Fulbolito · medios locales por pais (lista del usuario). No lo usa la pagina; es referencia para la actualizacion diaria.
   Regla: 1) RSS del medio, 2) portada del mismo medio, 3) segundo medio mas relevante del pais.

   PROBADO Y BLOQUEADO (no se dejan leer automaticamente, ni la web ni el RSS). Usar otro medio del pais:
   - BBC  -> Inglaterra, Escocia, Gales, Irlanda del Norte
   - Marca -> Espana
   - Aktuality Sport -> Eslovaquia
   - Mozzart Sport (Serbia): la portada falla, pero el RSS de futbol SI funciona:
     https://www.mozzartsport.com/rss/1.xml  (indice de feeds: https://www.mozzartsport.com/rss)
   - Sportal.bg (Bulgaria): carga, pero no se encontro nota del partido.

   SIN URL DIRECTA en la lista original (venian como busqueda de Google): Andorra, Finlandia, Gibraltar,
   Islandia, Islas Feroe, Kosovo, Malta, Serbia. Para esos hace falta la direccion real del medio.

   MEDIOS QUE SI FUNCIONARON: Voetbal International (NL), SNportal (SI), Moldfootball (MD),
   L'essentiel (LU), Vaterland (LI), A Bola (PT), TV4 (SE), Tiroler Tageszeitung (AT),
   Flashscore Rumania (RO), The Irish News (IE/NIR), Express & Star (WAL).

   SUDAMERICA (usados y funcionando): Argentina: La Capital, El Grafico, Los Andes, A24, Noticias Argentinas.
   Chile: Al Aire Libre, Cooperativa, El Rancagueino, BioBioChile, Redgol. Colombia: Futbolred, La Patria.
   Peru: RPP, Libero, Depor, Infobae Peru, El Comercio. Brasil: VAVEL, CNN Brasil, Lance!, ABC do ABC. */
const FUENTES={
 "Albania": "https://www.panorama.com.al/sport/",
 "Alemania": "https://www.kicker.de",
 "Andorra": "https://www.diariandorra.ad/seccio/esports",
 "Armenia": "https://armsport.am",
 "Austria": "https://www.laola1.at",
 "Azerbaiyán": "https://www.azerisport.com",
 "Bélgica": "https://www.dhnet.be/sports/football/",
 "Bielorrusia": "https://pressball.by",
 "Bosnia y Herzegovina": "https://sportsport.ba",
 "Bulgaria": "https://sportal.bg",
 "Chipre": "https://www.kerkida.net",
 "Croacia": "https://sportske.jutarnji.hr",
 "Dinamarca": "https://sport.tv2.dk/fodbold",
 "Escocia": "https://www.bbc.com/sport/football/teams/scotland",
 "Eslovaquia": "https://sport.aktuality.sk/futbal/",
 "Eslovenia": "https://snportal.si",
 "España": "https://www.marca.com",
 "Estonia": "https://soccernet.ee",
 "Finlandia": "https://www.mtvuutiset.fi/urheilu/jalkapallo",
 "Francia": "https://www.lequipe.fr",
 "Gales": "https://www.bbc.com/sport/football/teams/wales",
 "Georgia": "https://crystalsport.ge",
 "Gibraltar": "https://www.footballgibraltar.com",
 "Grecia": "https://www.gazzetta.gr/football",
 "Hungría": "https://www.nemzetisport.hu",
 "Inglaterra": "https://www.bbc.com/sport",
 "Irlanda": "https://www.the42.ie/soccer",
 "Irlanda del Norte": "https://www.bbc.com/sport/football/teams/northern-ireland",
 "Islandia": "https://www.visir.is/g/frettir#it=sport",
 "Islas Feroe": "https://in.fo/ítróttur",
 "Israel": "https://www.one.co.il",
 "Italia": "https://www.gazzetta.it",
 "Kazajistán": "https://sports.kz/",
 "Kosovo": "https://telegrafi.com/sport/lajme/",
 "Letonia": "https://sportacentrs.com/futbols",
 "Liechtenstein": "https://www.vaterland.li/sport",
 "Lituania": "https://www.lrytas.lt/sportas/futbolas",
 "Luxemburgo": "https://www.lessentiel.lu/fr/sports/football",
 "Macedonia del Norte": "https://gol.mk",
 "Malta": "https://timesofmalta.com/sports/football",
 "Moldavia": "https://moldfootball.com",
 "Montenegro": "https://www.vijesti.me/sport/fudbal",
 "Noruega": "https://www.vg.no/sport/fotball",
 "Países Bajos": "https://www.vi.nl",
 "Polonia": "https://sport.onet.pl/pilka-nozna",
 "Portugal": "https://www.abola.pt",
 "República Checa": "https://isport.blesk.cz/fotbal",
 "Rumania": "https://www.gsp.ro",
 "San Marino": "https://www.sanmarinortv.sm/sport/calcio",
 "Serbia": "https://www.mozzartsport.com/fudbal",
 "Suecia": "https://www.fotbollskanalen.se",
 "Suiza": "https://www.srf.ch/sport/fussball",
 "Turquía": "https://www.fanatik.com.tr",
 "Ucrania": "https://ua.tribuna.com/football/"
};
