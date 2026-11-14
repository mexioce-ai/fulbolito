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
const FECHA={hoy:"Sáb 14 nov",man:"Dom 15 nov"};
const ACTUALIZADO="sábado 14 de noviembre a la 01:20 de Chile";
const F={col:"🇨🇴",chi:"🇨🇱",arg:"🇦🇷",uru:"🇺🇾",per:"🇵🇪",bol:"🇧🇴",ned:"🇳🇱",gre:"🇬🇷",srb:"🇷🇸",ger:"🇩🇪",sco:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",mkd:"🇲🇰",svn:"🇸🇮",sui:"🇨🇭",svk:"🇸🇰",fro:"🇫🇴",bul:"🇧🇬",isl:"🇮🇸",lux:"🇱🇺",est:"🇪🇪",and:"🇦🇩",gib:"🇬🇮",lie:"🇱🇮",aze:"🇦🇿",mda:"🇲🇩",kaz:"🇰🇿",jpn:"🇯🇵",bra:"🇧🇷",kos:"🇽🇰",isr:"🇮🇱",nor:"🇳🇴",wal:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",geo:"🇬🇪",hun:"🇭🇺",por:"🇵🇹",den:"🇩🇰",ukr:"🇺🇦",aut:"🇦🇹",irl:"🇮🇪",rou:"🇷🇴",pol:"🇵🇱",swe:"🇸🇪",bih:"🇧🇦",nir:"🏴󠁧󠁢󠁮󠁩󠁲󠁿"};
const CATS=[["all","Todos"],["uefa","UEFA"],["conmebol","CONMEBOL"],["otras","Otras selecciones"],["copas-sud","Copas CONMEBOL"],["copas-uefa","Copas UEFA"],["cl","Chile"],["ar","Argentina"],["br","Brasil"],["pe","Perú"],["es","España"],["eu","Otras ligas"]];
const CATNAME={uefa:"Selecciones · UEFA",conmebol:"Selecciones · CONMEBOL",otras:"Selecciones · otras confederaciones","copas-sud":"Clubes · Copas CONMEBOL","copas-uefa":"Clubes · Copas UEFA",cl:"Clubes · Chile",ar:"Clubes · Argentina",br:"Clubes · Brasil",pe:"Clubes · Perú",es:"Clubes · España",eu:"Clubes · otras ligas"};
const UEFA=["Previa oficial de la fecha 5","UEFA.com","https://uefa.com/uefanationsleague/news/02ab-220793bfb8a3-00d5842942af-1000--uefa-nations-league-matchday-5-preview-harry-kane-set-for-en"];
const sec=(medio,url)=>["Sección de fútbol",medio,url,1];
const C={
 coq:{sig:"CU",col:["#f5c400","#111111"]}, ohi:{sig:"OHI",col:["#5bb8e8","#0b1c33"]},
 ban:{sig:"BAN",col:["#0a7a3b","#ffffff"]}, boc:{sig:"BOC",col:["#0b3a8f","#f5c400"]},
 mir:{sig:"MIR",col:["#f5c400","#0a7a3b"]}, cam:{sig:"CAM",col:["#111111","#ffffff"]},
 cha:{sig:"CHA",col:["#0a7a3b","#ffffff"]}, vas:{sig:"VAS",col:["#111111","#ffffff"]},
 com:{sig:"COM",col:["#1d3a8f","#ffffff"]}, spb:{sig:"SB",col:["#e8679a","#ffffff"]},
 jp2:{sig:"JP2",col:["#1d6b3a","#ffffff"]}, gar:{sig:"GAR",col:["#c8102e","#ffffff"]}
};

const M=[
/* ================= HOY: sabado 14 ================= */
{id:"jpn-bra",day:"hoy",t:"07:15",cat:"conmebol",comp:"Amistoso internacional, en Singapur",star:1,h:["Japón","jpn"],a:["Brasil","bra"],p:[41,23,36],sc:"1-1",
 juego:"Amistoso en el Estadio Nacional de Singapur y revancha del Mundial: Brasil lo eliminó 2-1 en dieciseisavos en junio. Es el cuarto amistoso de Ancelotti tras caer en octavos ante Noruega. Raphinha sería el capitán.",
 prensa:[["La Seleção iría con un 4-2-4 ante Japón; la duda está en el mediocampo","VAVEL Brasil","https://www.vavel.com/br/futebol/2026/11/13/selecao-brasileira/1279084-selecao-deve-ter-4-2-4-contra-o-japao-duvida-no-meio.html"],["Brasil vs Japón: horario y dónde ver el amistoso","CNN Brasil","https://www.cnnbrasil.com.br/esportes/futebol/selecao-brasileira/brasil-x-japao-horario-e-onde-assistir-ao-amistoso-da-selecao/"],["Previa, bajas y alineaciones","Sports Mole","https://www.sportsmole.co.uk/football/japan/preview/japan-vs-brazil-prediction-team-news-lineups_608848.html"]],
 h2h:["Historial: 15 partidos, 12 triunfos de Brasil, 2 empates y 1 de Japón.","Junio 2026, Mundial: Brasil 2-1 Japón.","Octubre 2025: Japón 3-2 Brasil, la única victoria japonesa."],
 racha:["Japón, invicto en 4 amistosos desde el Mundial: 3-1 a Uruguay, 2-1 a Venezuela, 0-0 con Ecuador y 2-1 a Nueva Zelanda.","Brasil desde el Mundial: 1-1 y 4-2 con Australia, 4-0 a India. Ancelotti suma 12 triunfos en 20 partidos."],
 bajas:["Japón sin Ueda, Mitoma ni Tomiyasu, lesionados.","Brasil sin João Pedro (lesión). Tampoco están Alisson, Marquinhos ni Matheus Cunha. Bruno Guimarães entrenó diferenciado tres días, pero lo esperan."],
 dato:["8 de los últimos 9 cruces tuvieron 3 goles o más","Brasil marcó al menos dos veces en 12 de los 15 partidos del historial. Japón solo perdió 1 de sus últimos 15 partidos, justamente con Brasil."],
 tips:[["Goles","Más de 2,5","media","Pasó en 8 de los últimos 9 cruces, incluidos el 3-2 y el 2-1 más recientes."],["Goles","Ambos equipos marcan","media","Los dos marcaron en los dos últimos cruces y Japón anotó en 3 de sus 4 amistosos tras el Mundial."]],nd:"córners ni tarjetas"},

{id:"kos-isr",day:"hoy",t:"11:00",cat:"uefa",comp:"Nations League · Liga B",h:["Kosovo","kos"],a:["Israel","isr"],p:[58,26,16],sc:"1-0",
 juego:"Penúltima fecha de la Liga B. El modelo ve a Kosovo como claro favorito de local.",
 prensa:[UEFA,sec("Telegrafi (Kosovo)","https://telegrafi.com/sport/lajme/")],
 dato:["El modelo le da 58% a Kosovo","Marcador más probable: 1-0. No se encontró estadística previa verificable del grupo."],tips:[],nd:"historial, córners ni tarjetas"},

{id:"nor-wal",day:"hoy",t:"14:00",cat:"uefa",comp:"Nations League · Liga A, grupo 4",h:["Noruega","nor"],a:["Gales","wal"],p:[48,26,26],sc:"1-1",
 juego:"Duelo directo por no quedar último del grupo A4: los dos tienen 3 puntos, a tres de Dinamarca. Gales ganó la ida 2-1 en Cardiff ante una Noruega con diez. Se juega en el Ullevaal de Oslo.",
 prensa:[["El tiro libre de Neco Williams le dio el triunfo a Gales ante una Noruega con diez (ida)","Express & Star","https://www.expressandstar.com/uk-sports/neco-williams-free-kick-earns-wales-victory-against-10-man-norway-9249228"],UEFA,sec("VG (Noruega)","https://www.vg.no/sport/fotball")],
 h2h:["Ida, 1 de octubre: Gales 2-1 Noruega, con goles de Daniel James y Neco Williams. Es su único cruce reciente."],
 racha:["Noruega: 1-2 y 1-2 con Portugal, 3-2 a Dinamarca, 1-2 con Gales.","Gales: 0-1 con Portugal, 0-2 y 0-1 con Dinamarca, 2-1 a Noruega."],
 dato:["Haaland: 22 goles en 20 partidos de Nations League","Es el goleador histórico del torneo y lleva 3 en esta edición. Noruega marcó en sus 4 partidos del grupo."],
 tips:[["Goleador","Haaland marca","media","Más de un gol por partido en el torneo."],["Goles","Noruega marca","alta","Anotó en sus 4 partidos del grupo, incluso en las tres derrotas."]],nd:"córners ni tarjetas"},

{id:"geo-hun",day:"hoy",t:"14:00",cat:"uefa",comp:"Nations League · Liga B",h:["Georgia","geo"],a:["Hungría","hun"],p:[25,38,37],sc:"0-0",
 juego:"Penúltima fecha de la Liga B. El modelo ve el empate como el resultado más probable.",
 prensa:[UEFA,sec("Crystalsport (Georgia)","https://crystalsport.ge")],
 dato:["38% de empate según el modelo","Es la probabilidad de empate más alta de la jornada. Marcador probable: 0-0."],tips:[],nd:"historial, córners ni tarjetas"},

{id:"por-den",day:"hoy",t:"16:45",cat:"uefa",comp:"Nations League · Liga A, grupo 4",star:1,h:["Portugal","por"],a:["Dinamarca","den"],p:[61,20,19],sc:"2-1",
 juego:"Portugal lidera el grupo A4 con 12 puntos de 12 y ya está en cuartos. Dinamarca es segunda con 6 y necesita sumar para asegurar el segundo lugar: Gales y Noruega tienen 3. Se juega en Braga.",
 prensa:[["La vida continúa y hay tanto por aprovechar (crónica del 4-2 de la ida)","A Bola","https://www.abola.pt/noticias/a-vida-continua-e-ha-tanto-mas-tanto-para-aproveitar-cronica-2026100119052681091"],["João Cancelo, limitado en el entrenamiento de Portugal","Flashscore Portugal","https://www.flashscore.pt/noticias/futebol-liga-das-nacoes-liga-das-nacoes-joao-cancelo-limitado-no-treino-de-portugal/v3a3LEN6/"],["Previa, bajas y alineaciones","Sports Mole","https://www.sportsmole.co.uk/football/portugal/uefa-nations-league/preview/portugal-vs-denmark-prediction-team-news-lineups_608969.html"]],
 h2h:["Ida en octubre: Dinamarca 2-4 Portugal.","Marzo 2025, cuartos de Nations: Dinamarca 1-0 y luego Portugal 5-2.","Dinamarca ganó solo 4 de los 19 cruces anteriores."],
 racha:["Portugal: 1-0 a Gales, 2-1 a Noruega, 4-2 a Dinamarca, 2-1 a Noruega.","Dinamarca: 2-3 con Noruega, 2-0 a Gales, 2-4 con Portugal, 1-0 a Gales."],
 bajas:["Portugal sin Cancelo ni Francisco Conceição, suspendidos, ni Nuno Mendes, lesionado.","Dinamarca sin Dorgu (isquiotibial). Tiene seis jugadores a una amarilla de la suspensión."],
 dato:["Portugal ganó sus 4 partidos del grupo","Tres de ellos por un gol de diferencia. Los tres últimos cruces con Dinamarca sumaron 14 goles."],
 tips:[["Resultado","Gana Portugal","media","Cuatro triunfos en cuatro y 4-2 en la ida, aunque ya está clasificado."],["Goles","Más de 2,5","media","Seis goles en la ida y siete en el cruce anterior en Portugal."]],nd:"córners ni tarjetas"},

{id:"nir-ukr",day:"hoy",t:"16:45",cat:"uefa",comp:"Nations League · Liga B",h:["Irlanda del Norte","nir"],a:["Ucrania","ukr"],p:[45,33,22],sc:"1-0",
 juego:"Irlanda del Norte es el único equipo del torneo que todavía no recibe goles y pelea el ascenso a la Liga A. Se juega en Windsor Park.",
 prensa:[["Michael O'Neill: ascender en la Nations League sería un logro enorme","The Irish News","https://www.irishnews.com/sport/soccer/michael-oneill-says-northern-ireland-nl-promotion-would-be-huge-achievement-NNSJIMM6GRCKHNHMRGOSEPAQQE/"],UEFA,sec("BBC Sport Northern Ireland","https://www.bbc.com/sport/football/teams/northern-ireland")],
 dato:["Irlanda del Norte: 0 goles en contra en 4 partidos","Única valla invicta de toda la Nations League."],
 tips:[["Goles","Menos de 2,5","media","Valla invicta en cuatro partidos y 33% de empate en el modelo."]],nd:"córners ni tarjetas"},

{id:"aut-irl",day:"hoy",t:"16:45",cat:"uefa",comp:"Nations League · Liga B",h:["Austria","aut"],a:["Irlanda","irl"],p:[37,26,36],sc:"1-1",
 juego:"En la ida Austria rescató un 2-2 en Dublín tras ir perdiendo 0-2. Troy Parrott hizo 4 de los 6 goles irlandeses del grupo, uno de ellos en ese partido.",
 prensa:[["Rangnick hace un balance intermedio satisfactorio de la Nations League","Tiroler Tageszeitung (Austria)","https://www.tt.com/artikel/30943805/rangnick-zieht-in-nations-league-zufriedene-zwischenbilanz"],UEFA,sec("Laola1 (Austria)","https://www.laola1.at")],
 h2h:["Ida en octubre: Irlanda 2-2 Austria."],
 dato:["Parrott marcó 4 de los 6 goles de Irlanda","Dos tercios de los goles irlandeses en el grupo son suyos."],
 tips:[["Goleador","Parrott marca","baja","Hizo 4 de los 6 goles de Irlanda, pero el modelo espera un partido de pocos goles."]],nd:"córners ni tarjetas"},

{id:"rou-pol",day:"hoy",t:"16:45",cat:"uefa",comp:"Nations League · Liga B, grupo 4",h:["Rumania","rou"],a:["Polonia","pol"],p:[23,24,52],sc:"1-1",
 juego:"Rumania, dirigida por Gheorghe Hagi, es última del grupo B4 con cuatro derrotas, incluida un 0-6 en Varsovia. Aun así ya se vendieron casi 40.000 entradas para la Arena Națională.",
 prensa:[["Los hinchas responden: cuántas entradas se vendieron para el Rumania-Polonia","Flashscore Rumania","https://www.flashscore.ro/stiri/fotbal-uefa-nations-league-fanii-raspund-prezent-la-romania-polonia-cate-bilete-s-au-vandut-deja-pentru-duelul-de-pe-arena-nationala/4YKKq0Ui/"],UEFA,sec("GSP (Rumania)","https://www.gsp.ro")],
 h2h:["Ida en octubre: Polonia 6-0 Rumania, con triplete de Lewandowski y Rumania con diez."],
 racha:["Rumania: 4 derrotas en 4. De local cayó 2-4 con Bosnia y 0-1 con Suecia."],
 dato:["Rumania perdió sus 4 partidos del grupo","Todavía no suma puntos y recibió 6 goles en la ida."],
 tips:[["Resultado","Gana Polonia","media","Cuatro derrotas del local y un 6-0 en la ida. El modelo le da 52%."]],nd:"córners ni tarjetas"},

{id:"swe-bih",day:"hoy",t:"16:45",cat:"uefa",comp:"Nations League · Liga B",h:["Suecia","swe"],a:["Bosnia y Herzegovina","bih"],p:[45,28,27],sc:"1-0",
 juego:"En la ida Bosnia le empató 1-1 a Suecia sobre el final. Gyökeres lleva siete partidos seguidos marcando en Nations League, récord del torneo.",
 prensa:[["Suecia enfrenta a Bosnia y Herzegovina","TV4 (Suecia)","https://www.tv4.se/artikel/1hjEvNv3JEwCX8IHGp75jG/sverige-moeter-bosnien-hercegovina"],UEFA,sec("Fotbollskanalen (Suecia)","https://www.fotbollskanalen.se")],
 h2h:["Ida en octubre: Bosnia y Herzegovina 1-1 Suecia. Gol de Gyökeres y empate tardío de Alajbegović."],
 dato:["Gyökeres marcó en 7 partidos seguidos de Nations League","Es récord del torneo."],
 tips:[["Goleador","Gyökeres marca","media","La racha récord de siete, incluido el gol de la ida."]],nd:"córners ni tarjetas"},

{id:"mir-cam",day:"hoy",t:"18:30",cat:"br",comp:"Brasileirão · fecha 35",h:["Mirassol",C.mir],a:["Atlético Mineiro",C.cam],p:[36,27,36],sc:"1-1",
 juego:"Abre la fecha 35 del Brasileirão. Atlético Mineiro es séptimo con 50 puntos y Mirassol decimocuarto con 40. El Galo juega el sábado 21 la final de la Copa Sudamericana ante Boca.",
 prensa:[["Mirassol vs Atlético-MG: probabilidades y análisis","ValorFinal (Brasil)","https://valorfinal.com.br/brasileirao/jogos/mirassol-x-atletico-mg"],["Cuándo vuelve el Brasileirão tras la fecha FIFA","ABC do ABC (Brasil)","https://www.abcdoabc.com.br/saiba-quando-volta-o-brasileirao-apos/"]],
 h2h:["Primera rueda, fecha 16: Atlético Mineiro 3-1 Mirassol."],
 racha:["Mirassol: 7 puntos en sus últimos 5 partidos. De local lleva 24 goles a favor y 22 en contra en 17 partidos.","Atlético Mineiro: tres derrotas seguidas. De visita, 17 goles a favor y 22 en contra en 17 partidos."],
 dato:["Atlético Mineiro llega con 3 derrotas seguidas","Los modelos no coinciden: Balonario los da parejos (36-27-36) y ValorFinal favorece a Mirassol con 43,5%."],
 tips:[["Resultado","Mirassol o empate","media","Tres derrotas seguidas de la visita, que además recibe 1,3 goles por partido fuera de casa."],["Goles","Más de 1,5","media","Los partidos de Mirassol en casa promedian 2,7 goles: 46 en 17."]],nd:"córners ni tarjetas"},

{id:"coq-ohi",day:"hoy",t:"18:30",cat:"cl",comp:"Final de la Copa de la Liga",star:1,h:["Coquimbo Unido",C.coq],a:["O'Higgins",C.ohi],p:null,sc:null,
 juego:"Final de la primera Copa de la Liga, a partido único en Santa Laura. El campeón gana el cupo Chile 3 a la Copa Libertadores 2027 y un lugar en la Supercopa. Arbitra Franco Jiménez, según El Rancagüino. Va solo por streaming (HBO Max).",
 prensa:[["Una final por la Libertadores con el descenso de fondo: ¿quién llega mejor?","Al Aire Libre","https://www.alairelibre.cl/futbol/copa-de-la-liga/coquimbo-ohiggins-final-copa-de-la-liga-libertadores/"],["Coquimbo Unido y O'Higgins se enfrentan en la final","El Rancagüino","https://www.elrancaguino.cl/2026/11/12/coquimbo-unido-vs-ohiggins-previa-horario-y-como-llegan-para-la-final/"],["La ANFP designó a los árbitros de la final","Cooperativa","https://www.cooperativa.cl/noticias/deportes/futbol/copa-de-la-liga/anfp-designo-a-los-arbitros-que-impartiran-justicia-en-la-final-de-la/2026-11-11/123456.html"]],
 h2h:["13 de junio de 2026, fecha 15 de la Liga de Primera: Coquimbo Unido 0-0 O'Higgins en el S\u00e1nchez Rumoroso. Juan Leiva fue expulsado en O'Higgins.","2025: O'Higgins 0-1 Coquimbo Unido (26 de octubre) y Coquimbo Unido 2-0 O'Higgins (3 de mayo).","2024: O'Higgins 1-1 Coquimbo Unido y Coquimbo Unido 2-0 O'Higgins.","O'Higgins no le gana a Coquimbo en los tres \u00faltimos cruces de liga. RedGol cuenta 5 victorias y 2 empates de Coquimbo en los \u00faltimos 7; 365Scores da el total hist\u00f3rico en 6 triunfos de Coquimbo, 4 de O'Higgins y 2 empates.","Se vuelven a ver el domingo 6 de diciembre en Rancagua, por la \u00faltima fecha del campeonato."],
 racha:["Coquimbo Unido, de Hern\u00e1n Caputto: 4 victorias y 1 derrota en sus \u00faltimos 5, con 10 goles a favor y 4 en contra. En semifinales elimin\u00f3 a Uni\u00f3n La Calera: 1-0, 0-1 y 5-4 por penales.","O'Higgins: 2 victorias, 1 empate y 2 derrotas en sus \u00faltimos 5, con 6 goles a favor y 6 en contra. Viene de caer 3-2 con Universidad de Concepci\u00f3n. Elimin\u00f3 a \u00d1ublense: 1-2, 1-0 y 4-2 por penales.","En la Copa de la Liga los dos tienen el mismo registro: 5 victorias, 2 empates y 1 derrota."],
 bajas:["Sin bajas informadas en las fuentes revisadas. Jos\u00e9 Movillo, central de O'Higgins, fue citado a la Roja para el amistoso de ayer en Cali."],
 dato:["Los 5 \u00faltimos cruces terminaron 0-0, 0-1, 2-0, 1-1 y 2-0","Ninguno pas\u00f3 de dos goles y O'Higgins no gan\u00f3 ninguno. Son los equipos con m\u00e1s partidos jugados en 2026: O'Higgins suma 57 y Coquimbo 54."],
 tips:[["Goles","Menos de 2,5","alta","Los cinco últimos cruces terminaron 0-0, 0-1, 2-0, 1-1 y 2-0: ninguno pasó de dos goles."],["Resultado","Coquimbo o empate","media","No pierde con O'Higgins en los últimos siete cruces: cinco triunfos y dos empates."]],nd:"córners ni tarjetas"},

{id:"ban-boc",day:"hoy",t:"19:00",cat:"ar",comp:"Semifinal de la Copa Argentina",star:1,h:["Banfield",C.ban],a:["Boca Juniors",C.boc],p:[17,26,58],sc:null,
 juego:"Semifinal de la Copa Argentina, a partido único en el Malvinas Argentinas de Mendoza. El ganador juega la final con Platense. Boca, de Rodolfo Arruabarrena, tiene una semana después la final de la Copa Sudamericana ante Atlético Mineiro.",
 prensa:[["Boca prepara la semifinal: la duda de Arruabarrena y la posible formación","A24","https://www.a24.com/deportes/boca-prepara-la-semifinal-la-copa-argentina-banfield-la-duda-arruabarrena-y-la-posible-formacion-n1615751"],["Alarma en Boca: dos figuras, con un pie y medio afuera de la semifinal","Noticias Argentinas","https://noticiasargentinas.com/deportes/alarma-en-boca--dos-figuras-tienen-un-pie-y-medio-afuera-de-la-semifinal-contra-banfield_a6af5f87c98721625743dc2c6"],["Ascacíbar y Blanco serán baja en la Copa Argentina","El Eco","https://www.eleco.com.ar/deportes/ascacibar-y-blanco-seran-baja-en-la-copa-argentina"]],
 h2h:["Últimos 6 cruces: 3 triunfos de Boca, 2 de Banfield y 1 empate.","El más reciente registrado: Boca 2-0, en agosto de 2025."],
 racha:["Banfield: 1 triunfo, 2 empates y 2 derrotas en sus últimos 5. En cuartos empató 1-1 con Deportivo Riestra y pasó por penales.","Boca: 5 triunfos seguidos. En cuartos le ganó 3-2 a Racing y viene de asegurar la Tabla Anual."],
 bajas:["Boca sin Lautaro Blanco, que no viaja para guardarse para la final de la Sudamericana. Ascacíbar tiene un esguince grado 1 de rodilla y está más afuera que adentro. Vuelve Aranda tras dos meses.","Banfield: sin información en las fuentes revisadas."],
 dato:["Boca ganó sus 5 últimos partidos; Banfield, 1 de 5","El 58% para Boca es del modelo de Fútbol Total, no de Balonario, que no publica este partido."],
 tips:[["Resultado","Gana Boca","media","Cinco triunfos seguidos contra un rival que ganó uno de cinco, pero llega con dos bajas y una final en siete días."]],nd:"córners ni tarjetas"},

{id:"cha-vas",day:"hoy",t:"20:30",cat:"br",comp:"Brasileirão · pendiente de la fecha 21",h:["Chapecoense",C.cha],a:["Vasco da Gama",C.vas],p:null,sc:null,
 juego:"Único partido pendiente del Brasileirão: es de la fecha 21 y se aplazó porque Vasco jugaba la Copa Sudamericana. Se juega en la Arena Condá. Vasco es decimotercero con 41 puntos y un partido menos.",
 prensa:[["La CBF define la fecha del partido atrasado de Vasco","Lance!","https://www.lance.com.br/vasco/cbf-define-data-de-jogo-atrasado-do-vasco-no-brasileirao.html"],["El partido atrasado con Chapecoense, un punto de quiebre para Vasco, que aún sueña con la Libertadores","NetVasco","https://www.netvasco.com.br/n/396058/jogo-atrasado-contra-a-chapecoense-e-encarado-como-divisor-de-aguas-para-o-vasco-que-ainda-sonha-com-a-libertadores"]],
 dato:["Es el único partido atrasado de todo el torneo","Con él se completa la fecha 21. En Vasco hablan de llegar a 45 puntos para asegurar la permanencia."],tips:[],nd:"forma reciente, córners ni tarjetas"},

/* ================= MANANA: domingo 15 ================= */
{id:"com-spb",day:"man",t:"15:00",cat:"pe",comp:"Liga 1 · Clausura, fecha 17",star:1,h:["Comerciantes Unidos",C.com],a:["Sport Boys",C.spb],p:null,sc:null,
 juego:"Abre la última fecha del Torneo Clausura, en el Juan Maldonado Gamarra de Cutervo. La fecha se reparte entre el domingo 15 y el domingo 22, cuando se define el título con partidos en simultáneo.",
 prensa:[["Días y horarios confirmados para la última fecha del Clausura","RPP","https://rpp.pe/futbol/descentralizado/torneo-clausura-2026-fecha-17-con-universitario-alianza-lima-cristal-huancayo-programacion-de-partidos-y-horarios-de-la-ultima-fecha-de-la-liga-1-noticia-1716997"],["Programación confirmada de la última fecha","Infobae Perú","https://www.infobae.com/peru/deportes/2026/11/10/programacion-confirmada-de-la-ultima-fecha-del-torneo-clausura-2026-de-la-liga-1-2026-partidos-horarios-y-canales-tv/"]],
 dato:["El título del Clausura se define recién el domingo 22","Sporting Cristal, Sport Huancayo y Universitario llegan con opciones. Este partido no decide el campeón."],
 tips:[],nd:"historial, forma reciente, córners ni tarjetas"},

{id:"jp2-gar",day:"man",t:"17:15",cat:"pe",comp:"Liga 1 · Clausura, fecha 17",h:["Juan Pablo II",C.jp2],a:["Deportivo Garcilaso",C.gar],p:null,sc:null,
 juego:"Segundo partido del domingo por la fecha 17, en el complejo deportivo de Juan Pablo II, en Chongoyape. El resto de la fecha se juega entre el lunes 16 y el domingo 22.",
 prensa:[["Programación de la fecha 17 del Clausura","El Comercio (Perú)","https://elcomercio.pe/deporte-total/futbol-peruano/liga-1-2026-en-vivo-asi-se-mueve-la-tabla-y-que-equipos-pelean-por-quedarse-con-el-torneo-clausura-tdpe-noticia/"],["Cambios de día y horario en la fecha 17","Bolavip Perú","https://bolavip.com/pe/liga-1/liga-1-confirmo-cambios-de-dia-y-horario-asi-quedo-la-programacion-de-la-fecha-17-del-torneo-clausura-2026"]],
 dato:["Juan Pablo II es 17º en la tabla acumulada con 16 puntos","Pelea la permanencia junto a UTC, Moquegua y Atlético Grau."],
 tips:[],nd:"historial, forma reciente, córners ni tarjetas"}
];

const SUB={hoy:"Hoy: final de Copa de la Liga, Banfield vs Boca y Japón vs Brasil.",man:"Mañana: arranca la última fecha del Clausura peruano. Europa descansa."};
const PD=[
 ["Sudamérica después del Mundial",["Messi se retiró de la selección el 6 de octubre de 2026, ante Benín, tras 21 años. Scaloni renovó hasta 2030.","Argentina fue subcampeona del Mundial 2026: perdió la final 1-0 con España.","Uruguay cayó en fase de grupos. Se fue Bielsa y Diego Forlán dirige como interino.","Colombia quedó fuera en octavos, por penales ante Suiza.","A Chile lo dirige Nicolás Córdova y a Perú el brasileño Mano Menezes."]],
 ["Europa: quién manda en las selecciones",["Jürgen Klopp dirige a Alemania, Xavi a Países Bajos y Thomas Tuchel a Inglaterra.","Cristiano Ronaldo dejó la selección de Portugal, que ahora dirige Jorge Jesus y ya está en cuartos de la Nations League.","Grecia es la sorpresa: invicta y con un triunfo 1-0 en Alemania.","Suiza ganó sus cuatro partidos de Liga B con 11 goles a favor y 1 en contra.","Irlanda del Norte es la única selección que no ha recibido goles en esta Nations League."]],
 ["Clubes de Sudamérica: quién manda",["La final de la Copa Libertadores 2026 es Estudiantes vs Palmeiras, el sábado 28 de noviembre a las 17:00 en el Centenario de Montevideo. Reedita la final de 1968, que también se definió ahí.","Estudiantes eliminó a Flamengo por penales en el Maracaná, con Fernando Muslera en el arco. Palmeiras, de Abel Ferreira, dejó fuera a Fluminense también por penales.","Boca Juniors, dirigido por Rodolfo Arruabarrena, ganó la Tabla Anual argentina y juega la final de la Copa Sudamericana ante Atlético Mineiro el 21 de noviembre.","Carlo Ancelotti dirige a Brasil: 12 triunfos en 20 partidos, pero cayó en octavos del Mundial ante la Noruega de Haaland.","Chile estrena torneo: la Copa de la Liga, cuyo campeón va a la Libertadores 2027. La definen Coquimbo Unido y O'Higgins.","En Chile, Universidad de Chile y Universidad Católica pelean el cupo Chile 2 a la Libertadores en las dos últimas fechas, el 29 de noviembre y el 6 de diciembre."]]
];

/* Alineaciones del dia */
const x=a=>a.map(n=>[n,null]);
const AL={
 "jpn-bra":{fuente:"Sports Mole (Japón) y VAVEL Brasil (Brasil). Sports Mole da otro Brasil: Bento al arco, Bontempo y João Gomes en el medio y Endrick de 9. Esquema de Japón deducido del orden de los nombres",
  h:{col:["#0b2a6f","#ffffff"],est:"posible",f:"3-4-2-1",xi:x(["Z. Suzuki","Seko","Itakura","H. Ito","Sugawara","Kamada","A. Tanaka","K. Nakamura","Kubo","Maeda","Ogawa"])},
  a:{col:["#ffdf00","#0b6b3a"],est:"posible",f:"4-2-4",xi:x(["Pedro Morisco","Wesley","Jair","Gabriel Magalhães","Douglas Santos","Andrey Santos","Bruno Guimarães","Rayan","Estêvão","Raphinha","Vinícius Jr"])}},
 "por-den":{fuente:"Sports Mole (esquemas deducidos del orden de los nombres)",
  h:{col:["#c8102e","#ffffff"],est:"posible",f:"4-3-3",xi:x(["D. Costa","Dalot","R. Dias","R. Veiga","Nazinho","Vitinha","B. Fernandes","J. Neves","João Félix","G. Ramos","P. Neto"])},
  a:{col:["#ffffff","#c8102e"],est:"posible",f:"4-4-2",xi:x(["Hermansen","Kristensen","J. Andersen","Provstgaard","Mæhle","Isaksen","Hjulmand","Højbjerg","Daramy","Højlund","Froholdt"])}},
 "ban-boc":{fuente:"Noticias Argentinas y El Eco (A24 aún incluía a Blanco). Esquema deducido del orden de los nombres. Sin datos de Banfield",
  h:{col:["#0a7a3b","#ffffff"],dest:[]},
  a:{col:["#0b3a8f","#f5c400"],est:"posible",f:"4-3-3",xi:x(["Montero","Lozano","Di Lollo","F. Herrera","Braida","Paredes","M. Delgado","Ascacíbar o Belmonte","Villa","Merentiel","Velasco"])}},
 "coq-ohi":{fuente:"Prensafútbol (previa de octubre, para la fecha original) y Al Aire Libre. No hay formaciones actualizadas",
  h:{col:["#f5c400","#111111"],dest:["D. Sánchez","Gazzolo","Galani","Camargo","Zavala","Johansen","M. Campos"]},
  a:{col:["#5bb8e8","#0b1c33"],dest:["Caraballí","Robledo","J. Leiva","Bou","A. Castillo","F. González"]}},
 "nor-wal":{fuente:"Starting11 (predicción automática) y UEFA",h:{col:["#ba0c2f","#ffffff"],f:"4-3-3",dest:["Haaland","Ødegaard","Berge","Nusa","Ryerson"]},a:{col:["#c8102e","#ffffff"],dest:["H. Wilson","D. James","N. Williams"]}},
 "swe-bih":{fuente:"UEFA",h:{col:["#fecc02","#004b87"],dest:["Gyökeres"]},a:{col:["#002395","#ffffff"],dest:[]}},
 "rou-pol":{fuente:"UEFA",h:{col:["#fcd116","#002b7f"],dest:[]},a:{col:["#ffffff","#dc143c"],dest:["Lewandowski"]}},
 "aut-irl":{fuente:"UEFA",h:{col:["#ed2939","#ffffff"],dest:[]},a:{col:["#169b62","#ffffff"],dest:["Parrott"]}},
 "mir-cam":{fuente:"Sin alineaciones publicadas; colores de camiseta",h:{col:["#f5c400","#0a7a3b"],dest:[]},a:{col:["#111111","#ffffff"],dest:[]}}
};
M.forEach(m=>{if(AL[m.id])m.al=AL[m.id];});
