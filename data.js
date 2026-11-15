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
const ACTUALIZADO="domingo 15 de noviembre a las 19:30 de Chile";
const F={col:"🇨🇴",chi:"🇨🇱",arg:"🇦🇷",uru:"🇺🇾",per:"🇵🇪",bol:"🇧🇴",ned:"🇳🇱",gre:"🇬🇷",srb:"🇷🇸",ger:"🇩🇪",sco:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",mkd:"🇲🇰",svn:"🇸🇮",sui:"🇨🇭",svk:"🇸🇰",fro:"🇫🇴",bul:"🇧🇬",isl:"🇮🇸",lux:"🇱🇺",est:"🇪🇪",and:"🇦🇩",gib:"🇬🇮",lie:"🇱🇮",aze:"🇦🇿",mda:"🇲🇩",kaz:"🇰🇿",jpn:"🇯🇵",bra:"🇧🇷",kos:"🇽🇰",isr:"🇮🇱",nor:"🇳🇴",wal:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",geo:"🇬🇪",hun:"🇭🇺",por:"🇵🇹",den:"🇩🇰",ukr:"🇺🇦",aut:"🇦🇹",irl:"🇮🇪",rou:"🇷🇴",pol:"🇵🇱",swe:"🇸🇪",bih:"🇧🇦",nir:"🏴󠁧󠁢󠁮󠁩󠁲󠁿",bel:"🇧🇪",ita:"🇮🇹",fra:"🇫🇷",tur:"🇹🇷",esp:"🇪🇸",eng:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",cro:"🇭🇷",cze:"🇨🇿",cyp:"🇨🇾",mne:"🇲🇪",lva:"🇱🇻",arm:"🇦🇲",blr:"🇧🇾",alb:"🇦🇱",fin:"🇫🇮",smr:"🇸🇲"};
const CATS=[["all","Todos"],["uefa","UEFA"],["pe","Perú"]];
const CATNAME={uefa:"Selecciones · UEFA",pe:"Clubes · Perú"};
const UEFA=["Calendario y resultados de la Nations League 2026-27","UEFA.com","https://www.uefa.com/uefanationsleague/news/02a2-1fea1edbc9a9-78c6728d4928-1000--uefa-nations-league-2026-27-partidos-calendario-y-result/"];
const sec=(medio,url)=>["Sección de fútbol",medio,url,1];
const C={
 com:{sig:"COM",col:["#1d3a8f","#ffffff"]}, spb:{sig:"SB",col:["#e8679a","#ffffff"]},
 jp2:{sig:"JP2",col:["#1d6b3a","#ffffff"]}, gar:{sig:"GAR",col:["#c8102e","#ffffff"]},
 utc:{sig:"UTC",col:["#c8102e","#ffffff"]}, chk:{sig:"CHK",col:["#2e6bc6","#ffffff"]},
 cus:{sig:"CUS",col:["#c8102e","#111111"]},
