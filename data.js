/* Fulbolito · datos del día. Este archivo se reemplaza completo en cada actualización diaria.
   Formato de cada partido en M:
   {id, day:"hoy"|"man", t:"HH:MM" (hora de Chile), cat:<id de CATS>, star:1 (solo destacados),
    h:[nombre, claveBandera], a:[nombre, claveBandera], p:[local, empate, visita] o null, sc:"1-0" o null,
    juego:"qué se juega", prensa:[[titular, medio, url]] (usa sec(medio,url) si solo hay sección),
    h2h:[...], racha:[...], bajas:[...], dato:[titular, detalle], tips:[[mercado, tip, "alta"|"media"|"baja", por qué]], nd:"córners ni tarjetas",
    al:{fuente:"medio de donde sale", h:{...}, a:{...}}}
   Alineaciones (al), por equipo, de más a menos información:
   {col:[fondo, texto], est:"posible"|"confirmada"|"última usada (fecha)", f:"4-3-3", xi:[[apellido, dorsal o null] x11, arquero primero y luego por líneas de izquierda a derecha]}
   {col, f:"4-4-2", dest:[apellidos destacados]}  -> solo formación posible
   {col, dest:[apellidos]}                         -> solo jugadores destacados
   Nunca inventes dorsales: si no hay dorsal confirmado va null. */
const FECHA={hoy:"Vie 13 nov",man:"Sáb 14 nov"};
const ACTUALIZADO="viernes 13 de noviembre a la 01:00 de Chile";
const F={col:"🇨🇴",chi:"🇨🇱",arg:"🇦🇷",uru:"🇺🇾",per:"🇵🇪",bol:"🇧🇴",ned:"🇳🇱",gre:"🇬🇷",srb:"🇷🇸",ger:"🇩🇪",sco:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",mkd:"🇲🇰",svn:"🇸🇮",sui:"🇨🇭",svk:"🇸🇰",fro:"🇫🇴",bul:"🇧🇬",isl:"🇮🇸",lux:"🇱🇺",est:"🇪🇪",and:"🇦🇩",gib:"🇬🇮",lie:"🇱🇮",aze:"🇦🇿",mda:"🇲🇩",kaz:"🇰🇿",jpn:"🇯🇵",bra:"🇧🇷",kos:"🇽🇰",isr:"🇮🇱",nor:"🇳🇴",wal:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",geo:"🇬🇪",hun:"🇭🇺",por:"🇵🇹",den:"🇩🇰",ukr:"🇺🇦",aut:"🇦🇹",irl:"🇮🇪",rou:"🇷🇴",pol:"🇵🇱",swe:"🇸🇪",bih:"🇧🇦"};
const CATS=[["all","Todos"],["am","Amistosos"],["nla","Nations A"],["nlb","Nations B"],["nlc","Nations C"],["nld","Nations D"],["club","Clubes"]];
const CATNAME={am:"Amistosos FIFA",nla:"Nations League · Liga A",nlb:"Nations League · Liga B",nlc:"Nations League · Liga C",nld:"Nations League · Liga D",club:"Clubes"};
const UEFA=["Previa oficial de la fecha 5","UEFA.com","https://uefa.com/uefanationsleague/news/02ab-220793bfb8a3-00d5842942af-1000--uefa-nations-league-matchday-5-preview-harry-kane-set-for-en"];
const sec=(medio,url)=>["Sección de fútbol",medio,url,1];

const M=[
/* ================= HOY ================= */
{id:"arg-uru",day:"hoy",t:"20:00",cat:"am",star:1,h:["Argentina","arg"],a:["Uruguay","uru"],p:[71,15,14],sc:"2-1",
 juego:"Clásico del Río de la Plata en La Bombonera y primer partido de Argentina desde el retiro de Messi. La camiseta 10 y la capitanía están sin dueño. Uruguay llega en reconstrucción con Forlán como interino. Arbitra el brasileño Flávio Rodrigues de Souza.",
 prensa:[["Hora, canal y posibles formaciones","La Capital","https://www.lacapital.com.ar/ovacion/la-seleccion-argentina-enfrenta-uruguay-hora-canal-y-posibles-formaciones-del-amistoso-n10291808.html"],["Argentina y Uruguay chocan en La Bombonera","El Gráfico","https://www.elgrafico.com.ar/articulo/seleccion-argentina/103885/argentina-vs-uruguay-horario-formaciones-y-donde-ver-en-vivo"],["Previa, bajas y antecedentes","365Scores","https://www.365scores.com/es/news/argentina-vs-uruguay-previa-horarios-tv/"]],
 h2h:["Últimos registrados: 7 triunfos de Argentina, 2 empates, 3 de Uruguay.","Marzo 2025: Uruguay 0-1 Argentina. Córners 4-3 para Uruguay, 3 amarillas y 1 roja en total.","Noviembre 2023, en esta cancha: Argentina 0-2 Uruguay. Córners 8-1 para Argentina."],
 racha:["Argentina: 4-0 a Bolivia, 7-0 a Burkina Faso, 3-0 a Benín. 14 goles a favor y 0 en contra, ante rivales menores.","Uruguay: 1-3 con Japón, 4-1 a Corea del Sur, 6-1 a India."],
 bajas:["Argentina sin Dibu Martínez (cirugía de mandíbula), Cuti Romero, Molina, Paredes, Nico González ni Lautaro Martínez. Ataja Rulli.","Uruguay con plantel completo: Valverde, Bentancur, De Arrascaeta, Darwin Núñez."],
 dato:["Uruguay marcó en sus 3 últimos partidos: 11 goles","Y Argentina juega sin su arquero titular ni Romero. El 71% del modelo para Argentina se apoya en goleadas ante rivales flojos."],
 tips:[["Resultado","Argentina o empate","media","Localía y plantel más profundo, pero con seis bajas de peso el 71% parece generoso."],["Goles","Ambos equipos marcan","media","Uruguay hizo 11 goles en sus tres últimos partidos."],["Córners","Más córners para Argentina","media","En los dos últimos clásicos sumó 11 contra 5 de Uruguay."],["Tarjetas","Menos de 5,5 en total","media","El último clásico tuvo 3 amarillas y 1 roja, y a marzo de 2025 Argentina llevaba 11 partidos bajo esa línea."]]},

{id:"col-chi",day:"hoy",t:"21:00",cat:"am",star:1,h:["Colombia","col"],a:["Chile","chi"],p:[49,26,26],sc:"1-1",
 juego:"Primero de dos amistosos seguidos: hoy en el Pascual Guerrero de Cali y el martes 17 en el Estadio Nacional. Lorenzo prueba caras nuevas tras caer en octavos del Mundial. Córdova sigue armando una Roja en recambio.",
 prensa:[["Previa, hora y alineaciones probables","Futbolred (Colombia)","https://futbolred.com/seleccion-colombia/colombia-vs-chile-lorenzo-tendra-pruebas-importantes-en-amistoso-y-prepara-el-camino-hacia-2030-275178"],["Colombia probará nuevas figuras ante Chile","La Patria (Colombia)","https://www.lapatria.com/colombia/colombia-probara-nuevas-figuras-ante-chile-en-un-partido-amistoso-en-el-pascual-guerrero"],["A qué hora juega La Roja y dónde verla","CNN Chile","https://www.cnnchile.com/deportes/colombia-chile-horario-donde-ver-vivo-amistoso-noviembre-2026/"]],
 h2h:["Oficiales desde 2020: Colombia 2 triunfos, 2 empates, 0 derrotas.","2024: Colombia 4-0 Chile. 2023: Chile 0-0 Colombia.","2021: Colombia 3-1 Chile. 2020: Chile 2-2 Colombia."],
 racha:["Colombia: 2-0 a Perú, 0-1 con Paraguay, 1-1 con México. Promedia 0,8 goles a favor y 0,4 en contra.","Chile: ganó 2-0 a México, perdió 2-4 con Estados Unidos y 0-1 con Canadá. Promedia 1,4 a favor y 1,6 en contra."],
 bajas:["Colombia sin Luis Díaz (lesión muscular), Richard Ríos, Cucho Hernández ni Campaz.","Chile sin Kuscevic (esguince de tobillo). Vuelven Maripán y Williams Alarcón. Están Osorio y Brereton."],
 dato:["Colombia no pierde: 75% según el modelo","Las casas van más lejos y pagan 1.38 por su triunfo, cerca de 68% solo para la victoria. Chile no le gana por los puntos desde antes de 2020."],
 tips:[["Resultado","Colombia o empate","alta","Cuatro cruces oficiales sin derrota y Chile recibe 1,6 goles por partido."],["Goles","Menos de 2,5","media","Colombia hizo 4 goles en sus últimos 5 partidos y recibió 2."]],nd:"córners ni tarjetas"},

{id:"per-bol",day:"hoy",t:"22:00",cat:"am",h:["Perú","per"],a:["Bolivia","bol"],p:[45,25,30],sc:"1-1",
 juego:"Amistoso en Matute, la cancha de Alianza Lima, donde la selección vuelve tras más de dos años. Mano Menezes busca su segunda victoria en Perú. A Óscar Villegas le discuten la continuidad en Bolivia.",
 prensa:[["Lampe habla de su posible retiro en la previa","RPP","https://rpp.pe/futbol/futbol-mundial/peru-vs-bolivia-carlos-lampe-hablo-de-posible-retiro-previo-a-amistoso-internacional-fifa-2026-en-matute-noticia-1717390"],["El once de Mano Menezes para ganar en Matute","Líbero","https://libero.pe/futbol-peruano/seleccion-peruana/2026/11/12/alineaciones-peru-vs-bolivia-formacion-del-partido-amistoso-internacional-424692"],["Análisis estadístico y cuotas","Depor","https://depor.com/apuestas-deportivas/peru-vs-bolivia-pronosticos-apuestas-cuotas-13-11-2026/"]],
 h2h:["Perú ganó 4 de los últimos 5 cruces.","El último terminó Perú 2-0 Bolivia."],
 racha:["Perú con Menezes: 1 triunfo, 2 empates, 5 derrotas. Dos goles en sus últimos cuatro amistosos.","Bolivia: 0-2 con Paraguay y 0-4 con Argentina."],
 bajas:["Perú con Marco Huamán y Jairo Vélez tocados, no partirían de titulares.","Bolivia sin bajas informadas. Formaría con 3-5-2 y Lampe en el arco."],
 dato:["Bolivia lleva 2 partidos sin marcar y Perú hizo 2 goles en 4","Depor le da 52% a Perú y el modelo 45%."],
 tips:[["Goles","Menos de 2,5","alta","Seis partidos entre los dos con 2 goles a favor en total."],["Resultado","Gana Perú","media","Localía y 4 de 5 en el historial, aunque llega con una sola victoria en ocho partidos."]],nd:"córners ni tarjetas"},

{id:"ned-gre",day:"hoy",t:"16:45",cat:"nla",star:1,h:["Países Bajos","ned"],a:["Grecia","gre"],p:[33,24,43],sc:"1-1",
 juego:"Los dos invictos e igualados con 8 puntos en la cima del grupo A2. Si gana Grecia asegura el primer lugar y los cuartos de final. Países Bajos clasifica hoy solo si gana y Alemania no gana en Serbia.",
 prensa:[["Xavi no quiere reparar esta vez: Grecia, buena prueba para Oranje","Voetbal International","https://www.vi.nl/nieuws/dit-keer-wil-xavi-niet-repareren-griekenland-goede-test-voor-oranje"],["Previa estadística y alineaciones","WhoScored","https://www.whoscored.com/matches/1969826/preview/international-uefa-nations-league-a-2026-2027-netherlands-greece"],["Qué se define en el grupo A2","Scores24","https://scores24.live/en/articles/weekly-predictions/uefa-nations-league-13-11-2026"]],
 h2h:["Ida en este grupo: Grecia 2-2 Países Bajos.","2023: Países Bajos 3-0 Grecia y Grecia 0-1 Países Bajos.","Histórico: 12 partidos, 9 triunfos neerlandeses, 2 empates, 1 griego."],
 racha:["Países Bajos: 2 triunfos y 2 empates. Promedia 7,5 córners a favor y 3,5 en contra en esta Nations.","Grecia: invicta. Le ganó 1-0 a Alemania de visita y recibió 3 goles en 4 partidos."],
 bajas:["Países Bajos sin Van Dijk, Frimpong, Hato ni Aké. Brobbey fue reportado fuera por la federación, aunque UEFA lo daba disponible. Vuelve Frenkie de Jong.","Grecia sin Saliakas ni Zafeiris, suspendidos por amarillas."],
 dato:["Países Bajos lleva 11 partidos oficiales sin perder en casa","Nadie le gana ahí por los puntos desde octubre de 2023. Aun así el modelo ve favorita a Grecia (43%) y las previas dicen 2-1 local: es el más parejo del día."],
 tips:[["Resultado","Países Bajos o empate","media","La racha de 11 en casa contra una Grecia invicta en el grupo."],["Goles","Ambos equipos marcan","media","Ya empataron 2-2 y ninguno se fue en cero en ese partido."],["Córners","Más córners para Países Bajos","media","7,5 a favor y 3,5 en contra por partido en esta Nations. Grecia promediaba 5,1 a favor a octubre."],["Tarjetas","Grecia más de 1,5 amarillas","media","Promedió 2,3 por partido en la Nations anterior y ya perdió a dos jugadores por acumulación en esta."]]},

{id:"srb-ger",day:"hoy",t:"16:45",cat:"nla",h:["Serbia","srb"],a:["Alemania","ger"],p:[29,32,39],sc:"0-1",
 juego:"Alemania es tercera con 5 puntos, a tres de los líderes, y necesita al menos 4 de los 6 que quedan. Serbia tiene 0 puntos y desciende si no gana. Se juega a puertas cerradas en Belgrado por sanción de la UEFA.",
 prensa:[["Previa y partido sin público","Bundesliga.com","https://www.bundesliga.com/en/bundesliga/news/serbia-germany-live-nations-league-klopp-fullkrug-wirtz-39897"],["Predicción, bajas y alineaciones","Sports Mole","https://www.sportsmole.co.uk/football/germany/uefa-nations-league/preview/serbia-vs-germany-prediction-team-news-lineups_608896.html"],sec("Mozzart Sport (Serbia)","https://www.mozzartsport.com/fudbal")],
 h2h:["Ida en octubre: Alemania 2-0 Serbia, con Wirtz de figura.","Cuatro cruces previos: 2 triunfos alemanes, 1 serbio, 1 empate."],
 racha:["Serbia: 4 derrotas en 4 en el grupo y 6 seguidas en total.","Alemania: 1 triunfo, 2 empates, 1 derrota. Viene de un 0-0 con Grecia."],
 bajas:["Serbia con Maksimović suspendido. El segundo suspendido varía según la fuente: Lukić o Gudelj. Vuelven Mitrović y Milenković.","Alemania con Treu, Thiaw y Bisseck a una amarilla de perderse el cierre. Ter Stegen confirmado en el arco."],
 dato:["Serbia perdió sus 6 últimos partidos","Y hoy ni siquiera tiene público. El modelo deja 32% de empate porque Alemania solo ganó 1 de 4 con Klopp en el grupo."],
 tips:[["Resultado","Gana Alemania","media","Seis derrotas seguidas del rival y un 2-0 en la ida."],["Goles","Menos de 3,5","media","Alemania viene de un 0-0 y las previas repiten 1-2 o 0-2."]],nd:"córners ni tarjetas"},

{id:"sco-mkd",day:"hoy",t:"16:45",cat:"nlb",h:["Escocia","sco"],a:["Macedonia del Norte","mkd"],p:[71,20,9],sc:"1-0",
 juego:"Escocia es tercera con 4 puntos y busca salir de la zona de repechaje por el descenso. Macedonia del Norte es última con 0 puntos.",
 prensa:[["Predicción y datos","SoccerNews","https://www.soccernews.com/prediction-scotland-vs-north-macedonia/407930/"],["Ficha, forma y tabla","365Scores","https://www.365scores.com/football/match/uefa-nations-league-7016/north-macedonia-scotland-5068-5069-7016"],sec("BBC Sport Scotland","https://www.bbc.com/sport/football/teams/scotland")],
 h2h:["Ida en octubre: Macedonia del Norte 0-2 Escocia.","Escocia lleva cuatro cruces sin perder con este rival."],
 racha:["Escocia: una victoria en 4 partidos del grupo. 3 goles a favor y 5 en contra.","Macedonia del Norte: 4 derrotas, 0 goles a favor y 10 en contra."],
 bajas:["Sin bajas confirmadas en las fuentes revisadas."],
 dato:["Macedonia del Norte: 0 goles en sus 8 partidos de 2026","El modelo le da 71% a Escocia y marcador probable 1-0."],
 tips:[["Resultado","Gana Escocia sin recibir goles","alta","Ocho partidos del rival sin marcar y 0-2 en la ida."],["Goles","Menos de 3,5","media","Escocia hizo 3 goles en 4 partidos del grupo."]],nd:"córners ni tarjetas"},

{id:"svn-sui",day:"hoy",t:"16:45",cat:"nlb",h:["Eslovenia","svn"],a:["Suiza","sui"],p:[17,23,60],sc:"0-1",
 juego:"Suiza es líder perfecta: 12 puntos, 11 goles a favor y 1 en contra. Eslovenia es segunda con 7 y quiere asegurar ese puesto. El partido se mudó de Liubliana a Maribor, con estadio agotado.",
 prensa:[["Espectáculo en Maribor: los eslovenos esperan a una Suiza de gran nivel","SNportal (Eslovenia)","https://snportal.si/reprezentanca/spektakel-pod-kalvarijo-slovenci-v-mariboru-pricakujejo-izjemno-kakovostno-svico/"],["Stožice quedó fuera y Maribor respondió: estadio agotado","SNportal (Eslovenia)","https://snportal.si/reprezentanca/stozice-so-odpadle-maribor-pa-navdusil-slovenijo-proti-svici-caka-razprodan-stadion/"],["Predicción y datos","SoccerNews","https://www.soccernews.com/prediction-slovenia-vs-switzerland/407932/"]],
 h2h:["Ida en octubre: Suiza 2-1 Eslovenia.","Septiembre 2025: Suiza 3-0 Eslovenia."],
 racha:["Eslovenia: 2 triunfos, 1 empate, 1 derrota. Solo perdió una vez en casa desde noviembre de 2024.","Suiza: 4 de 4, y 8 triunfos en sus últimos 9 partidos."],
 bajas:["Sin bajas confirmadas. Es el primer partido de la selección eslovena en el Ljudski vrt en cinco años."],
 dato:["Suiza ganó sus 4 partidos del grupo: 11 goles a 1","Amdouni suma 3 goles y 1 asistencia. Ndoye, 2 goles y 3 asistencias."],
 tips:[["Resultado","Gana Suiza","media","Puntaje perfecto, aunque Eslovenia casi no pierde de local."],["Tarjetas","Menos de 1,5 amarillas a Suiza","media","Lo cumplió en 12 de 13 partidos oficiales, dato a octubre."],["Goles","Menos de 2,5","baja","Ocho de diez partidos de Eslovenia terminaron así, dato a octubre."]],nd:"córners"},

{id:"svk-fro",day:"hoy",t:"16:45",cat:"nlc",h:["Eslovaquia","svk"],a:["Islas Feroe","fro"],p:[54,24,22],sc:"1-1",
 juego:"Eslovaquia lidera el grupo con 10 puntos y con un triunfo casi asegura el primer lugar. Feroe es segunda con 4 y es el único rival al que Eslovaquia no le ganó.",
 prensa:[["Predicción y apuestas: los especialistas del empate visitan Košice","Squawka","https://www.squawka.com/en/?p=1517305"],UEFA,sec("Aktuality Šport (Eslovaquia)","https://sport.aktuality.sk/futbal/")],
 h2h:["Ida en octubre: Islas Feroe 1-1 Eslovaquia. Es su único cruce reciente."],
 racha:["Eslovaquia: 2-0 a Moldavia, 2-1 a Kazajistán, 1-1 con Feroe, 4-0 a Moldavia. Marcó en 16 partidos seguidos de Nations League.","Islas Feroe: 1-1, 1-1, 1-1 y 2-2. Cuatro empates en cuatro."],
 bajas:["Sin bajas confirmadas en las fuentes revisadas."],
 dato:["Feroe marcó y recibió en sus 4 partidos del grupo","Otros modelos son más duros que Balonario: BetClan y Foresportia le dan cerca de 72% a Eslovaquia."],
 tips:[["Resultado","Eslovaquia o empate","alta","Líder invicto contra un rival que no ganó ninguno de sus cuatro partidos."],["Goles","Ambos equipos marcan","media","Pasó en los cuatro partidos de Feroe en el grupo."]],nd:"córners ni tarjetas"},

{id:"mda-kaz",day:"hoy",t:"14:00",cat:"nlc",h:["Moldavia","mda"],a:["Kazajistán","kaz"],p:[46,25,30],sc:"1-1",
 juego:"Abre la jornada europea en Chisináu. Moldavia es tercera con 4 puntos y Kazajistán último con 2. El técnico kazajo dice que ganar los mantiene con opción al segundo lugar.",
 prensa:[["Moldavia vs Kazajistán: transmisión, hoy a las 19:00","Moldfootball","https://moldfootball.com/ru/news/moldova-kazahstan-transliaciia-onlain-se"],["Historia de los cruces entre Moldavia y Kazajistán","Moldfootball","https://moldfootball.com/ru/news/istoriia-lichnyh-vstrech-moldova-kazahst"],UEFA],
 h2h:["Octubre 2026: Kazajistán 1-2 Moldavia.","Marzo 2022: Moldavia 1-2 Kazajistán y Kazajistán 0-1 Moldavia."],
 racha:["Moldavia: 0-2 con Eslovaquia, 1-1 con Feroe, 2-1 a Kazajistán, 0-4 con Eslovaquia. 3 goles a favor y 8 en contra.","Kazajistán: 1-1 con Feroe, 1-2 con Eslovaquia, 1-2 con Moldavia, 2-2 con Feroe. 5 a favor y 7 en contra."],
 bajas:["Moldavia sin Bodișteanu (lesión) ni Postolachi. Baboglo está en duda."],
 dato:["Kazajistán marcó y recibió en sus 4 partidos del grupo","Los modelos no se ponen de acuerdo con el ganador: Balonario da 46% a Moldavia y Foresportia 51% a Kazajistán."],
 tips:[["Goles","Ambos equipos marcan","media","Pasó en los cuatro partidos de Kazajistán y en 8 de sus últimos 10."]],nd:"córners ni tarjetas"},

{id:"bul-isl",day:"hoy",t:"16:45",cat:"nlc",h:["Bulgaria","bul"],a:["Islandia","isl"],p:[28,30,42],sc:"0-1",
 juego:"Islandia lidera el grupo con 8 puntos y un triunfo en Plovdiv la deja casi primera. Bulgaria es tercera con 4 y todavía no gana en casa en esta edición.",
 prensa:[["Predicción y apuestas: Islandia busca casi sellar el primer lugar","Squawka","https://www.squawka.com/en/?p=1517304"],UEFA,sec("Sportal.bg (Bulgaria)","https://sportal.bg")],
 h2h:["Ida en octubre: Islandia 3-0 Bulgaria."],
 racha:["Bulgaria: 1-2 con Luxemburgo, 0-0 con Estonia, 0-3 con Islandia, 2-0 a Luxemburgo.","Islandia: 1-1 con Estonia, 3-0 a Luxemburgo, 3-0 a Bulgaria, 0-0 con Estonia. Recibió 1 gol en 4 partidos."],
 bajas:["Sin bajas confirmadas en las fuentes revisadas."],
 dato:["Islandia recibió 1 gol en sus 4 partidos del grupo","Bulgaria hizo un solo gol en sus dos partidos de local."],
 tips:[["Resultado","Islandia o empate","alta","Líder invicto, 3-0 en la ida y un local que no gana en casa."],["Goles","Bulgaria menos de 1,5 goles","media","Un gol en dos partidos de local y un rival que casi no recibe."]],nd:"córners ni tarjetas"},

{id:"lux-est",day:"hoy",t:"16:45",cat:"nlc",h:["Luxemburgo","lux"],a:["Estonia","est"],p:[23,30,47],sc:"0-1",
 juego:"Estonia es segunda con 6 puntos e invicta. Luxemburgo es último con 3 y viene de tres derrotas seguidas sin marcar. El Stade de Luxembourg estará lleno.",
 prensa:[["El Stade de Luxembourg estará lleno para recibir a Estonia","L'essentiel (Luxemburgo)","https://www.lessentiel.lu/fr/story/football-le-stade-de-luxembourg-sera-plein-pour-accueillir-l-estonie-103665733"],UEFA],
 h2h:["Ida en octubre: Estonia 1-0 Luxemburgo."],
 racha:["Luxemburgo: 2-1 a Bulgaria y luego 0-3 con Islandia, 0-1 con Estonia, 0-2 con Bulgaria.","Estonia: 1-1 con Islandia, 0-0 con Bulgaria, 1-0 a Luxemburgo, 0-0 con Islandia."],
 bajas:["Sin bajas confirmadas en las fuentes revisadas."],
 dato:["Los 4 partidos de Estonia en el grupo tuvieron 2 goles o menos","Y Luxemburgo lleva 3 partidos sin marcar."],
 tips:[["Goles","Menos de 2,5","alta","Se cumplió en los cuatro partidos de Estonia y en la ida."],["Resultado","Estonia o empate","media","Invicta en el grupo contra un local en mala racha, aunque con estadio lleno."]],nd:"córners ni tarjetas"},

{id:"and-gib",day:"hoy",t:"16:45",cat:"nld",h:["Andorra","and"],a:["Gibraltar","gib"],p:[24,35,41],sc:"0-0",
 juego:"Dos de las selecciones más chicas de Europa y ninguna ha ganado en el grupo: Gibraltar tiene 2 puntos en 2 partidos y Andorra 1 en 3.",
 prensa:[["Predicción y apuestas: duelo de pocos goles en Encamp","Squawka","https://www.squawka.com/en/?p=1517291"],UEFA,sec("Diari d'Andorra","https://www.diariandorra.ad/seccio/esports")],
 h2h:["Septiembre 2026: Gibraltar 0-0 Andorra.","2024 y 2022: Gibraltar 1-0 Andorra. 2021: Andorra 0-0 Gibraltar."],
 racha:["Andorra: 4 derrotas y 1 empate en sus últimos 5.","Gibraltar: 0-0 con Andorra, 1-1 con Malta y 2-0 a Liechtenstein en amistoso."],
 bajas:["Sin bajas confirmadas en las fuentes revisadas."],
 dato:["En sus 4 últimos cruces nunca marcaron los dos","Dos 0-0 y dos 1-0. BetClan estima 72% para menos de 2,5 goles. Los modelos discrepan con el ganador."],
 tips:[["Goles","Menos de 2,5","alta","Cuatro cruces seguidos con un gol o ninguno."],["Goles","No marcan los dos","alta","No ha pasado en ninguno de los últimos cuatro."]],nd:"córners ni tarjetas"},

{id:"lie-aze",day:"hoy",t:"16:45",cat:"nld",h:["Liechtenstein","lie"],a:["Azerbaiyán","aze"],p:[18,35,47],sc:"0-1",
 juego:"Azerbaiyán lidera su grupo con 5 puntos y Liechtenstein tiene 1. El local llega con muchas bajas en defensa y podría debutar Yonas Abidi, de 19 años.",
 prensa:[["Se cumple un sueño de infancia: Abidi podría debutar ante Azerbaiyán","Vaterland (Liechtenstein)","https://www.vaterland.li/liechtenstein/sport/fuer-mich-geht-ein-kindheitstraum-in-erfuellung-art-773781"],["Inicio de entrenamientos atrasado para favorecer la recuperación","Vaterland (Liechtenstein)","https://www.vaterland.li/liechtenstein/sport/verspaeteter-trainingsauftakt-zugunsten-der-regeneration-art-773447"],UEFA],
 h2h:["Ida en octubre: Azerbaiyán 0-0 Liechtenstein.","Azerbaiyán no recibe goles de Liechtenstein en sus últimos 5 cruces."],
 racha:["Liechtenstein: 0-2, 0-2, 0-2, 0-0 y 0-2 en sus últimos cinco.","Azerbaiyán: 1-1 con Lituania, 0-0 con Liechtenstein, 1-0 a Lituania."],
 bajas:["Liechtenstein con varias ausencias en defensa, según Vaterland."],
 dato:["Liechtenstein no marcó en sus 5 últimos partidos","Balonario le da 47% a Azerbaiyán. BetClan y Foresportia suben a 76%."],
 tips:[["Goles","Liechtenstein no marca","alta","Cinco partidos seguidos en cero y cinco cruces sin hacerle un gol a este rival."],["Resultado","Gana Azerbaiyán","media","Líder contra un local diezmado, pero ya empataron 0-0."],["Goles","Menos de 2,5","media","Cuatro de los últimos cinco partidos de Azerbaiyán terminaron así."]],nd:"córners ni tarjetas"},

{id:"sal-cel",day:"hoy",t:"17:00",cat:"club",h:["Salamanca UDS","club"],a:["Celta de Vigo","club"],p:null,sc:null,
 juego:"Copa del Rey. Único partido de clubes de primera en la zona hoy. Sin probabilidades del modelo.",
 prensa:[sec("Marca (España)","https://www.marca.com")],
 h2h:["Diciembre 2024, por esta misma copa: Salamanca UDS 0-7 Celta."],
 racha:["Sin datos recientes confiables de Salamanca UDS."],bajas:["Sin información."],
 dato:["Único antecedente: 0-7 para Celta","Varias categorías de diferencia entre los dos."],
 tips:[["Resultado","Gana Celta","alta","El antecedente directo y la diferencia de categoría."]],nd:"córners ni tarjetas"},

/* ================= MAÑANA ================= */
{id:"jpn-bra",day:"man",t:"07:15",cat:"am",star:1,h:["Japón","jpn"],a:["Brasil","bra"],p:[41,23,36],sc:"1-1",juego:"El modelo pone a Japón como leve favorito de local. Buen termómetro para Brasil.",prensa:[],tips:[]},
{id:"kos-isr",day:"man",t:"11:00",cat:"nlb",h:["Kosovo","kos"],a:["Israel","isr"],p:[58,26,16],sc:"1-0",juego:"Sin previa detallada todavía.",prensa:[UEFA,sec("Telegrafi (Kosovo)","https://telegrafi.com/sport/lajme/")],tips:[]},
{id:"nor-wal",day:"man",t:"14:00",cat:"nla",star:1,h:["Noruega","nor"],a:["Gales","wal"],p:[48,26,26],sc:"1-1",
 juego:"Gales ganó la ida en Cardiff con goles de Daniel James y Neco Williams. Haaland lleva 3 goles en el torneo y Ødegaard 4 asistencias. Vuelve Harry Wilson en Gales.",prensa:[UEFA,sec("VG (Noruega)","https://www.vg.no/sport/fotball")],
 dato:["Haaland: 22 goles en 20 partidos de Nations League","Es el goleador histórico del torneo."],
 tips:[["Goleador","Haaland marca","media","Más de un gol por partido en el torneo."]]},
{id:"geo-hun",day:"man",t:"14:00",cat:"nlb",h:["Georgia","geo"],a:["Hungría","hun"],p:[25,38,37],sc:"0-0",juego:"El modelo ve el empate como resultado más probable.",prensa:[UEFA,sec("Crystalsport (Georgia)","https://crystalsport.ge")],tips:[]},
{id:"por-den",day:"man",t:"16:45",cat:"nla",star:1,h:["Portugal","por"],a:["Dinamarca","den"],p:[61,20,19],sc:"2-1",
 juego:"Portugal ya está en cuartos y ganó 4-2 en Copenhague. Gonçalo Ramos y João Félix llevan 3 goles cada uno. Højlund hizo 3 de los 7 goles daneses.",prensa:[UEFA,sec("A Bola (Portugal)","https://www.abola.pt")],
 dato:["La ida tuvo 6 goles","Dinamarca 2-4 Portugal en octubre."],
 tips:[["Goles","Más de 2,5","media","Seis goles en la ida y marcador probable 2-1."]]},
{id:"nir-ukr",day:"man",t:"16:45",cat:"nlb",h:["Irlanda del Norte","nir"],a:["Ucrania","ukr"],p:[45,33,22],sc:"1-0",
 juego:"Irlanda del Norte es el único equipo del torneo que todavía no recibe goles.",prensa:[UEFA,sec("BBC Sport Northern Ireland","https://www.bbc.com/sport/football/teams/northern-ireland")],
 dato:["Irlanda del Norte: 0 goles en contra en 4 partidos","Única valla invicta de toda la Nations League."],
 tips:[["Goles","Menos de 2,5","media","Valla invicta y 33% de empate en el modelo."]]},
{id:"aut-irl",day:"man",t:"16:45",cat:"nlb",h:["Austria","aut"],a:["Irlanda","irl"],p:[37,26,36],sc:"1-1",juego:"Troy Parrott hizo 4 de los 6 goles irlandeses, uno de ellos a Austria en la ida.",prensa:[UEFA,sec("Laola1 (Austria)","https://www.laola1.at")],tips:[]},
{id:"rou-pol",day:"man",t:"16:45",cat:"nlb",h:["Rumania","rou"],a:["Polonia","pol"],p:[23,24,52],sc:"1-1",juego:"Lewandowski le hizo un triplete a Rumania en la ida.",prensa:[UEFA,sec("GSP (Rumania)","https://www.gsp.ro")],tips:[]},
{id:"swe-bih",day:"man",t:"16:45",cat:"nlb",h:["Suecia","swe"],a:["Bosnia y Herzegovina","bih"],p:[45,28,27],sc:"1-0",
 juego:"Gyökeres lleva siete partidos seguidos marcando en Nations League, récord del torneo.",prensa:[UEFA,sec("Fotbollskanalen (Suecia)","https://www.fotbollskanalen.se")],
 dato:["Gyökeres marcó en 7 partidos seguidos de Nations League","Es récord del torneo."],
 tips:[["Goleador","Gyökeres marca","media","La racha récord de siete."]]},
{id:"mir-cam",day:"man",t:"18:30",cat:"club",h:["Mirassol","club"],a:["Atlético Mineiro","club"],p:[36,27,36],sc:"1-1",juego:"Brasileirão. Único partido de liga sudamericana de la zona que encontré confirmado para mañana. No pude verificar la programación de las ligas de Chile, Argentina y Perú.",prensa:[],tips:[]}
];

const SUB={hoy:"Hoy: clásico rioplatense sin Messi, la Roja en Cali y diez de Nations League.",man:"Mañana: Japón vs Brasil, Haaland ante Gales y Portugal vs Dinamarca."};
const WATCH={
 hoy:["Qué mirar hoy",["ned-gre","16:45 · Países Bajos vs Grecia. Define un grupo y es el más parejo del día."],["arg-uru","20:00 · Argentina vs Uruguay. Primer clásico sin Messi."],["col-chi","21:00 · Colombia vs Chile. La Roja en Cali."]],
 man:["Qué mirar mañana",["jpn-bra","07:15 · Japón vs Brasil."],["nor-wal","14:00 · Noruega vs Gales. Haaland busca revancha."],["por-den","16:45 · Portugal vs Dinamarca. Hubo seis goles en la ida."]]
};
const PD=[
 ["Sudamérica después del Mundial",["Messi se retiró de la selección el 6 de octubre de 2026, ante Benín, tras 21 años. Scaloni renovó hasta 2030.","Argentina fue subcampeona del Mundial 2026: perdió la final 1-0 con España.","Uruguay cayó en fase de grupos. Se fue Bielsa y Diego Forlán dirige como interino.","Colombia quedó fuera en octavos, por penales ante Suiza.","A Chile lo dirige Nicolás Córdova y a Perú el brasileño Mano Menezes."]],
 ["Europa: quién manda en las selecciones",["Jürgen Klopp dirige a Alemania, Xavi a Países Bajos y Thomas Tuchel a Inglaterra.","Cristiano Ronaldo dejó la selección de Portugal, que ahora dirige Jorge Jesus y ya está en cuartos de la Nations League.","Grecia es la sorpresa: invicta y con un triunfo 1-0 en Alemania.","Suiza ganó sus cuatro partidos de Liga B con 11 goles a favor y 1 en contra.","Irlanda del Norte es la única selección que no ha recibido goles en esta Nations League."]],
 ["Nombres que conviene conocer",["Erling Haaland es el goleador histórico de la Nations League: 22 goles en 20 partidos.","Viktor Gyökeres lleva siete partidos seguidos marcando para Suecia, récord del torneo.","Donyell Malen suma 14 goles en 12 partidos con la Roma. Tasos Douvikas viene de un triplete en Champions con el Como.","Florian Wirtz es el eje de Alemania. En Argentina asoman Nico Paz y Gianluca Prestianni junto a Julián Álvarez.","Luis Díaz juega en el Bayern Múnich y Darío Osorio en el Crystal Palace.","Lewandowski sigue marcando: le hizo un triplete a Rumania en octubre."]]
];

/* Alineaciones del día (se pueden escribir también dentro de cada partido como al:{...}) */
const x=a=>a.map(n=>[n,null]);
const AL={
 "arg-uru":{fuente:"El Gráfico y El Liberal",
  h:{col:["#74acdf","#0b1c33"],est:"posible",f:"4-3-3",xi:x(["Rulli","Giay","Balerdi","Li. Martínez","Tagliafico","E. Fernández","Mac Allister","Palacios","Nico Paz","J. Álvarez","Prestianni"])},
  a:{col:["#1b3f8f","#ffffff"],est:"posible",f:"4-3-3",xi:x(["Fiermarín","Varela","R. Araújo","Olivera","Piquerez","Valverde","Torreira","Bentancur","M. Araújo","De Arrascaeta","D. Núñez"])}},
 "col-chi":{fuente:"Futbolred",
  h:{col:["#fcd116","#1a1a1a"],est:"posible",f:"4-4-2",xi:x(["Vargas","Muñoz","D. Sánchez","Lucumí","Velásquez","Lerma","Puerta","Arias","Asprilla","Durán","L. Suárez"])},
  a:{col:["#d52b1e","#ffffff"],dest:["Vigouroux","Maripán","W. Alarcón","Osorio","Brereton"]}},
 "per-bol":{fuente:"Líbero y RPP",
  h:{col:["#ffffff","#c8102e"],est:"posible",f:"4-3-3",xi:x(["Gallese","Lazo","Gruber","Noriega","M. López","Mora","Cartagena","Yotún","Polo","Lapadula","M. Castro"])},
  a:{col:["#007a33","#ffffff"],est:"posible",f:"3-5-2",xi:x(["Lampe","Rocha","Morales","Arroyo","Quaglio","Cuéllar","Matheus","Vaca","R. Fernández","Terceros","Paniagua"])}},
 "ned-gre":{fuente:"Khel Now y RotoWire (difieren en el lateral derecho)",
  h:{col:["#f36c21","#ffffff"],est:"posible",f:"4-3-3",xi:x(["Verbruggen","Dumfries","Van Hecke","Van de Ven","Koopmeiners","Veerman","F. de Jong","Kluivert","Summerville","Malen","Lang"])},
  a:{col:["#0d5eaf","#ffffff"],f:"4-4-2",dest:["Tzolakis","Androutsos","Karetsas","Pavlidis","Ioannidis"]}},
 "srb-ger":{fuente:"RotoWire, WhoScored y Sports Mole",
  h:{col:["#c6363c","#ffffff"],dest:["V. Milinković-Savić","Milenković","Tadić","Mitrović","Jović"]},
  a:{col:["#ffffff","#111111"],f:"4-2-3-1",dest:["Ter Stegen","Kimmich","Tah","Schlotterbeck","Pavlović","Wirtz","Havertz"]}},
 "sco-mkd":{fuente:"Previas de octubre",
  h:{col:["#0b1f4b","#ffffff"],dest:["McGinn","Bowie","Robertson"]},
  a:{col:["#d20000","#ffe600"],dest:["Dimitrievski","Elmas","Bardhi","Miovski"]}},
 "svn-sui":{fuente:"Starting11, UEFA y SNportal",
  h:{col:["#ffffff","#0057b8"],f:"4-4-2",dest:["Oblak","Bijol","Gnezda Čerin","Vipotnik"]},
  a:{col:["#d52b1e","#ffffff"],dest:["Freuler","Ndoye","Amdouni","Manzambi"]}},
 "svk-fro":{fuente:"UEFA",h:{col:["#0b4ea2","#ffffff"],dest:["Škriniar"]},a:{col:["#ffffff","#0065bd"],dest:[]}},
 "lux-est":{fuente:"Wincomparator y Starting11",
  h:{col:["#ed2939","#ffffff"],f:"4-1-4-1",dest:["Moris","Bohnert","Mahmutovic","Selimovic"]},
  a:{col:["#0072ce","#ffffff"],est:"última usada (6 oct)",f:"3-5-2",xi:x(["Igonen","Paskotši","Kuusk","Tõugjas","Peetson","Kristal","Poom","Palumets","Saliste","Saarma","Männilaan"])}},
 "lie-aze":{fuente:"Vaterland",h:{col:["#002b7f","#ffffff"],dest:["Abidi (posible debut)"]},a:{col:["#00b5e2","#ffffff"],dest:["Dadashov"]}},
 "nor-wal":{fuente:"UEFA",h:{col:["#ba0c2f","#ffffff"],dest:["Haaland","Ødegaard"]},a:{col:["#c8102e","#ffffff"],dest:["H. Wilson","D. James","N. Williams"]}},
 "por-den":{fuente:"UEFA",h:{col:["#c8102e","#ffffff"],dest:["Gonçalo Ramos","João Félix"]},a:{col:["#ffffff","#c8102e"],dest:["Højlund"]}},
 "swe-bih":{fuente:"UEFA",h:{col:["#fecc02","#004b87"],dest:["Gyökeres"]},a:{col:["#002395","#ffffff"],dest:[]}},
 "rou-pol":{fuente:"UEFA",h:{col:["#fcd116","#002b7f"],dest:[]},a:{col:["#ffffff","#dc143c"],dest:["Lewandowski"]}},
 "aut-irl":{fuente:"UEFA",h:{col:["#ed2939","#ffffff"],dest:[]},a:{col:["#169b62","#ffffff"],dest:["Parrott"]}}
};
M.forEach(m=>{if(AL[m.id])m.al=AL[m.id];});
