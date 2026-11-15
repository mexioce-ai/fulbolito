/* Fulbolito · datos del dia. Este archivo se reemplaza completo en cada actualizacion diaria.
   PARTIDO (array M):
   {id, day:"hoy"|"man", t:"HH:MM" hora de Chile, cat:<id de CATS>, comp:"competencia", star:1 (solo destacados),
    h:<equipo>, a:<equipo>, p:[local,empate,visita] o null, sc:"1-0" o null,
    juego:"que se juega", prensa:[[titular, medio, url]] (sec(medio,url) si solo hay seccion),
    h2h:[...], racha:[...], bajas:[...], dato:[titular, detalle],
    tips:[[mercado, tip, "alta"|"media"|"baja", por que]], nd:"corners ni tarjetas"}
   EQUIPO: seleccion -> [nombre, "cod"] con cod en F (bandera) y COLP del index (color de respaldo).
           club       -> [nombre, {sig:"BOC", col:[fondo,texto], esc:"url del escudo (opcional)"}]
           Si no hay escudo ni colores, basta [nombre,"club"]: se dibuja un monograma neutro.
   CATEGORIAS: selecciones por confederacion (uefa, conmebol, otras); clubes por pais (cl, ar, br, pe, es...)
   y copas internacionales de clubes (copas-sud, copas-uefa). Un amistoso entre confederaciones va en la
   confederacion del equipo de la zona que sigue la pagina: Japon vs Brasil va en CONMEBOL.
   ALINEACIONES (al), por equipo, de mas a menos informacion:
   {col:[fondo,texto], est:"posible"|"confirmada"|"ultima usada (fecha)", f:"4-3-3", xi:[[apellido, dorsal o null] x11]}
   {col, f:"4-4-2", dest:[apellidos]}  -> solo formacion posible
   {col, dest:[apellidos]}             -> solo jugadores destacados
   Nunca inventes dorsales: si no hay dorsal confirmado va null. */
const FECHA={hoy:"Dom 15 nov",man:"Lun 16 nov"};
const ACTUALIZADO="domingo 15 de noviembre a las 20:55 de Chile";
const F={col:"🇨🇴",chi:"🇨🇱",arg:"🇦🇷",uru:"🇺🇾",per:"🇵🇪",bol:"🇧🇴",ned:"🇳🇱",gre:"🇬🇷",srb:"🇷🇸",ger:"🇩🇪",sco:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",mkd:"🇲🇰",svn:"🇸🇮",sui:"🇨🇭",svk:"🇸🇰",fro:"🇫🇴",bul:"🇧🇬",isl:"🇮🇸",lux:"🇱🇺",est:"🇪🇪",and:"🇦🇩",gib:"🇬🇮",lie:"🇱🇮",aze:"🇦🇿",mda:"🇲🇩",kaz:"🇰🇿",jpn:"🇯🇵",bra:"🇧🇷",kos:"🇽🇰",isr:"🇮🇱",nor:"🇳🇴",wal:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",geo:"🇬🇪",hun:"🇭🇺",por:"🇵🇹",den:"🇩🇰",ukr:"🇺🇦",aut:"🇦🇹",irl:"🇮🇪",rou:"🇷🇴",pol:"🇵🇱",swe:"🇸🇪",bih:"🇧🇦",nir:"🏴󠁧󠁢󠁮󠁩󠁲󠁿",bel:"🇧🇪",ita:"🇮🇹",fra:"🇫🇷",tur:"🇹🇷",esp:"🇪🇸",eng:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",cro:"🇭🇷",cze:"🇨🇿",cyp:"🇨🇾",mne:"🇲🇪",lva:"🇱🇻",arm:"🇦🇲",blr:"🇧🇾",alb:"🇦🇱",fin:"🇫🇮",smr:"🇸🇲"};
const CATS=[["all","Todos"],["uefa","UEFA"],["clb","Primera B"],["pe","Perú"]];
const CATNAME={uefa:"Selecciones · UEFA",clb:"Clubes · Chile · Primera B",pe:"Clubes · Perú"};
const UEFA=["Calendario y resultados de la Nations League 2026-27","UEFA.com","https://www.uefa.com/uefanationsleague/news/02a2-1fea1edbc9a9-78c6728d4928-1000--uefa-nations-league-2026-27-partidos-calendario-y-result/"];
const sec=(medio,url)=>["Sección de fútbol",medio,url,1];
const C={
 com:{sig:"COM",col:["#1d3a8f","#ffffff"]}, spb:{sig:"SB",col:["#e8679a","#ffffff"]},
 jp2:{sig:"JP2",col:["#1d6b3a","#ffffff"]}, gar:{sig:"GAR",col:["#c8102e","#ffffff"]},
 utc:{sig:"UTC",col:["#c8102e","#ffffff"]}, chk:{sig:"CHK",col:["#2e6bc6","#ffffff"]},
 cus:{sig:"CUS",col:["#c8102e","#111111"]}, adt:{sig:"ADT",col:["#f5c400","#111111"]},
 moq:{sig:"MOQ",col:["#c8102e","#ffffff"]}, gra:{sig:"GRA",col:["#f5c400","#c8102e"]},
 wan:{sig:"SW",col:["#0b7a3b","#ffffff"]}, cop:{sig:"COP"}, mag:{sig:"MAG"}, ant:{sig:"ANF",col:["#6fb7e8","#0b1c33"]},
 sma:{sig:"SMA",col:["#1f6fc9","#ffffff"]}, slq:{sig:"SLQ",col:["#f5c400","#111111"]}, cob:{sig:"COB",col:["#f26522","#ffffff"]},
 pmo:{sig:"PMO",col:["#1d5fb8","#ffffff"]}, usf:{sig:"USF"}, ues:{sig:"UE",col:["#c8102e","#ffffff"]}, scz:{sig:"SCZ"},
 ran:{sig:"RAN",col:["#c8102e","#111111"]}, rec:{sig:"REC"}, iqq:{sig:"IQQ",col:["#4fb3e8","#0b1c33"]}
};

const M=[
/* ================= HOY: domingo 15 ================= */
{id:"esp-eng",day:"hoy",t:"16:45",cat:"uefa",comp:"Nations League · Liga A, grupo 3, fecha 6",star:1,h:["España","esp"],a:["Inglaterra","eng"],p:[60,21,19],sc:null,
 juego:"Cierre de la Liga A en el Metropolitano de Madrid, con arbitraje de Clément Turpin. España lidera con 15 puntos de 15 e Inglaterra es segunda con 12. Se ve por TVE.",
 prensa:[["Previa y datos del España-Inglaterra","ESPN Argentina","https://www.espn.com.ar/futbol/partido/_/juegoId/401861175/engeland-spanje"],UEFA,sec("AS (España)","https://as.com/rss/")],
 h2h:["Ida, 26 de septiembre de 2026: Inglaterra 2-3 España. Es el único cruce que encontré en la página de Fútbol Total, que lo rotula como derrota en un lugar pero con el marcador a favor de España. No revisé otras competencias, por lo que puede haber más antecedentes."],
 racha:["España: 5 triunfos en 5, con 14 goles a favor y 5 en contra. El 12 de noviembre le ganó 2-0 a Chequia.","Inglaterra: 4 triunfos y 1 derrota, con 16 goles a favor y 4 en contra. El 12 de noviembre le ganó 2-1 a Croacia."],
 bajas:["No encontré información de bajas en las fuentes revisadas."],
 dato:["Inglaterra marca 3,2 goles por partido y España 2,8","Inglaterra lleva 16 goles en 5 partidos del grupo; España, 14. El único cruce del año terminó 3-2."],
 tips:[["Resultado","Gana España","media","Cinco triunfos en cinco y 60% en el modelo de Fútbol Total, que da 21% al empate y 19% a Inglaterra."],["Goles","Más de 2,5","media","Promedios de 3,2 y 2,8 goles por partido de los dos equipos en la Nations League, y 5 goles en la ida."]],nd:"córners ni tarjetas"},

{id:"bel-ita",day:"hoy",t:"16:45",cat:"uefa",comp:"Nations League · Liga A, grupo 1, fecha 6",star:1,h:["Bélgica","bel"],a:["Italia","ita"],p:null,sc:null,
 juego:"Cierre del grupo A1, en el Rey Balduino de Bruselas. Antes de esta fecha Italia y Francia tenían 10 puntos y Bélgica 9, así que los tres siguen con opciones. Arbitra el noruego Espen Eskås.",
 prensa:[["Previa Bélgica-Italia: alineaciones confirmadas","World Soccer Talk","https://worldsoccertalk.com/news/italy-vs-belgium-confirmed-lineups-for-2026-27-uefa-nations-league-group-a1-clash/"],UEFA,sec("DH Les Sports+ (Bélgica)","https://www.dhnet.be/sports/football/")],
 h2h:["Ida, 25 de septiembre de 2026: Italia 0-2 Bélgica.","Solo revisé Fútbol Total y las previas de la temporada; no encontré el historial completo en otras competencias."],
 racha:["Bélgica: victoria 2-1 con Turquía, derrota 1-4 con Francia, 3-0 a Turquía, derrota 0-1 con Francia y 2-0 a Italia.","Italia: 3-1 a Francia el 12 de noviembre, 3-1 a Turquía, 1-1 con Francia, 4-1 a Turquía y derrota 0-2 con Bélgica."],
 bajas:["No encontré información de bajas en las fuentes revisadas."],
 dato:["Italia marcó 3 o más goles en 4 de sus 5 partidos del grupo","Bélgica ganó 3 de 5, pero las dos derrotas fueron con Francia. Los tres resultados de Italia ante Turquía y Francia en la segunda mitad sumaron 11 goles a favor."],
 tips:[["Goles","Más de 1,5","alta","Italia pasó de 1,5 goles totales en sus 5 partidos del grupo y Bélgica en 4 de 5."]],nd:"probabilidades del modelo, córners ni tarjetas"},

{id:"fra-tur",day:"hoy",t:"16:45",cat:"uefa",comp:"Nations League · Liga A, grupo 1, fecha 6",star:1,h:["Francia","fra"],a:["Turquía","tur"],p:[80,13,7],sc:null,
 juego:"Se juega en el Matmut Atlantique de Burdeos. Francia, ahora dirigida por Zidane, llega con 10 puntos y opción de pelear el primer lugar del grupo; Turquía no suma puntos y ya perdió sus cinco partidos.",
 prensa:[["Nations League: a qué hora y en qué canal ver Francia-Turquía","Sortiraparis","https://www.sortiraparis.com/en/what-to-do-in-paris/sport-wellness/articles/353172-nations-league-what-time-and-which-channel-to-watch-france-vs-turkey-on-november-15"],UEFA,sec("L'Équipe (Francia)","https://www.lequipe.fr")],
 h2h:["Ida, 25 de septiembre de 2026: Turquía 0-1 Francia, estreno de Zidane en el banco francés.","Solo revisé los cruces de esta temporada."],
 racha:["Francia: 1-0 a Turquía, 1-0 a Bélgica, 1-1 con Italia, 4-1 a Bélgica y derrota 1-3 con Italia el 12 de noviembre.","Turquía: 5 derrotas en 5, con 3 goles a favor y 13 en contra."],
 bajas:["No encontré información de bajas en las fuentes revisadas."],
 dato:["Turquía recibe 2,6 goles por partido","13 goles en contra en 5 partidos y 0 puntos. Anotó en 3 de los 5."],
 tips:[["Resultado","Gana Francia","alta","Turquía perdió los 5 partidos con 13 goles en contra; el modelo de Fútbol Total da 80% a Francia."],["Goles","Más de 1,5","media","En 4 de los 5 partidos de Turquía hubo 2 goles o más en total."]],nd:"córners ni tarjetas"},

{id:"cro-cze",day:"hoy",t:"16:45",cat:"uefa",comp:"Nations League · Liga A, grupo 3, fecha 6",star:1,h:["Croacia","cro"],a:["Chequia","cze"],p:null,sc:null,
 juego:"Se juega en la Opus Arena de Osijek. Croacia tiene 3 puntos, producto de su única victoria, y Chequia aún no suma: ambos cierran el grupo A3 sin opciones de pelear arriba.",
 prensa:[["Previa Croacia-Chequia","TUDN","https://www.tudn.com/futbol/uefa-nations-league/croacia-vs-republica-checa-uefa-nations-league-2026-11-15"],UEFA,sec("Jutarnji sport (Croacia)","https://sportske.jutarnji.hr")],
 h2h:["Ida, 26 de septiembre de 2026: Croacia 2-1 Chequia, la única victoria croata del grupo.","Solo revisé los cruces de esta temporada."],
 racha:["Croacia: 1 triunfo y 4 derrotas. El 12 de noviembre perdió 1-2 con Inglaterra.","Chequia: 5 derrotas en 5. El 12 de noviembre cayó 0-2 con España."],
 bajas:["No encontré información de bajas en las fuentes revisadas."],
 dato:["Chequia perdió los 5 partidos del grupo","Croacia ganó solo 1, justamente a Chequia por 2-1."],
 tips:[["Resultado","Croacia o empate","media","Chequia perdió sus 5 partidos y Croacia ganó el único cruce de la temporada."]],nd:"probabilidades del modelo, córners ni tarjetas"},

{id:"cyp-mne",day:"hoy",t:"11:00",cat:"uefa",comp:"Nations League · Liga C, grupo 2, fecha 6",h:["Chipre","cyp"],a:["Montenegro","mne"],p:null,sc:null,
 juego:"Última fecha del grupo C2 de la Liga C.",
 prensa:[UEFA,sec("Kerkida (Chipre)","https://www.kerkida.net")],
 dato:["Sin estadística previa verificada","No encontré historial ni forma reciente en las fuentes revisadas."],tips:[],nd:"historial, forma reciente, córners ni tarjetas"},

{id:"lva-arm",day:"hoy",t:"11:00",cat:"uefa",comp:"Nations League · Liga C, grupo 2, fecha 6",h:["Letonia","lva"],a:["Armenia","arm"],p:null,sc:null,
 juego:"Última fecha del grupo C2 de la Liga C.",
 prensa:[UEFA,sec("Sportacentrs (Letonia)","https://sportacentrs.com/futbols")],
 dato:["Sin estadística previa verificada","No encontré historial ni forma reciente en las fuentes revisadas."],tips:[],nd:"historial, forma reciente, córners ni tarjetas"},

{id:"blr-alb",day:"hoy",t:"14:00",cat:"uefa",comp:"Nations League · Liga C, grupo 1, fecha 6",h:["Bielorrusia","blr"],a:["Albania","alb"],p:null,sc:null,
 juego:"Última fecha del grupo C1 de la Liga C.",
 prensa:[UEFA,sec("Pressball (Bielorrusia)","https://pressball.by")],
 dato:["Sin estadística previa verificada","No encontré historial ni forma reciente en las fuentes revisadas."],tips:[],nd:"historial, forma reciente, córners ni tarjetas"},

{id:"fin-smr",day:"hoy",t:"14:00",cat:"uefa",comp:"Nations League · Liga C, grupo 1, fecha 6",h:["Finlandia","fin"],a:["San Marino","smr"],p:null,sc:null,
 juego:"Última fecha del grupo C1 de la Liga C.",
 prensa:[UEFA,sec("Iltalehti (Finlandia)","https://www.iltalehti.fi/rss/lajit/urheilu.xml")],
 dato:["Sin estadística previa verificada","No encontré historial ni forma reciente en las fuentes revisadas."],tips:[],nd:"historial, forma reciente, córners ni tarjetas"},

{id:"scz-ran",day:"hoy",t:"18:00",cat:"clb",comp:"Primera B · fecha 30 (última de la fase regular)",star:1,h:["Deportes Santa Cruz",C.scz],a:["Rangers",C.ran],p:null,sc:null,
 juego:"Duelo por no descender, en el Joaquín Muñoz de Santa Cruz. Antes de la fecha, Rangers tenía 21 puntos, San Felipe 23 y Santa Cruz 24. Si Rangers gana y San Felipe también, Rangers y Santa Cruz igualan en 24 y juegan un partido de definición. Revisa el resultado final: no lo pude confirmar.",
 prensa:[["Ascensos, descensos y partidos de definición este domingo","T13","https://www.t13.cl/noticia/deportes13/ascensos-descensos-posibles-partidos-definicion-resultados-definen-primera-b-es-15-11-2026"],sec("Al Aire Libre (Primera B)","https://www.alairelibre.cl/futbol/primera-b/")],
 h2h:["Esta temporada: Rangers 0-1 Santa Cruz (6 de junio).","Solo revisé los cruces de 2026."],
 racha:["Santa Cruz: 24 puntos, 4 triunfos, 12 empates y 13 derrotas, con diferencia de gol de -14. Últimos cinco: E E P P E.","Rangers: 21 puntos, 5 triunfos, 6 empates y 18 derrotas, con -19. Últimos cinco: P P G P P."],
 bajas:["No encontré información de bajas en las fuentes revisadas."],
 dato:["Santa Cruz y Rangers se juegan la categoría","Santa Cruz solo ganó 4 de 29 partidos; Rangers, 5."],tips:[],nd:"probabilidades del modelo, córners ni tarjetas"},

{id:"usf-ues",day:"hoy",t:"18:00",cat:"clb",comp:"Primera B · fecha 30 (última de la fase regular)",star:1,h:["Unión San Felipe",C.usf],a:["Unión Española",C.ues],p:null,sc:null,
 juego:"Se juega en el Municipal de San Felipe. San Felipe llegaba con 23 puntos y, si pierde y Rangers gana, desciende. Unión Española llegaba con 39. Revisa el resultado final: no lo pude confirmar.",
 prensa:[["Ascensos, descensos y partidos de definición este domingo","T13","https://www.t13.cl/noticia/deportes13/ascensos-descensos-posibles-partidos-definicion-resultados-definen-primera-b-es-15-11-2026"],sec("Al Aire Libre (Primera B)","https://www.alairelibre.cl/futbol/primera-b/")],
 racha:["San Felipe: 23 puntos, 5 triunfos, 8 empates y 16 derrotas, con -34 de diferencia. Últimos cinco: P E P P P.","Unión Española: 39 puntos, con -3 de diferencia. Últimos cinco: P G P P E."],
 bajas:["No encontré información de bajas en las fuentes revisadas."],
 dato:["San Felipe tiene el peor gol diferencia de la tabla: -34","Marcó 19 goles en 29 partidos y recibió 53."],tips:[["Resultado","Unión Española o empate","media","San Felipe lleva 16 derrotas en 29 partidos y 53 goles en contra."]],nd:"probabilidades del modelo, córners ni tarjetas"},

{id:"mag-ant",day:"hoy",t:"18:00",cat:"clb",comp:"Primera B · fecha 30 (última de la fase regular)",h:["Magallanes",C.mag],a:["Deportes Antofagasta",C.ant],p:null,sc:null,
 juego:"Cierre de la fase regular para dos equipos que pelean la liguilla de ascenso. Antofagasta llegaba con 48 puntos y Magallanes con 46. El horario sale de la programación simultánea de la fecha. Revisa el resultado final: no lo pude confirmar.",
 prensa:[sec("Al Aire Libre (Primera B)","https://www.alairelibre.cl/futbol/primera-b/")],
 racha:["Antofagasta: 48 puntos, 51 goles a favor y 26 en contra. Últimos cinco: G E G G P.","Magallanes: 46 puntos, 45 goles a favor y 44 en contra. Últimos cinco: P P G G G."],
 bajas:["No encontré información de bajas en las fuentes revisadas."],
 dato:["Antofagasta tiene +25 de diferencia de gol, la mejor de estos dos","Magallanes tiene +1."],tips:[],nd:"historial, probabilidades del modelo, córners ni tarjetas"},

{id:"rec-iqq",day:"hoy",t:"20:30",cat:"clb",comp:"Primera B · fecha 30 (última de la fase regular)",h:["Deportes Recoleta",C.rec],a:["Deportes Iquique",C.iqq],p:null,sc:null,
 juego:"Se juega en el Municipal de La Pintana. Recoleta llegaba con 42 puntos e Iquique con 38.",
 prensa:[["Ascensos, descensos y partidos de definición este domingo","T13","https://www.t13.cl/noticia/deportes13/ascensos-descensos-posibles-partidos-definicion-resultados-definen-primera-b-es-15-11-2026"]],
 racha:["Recoleta: 42 puntos, -2 de diferencia. Últimos cinco: E P P G E.","Iquique: 38 puntos, +9 de diferencia. Últimos cinco: G E G G G."],
 bajas:["No encontré información de bajas en las fuentes revisadas."],
 dato:["Iquique viene de 4 triunfos en sus últimos 5","Recoleta, con 1 triunfo en sus últimos 5."],tips:[],nd:"historial, probabilidades del modelo, córners ni tarjetas"},

{id:"com-spb",day:"hoy",t:"15:00",cat:"pe",comp:"Liga 1 · Clausura, fecha 17",h:["Comerciantes Unidos",C.com],a:["Sport Boys",C.spb],p:null,sc:null,
 juego:"Abre la última fecha del Torneo Clausura, en el Juan Maldonado Gamarra de Cutervo (13:00 en Perú). Esta fecha se reparte hasta el domingo 22, cuando se define el título.",
 prensa:[["Días y horarios confirmados para la última fecha del Clausura","RPP","https://rpp.pe/futbol/descentralizado/torneo-clausura-2026-fecha-17-con-universitario-alianza-lima-cristal-huancayo-programacion-de-partidos-y-horarios-de-la-ultima-fecha-de-la-liga-1-noticia-1716997"]],
 dato:["El título del Clausura se define el domingo 22","Sporting Cristal vs. Cienciano y Sport Huancayo vs. Universitario juegan a las 3:00 p.m. de Perú."],tips:[],nd:"historial, forma reciente, córners ni tarjetas"},

{id:"jp2-gar",day:"hoy",t:"17:15",cat:"pe",comp:"Liga 1 · Clausura, fecha 17",h:["Juan Pablo II",C.jp2],a:["Deportivo Garcilaso",C.gar],p:null,sc:null,
 juego:"Segundo partido del domingo por la fecha 17, en el complejo de Juan Pablo II, en Chongoyape (15:15 en Perú).",
 prensa:[["Cambios de día y horario en la fecha 17 del Clausura","Bolavip Perú","https://bolavip.com/pe/liga-1/liga-1-confirmo-cambios-de-dia-y-horario-asi-quedo-la-programacion-de-la-fecha-17-del-torneo-clausura-2026"]],
 dato:["Juan Pablo II era 17º en la tabla acumulada con 16 puntos","Dato de la corrida anterior; no se verificó la tabla de hoy."],tips:[],nd:"historial, forma reciente, córners ni tarjetas"},

/* ================= MANANA: lunes 16 ================= */
{id:"fro-mda",day:"man",t:"12:00",cat:"uefa",comp:"Nations League · Liga C, grupo 3, fecha 6",h:["Islas Feroe","fro"],a:["Moldavia","mda"],p:null,sc:null,
 juego:"Última fecha del grupo C3 de la Liga C. Hora de Chile a partir de las 16:00 de la UEFA (hora central europea).",
 prensa:[UEFA],
 racha:["Moldavia: 0-4 con Eslovaquia y 2-1 a Kazajistán, entre los partidos que alcancé a verificar."],
 bajas:["No encontré información de bajas en las fuentes revisadas."],
 dato:["Islas Feroe empató 1-1 con Kazajistán en la fecha 1","No revisé el resto de sus resultados."],tips:[],nd:"historial, probabilidades del modelo, córners ni tarjetas"},

{id:"kaz-svk",day:"man",t:"12:00",cat:"uefa",comp:"Nations League · Liga C, grupo 3, fecha 6",h:["Kazajistán","kaz"],a:["Eslovaquia","svk"],p:null,sc:null,
 juego:"Última fecha del grupo C3 de la Liga C. Hora de Chile a partir de las 16:00 de la UEFA (hora central europea).",
 prensa:[UEFA],
 h2h:["Ida, 29 de septiembre de 2026: Eslovaquia 2-1 Kazajistán."],
 racha:["Eslovaquia: 2-1 a Kazajistán y 4-0 a Moldavia, entre los partidos que alcancé a verificar.","Kazajistán: 1-1 con Islas Feroe, derrota 1-2 con Eslovaquia y derrota 1-2 con Moldavia."],
 bajas:["No encontré información de bajas en las fuentes revisadas."],
 dato:["Eslovaquia ganó los dos partidos que verifiqué, con 6 goles a favor","Kazajistán perdió sus dos últimos partidos verificados."],tips:[["Resultado","Eslovaquia o empate","media","Ganó los dos partidos verificados y ya le había ganado a Kazajistán 2-1 en la ida."]],nd:"probabilidades del modelo, córners ni tarjetas"},

{id:"utc-chk",day:"man",t:"15:00",cat:"pe",comp:"Liga 1 · Clausura, fecha 17",star:1,h:["UTC",C.utc],a:["Los Chankas",C.chk],p:null,sc:null,
 juego:"Se juega en el Héroes de San Ramón de Cajamarca (13:00 en Perú). UTC pelea la permanencia según la corrida anterior.",
 prensa:[["Programación de la última fecha del Clausura","RPP","https://rpp.pe/futbol/descentralizado/torneo-clausura-2026-fecha-17-con-universitario-alianza-lima-cristal-huancayo-programacion-de-partidos-y-horarios-de-la-ultima-fecha-de-la-liga-1-noticia-1716997"]],
 dato:["UTC pelea la permanencia con Juan Pablo II, Moquegua y Atlético Grau","Dato de la corrida anterior; no se verificó la tabla actual."],tips:[],nd:"historial, forma reciente, córners ni tarjetas"},

{id:"cus-adt",day:"man",t:"17:15",cat:"pe",comp:"Liga 1 · Clausura, fecha 17",h:["Cusco FC",C.cus],a:["ADT",C.adt],p:null,sc:null,
 juego:"Se juega en el Garcilaso de la Vega de Cusco (15:15 en Perú).",
 prensa:[["Programación de la fecha 17 del Clausura","El Comercio (Perú)","https://elcomercio.pe/deporte-total/futbol-peruano/liga-1-2026-en-vivo-asi-se-mueve-la-tabla-y-que-equipos-pelean-por-quedarse-con-el-torneo-clausura-tdpe-noticia/"]],
 dato:["Sin estadística previa verificada","No encontré historial ni forma reciente en las fuentes revisadas."],tips:[],nd:"historial, forma reciente, córners ni tarjetas"},

{id:"moq-gra",day:"man",t:"17:15",cat:"pe",comp:"Liga 1 · Clausura, fecha 17",star:1,h:["CD Moquegua",C.moq],a:["Atlético Grau",C.gra],p:null,sc:null,
 juego:"Duelo directo por la permanencia, en el 25 de Noviembre de Moquegua (15:15 en Perú), según la corrida anterior.",
 prensa:[["Programación confirmada de la última fecha","Infobae Perú","https://www.infobae.com/peru/deportes/2026/11/10/programacion-confirmada-de-la-ultima-fecha-del-torneo-clausura-2026-de-la-liga-1-2026-partidos-horarios-y-canales-tv/"]],
 dato:["Moquegua y Atlético Grau pelean la permanencia","Dato de la corrida anterior; no se verificó la tabla actual."],tips:[],nd:"historial, forma reciente, córners ni tarjetas"}
];

const SUB={hoy:"Hoy: cierra la Nations League (Liga A) y se juega la última fecha de la Primera B de Chile.",man:"Mañana: dos de la Liga C de la Nations League y tres del Clausura peruano."};
const PD=[
 ["Primera B de Chile: cómo está la definición",["Cobreloa y San Luis llegaron empatados en la punta con 57 puntos, así que el campeón y el primer ascenso se definen en un solo partido en cancha neutral. No encontré la fecha confirmada.","La liguilla por el segundo ascenso todavía tiene cruces por confirmar. Revisa la programación oficial de la ANFP.","En el descenso, antes de la última fecha: Rangers 21 puntos, San Felipe 23 y Santa Cruz 24. Si ganan Rangers y San Felipe, Rangers y Santa Cruz juegan un partido de definición.","No pude confirmar los resultados finales de hoy: míralos en la ANFP o en el diario antes de dar algo por cerrado."]],
 ["Sudamérica después del Mundial",["Messi se retiró de la selección el 6 de octubre de 2026, ante Benín, tras 21 años. Scaloni renovó hasta 2030.","Argentina fue subcampeona del Mundial 2026: perdió la final 1-0 con España.","Uruguay cayó en fase de grupos. Se fue Bielsa y Diego Forlán dirige como interino.","Colombia quedó fuera en octavos, por penales ante Suiza.","A Chile lo dirige Nicolás Córdova y a Perú el brasileño Mano Menezes."]],
 ["Europa: quién manda en las selecciones",["Zidane dirige a Francia: debutó el 25 de septiembre con 1-0 sobre Turquía.","España lidera su grupo de la Nations League con 5 triunfos en 5; Inglaterra, con 4 triunfos y 1 derrota, suma 12 puntos.","Italia le ganó 3-1 a Francia el 12 de noviembre y llegó con 10 puntos al cierre del grupo A1.","Turquía perdió sus 5 partidos del grupo, con 3 goles a favor y 13 en contra.","Klopp dirige a Alemania, Xavi a Países Bajos y Tuchel a Inglaterra.","Cristiano Ronaldo dejó la selección de Portugal, que ahora dirige Jorge Jesus."]],
 ["Clubes de Sudamérica: quién manda",["La final de la Copa Libertadores 2026 es Estudiantes vs Palmeiras, el sábado 28 de noviembre a las 17:00 en el Centenario de Montevideo. Reedita la final de 1968, que también se definió ahí.","Estudiantes eliminó a Flamengo por penales en el Maracaná, con Fernando Muslera en el arco. Palmeiras, de Abel Ferreira, dejó fuera a Fluminense también por penales.","Boca Juniors, dirigido por Rodolfo Arruabarrena, ganó la Tabla Anual argentina y juega la final de la Copa Sudamericana ante Atlético Mineiro el 21 de noviembre.","Carlo Ancelotti dirige a Brasil: 12 triunfos en 20 partidos, pero cayó en octavos del Mundial ante la Noruega de Haaland.","Chile estrena torneo: la Copa de la Liga, cuyo campeón va a la Libertadores 2027. La definen Coquimbo Unido y O'Higgins.","En Chile, Universidad de Chile y Universidad Católica pelean el cupo Chile 2 a la Libertadores en las dos últimas fechas."]]
];

const AL={};
M.forEach(m=>{if(AL[m.id])m.al=AL[m.id];});
