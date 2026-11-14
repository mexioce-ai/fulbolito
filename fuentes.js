/* enbiei · medios locales por franquicia. No lo usa la pagina; es la referencia para la actualizacion diaria.
   Regla: 1) RSS del medio, 2) la seccion del equipo, 3) otro medio del mismo mercado si el primero falla. */
const MEDIOS={
 "ATL": [
  "Atlanta Hawks",
  "The Atlanta Journal-Constitution",
  "https://www.ajc.com/sports/atlanta-hawks/"
 ],
 "BOS": [
  "Boston Celtics",
  "Boston Globe",
  "https://www.bostonglobe.com/sports/celtics/"
 ],
 "BKN": [
  "Brooklyn Nets",
  "New York Post",
  "https://nypost.com/tag/brooklyn-nets/"
 ],
 "CHA": [
  "Charlotte Hornets",
  "The Charlotte Observer",
  "https://www.charlotteobserver.com/sports/charlotte-hornets/"
 ],
 "CHI": [
  "Chicago Bulls",
  "NBC Sports Chicago",
  "https://www.nbcsportschicago.com/chicago-bulls"
 ],
 "CLE": [
  "Cleveland Cavaliers",
  "Cleveland.com",
  "https://www.cleveland.com/cavs/"
 ],
 "DAL": [
  "Dallas Mavericks",
  "Dallas Morning News",
  "https://www.dallasnews.com/sports/mavericks/"
 ],
 "DEN": [
  "Denver Nuggets",
  "Denver Post",
  "https://www.denverpost.com/tag/denver-nuggets/"
 ],
 "DET": [
  "Detroit Pistons",
  "MLive",
  "https://www.mlive.com/pistons/"
 ],
 "GSW": [
  "Golden State Warriors",
  "The Mercury News",
  "https://www.mercurynews.com/tag/golden-state-warriors/"
 ],
 "HOU": [
  "Houston Rockets",
  "Houston Chronicle",
  "https://www.houstonchronicle.com/sports/rockets/"
 ],
 "IND": [
  "Indiana Pacers",
  "IndyStar",
  "https://www.indystar.com/sports/pacers/"
 ],
 "LAC": [
  "LA Clippers",
  "Los Angeles Times",
  "https://www.latimes.com/sports/clippers/"
 ],
 "LAL": [
  "Los Angeles Lakers",
  "Lakers Nation",
  "https://www.lakersnation.com"
 ],
 "MEM": [
  "Memphis Grizzlies",
  "Commercial Appeal",
  "https://www.commercialappeal.com/sports/grizzlies/"
 ],
 "MIA": [
  "Miami Heat",
  "Miami Herald",
  "https://www.miamiherald.com/sports/nba/miami-heat/"
 ],
 "MIL": [
  "Milwaukee Bucks",
  "Milwaukee Journal Sentinel",
  "https://www.jsonline.com/sports/bucks/"
 ],
 "MIN": [
  "Minnesota Timberwolves",
  "Star Tribune",
  "https://www.startribune.com/minnesota-timberwolves/"
 ],
 "NOP": [
  "New Orleans Pelicans",
  "NOLA.com",
  "https://www.nola.com/sports/pelicans/"
 ],
 "NYK": [
  "New York Knicks",
  "New York Daily News",
  "https://www.nydailynews.com/sports/basketball/knicks/"
 ],
 "OKC": [
  "Oklahoma City Thunder",
  "The Oklahoman",
  "https://www.oklahoman.com/sports/thunder/"
 ],
 "ORL": [
  "Orlando Magic",
  "Orlando Sentinel",
  "https://www.orlandosentinel.com/sports/orlando-magic/"
 ],
 "PHI": [
  "Philadelphia 76ers",
  "PhillyVoice",
  "https://www.phillyvoice.com/topics/philadelphia-76ers/"
 ],
 "PHX": [
  "Phoenix Suns",
  "AZ Central",
  "https://www.azcentral.com/sports/suns/"
 ],
 "POR": [
  "Portland Trail Blazers",
  "The Oregonian",
  "https://www.oregonlive.com/blazers/"
 ],
 "SAC": [
  "Sacramento Kings",
  "The Sacramento Bee",
  "https://www.sacbee.com/sports/nba/sacramento-kings/"
 ],
 "SAS": [
  "San Antonio Spurs",
  "San Antonio Express-News",
  "https://www.expressnews.com/sports/spurs/"
 ],
 "TOR": [
  "Toronto Raptors",
  "Sportsnet",
  "https://www.sportsnet.ca/nba/teams/toronto-raptors/"
 ],
 "UTA": [
  "Utah Jazz",
  "The Salt Lake Tribune",
  "https://www.sltrib.com/sports/jazz/"
 ],
 "WAS": [
  "Washington Wizards",
  "The Washington Post",
  "https://www.washingtonpost.com/sports/wizards/"
 ]
};
/* Fuentes de datos: Basketball-Reference, NBA Stats, Cleaning The Glass, PBP Stats, BBall-Index, Dunks and Threes, Crafted NBA, StatMuse, NBA Stuffer, Hashtag Basketball.
   Calendario y lesiones: CBS Sports / Covers / ESPN (ESPN bloquea la lectura del calendario). */
