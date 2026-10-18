// ==UserScript==
// @name         Poring Clicker en español (SpringRO)
// @namespace    https://springro.com/
// @version      1.24.9
// @description  Translates the SpringRO Poring Clicker UI into Spanish on the fly.
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NCA2NCc+PHBhdGggZD0nTTMyIDhjMyAwIDQgMyA3IDYgMTEgMyAxOSAxMyAxOSAyNiAwIDEyLTEyIDE4LTI2IDE4UzYgNTIgNiA0MGMwLTEzIDgtMjMgMTktMjYgMy0zIDQtNiA3LTZ6JyBmaWxsPScjZjlhOGM0JyBzdHJva2U9JyNjMjQ1NmUnIHN0cm9rZS13aWR0aD0nMycvPjxjaXJjbGUgY3g9JzI0JyBjeT0nMzYnIHI9JzMuNScvPjxjaXJjbGUgY3g9JzQwJyBjeT0nMzYnIHI9JzMuNScvPjxwYXRoIGQ9J00yNyA0NHE1IDUgMTAgMCcgc3Ryb2tlPScjMDAwJyBzdHJva2Utd2lkdGg9JzIuNScgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8+PC9zdmc+
// @match        https://springro.com/clicker*
// @match        https://springro.com/account*
// @match        https://springro.com/download*
// @match        https://springro.com/news*
// @match        https://springro.com/rules*
// @match        https://springro.com/transparency*
// @match        https://springro.com/support*
// @homepageURL  https://github.com/gboquizosanchez/poring-clicker-es
// @updateURL    https://raw.githubusercontent.com/gboquizosanchez/poring-clicker-es/main/poring-clicker-es.user.js
// @downloadURL  https://raw.githubusercontent.com/gboquizosanchez/poring-clicker-es/main/poring-clicker-es.user.js
// @run-at       document-idle
// @grant        unsafeWindow
// ==/UserScript==

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. EXACT-MATCH DICTIONARY (English → Spanish)
  //    Official Ragnarok Online names (monsters, items, cards, skills, maps)
  //    and player/guild names are intentionally left as-is.
  //    To extend: add lines like "Original text": "Translation",
  // ---------------------------------------------------------------------------
  const DICTIONARY = {
    // Site header & navigation
    'Download': 'Descargar',
    'Server': 'Servidor',
    'Rules': 'Normas',
    'Transparency': 'Transparencia',
    'Support': 'Soporte',
    'Database': 'Base de datos',
    'Monsters': 'Monstruos',
    'Classes': 'Clases',
    'Maps': 'Mapas',
    'EXP Table': 'Tabla de EXP',
    'Element Chart': 'Tabla de elementos',
    'Refine Calculator': 'Calculadora de refinado',
    'Community': 'Comunidad',
    'Players': 'Jugadores',
    'Guilds': 'Clanes',
    'World Activity': 'Actividad del mundo',
    'Server Status': 'Estado del servidor',
    'Checking': 'Comprobando',
    'Online': 'En línea',
    'Offline': 'Desconectado',
    'Login': 'Iniciar sesión',
    'Authentication required': 'Debes iniciar sesión',
    'Register': 'Registrarse',
    'Logout': 'Cerrar sesión',
    'News': 'Noticias',
    'Items': 'Objetos',
    'Market': 'Mercado',
    'Account': 'Cuenta',
    'My Account': 'Mi cuenta',
    'Stalls': 'Puestos',
    '(opens in a new tab)': '(se abre en una pestaña nueva)',
    'Notifications alt+T': 'Notificaciones alt+T',
    'Pause video background': 'Pausar vídeo de fondo',
    'Switch to light mode': 'Cambiar a modo claro',
    'Switch to dark mode': 'Cambiar a modo oscuro',
    'Sound settings': 'Ajustes de sonido',
    'All Sound': 'Todo el sonido',
    'BGM (Music)': 'BGM (música)',
    'SFX (Effects)': 'SFX (efectos)',
    'Monster Hits': 'Golpes a monstruos',
    'Monster hit and death sounds in the clicker. MVP fight sounds are not affected.':
      'Sonidos de golpes y muertes de monstruos en el clicker. No afecta a los sonidos de los combates MVP.',
    'Mixed': 'Mixto',
    'On': 'Sí',
    'Off': 'No',
    'Review SpringRO at RateMyServer.Net': 'Valora SpringRO en RateMyServer.Net',
    'BG by MrPoring': 'Fondo de MrPoring',
    'Ragnarok Online and its game assets are the property of their respective rights holders.':
      'Ragnarok Online y sus recursos son propiedad de sus respectivos titulares de derechos.',
    'SpringRO is an unofficial, independently operated Ragnarok Online private server.':
      'SpringRO es un servidor privado de Ragnarok Online no oficial y gestionado de forma independiente.',
    'SpringRO is not affiliated with, endorsed by, or sponsored by Gravity Co., Ltd. or its partners.':
      'SpringRO no está afiliado a Gravity Co., Ltd. ni a sus socios, ni cuenta con su respaldo o patrocinio.',
    'SpringRO. Original site content only.': 'SpringRO. Solo contenido original del sitio.',

    // Game: title & stats
    'Click monsters, collect loot, refine weapons, and climb the leaderboard!':
      '¡Haz clic en los monstruos, recoge botín, refina armas y escala en el ranking!',
    'Kills': 'Bajas',
    'kills': 'bajas',
    'kills remaining': 'por eliminar',
    'kills to discover': 'bajas para descubrirlo',
    'kills | HP:': 'bajas | PV:',
    'mobs |': 'monstruos |',
    'mobs': 'monst.',
    'DROPS': 'BOTÍN',
    'times': 'veces',
    'Total Damage': 'Daño total',
    'Clicks': 'Clics',
    'Base ATK': 'ATQ base',
    'base': 'base',
    'Damage Mult': 'Mult. de daño',
    'Crit Rate': 'Prob. de crítico',
    'Level': 'Nivel',
    'Lv.': 'Nv.',
    ': Lv.': ': Nv.',
    ') - Lv.': ') - Nv.',
    'Reach Lv.': 'Alcanza el Nv.',
    'Job': 'Oficio',
    'Job Lv.': 'Nv. de oficio',
    'Job Bonuses': 'Bonificaciones de oficio',
    'JOB LEVEL UP!': '¡SUBES DE NIVEL DE OFICIO!',
    'Change Job': 'Cambiar de oficio',
    'Character': 'Personaje',
    'Leveling': 'Subida de nivel',

    // Attributes
    'STR': 'FUE',
    'AGI': 'AGI',
    'VIT': 'VIT',
    'INT': 'INT',
    'DEX': 'DES',
    'LUK': 'SUE',
    'HP': 'PV',
    'HP:': 'PV:',
    'Strength': 'Fuerza',
    'Agility': 'Agilidad',
    'Vitality': 'Vitalidad',
    'Intelligence': 'Inteligencia',
    'Dexterity': 'Destreza',
    'Luck': 'Suerte',
    'Points:': 'Puntos:',
    'Skill Points:': 'Puntos de habilidad:',
    'Skills': 'Habilidades',
    'Passive:': 'Pasiva:',
    'Allocate stat points to customize your build. Stats and stat points reset on prestige.':
      'Reparte puntos de atributo para personalizar tu personaje. Los atributos y sus puntos se reinician al hacer prestigio.',

    // Classes
    'Novice': 'Aprendiz',
    'Swordsman': 'Espadachín',
    'Mage': 'Mago',
    'Archer': 'Arquero',
    'Acolyte': 'Acólito',
    'Merchant': 'Mercader',
    'Thief': 'Ladrón',
    'Hunter': 'Cazador',

    // Tabs & sections
    'Map': 'Mapa',
    'World Map': 'Mapa del mundo',
    'Zones': 'Zonas',
    'Equipment': 'Equipo',
    'Gear': 'Equipo',
    'Bestiary': 'Bestiario',
    'Cards': 'Cartas',
    'cards': 'cartas',
    'Achievements': 'Logros',
    'Cheevos': 'Logros',
    'Ranks': 'Ranking',
    'Leaderboard': 'Ranking',
    'Refresh leaderboard': 'Actualizar ranking',
    'Inventory': 'Inventario',
    'Stats': 'Estad.',
    'Settings': 'Ajustes',
    'Shop': 'Tienda',
    'Pets': 'Mascotas',
    'Normal Pets': 'Mascotas normales',
    'Party': 'Grupo',
    'World': 'Mundo',
    'Whisper': 'Susurro',
    'Combat': 'Combate',
    'Economy': 'Economía',
    'Mastery': 'Maestría',
    'Power': 'Poder',
    'Misc': 'Varios',
    'Buffs & AOE': 'Mejoras y área',
    'Click & Tank': 'Clic y tanque',
    'Crits & Precision': 'Críticos y precisión',
    'Economy & Value': 'Economía y valor',
    'Support & Sustain': 'Apoyo y aguante',
    'Zeny & Drops': 'Zeny y botín',

    // Chat & profile
    'Say something...': 'Escribe algo...',
    'Search...': 'Buscar...',
    'Search…': 'Buscar…',
    'Search': 'Buscar',
    'Send': 'Enviar',
    'Loading chat...': 'Cargando chat...',
    'Loading...': 'Cargando...',
    'Edit name': 'Editar nombre',
    'edit': 'editar',
    'Remove': 'Quitar',
    'members': 'miembros',
    'Name Color': 'Color del nombre',
    'Changes how your name appears in chat': 'Cambia cómo aparece tu nombre en el chat',
    'Style': 'Estilo',
    'Default': 'Predeterminado',
    'Using default name color': 'Usando el color predeterminado',
    'Amber': 'Ámbar',
    'Amethyst': 'Amatista',
    'Crimson': 'Carmesí',
    'Emerald': 'Esmeralda',
    'Sapphire': 'Zafiro',
    'Teal': 'Turquesa',
    'Frost': 'Escarcha',
    'Void': 'Vacío',
    'Empty': 'Vacío',
    'Illusion': 'Ilusión',

    // Equipment
    'Available Equipment': 'Equipo disponible',
    'No item equipped': 'Nada equipado',
    'No equipment found for this slot. Defeat zone bosses to earn gear!':
      'No tienes equipo para esta ranura. ¡Elimina jefes de zona para conseguirlo!',
    'Equipped gear and accessories.': 'Equipo y accesorios equipados.',
    'Weapon Detail': 'Detalle del arma',
    'Armor Detail': 'Detalle de la armadura',
    'Garment Detail': 'Detalle de la capa',
    'Footgear Detail': 'Detalle del calzado',
    'EQUIPPED': 'EQUIPADO',
    'In use': 'En uso',
    'active': 'activo',
    'Weapon Refine': 'Refinado de arma',
    'ATK per refine level': 'ATQ por nivel de refinado',
    'ATK:': 'ATQ:',
    'Weapon ATK:': 'ATQ de arma:',
    'Weapon Lv:': 'Nv. de arma:',
    'Success Rate:': 'Prob. de éxito:',
    'Cost:': 'Coste:',
    'Enhance +': 'Mejorar +',
    'Enchant': 'Encantar',
    'Current Enchantment': 'Encantamiento actual',
    'Current:': 'Actual:',
    'Enchantment Result': 'Resultado del encantamiento',
    'Keep': 'Conservar',
    'Roll a random bonus. Keep or discard the result.': 'Obtén una bonificación al azar. Quédatela o descártala.',
    'Enchanting adds a random bonus stat to your equipment':
      'Encantar añade una bonificación aleatoria a tu equipo',
    'Farm boss shards to enhance!': '¡Consigue fragmentos de jefe para mejorar!',
    'Need materials from monster drops!': '¡Necesitas materiales del botín de los monstruos!',
    'Materials': 'Materiales',
    'Card Slots (': 'Ranuras de carta (',
    'Reroll (': 'Relanzar (',
    'Reset (': 'Reiniciar (',

    // Bonuses & stat labels
    'Active Bonuses': 'Bonificaciones activas',
    'Active Buffs': 'Mejoras activas',
    'EXP Rain!': '¡Lluvia de EXP!',
    'All Damage:': 'Todo el daño:',
    'Click Damage:': 'Daño por clic:',
    'Crit Chance:': 'Prob. de crítico:',
    'Double Click:': 'Doble clic:',
    'Drop Rate': 'Prob. de botín',
    'Drop Rate:': 'Prob. de botín:',
    'Drop rate: +': 'Prob. de botín: +',
    'Buff Duration:': 'Duración de mejoras:',
    'Pet DPS': 'DPS de mascotas',
    'Pet DPS:': 'DPS de mascotas:',
    'Purchase Discount:': 'Descuento en compras:',
    'PvP/WoE HP:': 'PV en PvP/WoE:',
    'Sell Price:': 'Precio de venta:',
    'Shiny Chance:': 'Prob. de shiny:',
    'Zeny Bonus:': 'Bonificación de zeny:',
    'Pet Arena:': 'Arena:',
    'Discount': 'Descuento',
    'Attack Speed': 'Velocidad de ataque',
    'attack speed': 'velocidad de ataque',
    'All Races': 'Todas las razas',
    'Chance to click twice': 'Probabilidad de hacer doble clic',
    'Increases all damage': 'Aumenta todo el daño',
    'Increases all damage. Can burn mobs': 'Aumenta todo el daño. Puede quemar a los monstruos',
    'Increases all damage. Can poison mobs': 'Aumenta todo el daño. Puede envenenar a los monstruos',
    'Increases all damage. Can weaken mobs': 'Aumenta todo el daño. Puede debilitar a los monstruos',
    'Increases battle HP in PvP/WoE': 'Aumenta los PV de combate en PvP/WoE',
    'Increases buff duration': 'Aumenta la duración de las mejoras',
    'Increases click damage': 'Aumenta el daño por clic',
    'Increases click damage. Can stun mobs': 'Aumenta el daño por clic. Puede aturdir a los monstruos',
    'Increases crit chance': 'Aumenta la prob. de crítico',
    'Increases drop rate': 'Aumenta la prob. de botín',
    'Increases pet DPS': 'Aumenta el DPS de las mascotas',
    'Increases sell prices': 'Aumenta los precios de venta',
    'Increases shiny chance': 'Aumenta la prob. de shiny',
    'Increases weapon ATK': 'Aumenta el ATQ del arma',
    'Increases zeny bonus': 'Aumenta la bonificación de zeny',
    'Increases zeny bonus and Pet Arena/PvP/WoE HP':
      'Aumenta la bonificación de zeny y los PV en la Arena/PvP/WoE',
    'Reduces purchase costs': 'Reduce el coste de las compras',

    // Prestige, rebirth & Kafra upgrades
    'Prestige': 'Prestigio',
    'Prestige / Rebirth': 'Prestigio / Renacimiento',
    'Prestige Level': 'Nivel de prestigio',
    'Rebirth': 'Renacer',
    'Rebirth resets:': 'Al renacer se reinicia:',
    'Keeps:': 'Conserva:',
    'Last prestige zeny:': 'Zeny del último prestigio:',
    'Current Multiplier:': 'Multiplicador actual:',
    'Next Multiplier:': 'Siguiente multiplicador:',
    'Next:': 'Siguiente:',
    'Next: +': 'Siguiente: +',
    'Target: +': 'Objetivo: +',
    'Unlocks at Prestige': 'Se desbloquea en Prestigio',
    'unlocks:': 'desbloquea:',
    'to unlock': 'para desbloquear',
    'until bonus': 'hasta la bonificación',
    'Kafra Bonuses (next rebirth):': 'Bonificaciones Kafra (próximo renacimiento):',
    'Invest resources into permanent upgrades. All upgrades persist through prestige.':
      'Invierte recursos en mejoras permanentes. Todas las mejoras se conservan al hacer prestigio.',
    "Cards, prestige multiplier, Kafra upgrades, Pet Arena coins, Champion's Crowns, homestead":
      'Cartas, multiplicador de prestigio, mejoras Kafra, monedas de la Arena, Coronas de campeón y granja',
    'Stats, stat points, kills, mob tier, equipment, inventory, pets, pet evolutions, expeditions, Pet Arena progress, WoE team and waiting-line pledges':
      'Atributos, puntos de atributo, bajas, nivel de monstruos, equipo, inventario, mascotas, evoluciones de mascotas, expediciones, progreso en la Arena, equipo de WoE y reservas en la cola de espera',
    'Kafra': 'Kafra',
    'Kafra Auto-Attack': 'Autoataque Kafra',
    'Kafra Storage': 'Almacén Kafra',
    'Kafra Vault': 'Bóveda Kafra',
    'Card Binder': 'Carpeta de cartas',
    'Pet Kennel': 'Caseta de mascotas',
    'Weapon Rack': 'Armero',
    'Kafra Weapon Rack': 'Armero Kafra',
    'Homestead': 'Granja',
    'Warp Portal': 'Portal de teletransporte',
    'Merchant Outpost': 'Puesto de mercader',
    'Homestead (Warp Portal, Merchant Outpost)': 'Granja (Portal de teletransporte, Puesto de mercader)',
    'Supply Depot': 'Depósito de suministros',
    'The Workshop': 'El taller',
    'Training Grounds': 'Campo de entrenamiento',
    'Lucky Charm': 'Amuleto de la suerte',
    'Kafra Lucky Charm': 'Amuleto de la suerte Kafra',
    'Guilds & MVP Raids': 'Clanes e incursiones MVP',

    // Guilds, War of Emperium & Pet Arena shop
    '↻ Refresh': '↻ Actualizar',
    'Back': 'Volver',
    'Browse': 'Explorar',
    'Page': 'Página',
    'Notice': 'Aviso',
    'No notice set.': 'No hay ningún aviso.',
    'Leave Guild': 'Abandonar clan',
    'Guild only': 'Solo clan',
    'Guildmate': 'Compañero de clan',
    'leader': 'líder',
    'member': 'miembro',
    'Guild Bonuses': 'Bonificaciones de clan',
    'guild bonuses': 'bonificaciones de clan',
    'Guild chat & MVP raid access': 'Chat de clan y acceso a incursiones MVP',
    'Guild name — press Enter to search': 'Nombre del clan; pulsa Intro para buscar',
    'Search guilds by name': 'Buscar clanes por nombre',
    'Message your guild...': 'Escribe a tu clan...',
    'No guilds found.': 'No se han encontrado clanes.',
    'No guilds match that name. Try another search.': 'Ningún clan coincide con ese nombre. Prueba otra búsqueda.',
    'Create or join a guild': 'Crea un clan o únete a uno',
    'Create or join a guild with other players!': '¡Crea un clan o únete a uno con otros jugadores!',
    'Join a guild to compete in': 'Únete a un clan para competir en las',
    'MVP Raids': 'Incursiones MVP',
    'War of Emperium': 'War of Emperium',
    'WoE OPEN': 'WoE ABIERTA',
    'WoE CLOSED': 'WoE CERRADA',
    'Castles': 'Castillos',
    'Battle Log': 'Registro de combates',
    'No battle history yet.': 'Aún no hay historial de combates.',
    'Loading castles...': 'Cargando castillos...',
    'How sieges work': 'Cómo funcionan los asedios',
    'Siege': 'Asedio',
    'Join Attack': 'Unirse al ataque',
    'vs': 'vs',
    'Castle breather': 'Descanso del castillo',
    'defender row': 'fila de defensores',
    'defender rows': 'filas de defensores',
    "Castle bonuses of the same type don't stack.": 'Las bonificaciones de castillos del mismo tipo no se acumulan.',
    'Every teammate earns attack credit and rewards. Capture credit and win tokens need at least one defender row beaten, so taking an empty castle pays like a loss.':
      'Cada compañero recibe crédito de ataque y recompensas. El crédito de captura y las fichas de victoria exigen vencer al menos una fila de defensores, así que tomar un castillo vacío se paga como una derrota.',
    "Joining queues you for one attack, even while you're offline. Your signup stays until you fight or withdraw; prestiging withdraws pets you pledged. Extra members wait for the next teams automatically.":
      'Unirte te pone en cola para un ataque, aunque estés desconectado. Tu inscripción se mantiene hasta que luches o te retires; hacer prestigio retira las mascotas que comprometiste. Los miembros de sobra esperan automáticamente a los siguientes equipos.',
    'Prontera Castle': 'Castillo de Prontera',
    'Geffen Tower': 'Torre de Geffen',
    'Payon Fortress': 'Fuerte de Payon',
    'Morroc Bastion': 'Bastión de Morroc',
    'Aldebaran Citadel': 'Ciudadela de Aldebaran',
    'Izlude Stronghold': 'Fortaleza de Izlude',
    'The jewel of the kingdom. High walls bolster defenders.': 'La joya del reino. Sus altas murallas refuerzan a los defensores.',
    'An arcane stronghold crackling with magical energy.': 'Una fortaleza arcana que crepita de energía mágica.',
    'Hidden in the forest, nature shields its garrison.': 'Oculta en el bosque, la naturaleza protege a su guarnición.',
    "A desert bastion guarding the kingdom's merchant routes.": 'Un bastión en el desierto que protege las rutas comerciales del reino.',
    'A merchant hub. Controlling it yields rich trade rewards.': 'Un centro comercial. Controlarlo da ricas recompensas comerciales.',
    'An island stronghold where guilds compete for arena supplies.': 'Una fortaleza en una isla donde los clanes compiten por suministros de la arena.',
    'Pet Arena Shop': 'Tienda de la Arena',
    'Battle your pets through Pet Arena stages!': '¡Haz combatir a tus mascotas en las fases de la Arena!',
    'Energy': 'Energía',
    'Coins': 'Monedas',
    'coins': 'monedas',
    'Bronze': 'Bronce',
    'Silver': 'Plata',
    'Gold': 'Oro',
    'Platinum': 'Platino',
    'Diamond': 'Diamante',
    "Champion's Crown": 'Corona de campeón',
    'Consumable Pack': 'Lote de consumibles',
    'Pet EXP Crystal': 'Cristal de EXP de mascota',
    'Rune Piece': 'Fragmento de runa',
    'Rune': 'Runa',
    'Runes': 'Runas',
    'Kafra Storage upgrade material': 'Material de mejora del Almacén Kafra',

    // Pet Arena battle
    'Arena': 'Arena',
    '(Opponent)': '(Rival)',
    '(You)': '(Tú)',
    '(no fighter)': '(sin luchador)',
    'Pet Team': 'Equipo de mascotas',
    'Battle begins!': '¡Empieza el combate!',
    'Battle in Progress': 'Combate en curso',
    'Waiting for action…': 'Esperando acción…',
    'Watch the battle in the main area!': '¡Mira el combate en la zona principal!',
    'Loading sprites…': 'Cargando sprites…',
    'Skip to Results': 'Saltar a los resultados',
    'Turn Order': 'Orden de turnos',
    'Elemental Triangle': 'Triángulo elemental',
    'Counter': 'Contraataque',
    'Crit': 'Crítico',
    'Exit': 'Salir',
    'cleared': 'superadas',
    'Unit': 'Unidad',
    'Dealt': 'Infligido',
    'Taken': 'Recibido',
    'Healed': 'Curado',
    'Shields given': 'Escudos dados',
    'CLEAR': 'SUPERADA',
    'K.O.': 'K.O.',
    'KO': 'KO',
    'Mute': 'Silenciar',
    'Unmute': 'Activar sonido',
    'Pet Arena Challenger': 'Aspirante de la Arena',
    'Pet Arena Regular': 'Habitual de la Arena',
    'Pet Arena Veteran': 'Veterano de la Arena',
    'Clear your first Pet Arena stage': 'Supera tu primera fase de la Arena',
    'Crown Collector': 'Coleccionista de coronas',
    'Crowned King': 'Rey coronado',
    'Grand Champion': 'Gran campeón',
    "Earn your first Champion's Crown": 'Consigue tu primera Corona de campeón',

    // WoE battle pets: names stay (like monster names), skills are translated
    'Ancient Worm': 'Ancient Worm',
    'Angeling Warden': 'Angeling Warden',
    'Aqua Elemental': 'Aqua Elemental',
    'Argiope Recruit': 'Argiope Recruit',
    'Baphomet Jr.': 'Baphomet Jr.',
    'Deviling Warden': 'Deviling Warden',
    'Gargoyle Scout': 'Gargoyle Scout',
    'Geographer Bud': 'Geographer Bud',
    'Hunter Fly': 'Hunter Fly',
    'Hydra Sprout': 'Hydra Sprout',
    'Kraken Fry': 'Kraken Fry',
    'Orc Archer Cadet': 'Orc Archer Cadet',
    'Rocker Champion': 'Rocker Champion',
    'Valkyrie Page': 'Valkyrie Page',
    'Venomous': 'Venomous',
    'Wind Ghostling': 'Wind Ghostling',
    'Wraith Pup': 'Wraith Pup',
    'Battle Hymn': 'Himno de batalla',
    'Black Venom': 'Veneno negro',
    'Burrow Wall': 'Muro de madriguera',
    'Castle Wall': 'Muralla del castillo',
    'Crosswind': 'Viento cruzado',
    'Dark Cleave': 'Tajo oscuro',
    'Deep Mend': 'Curación profunda',
    'False Light': 'Luz falsa',
    'Flame Dash': 'Embestida ígnea',
    'Gale Cut': 'Corte de vendaval',
    'Leeching Dive': 'Picado vampírico',
    'Magma Burst': 'Estallido de magma',
    'Mist Guard': 'Guardia de niebla',
    'Root Salve': 'Bálsamo de raíces',
    'Sanctuary': 'Santuario',
    'Skewer': 'Ensarte',
    'Stone Riff': 'Riff de piedra',
    'Terror': 'Terror',
    'Tide Lash': 'Latigazo de marea',
    'Tiger Roar': 'Rugido de tigre',
    'Volley': 'Andanada',
    'Damage + poison': 'Daño + veneno',
    'Damage + team DEF down': 'Daño + reduce la DEF de todo el equipo rival',
    'Damage with lifesteal': 'Daño con robo de vida',
    'Fast single-target strike': 'Golpe rápido a un objetivo',
    'Heal all allies': 'Cura a todos los aliados',
    'Heal lowest HP ally': 'Cura al aliado con menos PV',
    'High single-target damage': 'Mucho daño a un objetivo',
    'Reliable single-target damage': 'Daño fiable a un objetivo',
    'Team ATK up': 'Sube el ATQ del equipo',
    'Team reflect stance': 'Postura de reflejo para el equipo',
    'Team shield': 'Escudo para el equipo',
    'Self': 'Uno mismo',
    'WoE': 'WoE',
    'Tok': 'fich.',
    'tokens': 'fichas',

    // WoE castle screen
    'Castle details': 'Detalles del castillo',
    'Queue details': 'Detalles de la cola',
    'Formation slots': 'Huecos de la formación',
    'Guild team': 'Equipo del clan',
    "Loading your guild's team...": 'Cargando el equipo de tu clan...',
    'The team could not be loaded. Refresh before joining.': 'No se ha podido cargar el equipo. Actualiza antes de unirte.',
    'You can join now. Cooldowns delay the attack, not your signup.': 'Ya puedes unirte. Las reutilizaciones retrasan el ataque, no tu inscripción.',
    'Pick your pet': 'Elige tu mascota',
    'Open': 'Abierto',
    'Counter with': 'Contrarresta con',
    '% elemental damage': '% de daño elemental',
    'Defenders +': 'Defensores +',
    '% stats': '% atributos',
    'Token Exchange': 'Intercambio de fichas',
    'Firecracker': 'Petardo',
    'Speed Potion': 'Poción de velocidad',
    'Slow Potion': 'Poción de lentitud',
    'Skill Reset Scroll': 'Pergamino de reinicio de habilidades',
    'Stat Reset Scroll': 'Pergamino de reinicio de atributos',
    'Reset all skill points': 'Reinicia todos los puntos de habilidad',
    'Reset all stat points': 'Reinicia todos los puntos de atributo',
    'Open for a random card': 'Ábrelo para obtener una carta al azar',
    'Pet evolution material': 'Material de evolución de mascotas',

    // Guild & WoE achievements
    'Growing Guild': 'Clan en crecimiento',
    'Established Guild': 'Clan consolidado',
    'Guild Master': 'Maestro del clan',
    'Castle Conqueror': 'Conquistador de castillos',
    'Capture your first WoE castle': 'Captura tu primer castillo de WoE',
    'Warlord': 'Señor de la guerra',
    'Emperium Breaker': 'Destructor del Emperium',
    'Castle Defender': 'Defensor del castillo',
    'Set your first WoE defense row': 'Coloca tu primera fila de defensa de WoE',
    'First Siege': 'Primer asedio',
    'Participate in your first WoE castle attack': 'Participa en tu primer ataque a un castillo de WoE',
    'Siege Veteran': 'Veterano de asedios',
    'Siege Commander': 'Comandante de asedios',
    'PvP Auto Arena': 'Arena PvP automática',
    'Enter PvP Auto Arena with your pet team!': '¡Entra en la Arena PvP automática con tu equipo de mascotas!',
    'Battle': 'Lucha',
    'Fighter': 'Luchador',
    'History': 'Historial',
    'Replay': 'Replay',
    'Pupils': 'Alumnos',
    'Sync Fighter': 'Sincronizar luchador',
    'Re-sync Fighter': 'Resincronizar luchador',
    'Syncing...': 'Sincronizando...',
    'Sync your clicker build to derive your PvP fighter.': 'Sincroniza tu personaje del clicker para crear tu luchador de PvP.',
    'Skill Priority': 'Orden de uso',
    'Casts top to bottom, then loops': 'De arriba abajo, en bucle',
    'Loop': 'Repetir',
    'Move up': 'Subir',
    'Move down': 'Bajar',
    '🔴 damage': '🔴 daño',
    '🔵 buff': '🔵 mejora',
    '🟣 debuff': '🟣 penalización',
    'Rating': 'Puntuación',
    'Rating:': 'Puntuación:',
    'Energy:': 'Energía:',
    'Streak': 'Racha',
    'Evade': 'Evasión',
    'DEF': 'DEF',
    'Lineup:': 'Alineación:',
    'picked': 'elegidas',
    '⚡ Active Synergies': '⚡ Sinergias activas',
    'Available pets - click to add': 'Mascotas disponibles: haz clic para añadir',
    'Remove from team': 'Quitar del equipo',
    'Remove a pet first to add this one': 'Quita antes una mascota para añadir esta',
    'Climbing the Ladder': 'Escalando en el ranking',
    'First Duel': 'Primer duelo',
    'First Blood (PvP)': 'Primera sangre (PvP)',
    'Win your first PvP fight': 'Gana tu primer combate PvP',
    'Pit Fighter': 'Luchador de foso',
    'PvP Arena Champion': 'Campeón de la Arena PvP',
    'Gladiator': 'Gladiador',
    'PvP Arena Legend': 'Leyenda de la Arena PvP',
    'Hot Streak': 'En racha',
    'On Fire': 'Imparable',
    'Untouchable Champion': 'Campeón intocable',
    'Contender': 'Aspirante',
    'Top Tier': 'Élite',
    'Apex Predator': 'Superdepredador',
    'Complete your first PvP fight': 'Completa tu primer combate PvP',
    'Choose Your Opponent': 'Elige a tu rival',
    'Confirm Match': 'Confirmar combate',
    'Easy': 'Fácil',
    'Even': 'Igualado',
    'Hard': 'Difícil',
    'Re-scout': 'Volver a explorar',
    'Scouting...': 'Explorando...',
    'vs you': 'frente a ti',
    'streak': 'de racha',
    'Level:': 'Nivel:',
    'Prestige:': 'Prestigio:',
    'Job:': 'Oficio:',
    'Pets:': 'Mascotas:',
    'Record:': 'Balance:',
    'Fight Again': 'Volver a luchar',
    'Fighting...': 'Luchando...',
    'Watch Replay': 'Ver repetición',
    'PvP Replay': 'Repetición PvP',
    'Replay ready': 'Repetición lista',
    'Replay playing in the main view': 'Repetición en curso en la vista principal',
    'Play in Main View': 'Ver en la vista principal',
    'Playback opens in the main view, not inside this panel.': 'La reproducción se abre en la vista principal, no en este panel.',
    'Back to Field': 'Volver al campo',
    'Venom Strike': 'Golpe venenoso',
    'Angelus': 'Angelus',
    '💡 Almost There': '💡 Ya casi',
    "Can't have an empty pet team - add another pet first": 'El equipo no puede quedar vacío: añade antes otra mascota',
    'Shadow Pair': 'Dúo de sombra',
    'Thief Bug Female': 'Thief Bug Female',
    'Shield Broken': 'Escudo roto',
    'Reflect': 'Reflejo',
    'REF': 'REF',
    'PSN': 'VEN',
    'Lv': 'Nv',
    'W/': 'V/',
    'Prev': 'Anterior',
    'ranked': 'clasificados',
    'Scout Opponents': 'Explorar rivales',
    'unsaved - re-sync to apply': 'sin guardar: resincroniza',
    'No fight history yet.': 'Aún no hay historial de combates.',
    'No fighters ranked yet.': 'Aún no hay luchadores clasificados.',
    'No replay loaded. Start a fight or select one from history.': 'No hay ninguna repetición cargada. Empieza un combate o elige uno del historial.',
    'novice': 'aprendiz',
    'swordsman': 'espadachín',
    'mage': 'mago',
    'archer': 'arquero',
    'acolyte': 'acólito',
    'merchant': 'mercader',
    'thief': 'ladrón',
    'Pet Arena': 'Arena',
    'Dungeon Expeditions': 'Expediciones a mazmorras',
    'Dungeon': 'Mazmorra',
    'Dungeon Unlocked': 'Mazmorra desbloqueada',
    'Send pets on expeditions for loot!': '¡Envía mascotas de expedición a por botín!',
    'Send pets on expeditions simultaneously.': 'Envía mascotas de expedición a la vez.',
    'Pet EXP': 'EXP de mascota',
    'View >': 'Ver >',
    'Prontera Culvert': 'Alcantarillas de Prontera',
    'Orc Dungeon': 'Mazmorra Orca',
    'Endless Tower': 'Torre sin fin',
    'Sewer Survivor': 'Superviviente de las cloacas',
    'Orc Slayer': 'Verdugo de orcos',
    'Active Expeditions': 'Expediciones activas',
    'Recent Expeditions': 'Expediciones recientes',
    'Tokens': 'Fichas',
    'Collect': 'Recoger',
    'Depart': 'Partir',
    'Rewards:': 'Recompensas:',
    'Power:': 'Poder:',
    'Buff:': 'Mejora:',
    'm)': 'm)',
    'Dungeon Token': 'Ficha de mazmorra',
    'Red Potion': 'Poción roja',
    'Orange Potion': 'Poción naranja',
    'White Potion': 'Poción blanca',
    'Emperium': 'Emperium',
    'Zone Events': 'Eventos de zona',
    'Monster Invasion': 'Invasión de monstruos',
    'Treasure Hunter': 'Cazatesoros',
    'Element Storm': 'Tormenta elemental',
    'Boss Rush': 'Oleada de jefes',
    'Boss spawns repeatedly': 'El jefe aparece una y otra vez',
    'Dungeons': 'Mazmorras',
    'Mob respawn time halved': 'Los monstruos reaparecen el doble de rápido',
    'Claim': 'Reclamar',
    'Almost there!': '¡Ya casi lo tienes!',
    'Frenzy!': '¡Frenesí!',
    'Frenzy': 'Frenesí',
    'Gold Rush!': '¡Fiebre del oro!',
    'Gold Rush': 'Fiebre del oro',
    'Lucky Star!': '¡Estrella de la suerte!',
    'Lucky Star': 'Estrella de la suerte',
    'Bonus Zeny!': '¡Zeny extra!',
    'Bonus Zeny': 'Zeny extra',
    'Bonus zeny!': '¡Zeny extra!',
    'Bonus item!': '¡Objeto extra!',
    'Bonus card!': '¡Carta extra!',
    'Diversity Bonus': 'Bonificación por variedad',
    'Broken!': '¡Roto!',
    'refine=': 'refinado =',
    'refine': 'refinado',
    'Claim All Rewards': 'Reclamar todas las recompensas',
    'All Rewards': 'todas las recompensas',
    'Pet Auto-Feed': 'Autoalimentación de mascotas',
    'Dungeon Auto-Repeat': 'Repetición automática de mazmorras',
    'Pet Arena Auto-Fighter': 'Autocombate en la Arena',
    'Party System': 'Sistema de grupos',

    // Pets
    'Feed': 'Alimentar',
    'feeds (': 'comidas (',
    'Evolve': 'Evolucionar',
    'Evolve to': 'Evoluciona a',
    'Feed favorite food to level up. Max-level pets can evolve with materials + zeny for new forms and abilities.':
      'Dales su comida favorita para que suban de nivel. Las mascotas de nivel máximo pueden evolucionar con materiales + zeny para conseguir nuevas formas y habilidades.',
    'Aqua Shield': 'Escudo acuático',
    'Water Veil': 'Velo de agua',
    'Banana Barrage': 'Lluvia de plátanos',
    'Battle Charge': 'Carga de batalla',
    'Battle Cry': 'Grito de batalla',
    'Blast from the Ass': 'Explosión trasera',
    'Fart': 'Pedo',
    'Jumpslash': 'Tajo saltarín',
    'Overcharge': 'Sobrecarga',
    'Phase Shift': 'Cambio de fase',
    'Root Bind': 'Atadura de raíces',
    'Tidal Heal': 'Cura de marea',
    'War Cry': 'Grito de guerra',
    'Sleep': 'Sueño',
    'Shield all allies': 'Escudo para todos los aliados',
    'Shield all allies and phase damage': 'Escudo para todos los aliados y desfase del daño',
    'Hit all enemies': 'Golpea a todos los enemigos',
    'High crit single-target strike': 'Golpe a un objetivo con alta prob. de crítico',
    'Low damage + stun': 'Daño bajo + aturdimiento',
    'Damage + DEF down': 'Daño + reduce la DEF',
    'Burning - taking fire DoT': 'Quemado: recibe daño de fuego continuo',
    'Poisoned - taking poison DoT': 'Envenenado: recibe daño de veneno continuo',
    'Stunned - all hits crit': 'Aturdido: todos los golpes son críticos',

    // Items (names with an established community name, like Jellopy, stay as-is)
    'Apple': 'Manzana',
    'Unripe Apple': 'Manzana verde',
    'Green Herb': 'Hierba verde',
    'White Herb': 'Hierba blanca',
    'Empty Bottle': 'Botella vacía',
    'Feather': 'Pluma',
    'Fluff': 'Pelusa',
    'Clover': 'Trébol',
    'Shell': 'Concha',
    'Sticky Mucus': 'Moco pegajoso',
    'Orange Juice': 'Zumo de naranja',
    'Tooth of Bat': 'Colmillo de murciélago',
    'Chrysalis': 'Crisálida',
    'Crystal Blue': 'Cristal azul',
    'Knife': 'Cuchillo',
    'Cutter': 'Cúter',
    'Stiletto': 'Estilete',
    'Sword': 'Espada',
    'Cotton Shirt': 'Camisa de algodón',
    'Jacket': 'Chaqueta',
    "Adventurer's Suit": 'Traje de aventurero',
    'Hood': 'Capucha',
    'Manteau': 'Manto',
    'Muffler': 'Bufanda',
    'Sandals': 'Sandalias',
    'Shoes': 'Zapatos',
    'Safety Ring': 'Anillo de seguridad',
    'Critical Ring': 'Anillo crítico',
    'Brooch': 'Broche',
    'Aqua Armor': 'Armadura acuática',
    'Aqua Dagger': 'Daga acuática',
    'Coral Ring': 'Anillo de coral',
    'Sea Manteau': 'Manto marino',

    // Ragnarok Online skills
    'Bash': 'Golpe',
    'Provoke': 'Provocar',
    'Endure': 'Aguante',
    'Sword Mastery': 'Maestría con espada',
    'HP Recovery': 'Recuperación de PV',
    'Heal': 'Curar',
    'Blessing': 'Bendición',
    'Increase AGI': 'Aumentar AGI',
    'Cold Bolt': 'Rayo de hielo',
    'Fire Bolt': 'Rayo de fuego',
    'Soul Strike': 'Golpe de alma',
    'Energy Coat': 'Capa de energía',
    'Sight': 'Visión',
    'Double Strafe': 'Disparo doble',
    'Arrow Shower': 'Lluvia de flechas',
    "Owl's Eye": 'Ojo de búho',
    "Vulture's Eye": 'Ojo de buitre',
    'Improve Concentration': 'Mejorar concentración',
    'Steal': 'Robar',
    'Hiding': 'Ocultarse',
    'Envenom': 'Envenenar',
    'Increase Dodge': 'Aumentar esquiva',
    'Double Attack': 'Ataque doble',
    'Loud Exclamation': 'Grito fuerte',
    'Pushcart': 'Carro',
    'Ice Wall': 'Muro de hielo',
    'Safety Wall': 'Muro de seguridad',
    'Land Protector': 'Protector de tierra',

    // Monsters & mobs
    'Elite mobs': 'monstruos élite',
    'Shiny monsters': 'monstruos shiny',
    'different zone bosses': 'jefes de zona distintos',
    'unique cards': 'cartas distintas',
    'Kill your first Elite mob': 'Elimina a tu primer monstruo élite',
    'Kill your first Shiny monster': 'Elimina a tu primer monstruo shiny',
    'Kill your first zone boss': 'Elimina a tu primer jefe de zona',
    'Kill every mob type at least once (all zones)':
      'Elimina a cada tipo de monstruo al menos una vez (todas las zonas)',
    'Defeat every MVP boss at least once': 'Elimina a cada jefe MVP al menos una vez',
    'Slay your first monster': 'Elimina a tu primer monstruo',

    // Achievements
    'Requirements': 'Requisitos',
    'Complete': 'Completado',
    'Angel Hunter': 'Cazador de ángeles',
    'Bug Squasher': 'Aplastabichos',
    'Button Masher': 'Machacabotones',
    'Carpal Tunnel': 'Túnel carpiano',
    'Damage Dealer': 'Repartidor de daño',
    'Elite Annihilator': 'Aniquilador de élites',
    'Elite Crusher': 'Triturador de élites',
    'Elite Hunter': 'Cazador de élites',
    'Elite Slayer': 'Verdugo de élites',
    'Extinction Event': 'Extinción masiva',
    'First Blood': 'Primera sangre',
    'Genocide': 'Genocidio',
    'Ghostbuster': 'Cazafantasmas',
    'Heavy Hitter': 'Pegada dura',
    'Monster Hunter': 'Cazador de monstruos',
    'Novice Adventurer': 'Aventurero novato',
    'Poring Genocide': 'Genocidio Poring',
    'Poring Slayer': 'Verdugo de Porings',
    'Power Overwhelming': 'Poder abrumador',
    'Shiny Collector': 'Coleccionista shiny',
    'Shiny Expert': 'Experto shiny',
    'Shiny Hunter': 'Cazador shiny',
    'Shiny Maniac': 'Maníaco shiny',
    'Veteran Slayer': 'Verdugo veterano',
    'World Ender': 'Destructor de mundos',
    'Total Eclipse': 'Eclipse total',
    'Eclipse Nemesis': 'Némesis de Eclipse',
    'Phreeoni Nemesis': 'Némesis de Phreeoni',
    'Vocal Nemesis': 'Némesis de Vocal',
    'Rabbit Season': 'Temporada de conejos',
    'Slumber Party!': '¡Fiesta de pijamas!',
    'Lucky Strike': 'Golpe de suerte',
    'Elite': 'Élite',
    'Transcendent': 'Trascendente',
    'Jack of All Trades': 'Todoterreno',
    'First Steps': 'Primeros pasos',
    'Novice No More': 'Adiós, aprendiz',
    'Getting Stronger': 'Cada vez más fuerte',
    'Veteran': 'Veterano',
    'Job Seeker': 'En busca de oficio',
    'Apprentice': 'Iniciado',
    'Journeyman': 'Oficial',
    'Skill Maxer': 'Habilidad al máximo',
    'Boss Conqueror': 'Conquistador de jefes',
    'Completionist': 'Completista',
    'Undersea Explorer': 'Explorador submarino',
    'Clockwork Pioneer': 'Pionero mecánico',
    'World Mastery': 'Dominio del mundo',
    'Toy Soldier': 'Soldadito de juguete',
    'Supreme Boss Hunter': 'Cazador de jefes supremo',
    'Abbey Pilgrim': 'Peregrino de la abadía',
    'Absolute Mastery': 'Dominio absoluto',
    'Prestige Boss Conqueror': 'Conquistador de jefes de prestigio',
    'Explorer': 'Explorador',
    'Geffen Traveler': 'Viajero de Geffen',
    'Forest Walker': 'Caminante del bosque',
    'Desert Wanderer': 'Errante del desierto',
    "Master's Domain": 'Dominio del Maestro',
    'Boss Hunter': 'Cazador de jefes',
    'Boss Slayer': 'Verdugo de jefes',
    'Zone Master': 'Maestro de zona',
    'Regional Expert': 'Experto regional',
    'Born Again': 'Renacido',
    'Twice Reborn': 'Dos veces renacido',
    'Thrice Blessed': 'Tres veces bendecido',
    'Quad Core': 'Cuatro núcleos',
    'High Novice': 'Aprendiz superior',
    'Transcendence': 'Trascendencia',
    'Ascendant': 'Ascendido',
    'Eternal Cycle': 'Ciclo eterno',
    'Perfect Refine': 'Refinado perfecto',
    'Armory Complete': 'Armería completa',
    'First Enchant': 'Primer encantamiento',
    'Enchanter': 'Encantador',
    'Master Enchanter': 'Maestro encantador',
    'Rare Find': 'Hallazgo raro',
    'Epic Enchant': 'Encantamiento épico',
    'Legendary Enchant': 'Encantamiento legendario',
    'Enchant Addict': 'Adicto a los encantamientos',
    'Armed and Dangerous': 'Armado y peligroso',
    'Armored Up': 'Bien acorazado',
    'Fully Equipped': 'Equipado al completo',
    'Collector': 'Coleccionista',
    'Arsenal': 'Arsenal',
    'Sharpened': 'Afilado',
    'Masterwork': 'Obra maestra',
    'Card Encyclopedia': 'Enciclopedia de cartas',
    'Card Grandmaster': 'Gran maestro de cartas',
    'Card Master': 'Maestro de cartas',
    'Serial Merger': 'Fusionador en serie',
    'Full Cardbook': 'Álbum completo',
    'Merge Addict': 'Adicto a las fusiones',
    'Perfect Cardbook': 'Álbum perfecto',
    'Card Collector': 'Coleccionista de cartas',
    'Card Album': 'Álbum de cartas',
    'Card Enthusiast': 'Entusiasta de las cartas',
    'Card Merger': 'Fusionador de cartas',
    'Card Forger': 'Forjador de cartas',
    'Full Kennel': 'Caseta llena',
    'Evolution': 'Evolución',
    'Final Form': 'Forma final',
    'Ultimate Kennel': 'Caseta definitiva',
    'War Beast Recruit': 'Recluta de bestias de guerra',
    'Kennel of War': 'Caseta de guerra',
    'Battle Pack': 'Manada de batalla',
    'Full War Kennel': 'Caseta de guerra completa',
    'Warpet Trainer': 'Entrenador de mascotas de guerra',
    'Warpet Master': 'Maestro de mascotas de guerra',
    'Warpet Champion': 'Campeón de mascotas de guerra',
    'Legion Maxed': 'Legión al máximo',
    'Pet Owner': 'Dueño de mascota',
    'MVP Challenger': 'Aspirante a MVP',
    'MVP Regular': 'Habitual de MVP',
    'MVP Veteran': 'Veterano de MVP',
    'MVP Hunter': 'Cazador de MVP',
    'Party MVP': 'MVP del grupo',
    'Star Player': 'Jugador estrella',
    'Legendary MVP': 'MVP legendario',
    'Rhythm Adept': 'Adepto del ritmo',
    'Rhythm Master': 'Maestro del ritmo',
    'Perfect Performer': 'Actuación perfecta',
    'Combo Starter': 'Iniciador de combos',
    'Combo King': 'Rey del combo',
    'Untouchable': 'Intocable',
    'Millionaire': 'Millonario',
    'Zeny Tycoon': 'Magnate del zeny',
    'Pocket Change': 'Calderilla',
    'Savings Account': 'Cuenta de ahorro',
    'Comfortable': 'Acomodado',
    'Wealthy': 'Rico',
    'Saver': 'Ahorrador',
    'Pack Rat': 'Urraca',
    'Hoarder': 'Acaparador',
    'Kafra VIP': 'VIP de Kafra',
    'Vault Keeper': 'Guardián de la bóveda',
    'Card Binder Pro': 'Experto en carpetas',
    'Kafra Customer': 'Cliente de Kafra',
    'Fully Automated': 'Totalmente automatizado',
    'Kafra Regular': 'Habitual de Kafra',
    'Dungeon Crawler': 'Explorador de mazmorras',
    'Dungeon Regular': 'Habitual de mazmorras',
    'Dungeon Veteran': 'Veterano de mazmorras',
    'Dungeon Master': 'Maestro de mazmorras',
    'Dungeon Legend': 'Leyenda de mazmorras',
    'Complete your first expedition': 'Completa tu primera expedición',
    'Perfect Build': 'Personaje perfecto',
    'Fully Allocated': 'Todo repartido',
    'Colorful': 'Colorido',
    'Full Spectrum': 'Espectro completo',
    'Stat Builder': 'Primeros atributos',
    'Specialized': 'Especializado',
    'Way of the Sword': 'Camino de la espada',
    'Way of Magic': 'Camino de la magia',
    'Way of the Arrow': 'Camino de la flecha',
    'Way of Commerce': 'Camino del comercio',
    'Way of Light': 'Camino de la luz',
    'Way of Shadows': 'Camino de las sombras',
    'Splash of Color': 'Toque de color',

    // Achievement descriptions (fixed text; the ones with numbers are in RULES)
    'Choose your first job class': 'Elige tu primera clase',
    'Prestige for the first time': 'Haz prestigio por primera vez',
    'Attempt your first enchantment': 'Intenta tu primer encantamiento',
    'Roll a Rare enchantment': 'Consigue un encantamiento raro',
    'Roll an Epic enchantment': 'Consigue un encantamiento épico',
    'Equip a weapon': 'Equipa un arma',
    'Equip an armor': 'Equipa una armadura',
    'Collect all cards': 'Consigue todas las cartas',
    'Obtain your first card': 'Consigue tu primera carta',
    'Unlock your first WoE battle pet': 'Desbloquea tu primera mascota de batalla de WoE',
    'Adopt your first pet': 'Adopta tu primera mascota',
    'Participate in your first MVP encounter': 'Participa en tu primer combate MVP',
    'Have the best damage performance in an MVP encounter': 'Haz el mayor daño en un combate MVP',
    'Upgrade any Kafra slot': 'Mejora cualquier ranura Kafra',
    'Max the Card Binder': 'Sube al máximo la carpeta de cartas',
    'Max the Auto-Clicker': 'Sube al máximo el autoclic',
    'Unlock the Vault': 'Desbloquea la bóveda',
    'Allocate your first stat point': 'Reparte tu primer punto de atributo',
    'Unlock all name colors': 'Desbloquea todos los colores de nombre',

    // Cards & misc screens
    'Select a card:': 'Elige una carta:',
    '[Empty slot] - click to insert card': '[Ranura vacía] - haz clic para insertar una carta',
    'lifetime': 'en total',
    'Fight': 'Luchar',
    'Fighting': 'En lucha',
    'Owned': 'Conseguidas',
    'Not yet acquired': 'Sin conseguir',
    'Double Click': 'Doble clic',
    'in inventory': 'en el inventario',
    'in the inventory': 'en el inventario',
    'PvP/WoE Battle Pets': 'Mascotas de batalla de PvP/WoE',
    'Join or create a guild to unlock War of Emperium battle pets.':
      'Únete a un clan o crea uno para desbloquear las mascotas de batalla de War of Emperium.',
    'Sea Crystal': 'Cristal marino',
    'Cogwheel': 'Engranaje',
    'Fin': 'Aleta',
    'Owned:': 'Tienes:',
    'Slotted:': 'Insertadas:',
    'Available:': 'Disponibles:',

    // MVP & parties
    'MVP Stamina': 'Energía MVP',
    'Full': 'Llena',
    'MVP stamina regenerates automatically. You can check it without joining a party.':
      'La energía MVP se regenera sola. Puedes consultarla sin unirte a un grupo.',
    'Join': 'Unirse',
    'Join party': 'Unirse al grupo',
    'Joining': 'Uniéndote',
    'Joining...': 'Uniéndote...',
    'Join Party': 'Unirse al grupo',
    'Create': 'Crear',
    'Enter a party code to join:': 'Introduce un código de grupo para unirte:',
    'Create a new party:': 'Crea un grupo nuevo:',
    'Party name': 'Nombre del grupo',
    'Create party': 'Crear grupo',
    'Create Party': 'Crear grupo',
    'Party Job Bonuses': 'Bonificaciones de oficio del grupo',
    'Invite Link': 'Enlace de invitación',
    'Link copied!': '¡Enlace copiado!',
    'Copied!': '¡Copiado!',
    'Party not found': 'No se ha encontrado el grupo',
    'Party not found.': 'No se ha encontrado el grupo.',
    'Invalid party code': 'Código de grupo no válido',
    'Invalid party code.': 'Código de grupo no válido.',
    'Your party is fighting without you this round - wait for the next encounter to ready up.':
      'Tu grupo está luchando sin ti en esta ronda: espera al siguiente combate para prepararte.',
    'Leader': 'Líder',
    'Active Party Bonuses': 'Bonificaciones de grupo activas',
    'Damage': 'Daño',
    'Copy invite link to share with friends': 'Copia el enlace de invitación para compartirlo con tus amigos',
    'Disband Party': 'Disolver grupo',
    'Leave Party': 'Salir del grupo',

    // MVP rhythm fight
    'MVP Boss': 'Jefe MVP',
    'MVP Defeated!': '¡MVP derrotado!',
    'Collect Reward': 'Recoger recompensa',
    'Outcome': 'Resultado',

    // Save conflict
    'Save Out of Date': 'Partida desactualizada',
    'Your progress was saved from another tab or device. Refresh to load the latest save.':
      'Tu progreso se ha guardado desde otra pestaña u otro dispositivo. Recarga para cargar la última partida.',
    'Refresh Now': 'Recargar ahora',
    'A new update is available!': '¡Hay una actualización nueva!',

    // MVP results
    'Glorious Victory': 'Victoria gloriosa',
    'Victory': 'Victoria',
    'Defeat': 'Derrota',
    'Steady hands, sharp timing - the spoils are yours.': 'Pulso firme y ritmo preciso: el botín es tuyo.',
    'Accuracy': 'Precisión',
    'Best Combo': 'Mejor combo',
    'Contribution': 'Aportación',
    'Aloe Leaflet': 'Hoja de aloe',
    'Yggdrasil Berry': 'Baya de Yggdrasil',
    'Pyramid': 'Pirámide',

    // Special cards
    'Special Cards': 'Cartas especiales',
    'New': 'Nueva',
    'Scratch to reveal': 'Rasca para descubrirla',

    // MVP rhythm fight: phases, judgements and live feedback
    'Find the Beat': 'Encuentra el ritmo',
    'Double Time': 'Doble tiempo',
    'Finale': 'Final',
    'Faster! Doubles, and taps over holds': '¡Más rápido! Dobles y toques sobre notas largas',
    'Faster again! Roll the A-S-D stairs': '¡Aún más rápido! Haz la escalera A-S-D',
    'A S D or ← ↓ →': 'A S D o ← ↓ →',
    'hold long notes': 'mantén las notas largas',
    'HOLD': 'FIJA', // only 4 letters fit
    'Keep holding for bonus…': 'Mantén pulsado para el extra…',
    'Perfect': 'Perfecto',
    'Good': 'Bien',
    'Wrong': 'Error',
    'Wrong!': '¡Error!',
    'Great!': '¡Muy bien!',
    'Nice!': '¡Genial!',
    'Amazing!': '¡Increíble!',
    'Unstoppable!': '¡Imparable!',
    'Fever!': '¡Fiebre!',
    'Fever!!': '¡¡Fiebre!!',
    'Finish it!': '¡Acaba con él!',
    'Clear!': '¡Superado!',
    'Halfway!': '¡Mitad!',
    'RUSH! ×': '¡RUSH! ×',
    'Combo': 'Combo',
    'Best': 'Mejor',
    'BPM': 'BPM',
    'Performance': 'Rendimiento',
    'Party performance': 'Rendimiento del grupo',
    'Finishing party results...': 'Calculando los resultados del grupo...',
    'The Seas Reclaim Him': 'El mar lo reclama',
    'early': 'pronto',
    'late': 'tarde',
    'on-time': 'a tiempo',
    'dmg': 'daño',
    'rebuilding...': 'reconstruyendo...',
    'Connecting...': 'Conectando...',
    '% accuracy': '% de precisión',
    'the closer to flawless, the better your card odds': 'cuanto más cerca de la perfección, más probabilidades de carta',
    'MVP rhythm game. A or Left arrow for left, S or Down arrow for middle, D or Right arrow for right. Press a lane as its note crosses the line; keep holding long notes for bonus points.':
      'Juego de ritmo MVP. A o flecha izquierda para la izquierda, S o flecha abajo para el centro, D o flecha derecha para la derecha. Pulsa un carril cuando su nota cruce la línea; mantén pulsadas las notas largas para ganar puntos extra.',

    // Names that stay as they are (kept here so they don't show up in untranslated())
    'Chat': 'Chat',
    'Discord': 'Discord',
    'Wiki': 'Wiki',
    'RateMyServer': 'RateMyServer',
    'SpringRO': 'SpringRO',
    'Poring Clicker': 'Poring Clicker',
    'Zeny': 'Zeny',
    'zeny': 'zeny',
    'Collecting...': 'Recogiendo...',
    'Drake': 'Drake',
    'Hydra': 'Hydra',
    'Obeaune': 'Obeaune',
    'Vadon': 'Vadon',
    'Eddga': 'Eddga',
    'Orc Hero': 'Orc Hero',
    'Phreeoni': 'Phreeoni',
    'Shiny': 'Shiny',

    // MVP encounter: start, banners and boss lines
    'Start Encounter': 'Empezar combate',
    'Starting...': 'Empezando...',
    'Go!': '¡Ya!',
    'Full Combo!': '¡Combo completo!',
    'Copy invite link': 'Copiar enlace de invitación',
    'Orc Village': 'Aldea Orca',
    'Orc Hero Bellows A War Cry': 'Orc Hero lanza un grito de guerra',
    'Moonlight Dances Into Being': 'La luz de luna cobra vida danzando',
    'The Spell Unravels': 'El hechizo se deshace',
    'The Tyrant Is Felled': 'El tirano ha caído',
    'The Tiger Falls Silent': 'El tigre enmudece',
    'Eddga Stalks From The Tall Grass': 'Eddga acecha entre la hierba alta',
    'Baphomet Descends With Scythe Raised': 'Baphomet desciende con la guadaña en alto',
    'The Demon Is Banished': 'El demonio ha sido desterrado',
    'Osiris Rises From His Tomb': 'Osiris se alza de su tumba',
    'Drake Emerges From The Depths': 'Drake emerge de las profundidades',

    // Pet details: combat stats and skills
    'Combat stats': 'Estadísticas de combate',
    'Combat skills': 'Habilidades de combate',
    'Stat': 'Atributo',
    'WoE / Pet Arena': 'WoE / Arena',
    'PvP / WoE': 'PvP / WoE',
    'Attack': 'Ataque',
    'Max HP': 'PV máx.',
    'Defense': 'Defensa',
    'Speed': 'Velocidad',
    'Critical hit': 'Golpe crítico',
    'Dodge': 'Esquiva',
    'Block': 'Bloqueo',
    'All allies': 'Todos los aliados',
    'All enemies': 'Todos los enemigos',
    'One enemy': 'Un enemigo',
    'Lowest-HP ally': 'Aliado con menos PV',
    '· Cooldown:': '· Reutilización:',
    '· Level': '· Nivel',
    'None': 'Ninguna',
    'Attack up': 'Ataque aumentado',
    'Defense down': 'Defensa reducida',
    'Close pet details': 'Cerrar detalles de la mascota',
    'Merge': 'Fusionar',
    'No messages yet': 'Aún no hay mensajes',
    'Be the first to say hello!': '¡Sé el primero en saludar!',
    'Finishing party results. Please collect again in a moment.':
      'Calculando los resultados del grupo. Vuelve a recoger la recompensa en un momento.',
    'All Perfect!': '¡Todo perfecto!',
    'Flawless Victory': 'Victoria impecable',
    'The Pharaoh Returns To Rest': 'El faraón vuelve a descansar',
    'Osiris': 'Osiris',
    'Clicker': 'Clicker',
    'Clip': 'Clip',
    'DPS': 'DPS',
    'PvP/WoE': 'PvP/WoE',
    'PvP': 'PvP',
    'Dokebi': 'Dokebi',
    'Jellopy': 'Jellopy',
    'Lunatic': 'Lunatic',
    'Main Gauche': 'Main Gauche',
    'Marina': 'Marina',
    'Pecopeco': 'Pecopeco',
    'Poring': 'Poring',
    'Savage Babe': 'Savage Babe',
    'Slime': 'Slime',
    'Spore': 'Spore',
    'Yoyo': 'Yoyo',
    'Coral': 'Coral',
    'Eclipse': 'Eclipse',
    'Fabre': 'Fabre',
    'Elder Willow': 'Elder Willow',
    'Eddga Cub': 'Cachorro de Eddga',
    'Moonlight Kit': 'Cría de Moonlight',
    'Explosion Seed': 'Semilla explosiva',
    'Scroll to top': 'Volver arriba',

    // Account page
    'Account Details': 'Datos de la cuenta',
    'Security': 'Seguridad',
    'Email': 'Correo electrónico',
    'New Email': 'Correo nuevo',
    'Change Email': 'Cambiar correo',
    'Update Email': 'Actualizar correo',
    'Change Password': 'Cambiar contraseña',
    'Current Password': 'Contraseña actual',
    'New Password': 'Contraseña nueva',
    'Confirm Password': 'Confirmar contraseña',
    'Changing your password signs you out on every other device.':
      'Al cambiar la contraseña se cerrará la sesión en todos los demás dispositivos.',
    'Last IP': 'Última IP',
    'Last Login': 'Último inicio de sesión',
    'Logins': 'Inicios de sesión',
    'Member Since': 'Miembro desde',
    'Never': 'Nunca',
    'Status:': 'Estado:',
    'Linked': 'Vinculada',
    'Your account is linked to': 'Tu cuenta está vinculada a',
    'RetroAchievements': 'RetroAchievements',
    'Characters': 'Personajes',
    'No characters yet. Create one in-game to get started!':
      'Aún no tienes personajes. ¡Crea uno en el juego para empezar!',
    'Total Zeny': 'Zeny total',
    'The side game. Tap mobs, build a party, climb the arena. Tied to this account.':
      'El juego secundario. Toca monstruos, forma un grupo y escala en la arena. Vinculado a esta cuenta.',

    // Account storage
    'All': 'Todo',
    'All Storage': 'Todo el almacén',
    'Softcore Storage': 'Almacén softcore',
    'Hardcore Storage': 'Almacén hardcore',
    'Cart': 'Carro',
    'Item location': 'Ubicación del objeto',
    'Item type': 'Tipo de objeto',
    'Usable': 'Usables',
    'Healing': 'Curación',
    'Ammo': 'Munición',
    'Etc': 'Varios',
    'Petarmor': 'Armadura de mascota',
    'Petegg': 'Huevo de mascota',
    'Loading inventory...': 'Cargando inventario...',
    'No items found.': 'No se han encontrado objetos.',
    'Clear (': 'Limpiar (',
    'Gift Box': 'Caja de regalo',

    // Download page
    'Downloads': 'Descargas',
    'Download for Windows': 'Descargar para Windows',
    'SpringRO Full Client': 'Cliente completo de SpringRO',
    'Full client': 'Cliente completo',
    'Your launcher, game files, and updates. All in one place.':
      'Tu launcher, los archivos del juego y las actualizaciones. Todo en un mismo sitio.',
    'Quick Start': 'Inicio rápido',
    'From download to your first login.': 'De la descarga a tu primer inicio de sesión.',
    'Create an account': 'Crea una cuenta',
    'Register for free and verify your email.': 'Regístrate gratis y verifica tu correo.',
    'Install the client': 'Instala el cliente',
    'Run the installer. Choose a folder outside': 'Ejecuta el instalador. Elige una carpeta fuera de',
    'Launch & log in': 'Abre el juego e inicia sesión',
    'Open the launcher, let it finish patching, then log in and play.':
      'Abre el launcher, deja que termine de actualizarse, inicia sesión y a jugar.',
    'Link to RA': 'Vincular con RA',
    'Connect your RetroAchievements profile to sync achievements.':
      'Conecta tu perfil de RetroAchievements para sincronizar los logros.',
    'Optional': 'Opcional',
    'Need a hand?': '¿Necesitas ayuda?',
    'Ask us on Discord': 'Pregúntanos en Discord',
    'Windows system requirements': 'Requisitos del sistema para Windows',
    'Minimum': 'Mínimo',
    'Recommended': 'Recomendado',
    'Operating system': 'Sistema operativo',
    'OS:': 'SO:',
    'CPU:': 'CPU:',
    'GPU:': 'GPU:',
    'RAM:': 'RAM:',
    'Storage:': 'Almacenamiento:',
    'Network:': 'Red:',
    'Any dedicated GPU': 'Cualquier GPU dedicada',
    'Broadband connection': 'Conexión de banda ancha',
    'Windows': 'Windows',
    'Linux': 'Linux',
    'Linux setup ·': 'Instalación en Linux ·',

    // News page
    'News & Updates': 'Noticias y actualizaciones',
    'Patch notes, events, and announcements from the realm': 'Notas de parche, eventos y anuncios del reino',
    'Patch': 'Parche',
    'Update': 'Actualización',
    'Event': 'Evento',
    'Announcement': 'Anuncio',
    'Read full post': 'Leer la entrada completa',
    'All posts': 'Todas las entradas',
    'Share': 'Compartir',
    'Previous': 'Anterior',
    'Next': 'Siguiente',

    // Rules page
    'Server Rules': 'Normas del servidor',
    'General Conduct': 'Conducta general',
    'Botting & Cheating': 'Bots y trampas',
    'Accounts': 'Cuentas',
    'Trading & Economy': 'Comercio y economía',
    'Gameplay': 'Juego',
    'Chat & Naming': 'Chat y nombres',
    'Play fair, be respectful, and have fun. Breaking these rules may result in warnings, temporary bans, or permanent bans at GM discretion.':
      'Juega limpio, sé respetuoso y diviértete. Incumplir estas normas puede suponer avisos, baneos temporales o baneos permanentes, a criterio de los GM.',
    'Be respectful to all players and staff.': 'Respeta a todos los jugadores y al equipo.',
    'No harassment, hate speech, or discrimination of any kind.': 'Prohibido el acoso, el discurso de odio y cualquier tipo de discriminación.',
    'Do not impersonate GMs or other players.': 'No te hagas pasar por GM ni por otros jugadores.',
    'Scamming other players is strictly prohibited.': 'Está totalmente prohibido estafar a otros jugadores.',
    'No bots, macros, auto-clickers, or automation of any kind.': 'Prohibidos los bots, las macros, los autoclics y cualquier tipo de automatización.',
    'No third-party programs of any kind that provide unfair advantages.': 'Prohibido cualquier programa de terceros que dé ventajas injustas.',
    'No exploiting bugs or glitches. Please report them instead and potentially get rewarded for it.':
      'Prohibido aprovecharse de bugs o fallos. Repórtalos y podrías llevarte una recompensa.',
    'No client modifications or gameplay-affecting GRF replacements unless approved by a GM.':
      'Prohibido modificar el cliente o sustituir GRF que afecten al juego salvo con la aprobación de un GM.',
    'One account per player. No account sharing.': 'Una cuenta por jugador. Prohibido compartir cuentas.',
    'No multi-clienting. Dual-player household exception (siblings, partners): play independently - leeching or buff-botting between household accounts bans all of them.':
      'Prohibido usar varios clientes a la vez. Excepción para dos jugadores en el mismo hogar (hermanos, parejas): jugad por separado; aprovecharse de EXP ajena o hacer de bot de mejoras entre cuentas del mismo hogar supone el baneo de todas ellas.',
    'You are responsible for your account\'s security. Stolen items are not recoverable.':
      'Eres responsable de la seguridad de tu cuenta. Los objetos robados no se recuperan.',
    'GMs will never ask for your password! Anyone who does is scamming you.':
      '¡Los GM nunca te pedirán tu contraseña! Quien lo haga te está estafando.',
    'No real-money trading (RMT) of items, zeny, or accounts. Vectors include trades, drops, mail, and vending. Off-value trades will be traced.':
      'Prohibido comerciar con dinero real (RMT) con objetos, zeny o cuentas, ya sea mediante intercambios, objetos tirados al suelo, correo o puestos de venta. Se rastrearán los intercambios con valores fuera de lo normal.',
    'Vending: no false shop titles, no buy-stores below NPC sell value, no stacking on others\' vendor cells. Do unto others as you would have them do unto you.':
      'Puestos de venta: nada de títulos engañosos, ni tiendas de compra por debajo del precio de venta al NPC, ni ponerte en la casilla de otro vendedor. Trata a los demás como quieras que te traten a ti.',
    'No kill-stealing.': 'Prohibido robar bajas (KS).',
    'MVPs and MiniBosses are free-for-all. No tagging, no claiming.': 'Los MVP y minijefes son de todos. No se marcan ni se reclaman.',
    'No full-map pulling. Don\'t leave low-HP mobs sitting.': 'Prohibido arrastrar monstruos por todo el mapa. No dejes monstruos con pocos PV abandonados.',
    'No Ice Wall, Safety Wall, Land Protector, or buff-overwriting in others\' grind spots.':
      'Prohibido usar Muro de hielo, Muro de seguridad o Protector de tierra, o sobrescribir mejoras, en las zonas donde farmean otros.',
    'Don\'t block town portals or exits with skills.': 'No bloquees con habilidades los portales ni las salidas de las ciudades.',
    'Keep public chat civil and appropriate.': 'Mantén el chat público educado y adecuado.',
    'No spam, all-caps walls, or repeated messages in public channels.': 'Prohibido el spam, los muros en mayúsculas y los mensajes repetidos en los canales públicos.',
    'Trade messages belong in trade chat only.': 'Los mensajes de comercio, solo en el chat de comercio.',
    'No offensive, impersonating, or unreadable character/guild names.': 'Prohibidos los nombres de personaje o de clan ofensivos, ilegibles o que suplanten a otros.',
    'No promoting or recruiting for other servers.': 'Prohibido promocionar otros servidores o reclutar para ellos.',
    'Rules are subject to change - check back regularly. Questions?': 'Las normas pueden cambiar: vuelve a consultarlas de vez en cuando. ¿Dudas?',
    'Ask on Discord': 'Pregunta en Discord',

    // Transparency page
    'Server Transparency': 'Transparencia del servidor',
    'Card drops, GM commands and the server economy.': 'Cartas conseguidas, comandos de GM y economía del servidor.',
    'Recent Card Drops': 'Cartas conseguidas recientemente',
    'Card Drops': 'Cartas conseguidas',
    'Monster': 'Monstruo',
    'Time': 'Hora',
    'The latest cards found by players.': 'Las últimas cartas encontradas por los jugadores.',
    'found': 'encontró',
    'from': 'de',
    'in': 'en',
    'MVP Card Census': 'Censo de cartas MVP',
    'MVP cards in existence': 'Cartas MVP existentes',
    'No MVP cards exist yet': 'Todavía no hay cartas MVP',
    'None have dropped on this server.': 'Aún no ha caído ninguna en este servidor.',
    'GM commands & economy': 'Comandos de GM y economía',
    'GM command log': 'Registro de comandos de GM',
    'Browse the command log': 'Ver el registro de comandos',
    'Open economy tracker': 'Abrir el seguimiento de la economía',
    'Net zeny flow is zeny created minus zeny removed, server-wide.':
      'El flujo neto de zeny es el zeny creado menos el eliminado en todo el servidor.',
    'Item creation': 'Creación de objetos',
    'Item removal': 'Eliminación de objetos',
    'Zeny adjustment': 'Ajuste de zeny',
    'Currency': 'Moneda',
    'Box Contents': 'Contenido de las cajas',
    'Old Blue Box': 'Caja azul antigua',
    'Old Purple Box': 'Caja morada antigua',
    'Old Card Album': 'Álbum de cartas antiguo',
    'Damascus': 'Damascus',
    'Mandragora': 'Mandragora',
    'Martin': 'Martin',
    'Thief Bug': 'Thief Bug',
    'Thief Bug Larva': 'Thief Bug Larva',
    "What's Public, What Isn't": 'Qué es público y qué no',
    'Card drops, including who found them and where.': 'Cartas conseguidas, con quién las encontró y dónde.',
    'Box contents and drop chances.': 'Contenido de las cajas y probabilidades de botín.',
    'Full loot tables with the exact chance of each item.': 'Tablas de botín completas con la probabilidad exacta de cada objeto.',
    'Server-wide zeny flow, trade totals and vending sales.':
      'Flujo de zeny de todo el servidor, totales de intercambios y ventas en puestos.',
    'Item and currency changes, player adjustments, bans and jails.':
      'Cambios de objetos y moneda, ajustes a jugadores, baneos y encarcelamientos.',
    'GM item and currency changes, and adjustments to other characters\' progression.':
      'Cambios de objetos y moneda hechos por GM, y ajustes en la progresión de otros personajes.',
    'GM characters\' own progression changes.': 'Cambios en la progresión de los propios personajes de los GM.',
    'GM movement, inspections and investigations.': 'Movimientos, inspecciones e investigaciones de los GM.',
    'Bans, jails and their reversals.': 'Baneos, encarcelamientos y su revocación.',
    'Live player locations. Map activity is delayed.':
      'Ubicación de los jugadores en directo. La actividad de los mapas va con retraso.',
    'Individual trade histories and zeny logs.': 'Historiales de intercambio individuales y registros de zeny.',
    'Players\' equipped gear, inventories, carts and storage.':
      'El equipo, los inventarios, los carros y los almacenes de los jugadores.',
    'Loose cards and cards slotted into equipment, across characters, carts, storage and market stalls.':
      'Cartas sueltas e insertadas en equipo, en personajes, carros, almacenes y puestos del mercado.',
    'Item totals and refine counts on each': 'Totales de objetos y número de refinados en la',
    'item page': 'página de cada objeto',
    'Questions about any of this?': '¿Dudas sobre todo esto?',

    // Support page
    'Support Tickets': 'Tickets de soporte',
    'Need help? Open a ticket and we\'ll get back to you.': '¿Necesitas ayuda? Abre un ticket y te responderemos.',
    'New Ticket': 'Nuevo ticket',
    'No tickets yet.': 'Aún no tienes tickets.',
    'Create Ticket': 'Crear ticket',
    'Subject': 'Asunto',
    'Message': 'Mensaje',
    'Submit': 'Enviar',

    // GM command log (/transparency/gm-log)
    'Breadcrumb': 'Ruta de navegación',
    'Log entries': 'Entradas del registro',
    'Filter changes by type': 'Filtrar cambios por tipo',
    'Progression': 'Progresión',
    'Bans & jails': 'Baneos y encarcelamientos',
    'Refresh': 'Actualizar',
    'Refreshing…': 'Actualizando…',
    'Refreshing...': 'Actualizando...',
    'Entries': 'Entradas',
    'No entries in this category': 'No hay entradas en esta categoría',
    'View all entries': 'Ver todas las entradas',
    'Newest first': 'Más recientes primero',
    'UTC': 'UTC',
    'Account ban requested': 'Baneo de cuenta solicitado',
    'Jail placement': 'Encarcelamiento',
    'Jail release': 'Liberación de la cárcel',
    'Command': 'Comando',
    'Character:': 'Personaje:',
    'GM character': 'Personaje GM',
    'GM': 'GM',
    'Entry': 'Entrada',
    'Details': 'Detalles',
    'for': 'de',
    ', entry': ', entrada',
    'For questions about an entry,': 'Si tienes dudas sobre una entrada,',
    'contact support': 'contacta con soporte',
    'and include its number.': 'e indica su número.',
    'Bible': 'Biblia',
    'Drainliar': 'Drainliar',

    // Economy tracker (/transparency/economy)
    'Economy Tracker': 'Seguimiento de la economía',
    'All significant economic activity is tracked publicly.': 'Toda la actividad económica relevante se registra de forma pública.',
    'Zeny Summary': 'Resumen de zeny',
    'Vending': 'Ventas en puestos',
    'vending': 'ventas en puestos',
    'Trade': 'Intercambio',
    'trade': 'intercambios',
    'Admin': 'Admin',
    'NPC Shop': 'Tienda NPC',
    'NPC Script': 'Script de NPC',
    'Expense': 'Gasto',
    'Date': 'Fecha',
    'Type': 'Tipo',
    'Transactions': 'Transacciones',
    'Gained': 'Ganado',
    'Spent': 'Gastado',
    'Net': 'Neto',
    'Choose your Linux package': 'Elige tu paquete para Linux',
    'SpringRO Linux Launcher': 'Launcher de SpringRO para Linux',
    'Portable launcher': 'Launcher portable',
    'Arch, Debian / Ubuntu, Fedora': 'Arch, Debian / Ubuntu, Fedora',
    'Debian / Ubuntu': 'Debian / Ubuntu',
    'On Debian / Ubuntu, install the package:': 'En Debian / Ubuntu, instala el paquete:',
    'Then open SpringRO from your applications menu.': 'Después abre SpringRO desde el menú de aplicaciones.',
    'These commands assume you saved the file in': 'Estos comandos dan por hecho que guardaste el archivo en',
    '. If you saved it elsewhere, use that path instead.': '. Si lo guardaste en otro sitio, usa esa ruta.',
    'Get the launcher, then let it download and patch the game.':
      'Descarga el launcher y deja que descargue y actualice el juego.',
    'Follow Linux setup above, then run the launcher to get the game files.':
      'Sigue la instalación para Linux de arriba y luego abre el launcher para descargar los archivos del juego.',
    // Pieces of "+1 DPS (60s)" when the game splits it oddly: nothing to translate
    'DPS (': 'DPS (',
    's)': 's)',
    'Baphomet': 'Baphomet',
    'Glast Heim': 'Glast Heim',
    'Leaving...': 'Saliendo...',
    'Live': 'En directo',
    'Angeling': 'Angeling',
    'Argos': 'Argos',
    'Choco': 'Choco',
    'Dark Blade': 'Dark Blade',
    'Deviruchi': 'Deviruchi',
    'Ghostring': 'Ghostring',
    'Goblin Leader': 'Goblin Leader',
    'Goblin Archer': 'Goblin Archer',
    'Flora': 'Flora',
    'Golden Bug': 'Golden Bug',
    'Savage': 'Savage',
    'Swordfish': 'Swordfish',
    'Zealotus': 'Zealotus',
    'Creamy': 'Creamy',
    'Hornet': 'Hornet',
    'Marionette': 'Marionette',
    'Poporing': 'Poporing',
    'Rocker': 'Rocker',
    'Roda Frog': 'Roda Frog',
    'Smokie': 'Smokie',
    'Vocal': 'Vocal',
    'Bigfoot': 'Bigfoot',
    'Goblin': 'Goblin',
    'Nightmare': 'Nightmare',
    'Marc': 'Marc',
    'EXP': 'EXP',
    'Guild': 'Clan',
    'Members': 'Miembros',
    'Total Kills': 'Bajas totales',
    'Muka': 'Muka',
    'Nine Tail': 'Nine Tail',
    'Scorpion': 'Scorpion',
    'Moonlight Flower': 'Moonlight Flower',
    'Marin': 'Marin',
    'Gladius': 'Gladius',
    'Drops': 'Drops', // the monster; the loot header is handled by isLootHeader()
    'Prontera Field': 'Campo de Prontera',
    'Defeat all standard mobs in this zone first to challenge the boss':
      'Elimina primero a todos los monstruos normales de esta zona para desafiar al jefe',
    'Timing offset cleared.': 'Desfase borrado.',
    'ATK': 'ATQ',
    'Champion Crowns': 'Coronas de campeón',
    'Lifetime Damage': 'Daño acumulado',
    'Lifetime Kills': 'Bajas acumuladas',
    'Pets (': 'Mascotas (',
    'Slotted Cards': 'Cartas insertadas',
    'This will cost': 'Esto costará',
    'auto clicker': 'autoclic',
    'vault': 'bóveda',

    // Misc screens
    'Adventurer': 'Aventurero',
    'Mastering': 'Mastering', // RO mini-boss Poring, not the verb
    'Poring Power': 'Poder Poring',
    'Max (': 'Máx. (',
    'YouTube video player': 'Reproductor de vídeo de YouTube',
    'Checking stamina…': 'Comprobando energía…',
    'Out of Stamina': 'Sin energía',
    'MVP Stamina loading. Checking stamina…': 'Cargando energía MVP. Comprobando energía…',
    'New party or guild messages': 'Mensajes nuevos del grupo o del clan',
    'Party only': 'Solo grupo',
    'Message your party...': 'Escribe a tu grupo...',
    'The boss never stood a chance against your rhythm.': 'El jefe no tenía nada que hacer contra tu ritmo.',
    'Collect Rewards': 'Recoger recompensas',
    'Defeated': 'Derrotado',
    'Ready:': 'Listos:',
    'Ready Up': 'Estoy listo',
    'Cancel Ready': 'Ya no estoy listo',
    'Stamina': 'Energía',
    'Timing': 'Desfase',
    'Calibrate': 'Calibrar',
    'Notes feel early or late (e.g. on Bluetooth headphones)? Calibrate by tapping along to a few clicks.':
      '¿Las notas van adelantadas o retrasadas (p. ej., con auriculares Bluetooth)? Calibra pulsando al ritmo de unos cuantos clics.',
    'Turn sound effects on to calibrate.': 'Activa los efectos de sonido para calibrar.',
    'Not enough taps landed on the clicks. Try again.': 'No has acertado suficientes clics. Inténtalo de nuevo.',
    'Tap A / S / D, an arrow key or Space, or here, on every click you hear':
      'Pulsa A / S / D, una flecha o Espacio, o aquí, con cada clic que oigas',

    // Kafra upgrades
    'Upgrade': 'Mejorar',
    "% of last prestige's zeny as starting zeny": '% del zeny del último prestigio como zeny inicial',

    // Zones
    'Geffen Outskirts': 'Afueras de Geffen',
    'Payon Forest': 'Bosque de Payon',
    'Payon Cave': 'Cueva de Payon',
    'Payon Cave dungeon': 'Mazmorra de la Cueva de Payon',
    'Prontera North': 'Prontera Norte',
    'Prontera South': 'Prontera Sur',
    'Sograt Desert': 'Desierto de Sograt',
    'Imp Zone': 'Zona Imp',
    'Meadows': 'Praderas',
    'Old Home': 'Antiguo hogar',
    "Master's Realm": 'Reino del Maestro',
    'Poring Paradise': 'Paraíso Poring',
    'Byalan Island': 'Isla Byalan',
    'Clock Tower': 'Torre del Reloj',
    'Toy Factory': 'Fábrica de Juguetes',
    'Cursed Abbey': 'Abadía Maldita',

    // Common messages & actions
    'No items yet. Kill some monsters!': 'Aún no tienes objetos. ¡Elimina algunos monstruos!',
    'Refine': 'Refinar',
    'Equip': 'Equipar',
    'Unequip': 'Desequipar',
    'Equipped': 'Equipado',
    'Sell': 'Vender',
    'Sell All': 'Vender todo',
    'Sell:': 'Venta:',
    'Use:': 'Uso:',
    'Pet Food:': 'Comida de mascota:',
    'Refine:': 'Refinado:',
    'Quantity:': 'Cantidad:',
    'z each': 'z cada uno',
    'each': 'cada uno',
    'Discard': 'Descartar',
    'Discard All': 'Descartar todo',
    'Buy': 'Comprar',
    'Use': 'Usar',
    'Close': 'Cerrar',
    'Cancel': 'Cancelar',
    'Confirm': 'Confirmar',
    'Confirm Purchase': 'Confirmar compra',
    'Save': 'Guardar',
    'Reset': 'Reiniciar',
    'Locked': 'Bloqueado',
    'Unlocked': 'Desbloqueado',
    'Completed': 'Completado',
    'Success': 'Éxito',
    'Failed': 'Fallido',
    'MAX': 'MÁX.',
    '(MAX)': '(MÁX.)',
    '(max': '(máx.',
    '(cd:': '(reutil.:',
    '% WR': '% de victorias',
    'ELO': 'ELO',
    // PvP record "205W 84L" arrives split: the letters come as their own nodes
    'W': 'V',
    'L': 'D',
    // Rhythm accuracy "133P 12G 6M" (Perfect / Good / Miss → Perfecto / Bien / Fallo)
    'G': 'B',
    'M': 'F',
    'Refine succeeded!': '¡Refinado con éxito!',
    'Refine failed!': '¡El refinado ha fallado!',
    'Critical!': '¡Crítico!',
    'Critical': 'Crítico',
    'Miss': 'Fallo',
    'Boss': 'Jefe',
    'MVP': 'MVP',
    'Drop': 'Botín',
    'Drops!': '¡Botín!', // loot notice; plain "Drops" is the monster and stays as-is
    'Weapon': 'Arma',
    'Armor': 'Armadura',
    'Shield': 'Escudo',
    'Garment': 'Capa',
    'Footgear': 'Calzado',
    'Accessory': 'Accesorio',
    'Headgear': 'Casco',
    'Card': 'Carta',
    'Rarity': 'Rareza',
    'Common': 'Común',
    'Uncommon': 'Poco común',
    'Rare': 'Raro',
    'Epic': 'Épico',
    'Legendary': 'Legendario',
    'Element': 'Elemento',
    'Neutral': 'Neutro',
    'Water': 'Agua',
    'water': 'agua',
    'Earth': 'Tierra',
    'earth': 'tierra',
    'Fire': 'Fuego',
    'fire': 'fuego',
    'Wind': 'Viento',
    'wind': 'viento',
    'Poison': 'Veneno',
    'Holy': 'Sagrado',
    'Shadow': 'Sombra',
    'shadow': 'sombra',
    'holy': 'sagrado',
    'neutral': 'neutro',
    'ghost': 'fantasma',
    'undead': 'no muerto',
    'Ghost': 'Fantasma',
    'Undead': 'No muerto',
    'Size': 'Tamaño',
    'Small': 'Pequeño',
    'Medium': 'Mediano',
    'Large': 'Grande',
    'Race': 'Raza',
    'Formless': 'Amorfo',
    'Brute': 'Bestia',
    'Beast': 'Bestia',
    'Plant': 'Planta',
    'plant': 'planta',
    'Insect': 'Insecto',
    'Fish': 'Pez',
    'Aquatic': 'Acuático',
    'Avian': 'Aviar',
    'Monkey': 'Mono',
    'buff': 'mejora',
    'Demon': 'Demonio',
    'Demi-Human': 'Semihumano',
    'Angel': 'Ángel',
    'Dragon': 'Dragón',
    'Rank': 'Puesto',
    'Player': 'Jugador',
    'Score': 'Puntuación',
    'You': 'Tú',
    'Unknown': 'Desconocido',
  };

  // ---------------------------------------------------------------------------
  // 2. PATTERN RULES (regex) for strings containing numbers or names
  //    The replacement can be a string ($1, $2...) or a function.
  //    A function may return null to let the next rule try.
  // ---------------------------------------------------------------------------
  const bajas = (n) => `${n} ${n === '1' ? 'baja' : 'bajas'}`;
  const tr = (text) => translateCore(text) ?? text;

  // Terms used in "+5% Crit", "+1% drops, +0.5% zeny"...
  const BONUS = {
    'all damage': 'todo el daño',
    'all dmg': 'todo el daño',
    'all dmg & buff duration': 'todo el daño y duración de mejoras',
    'auto dps': 'DPS automático',
    'buff duration': 'duración de mejoras',
    'burn': 'quemadura',
    'click damage': 'daño por clic',
    'click dmg': 'daño por clic',
    'crit': 'crítico',
    'damage': 'daño',
    'crit chance': 'prob. de crítico',
    'crit rate': 'prob. de crítico',
    'discount': 'descuento',
    'dmg': 'daño',
    'double click': 'doble clic',
    'double click chance': 'prob. de doble clic',
    'dps': 'DPS',
    'exp/zeny': 'EXP/Zeny',
    'drop': 'botín',
    'drop rate': 'prob. de botín',
    'exp': 'EXP',
    'refine success': 'éxito de refinado',
    'drops': 'botín',
    'pet dps': 'DPS de mascotas',
    'atk': 'ATQ',
    'mvp raid damage': 'daño en incursiones MVP',
    'pet arena coins': 'monedas de la Arena',
    'guild exp': 'EXP de clan',
    'zeny drop': 'zeny obtenido',
    'pet': 'mascotas',
    'poison': 'veneno',
    'purchase costs': 'coste de las compras',
    'pvp/woe hp': 'PV en PvP/WoE',
    'sell price': 'precio de venta',
    'shiny chance': 'prob. de shiny',
    'stun': 'aturdimiento',
    'weaken': 'debilitamiento',
    'weapon atk': 'ATQ de arma',
    'world boss dmg': 'daño a jefes mundiales',
    'zeny': 'zeny',
    'zeny from all sources': 'zeny de todas las fuentes',
    'status proc': 'prob. de estado alterado',
    'poison dot': 'daño de veneno continuo',
  };

  const ENCHANT_STATS = {
    'ATK%': 'ATQ',
    'Boss Dmg%': 'daño a jefes',
    'Dbl Click%': 'doble clic',
  };
  // "Poring (enemy)", "p2_pet0, Lunatic (ally)": monster names stay, sides are translated
  const arenaUnits = (text) => text.split(', ').map((unit) => {
    const m = unit.match(/^(.+) \((ally|enemy)\)$/);
    return m ? `${tr(m[1])} (${m[2] === 'ally' ? 'aliado' : 'enemigo'})` : tr(unit);
  }).join(', ');
  const ARENA_STATUS = {
    ATK_UP: 'ATQ ↑', ATK_DOWN: 'ATQ ↓', DEF_UP: 'DEF ↑', DEF_DOWN: 'DEF ↓',
    STUN: 'aturdimiento', POISON: 'veneno', BURN: 'quemadura', SLEEP: 'sueño',
  };
  const ARENA_TIERS = { Bronze: 'Bronce', Silver: 'Plata', Gold: 'Oro', Platinum: 'Platino', Diamond: 'Diamante' };

  const BANNER = { HP: 'PV', Drops: 'Botín', 'Guaranteed Drop': 'Botín garantizado' };

  const SERVERS = { login: 'Inicio de sesión', character: 'Personajes', map: 'Mapa' };

  const RULES = [
    // Kill counters
    [/^([\d.,]+) kills? remaining$/i, (_, n) => `${n === '1' ? 'Queda' : 'Quedan'} ${bajas(n)}`],
    [/^([\d.,]+) (.+) kills remaining$/i, (_, n, mob) => `${n} ${tr(mob)} por eliminar`],
    [/^([\d.,]+) kills? \| HP: (.+)$/i, (_, n, hp) => `${bajas(n)} | PV: ${hp}`],
    [/^([\d.,]+) kills?$/i, (_, n) => bajas(n)],
    [/^([\d.,]+) kills?!$/i, (_, n) => `¡${bajas(n)}!`],
    // Kill milestones: "350 kills! Bonus zeny!", "400 kills! Bonus item!"
    [/^([\d.,]+) kills?! (.+!)$/i, (_, n, reward) => {
      const t = translateCore(reward);
      return t == null ? null : `¡${bajas(n)}! ${t}`;
    }],
    [/^([\d.,]+) lifetime kills across all prestiges$/i, '$1 bajas en total entre todos los prestigios'],
    [/^([\d.,]+) lifetime kills$/i, '$1 bajas en total'],
    [/^(\S+) kills$/, 'Bajas de $1'],

    // Goals & achievements
    // "Kill" is always "Elimina", to match "bajas" / "por eliminar"
    [/^Complete ([\d.,]+) expeditions$/i, 'Completa $1 expediciones'],
    [/^Kill (.+?) ([\d.,]+) times$/i, (_, mob, n) => `Elimina a ${tr(mob)} ${n} veces`],
    [/^Kill all ([\d.,]+) base zone bosses$/i, 'Elimina a los $1 jefes de zona base'],
    [/^Kill all ([\d.,]+) prestige zone bosses$/i, 'Elimina a los $1 jefes de zona de prestigio'],
    [/^Kill all ([\d.,]+) zone bosses \(base \+ prestige\)$/i, 'Elimina a los $1 jefes de zona (base + prestigio)'],
    [/^Kill ([\d.,]+) (.+)$/i, (_, n, mob) => `Elimina a ${n} ${tr(mob)}`],
    [/^Kill (.+)$/i, (_, mob) => `Elimina a ${tr(mob)}`],
    [/^Requirement: (.+)$/i, (_, x) => {
      const t = tr(x);
      return `Requisito: ${t.charAt(0).toLowerCase()}${t.slice(1)}`;
    }],
    [/^Slay ([\d.,]+) monsters$/i, 'Elimina a $1 monstruos'],
    [/^Max (.+) to job level ([\d.,]+)$/i, (_, cls, n) => `Lleva la clase ${tr(cls)} al nivel de oficio ${n}`],
    [/^Max all ([\d.,]+) job classes to level ([\d.,]+)$/i, 'Lleva las $1 clases al nivel de oficio $2'],
    [/^Max any skill to level ([\d.,]+)$/i, 'Sube cualquier habilidad al nivel $1'],
    [/^Master (Swordsman|Mage|Archer|Acolyte|Merchant|Thief)$/, (_, cls) => `Maestro ${tr(cls).toLowerCase()}`],
    [/^Reach job level ([\d.,]+)$/i, 'Alcanza el nivel de oficio $1'],
    [/^Reach prestige ([\d.,]+)$/i, 'Alcanza el prestigio $1'],
    [/^Master all ([\d.,]+) base zones$/i, 'Domina las $1 zonas base'],
    [/^Master all ([\d.,]+) zones \(including prestige zones\)$/i, 'Domina las $1 zonas (incluidas las de prestigio)'],
    [/^Master your first zone \(([\d.,]+) kills on every mob\)$/i, 'Domina tu primera zona ($1 bajas de cada monstruo)'],
    [/^Master ([\d.,]+) zones$/i, 'Domina $1 zonas'],
    [/^Refine a weapon to \+([\d.,]+)$/i, 'Refina un arma a +$1'],
    [/^Own ([\d.,]+\+?) different equipment pieces$/i, 'Ten $1 piezas de equipo distintas'],
    [/^Own all ([\d.,]+) pets$/i, 'Consigue las $1 mascotas'],
    [/^Fill all ([\d.,]+) equipment slots$/i, 'Llena las $1 ranuras de equipo'],
    [/^Attempt ([\d.,]+) enchantments$/i, 'Intenta $1 encantamientos'],
    [/^Merge a card to Tier ([\d.,]+)$/i, 'Fusiona una carta hasta el rango $1'],
    [/^Perform ([\d.,]+) card merges$/i, 'Haz $1 fusiones de cartas'],
    [/^Evolve any pet to Tier ([\d.,]+)$/i, 'Evoluciona cualquier mascota al rango $1'],
    [/^Unlock all ([\d.,]+) WoE battle pets$/i, 'Desbloquea las $1 mascotas de batalla de WoE'],
    [/^Unlock ([\d.,]+) WoE battle pets$/i, 'Desbloquea $1 mascotas de batalla de WoE'],
    [/^Level any WoE battle pet to ([\d.,]+)$/i, 'Sube cualquier mascota de batalla de WoE al nivel $1'],
    [/^Level all ([\d.,]+) WoE battle pets to ([\d.,]+)$/i, 'Sube las $1 mascotas de batalla de WoE al nivel $2'],
    [/^Level ([\d.,]+) WoE battle pets to ([\d.,]+)$/i, 'Sube $1 mascotas de batalla de WoE al nivel $2'],
    [/^Participate in ([\d.,]+) MVP encounters$/i, 'Participa en $1 combates MVP'],
    [/^Be the MVP in ([\d.,]+) encounters$/i, 'Sé el MVP en $1 combates'],
    [/^Land ([\d.,]+) Perfect hits across MVP encounters$/i, 'Consigue $1 golpes perfectos en combates MVP'],
    [/^Reach a ([\d.,]+) combo in an MVP encounter$/i, 'Consigue un combo de $1 en un combate MVP'],
    [/^Hold ([\d.,]+z) at once$/i, 'Ten $1 a la vez'],
    [/^Hold ([\d.,]+) different item types$/i, 'Ten $1 tipos de objeto distintos'],
    [/^Earn ([\d.,]+) total zeny$/i, 'Gana $1 zeny en total'],
    [/^Have ([\d.,]+) total Kafra upgrade levels$/i, 'Ten $1 niveles de mejora Kafra en total'],
    [/^Allocate all ([\d.,]+) stat points$/i, 'Reparte los $1 puntos de atributo'],
    [/^Allocate ([\d.,]+) stat points$/i, 'Reparte $1 puntos de atributo'],
    [/^Unlock ([\d.,]+) name colors$/i, 'Desbloquea $1 colores de nombre'],
    [/^Become an? (.+)$/i, (_, cls) => `Hazte ${tr(cls)}`],
    [/^Unlock (.+?) \(Prestige ([\d.,]+)\)$/i, (_, zone, n) => `Desbloquea ${tr(zone)} (Prestigio ${n})`],
    [/^Unlock your first name colou?r$/i, 'Desbloquea tu primer color de nombre'],
    // Only when the rest translates too, so half-English text still shows up in untranslated()
    [/^Unlock (.+)$/i, (_, what) => {
      const t = translateCore(what);
      return t == null ? null : `Desbloquea ${t}`;
    }],
    [/^No (.+) in (?:the )?inventory$/i, (_, item) => `No tienes ${tr(item)} en el inventario`],
    [/^([\d.,]+)W ([\d.,]+)L$/, '$1V $2D'],
    [/^([\d.,]+ ?)ELO$/, '$1ELO'],
    [/^([\d.,]+)% WR$/, '$1% de victorias'],
    [/^([\d.,]+) streak$/i, 'racha de $1'],
    [/^Deal ([\d.,]+) lifetime damage$/i, 'Inflige $1 de daño en total'],
    [/^Deal ([\d.,]+) damage$/i, 'Inflige $1 de daño'],
    [/^Click ([\d.,]+) times?$/i, 'Haz clic $1 veces'],
    [/^Reach level ([\d.,]+)$/i, 'Alcanza el nivel $1'],
    [/^Collect ([\d.,]+) (.+)$/i, (_, n, x) => `Consigue ${n} ${tr(x)}`],
    [/^Earn ([\d.,]+) ?z(eny)?$/i, 'Gana $1 zeny'],
    [/^Achievements \((.+)\)$/i, 'Logros ($1)'],
    [/^Card Album \(([\d.,]+)\/([\d.,]+) collected\)$/i, 'Álbum de cartas ($1/$2 conseguidas)'],
    [/^· ([\d.,]+) streak$/i, '· racha de $1'],

    // Levels, prestige & unlocks
    [/^Unlocks at level ([\d.,]+)$/i, 'Se desbloquea en el nivel $1'],
    [/^Unlocks at Prestige ([\d.,]+)$/i, 'Se desbloquea en Prestigio $1'],
    [/^Requires level ([\d.,]+)$/i, 'Requiere nivel $1'],
    [/^Requires Lv\.\s*([\d.,]+)$/i, 'Requiere Nv. $1'],
    [/^Prestige ([\d.,]+)$/i, 'Prestigio $1'],
    [/^Level ([\d.,]+)$/i, 'Nivel $1'],
    [/^Lv\.\s*([\d.,]+)$/i, 'Nv. $1'],
    [/^Weapon Lv\.?\s*([\d.,/]+)$/i, 'Nv. de arma $1'],
    [/^Refine: (.+)$/i, (_, x) => `Refinado: ${tr(x)}`],
    [/^ATK ([\d.,]+)$/, 'ATQ $1'],
    [/^Level up!?$/i, '¡Subes de nivel!'],
    [/^Change job for (.+?)\. Your progress in each class is saved\.$/i,
      'Cambia de oficio por $1. Tu progreso en cada clase se guarda.'],

    // Refine, enchant & items
    [/^Success rate(?::\s*|\s+)(.+)$/i, 'Prob. de éxito: $1'],
    [/^Cost: ([\d.,]+) per fight$/i, 'Coste: $1 por combate'],
    [/^Cost(?::\s*|\s+)(.+)$/i, 'Coste: $1'],
    [/^Reroll slots \((.+?)\)\. Cost: (.+)$/i, 'Relanzar ranuras ($1). Coste: $2'],
    [/^Reroll \((.+)\)$/i, 'Relanzar ($1)'],
    [/^Quantity: (.+)$/i, 'Cantidad: $1'],
    // Zone banners: "5x EXP / Zeny / Drops!", "3x HP / EXP / Zeny - Guaranteed Drop!"
    [/^([\d.,]+x) (.+)!$/, (_, mult, rest) => '¡' + mult + ' ' + rest
      .split(' - ')
      .map((part) => part.split(' / ').map((w) => BANNER[w] ?? tr(w)).join(' / '))
      .join(' - ') + '!'],
    [/^Accessory ([\d]+)$/i, 'Accesorio $1'],
    [/^(.+) \(empty\)$/i, (_, slot) => tr(slot) + ' (sin equipar)'],
    [/^\+([\d.,]+) Success!$/i, '¡+$1 con éxito!'],
    [/^ATK: ([\d.,]+) base \+ ([\d.,]+) refine\s*= ?([\d.,]+)$/i, 'ATQ: $1 base + $2 refinado = $3'],
    [/^Equipment Drops \((.+)\)$/i, 'Botín de equipo ($1)'],
    [/^Members \((.+)\)$/i, 'Miembros ($1)'],
    [/^Characters \((.+)\)$/i, 'Personajes ($1)'],
    [/^Clear \((.+)\)$/i, 'Limpiar ($1)'],

    // Download page: sizes, versions and hardware
    [/^~?[\d.,]+ ?[GM]B$|^v[\d.]+$|^Windows [\d.]+(?: \/ [\d.]+)*$/, (m) => m],
    [/^([\d.,]+ ?[GM]B) free space( \(SSD\))?$/i, (_, size, ssd = '') => `${size} libres${ssd}`],
    [/^Any DirectX ([\d.]+) capable$/i, 'Cualquiera compatible con DirectX $1'],
    [/^Every ([\d.,]+ ?s), next click deals ([\d.,]+)x damage$/i, 'Cada $1, el siguiente clic hace $2x de daño'],
    [/^\.[A-Za-z]+$/, (m) => m], // file extensions: .deb, .AppImage, .bin

    // News page: relative times, reading time and dates (dd/mm/aaaa)
    [/^([\d.,]+) ?(m|min|h|d|w|mo|y) ago$/i, (_, n, u) => {
      const one = n === '1';
      const unit = { m: 'min', min: 'min', h: 'h', d: 'd', w: one ? 'semana' : 'semanas',
        mo: one ? 'mes' : 'meses', y: one ? 'año' : 'años' }[u.toLowerCase()];
      return `hace ${n} ${unit}`;
    }],
    [/^([\d.,]+) min read$/i, '$1 min de lectura'],

    // Rules page: numbered sections and the @noks rule
    [/^(\d+)\. (.+)$/, (_, n, title) => {
      const t = translateCore(title);
      return t == null ? null : `${n}. ${t}`;
    }],
    [/^locks a mob to you for ([\d.,]+ ?s) per hit\. Don't attack mobs others are training or chasing\.$/i,
      'te reserva el monstruo durante $1 por golpe. No ataques a monstruos que otros estén entrenando o persiguiendo.'],

    // Transparency page
    [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d{4})$/, (_, mon, day, year) => {
      const mm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(mon) + 1;
      return `${day.padStart(2, '0')}/${String(mm).padStart(2, '0')}/${year}`;
    }],
    [/^(·\s*)?\d{1,2}:\d{2} UTC$/, (m) => m],
    [/^[a-z]+_[a-z0-9_-]+$|^[a-z]+\d+$/, (m) => m], // map codes: gef_fild01, c_tower3, anthell01
    [/^(?=.*[A-Z])(?=.*\d)[A-Z0-9]{6,12}$/, (m) => m], // party codes: ABCD1234
    [/^The last ([\d.,]+) cards found on the server, newest first\.$/i,
      'Las últimas $1 cartas encontradas en el servidor, de la más reciente a la más antigua.'],
    [/^Net zeny flow \((.+)\)$/i, 'Flujo neto de zeny ($1)'],
    [/^Player trades \((.+)\)$/i, 'Intercambios entre jugadores ($1)'],
    [/^Vending sales \((.+)\)$/i, 'Ventas en puestos ($1)'],
    [/^See the last ([\d.,]+) drops$/i, 'Ver las últimas $1 cartas'],
    [/^Quantity requested: (.+)$/i, 'Cantidad solicitada: $1'],
    [/^Requested: (.+?) zeny$/i, 'Solicitado: $1 zeny'],
    [/^Requested time: (.+)$/i, 'Tiempo solicitado: $1'],
    [/^for (.+)$/, (_, what) => {
      const t = translateCore(what);
      return t == null ? null : `de ${t}`;
    }],
    [/^Showing ([\d.,]+)[–-]([\d.,]+) of ([\d.,]+) entries$/i, 'Mostrando $1–$2 de $3 entradas'],
    [/^No (.+) records found\.$/i, (_, type) => {
      const t = translateCore(type);
      return t == null ? null : `No hay registros de ${t}.`;
    }],
    // "Friday, October 16, 2026" -> "viernes, 16/10/2026"
    [/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (.+)$/, (_, wd, date) => {
      const t = translateCore(date);
      const es = { Monday: 'lunes', Tuesday: 'martes', Wednesday: 'miércoles', Thursday: 'jueves',
        Friday: 'viernes', Saturday: 'sábado', Sunday: 'domingo' }[wd];
      return t == null ? null : `${es}, ${t}`;
    }],
    [/^(January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2}), (\d{4})$/,
      (_, month, day, year) => {
        const mm = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'].indexOf(month) + 1;
        return `${day.padStart(2, '0')}/${String(mm).padStart(2, '0')}/${year}`;
      }],
    [/^Download (\.[A-Za-z]+)$/i, 'Descargar $1'],
    [/^(.+) or better$/i, '$1 o superior'],
    [/^(.+) or equivalent$/i, '$1 o equivalente'],
    [/^([\d.,]+) items?$/i, (_, n) => `${n} ${n === '1' ? 'objeto' : 'objetos'}`],
    [/^([\d.,]+)[–-]([\d.,]+) characters: English letters, numbers or symbols\. No spaces, other whitespace or double quotes\.$/i,
      '$1–$2 caracteres: letras del alfabeto inglés, números o símbolos. Sin espacios de ningún tipo ni comillas dobles.'],
    [/^(.+): waiting$/, '$1: esperando'],
    [/^(.+) joined the party\.$/, '$1 se ha unido al grupo.'],
    [/^([\d.,]+) active$/i, (_, n) => `${n} ${n === '1' ? 'activo' : 'activos'}`],
    [/^(.+) left the party\.$/, '$1 ha salido del grupo.'],
    [/^(.+) was removed from the party\.$/, '$1 ha sido expulsado del grupo.'],

    // Pet details: skill lines ("Attack up 12% · 2 target turns", "Damage: 1.04× Attack"…)
    [/^· Tier ([\d.,]+)$/i, '· Rango $1'],
    [/^([\d.,]+) turns?$/i, (_, n) => `${n} ${n === '1' ? 'turno' : 'turnos'}`],
    [/^([\d.,]+) target turns?$/i, (_, n) => `${n} ${n === '1' ? 'turno' : 'turnos'} del objetivo`],
    [/^Attack up ([\d.,]+%)$/i, 'Ataque +$1'],
    [/^Defense down ([\d.,]+%)$/i, 'Defensa -$1'],
    [/^Damage: ([\d.,]+×) Attack$/i, 'Daño: $1 ataque'],
    [/^Shield: ([\d.,]+×) Attack$/i, 'Escudo: $1 ataque'],
    [/^Heal: ([\d.,]+%) max HP$/i, 'Curación: $1 de los PV máx.'],
    [/^Pet Arena cooldown: (.+)$/i, (_, cd) => `Reutilización en la Arena: ${tr(cd).toLowerCase()}`],
    [/^Pet details: (.+)$/i, (_, pet) => `Detalles de la mascota: ${tr(pet)}`],
    [/^(.+) details$/, (_, pet) => {
      const t = translateCore(pet);
      return t == null ? null : `Detalles de ${t}`;
    }],
    [/^Upgrade to (.+)$/i, 'Mejorar a $1'],
    [/^Starts in (.+)$/i, 'Empieza en $1'],
    [/^(.+) bonus active$/i, (_, cls) => {
      const t = translateCore(cls);
      return t == null ? null : `Bonificación de ${t.toLowerCase()} activa`;
    }],
    [/^(━\s*)MVP RAID(\s*━)$/, '$1INCURSIÓN MVP$2'],
    // Completed achievement: "Evolve any pet to Tier 2 - Claim 3000z reward!"
    [/^(.+) - Claim (.+?) reward!$/i, (_, goal, amount) => {
      const t = translateCore(goal);
      return t == null ? null : `${t} - ¡Reclama ${amount} de recompensa!`;
    }],
    [/^([\d.,]+\/[\d.,]+) kills to discover$/i, '$1 bajas para descubrirlo'],
    [/^MVP RAID - (.+) appears!$/, (_, boss) => `INCURSIÓN MVP - ¡Aparece ${tr(boss)}!`],
    [/^Ready: (.+?) \(need ([\d.,]+)\+\)$/i, 'Listos: $1 (mín. $2)'],
    [/^([\d.,]+%) perfect$/i, '$1 perfectos'],
    [/^([\d.,]+) cards?$/i, (_, n) => `${n} ${n === '1' ? 'carta' : 'cartas'}`],
    [/^(✓\s*)?You're ready$/i, (_, check = '') => `${check}Estás listo`],
    [/^Waiting for ([\d.,]+) more$/i, (_, n) => `${n === '1' ? 'Falta' : 'Faltan'} ${n} más`],
    [/^([\d.,]+) pts$/i, '$1 ptos.'],
    [/^\+([\d.,]+) (.+) Card!$/, (_, n, name) => `¡+${n} Carta de ${name}!`],
    [/^Card chance ([\d.,]+%)$/i, 'Prob. de carta $1'],
    [/^performance ([\d.,]+%)$/i, 'rendimiento $1'],
    // Perfect / Good / Miss → Perfecto / Bien / Fallo
    [/^([\d.,]+)P ([\d.,]+)G ([\d.,]+)M$/, '$1P $2B $3F'],
    [/^Costs ([\d.,]+) stamina per ready member\. Any ready player can start\.$/i,
      'Cuesta $1 de energía por cada miembro listo. Cualquier jugador listo puede empezar.'],
    [/^MVP Raid - (.+) appears!$/i, (_, boss) => `Incursión MVP - ¡Aparece ${tr(boss)}!`],
    [/^([\d.,]+) taps?(\.?)$/i, (_, n, dot) => `${n} ${n === '1' ? 'pulsación' : 'pulsaciones'}${dot}`],
    [/^(.+?)\s*\(Leader\)$/, (m, name) => m.replace('(Leader)', '(Líder)')],
    [/^([\d.,]+%) to clear$/i, '$1 para superarlo'],
    [/^cycle ([\d.,]+)$/i, (m, n) => `${m[0] === 'C' ? 'Ciclo' : 'ciclo'} ${n}`],
    // Texts with numbers the game may change: keep the numbers as variables
    [/^Stat and skill resets share a cost that doubles each time, up to ([\d.,]+z)\. Resets to ([\d.,]+z) on prestige\.$/i,
      'Los reinicios de atributos y habilidades comparten un coste que se duplica cada vez, hasta $1. Vuelve a $2 al hacer prestigio.'],
    [/^Accessory ([\d.,]+) Detail$/i, 'Detalle del accesorio $1'],
    [/^This will cost (.+)$/i, 'Esto costará $1'],
    [/^P([\d.,]+) Lv\.\s*([\d.,]+)$/, 'P$1 Nv. $2'],
    [/^P[\d.,]+$/, (m) => m], // prestige badge "P200"
    // Background video titles stay as they are
    [/^.+ \| Ragnarok Online .+ Tour$/, (m) => m],
    [/^This run: (.+)$/i, 'En esta partida: $1'],
    [/^Lv\.\s*([\d.,]+)\+$/i, 'Nv. $1+'],
    // Party member line: "Lv.31 Swordsman"
    [/^Lv\.(\s*)([\d.,]+) ([^+].*)$/, (_, sp, n, cls) => {
      const t = translateCore(cls);
      return t == null ? null : `Nv.${sp}${n} ${t}`;
    }],
    [/^Reach Lv\.\s*([\d.,]+) to access (.+)$/i, (_, lv, zone) => `Alcanza el Nv. ${lv} para acceder a ${tr(zone)}`],
    [/^Defeat (.+) first to unlock this mob in your current run$/i, (_, mob) =>
      `Elimina a ${tr(mob)} primero para desbloquear este monstruo en tu partida actual`],
    [/^Saved ([+\-]?[\d.,]+ ?ms)\. Notes now line up with what you hear\.$/i,
      'Guardado: $1. Ahora las notas coinciden con lo que oyes.'],
    [/^(\|\s*)(EXP|Zeny):$/, (m) => m],
    [/^Failure resets to \+([\d.,]+)!$/i, '¡Al fallar, vuelve a +$1!'],
    [/^Full Roster Tier ([\d.,]+)$/i, 'Plantilla completa rango $1'],
    [/^Roll the mythical Legendary enchantment \((~?[\d.,]+%)\)$/i, 'Consigue el mítico encantamiento legendario ($1)'],
    [/^Collect all cards and merge every one to Tier ([\d.,]+)$/i,
      'Consigue todas las cartas y fusiónalas todas hasta el rango $1'],
    [/^Merge your first card to Tier ([\d.,]+)$/i, 'Fusiona tu primera carta hasta el rango $1'],
    [/^All ([\d.,]+) pets evolved to Tier ([\d.,]+)( or beyond)? and max fed$/i, (_, n, tier, more) =>
      `Las ${n} mascotas evolucionadas al rango ${tier}${more ? ' o más' : ''} y bien alimentadas`],
    [/^Reach Lv\s*([\d.,]+), Job Lv\s*([\d.,]+), all stats allocated, and all slots equipped$/i,
      'Alcanza el Nv. $1 y el Nv. de oficio $2, reparte todos los atributos y llena todas las ranuras'],
    [/^Need ([\d.,]+)\+ party members\.$/i, 'Hacen falta $1 o más miembros en el grupo.'],
    [/^Checking Login \(([\d.,]+)\), Character \(([\d.,]+)\), and Map \(([\d.,]+)\)$/i,
      'Comprobando inicio de sesión ($1), personajes ($2) y mapa ($3)'],
    [/^([\d.,]+)-second rhythm fight\. Everyone plays the same notes\. Use A \/ S \/ D or the arrow keys \(← ↓ →\) for left \/ middle \/ right, or press the matching lane when notes cross the line\. Keep holding long notes for bonus points\. The notes get faster each phase: steady beats, quick doubles, then A-S-D stairs in the finale, and RUSH sections fall faster still for ×([\d.,]+) score\. Every hit damages the boss and perfects hit hardest; a miss or wrong lane breaks your combo and drains your meter\. Higher-tier bosses demand more perfects\. Keep your meter above ([\d.,]+) to claim rewards\.$/,
      'Combate de ritmo de $1 segundos. Todos tocan las mismas notas. Usa A / S / D o las flechas (← ↓ →) para izquierda / centro / derecha, o pulsa el carril correspondiente cuando las notas crucen la línea. Mantén pulsadas las notas largas para ganar puntos extra. Las notas se aceleran en cada fase: ritmos constantes, dobles rápidas y, en el final, escaleras A-S-D; las secciones RUSH caen aún más rápido y dan ×$2 de puntuación. Cada acierto daña al jefe y los perfectos golpean más fuerte; un fallo o un carril equivocado rompe tu combo y vacía tu medidor. Los jefes de más nivel exigen más perfectos. Mantén el medidor por encima de $3 para reclamar las recompensas.'],
    [/^Feed ([\d.,]+)x to reach Lv\.?\s*([\d.,]+)$/i, (_, n, lv) =>
      `Alimenta ${n} ${n === '1' ? 'vez' : 'veces'} para llegar al Nv. ${lv}`],
    // Enchant markers and stray brackets: nothing to translate
    [/^\[E\d*\]?$|^\(x$|^[kz]\)$/, (m) => m],
    [/^(Timing) ([+\-]?[\d.,]+ ?ms)$/i, (_, word, ms) =>
      `${word === word.toUpperCase() ? 'DESFASE' : 'Desfase'} ${ms}`],
    [/^MVP Stamina ([\d.,]+) of ([\d.,]+)(?:\. (.+))?$/i, (_, n, max, rest) =>
      `Energía MVP ${n} de ${max}` + (rest ? `. ${tr(rest)}` : '')],
    [/^\+([\d.,]+) in (.+)$/i, '+$1 en $2'],
    [/^([\d.,]+%) to S$/, '$1 para la S'],
    [/^([\d.,]+)% accuracy$/i, '$1% de precisión'],
    [/^Rank · (.+)$/, (_, x) => `Nota · ${tr(x)}`],
    [/^(.+): ([\d.,]+) combo, meter ([\d.,]+\/[\d.,]+)$/, '$1: combo de $2, medidor $3'],
    [/^Party member ([\d.,]+)$/i, 'Miembro del grupo $1'],
    [/^Phase ([\d.,]+) Bonus: (.+)$/i, 'Bonificación de la fase $1: $2'],
    [/^CHAIN ×([\d.,]+) \+([\d.,]+)$/, 'CADENA ×$1 +$2'],
    [/^([\d.,]+%) DOWN! \+([\d.,]+)$/, '¡$1 HECHO! +$2'],
    // Milestone bonus: "ALMOST THERE! +800", "HALFWAY! +500"
    [/^(.+!) \+([\d.,]+)$/, (_, x, n) => {
      const t = translateCore(x);
      return t == null ? null : `${t} +${n}`;
    }],
    [/^([+\-]?[\d.,]+)% of last prestige's zeny as starting zeny$/i,
      '$1% del zeny del último prestigio como zeny inicial'],
    [/^Next: (.+)$/i, (_, x) => {
      const t = translateCore(x);
      return t == null ? null : `Siguiente: ${t}`;
    }],
    [/^([\d.,]+\+?) unique jobs$/i, '$1 clases distintas'],
    // Pet DPS: "+24+12 DPS(+2 buff 58s)"
    [/^(.*)\(\+([\d.,]+) buff ([\d.,]+s?)\)$/i, '$1(+$2 mejora $3)'],
    [/^([\d.,]+) mobs?$/i, '$1 monst.'],
    // "(Boss)" and similar: translate what's inside the brackets
    [/^\((.+)\)$/, (_, x) => {
      const t = translateCore(x);
      return t == null ? null : `(${t})`;
    }],
    [/^Claim ([\d.,]+) rewards? in this category$/i, (_, n) =>
      `Reclamar ${n} ${n === '1' ? 'recompensa' : 'recompensas'} de esta categoría`],
    [/^Claim All Rewards \((.+)\)$/i, 'Reclamar todas las recompensas ($1)'],
    [/^Sell: (.+) each$/i, 'Venta: $1 cada uno'],
    [/^Sell All \((.+)\)$/i, 'Vender todo ($1)'],
    [/^Sell ([\d.,]+) \((.+)\)$/i, 'Vender $1 ($2)'],
    [/^Use: (.+?) \((.+)\)$/i, (_, x, d) => `Uso: ${tr(x)} (${d})`],
    [/^Pet Food: (.+?) \((.+)\)$/i, (_, x, d) => `Comida de mascota: ${tr(x)} (${d})`],
    [/^Active: (.+)$/i, (_, x) => 'Activo: ' + tr(x)],
    // Enchantment stats: "+Boss Dmg% 2%" → "+2% daño a jefes"
    [/^\+(.+?) ([\d.,]+%?)$/, (_, stat, n) => {
      const t = ENCHANT_STATS[stat];
      return t ? `+${n} ${t}` : null;
    }],
    [/^Enchant: (.+)$/i, (_, item) => `Encantar: ${tr(item)}`],
    [/^Enhance: (.+)$/i, (_, item) => `Mejorar: ${tr(item)}`],
    [/^(.+) Shard$/, 'Fragmento de $1'],
    [/^(.*?)Boss Card$/, '$1Carta de jefe'],
    // "Drops: Drake Card" is the card a boss drops, not a card of the Drops monster
    [/^Drops: (.+)$/, (_, x) => `Botín: ${tr(x)}`],
    [/^(.+) Card$/, 'Carta de $1'],
    [/^(\|\s*)?Owned: ([\d.,]+)$/i, (_, bar = '', n) => `${bar}Tienes: ${n}`],
    [/^(\|\s*)?Slotted: ([\d.,]+)$/i, (_, bar = '', n) => `${bar}Insertadas: ${n}`],
    [/^(\|\s*)?Available: ([\d.,]+)$/i, (_, bar = '', n) => `${bar}Disponibles: ${n}`],
    [/^(\|\s*)?(Owned|Slotted|Available):$/i, (_, bar = '', w) =>
      bar + { owned: 'Tienes:', slotted: 'Insertadas:', available: 'Disponibles:' }[w.toLowerCase()]],
    // Merge materials: "0/30 Fin + 0/20 Chrysalis" (split on " + ")
    [/^([\d.,]+\/[\d.,]+) (.+)$/, (_, count, item) => `${count} ${tr(item)}`],
    [/^(.+) x([\d.,]+)$/, (_, item, n) => `${tr(item)} x${n}`],
    [/^You got (.+?)!?$/i, (_, x) => `¡Has conseguido ${tr(x)}!`],
    [/^(.+?) dropped!?$/i, (_, x) => `¡Ha caído ${tr(x)}!`],

    // Pets & combat
    [/^ATK \+([\d.,]+)% for all allies$/i, 'ATQ +$1% para todos los aliados'],
    [/^Heal lowest HP ally for ([\d.,]+)% max HP(?: and \+([\d.,]+)% ATK)?$/i, (_, hp, atk) =>
      `Cura al aliado con menos PV un ${hp}% de sus PV máx.` + (atk ? ` y le da +${atk}% de ATQ` : '')],
    [/^Auto-attack interval: (.+)$/i, 'Intervalo de autoataque: $1'],
    [/^Auto-attacks for ([\d.,]+)% of your click damage every second$/i,
      'Autoataca cada segundo con el $1% de tu daño por clic'],
    [/^Elite Mobs \((.+?) chance\)$/i, 'Monstruos élite ($1 de prob.)'],
    [/^Pets \((.+) DPS\)$/i, 'Mascotas ($1 DPS)'],
    [/^(.+) zone$/, (_, zone) => `Zona de ${tr(zone)}`],
    [/^Pet Arena (Bronze|Silver|Gold|Platinum|Diamond) tier$/i, (_, tier) =>
      `Arena, rango ${ARENA_TIERS[tier[0].toUpperCase() + tier.slice(1).toLowerCase()]}`],
    [/^Pet Arena \((.+)\)$/i, (_, tier) => `Arena (${ARENA_TIERS[tier] ?? tier})`],
    [/^Claim (.+)$/i, (_, x) => `Reclamar ${tr(x)}`],

    // Server status
    [/^([\d.,]+) Online$/i, '$1 en línea'],
    [/^([\d.,]+) players$/i, '$1 jugadores'],
    [/^([\d.,]+) stalls$/i, '$1 puestos'],
    [/^(Login|Character|Map) \((\d+)\): (online|offline)$/i, (_, s, port, st) =>
      `${SERVERS[s.toLowerCase()]} (${port}): ${st.toLowerCase() === 'online' ? 'en línea' : 'desconectado'}`],

    // Achievement tabs with a new unlock: "Combat!" → "¡Combate!"
    [/^(.+?)\s*!$/, (_, x) => {
      const t = translateCore(x);
      return t == null ? null : `¡${t}!`;
    }],

    // Pet abilities: "Battle Cry: +12% click damage"
    [/^([^:]+): ([+\-][\d.,]+%? .+)$/, (_, name, bonus) => {
      const n = translateCore(name);
      const b = translateCore(bonus);
      return n == null || b == null ? null : `${n}: ${b}`;
    }],
    // Expedition loot: "Red Potionx7, Dungeon Tokenx1"
    [/^[^,]+x[\d.,]+(?:, [^,]+x[\d.,]+)*$/, (text) => {
      const parts = text.split(', ').map((part) => {
        const [, item, n] = part.match(/^(.+)x([\d.,]+)$/);
        const t = translateCore(item);
        return t == null ? null : `${t} x${n}`;
      });
      return parts.includes(null) ? null : parts.join(', ');
    }],
    // Guilds & War of Emperium
    [/^([\d.,]+) \/ ([\d.,]+) EXP$/i, '$1 / $2 EXP'],
    [/^! ([\d.,]+) MVPs spawn every ([\d.,]+) hours - guilds race for top damage\. Earn boss cards, zeny, and guild EXP!$/i,
      '. Cada $2 horas aparecen $1 MVP y los clanes compiten por hacer más daño. ¡Consigue cartas de jefe, zeny y EXP de clan!'],
    [/^Join ([\d.,]+) guildmates to siege castles for$/i, 'Únete a $1 compañeros de clan para asediar castillos y conseguir'],
    [/^\+([\d.,]+)% damage for all members$/i, '+$1% de daño para todos los miembros'],
    [/^(.+) \(shared cap with (.+)\)$/i, (_, bonus, castle) => {
      const t = translateCore(bonus);
      return t == null ? null : `${t} (límite compartido con ${tr(castle)})`;
    }],
    [/^Pets that die attacking revive after ([\d.,]+) (hour|minute)s?\.$/i, (_, n, unit) =>
      `Las mascotas que mueren atacando reviven tras ${n} ${unit.toLowerCase() === 'hour' ? 'hora' : 'minuto'}${n === '1' ? '' : 's'}.`],
    [/^Pick ([\d.,]+) pets? and press Join Attack\. A siege needs ([\d.,]+) pets from ([\d.,]+) different guildmates; it never starts with fewer\.$/i,
      (_, n, pets, mates) => `Elige ${n} ${n === '1' ? 'mascota' : 'mascotas'} y pulsa Unirse al ataque. Un asedio necesita ${pets} mascotas de ${mates} compañeros de clan distintos; nunca empieza con menos.`],
    [/^Teams enter the attack queue when their third guildmate joins, in that order\. If a team drops below ([\d.,]+), it rejoins at the back when full again\. Your guild and each teammate can attack a castle once every ([\d.,]+) minutes; castles rest ([\d.,]+) minutes after each siege\.$/i,
      'Los equipos entran en la cola de ataque cuando se une su tercer compañero de clan, por orden. Si un equipo baja de $1, vuelve al final de la cola cuando vuelve a estar completo. Tu clan y cada compañero pueden atacar un castillo una vez cada $2 minutos; los castillos descansan $3 minutos tras cada asedio.'],
    [/^Be in a level ([\d.,]+)\+ guild$/i, 'Pertenece a un clan de nivel $1+'],
    [/^Be in a max level guild \(Lv ([\d.,]+)\)$/i, 'Pertenece a un clan de nivel máximo (Nv. $1)'],
    [/^Capture ([\d.,]+) WoE castles$/i, 'Captura $1 castillos de WoE'],
    [/^Participate in ([\d.,]+) WoE castle attacks$/i, 'Participa en $1 ataques a castillos de WoE'],
    // Token Exchange: "+20% EXP for 120s"
    [/^([+\-][\d.,]+%?) (.+) for ([\d.,]+) ?s$/i, (_, n, term, secs) => {
      const t = BONUS[term.toLowerCase()];
      return t ? `${n} ${t} durante ${secs} s` : null;
    }],
    // WoE battle pets & castle screen
    [/^(.+) · ([\d.,]+)% HP$/, (_, name, n) => `${tr(name)} · ${n}% PV`],
    [/^(.+) details$/, (_, name) => {
      const t = translateCore(name);
      return t == null ? null : `Detalles de ${t}`;
    }],
    [/^Self revive up to twice per battle, restoring ([\d.,]+)% HP each time$/i,
      'Revive hasta dos veces por combate y recupera el $1% de PV cada vez'],
    [/^Lifesteal ([\d.,]+)%$/i, 'Robo de vida $1%'],
    [/^Revive: ([\d.,]+)% HP · ([\d.,]+)\/battle$/i, 'Revivir: $1% PV · $2/combate'],
    [/^No idle DPS\. Unlock with WoE tokens or rare MVP drops\. Upgrade with fixed ([\d.,]+)-card recipes \+ zeny\.$/i,
      'Sin DPS pasivo. Se desbloquean con fichas de WoE o botín raro de MVP. Se mejoran con recetas fijas de $1 cartas + zeny.'],
    [/^One attack · starts automatically with ([\d.,]+) guildmates\. You can close the game\.$/i,
      'Un ataque · empieza solo con $1 compañeros de clan. Puedes cerrar el juego.'],
    [/^Pick ([\d.,]+) pets? to join$/i, (_, n) => `Elige ${n} ${n === '1' ? 'mascota' : 'mascotas'} para unirte`],
    [/^(Front|Middle|Back) row · ([\d.,]+) of$/i, (_, row, n) =>
      `Fila ${{ front: 'delantera', middle: 'central', back: 'trasera' }[row.toLowerCase()]} · ${n} de`],
    [/^([\d.,]+) defender rows?$/i, (_, n) => `${n} ${n === '1' ? 'fila' : 'filas'} de defensores`],
    [/^Castle breather (.+)$/i, 'Descanso del castillo $1'],
    [/^([\d.,]+) tokens?$/i, (_, n) => `${n} ${n === '1' ? 'ficha' : 'fichas'}`],
    [/^([\d.,]+) guilds? queued$/i, (_, n) => `${n} ${n === '1' ? 'clan' : 'clanes'} en cola`],
    [/^(.+) rests ([\d.,]+) minutes after every siege, for every guild\. It does not heal defenders\.$/i,
      (_, castle, n) => `${tr(castle)} descansa ${n} minutos tras cada asedio, para todos los clanes. No cura a los defensores.`],
    // Pet Arena battle log: "Yoyo (ally) hits p2_pet1, Poring (enemy) for 494"
    [/^Pet Arena - Stage ([\d.,]+)$/i, 'Arena - Fase $1'],
    [/^Select team \(([\d.,]+)-([\d.,]+)\), then click a stage:$/i, 'Elige el equipo ($1-$2) y haz clic en una fase:'],
    [/^Collect \+([\d.,]+) Coins$/i, 'Recoger +$1 monedas'],
    [/^Volume ([\d.,]+)%$/i, 'Volumen $1%'],
    [/^VICTORY for (ally|enemy) side!$/i, (_, side) =>
      `¡VICTORIA del bando ${side.toLowerCase() === 'ally' ? 'aliado' : 'enemigo'}!`],
    [/^(.+?) casts (.+)$/, (_, unit, skill) => `${arenaUnits(unit)} usa ${tr(skill)}`],
    [/^(.+?) hits (.+) for ([\d.,]+)( \(blocked\))?( CRITICAL)?( - MISS)?$/, (_, unit, targets, n, blocked, crit, miss) =>
      `${arenaUnits(unit)} golpea a ${arenaUnits(targets)} por ${n}` +
      `${blocked ? ' (bloqueado)' : ''}${crit ? ' CRÍTICO' : ''}${miss ? ' - FALLO' : ''}`],
    [/^(.+?) shields (.+) \(([\d.,]+)\)$/, (_, unit, target, n) => `${arenaUnits(unit)} protege a ${arenaUnits(target)} (${n})`],
    [/^(.+?) gets ([A-Z_]+) \(([\d.,]+)t\)$/, (_, unit, status, turns) =>
      `${arenaUnits(unit)} recibe ${ARENA_STATUS[status] ?? status} (${turns} t)`],
    [/^(.+) \((ally|enemy)\)$/, (text) => arenaUnits(text)],
    [/^(.+?) heals (.+) for \+([\d.,]+)$/, (_, unit, target, n) => `${arenaUnits(unit)} cura a ${arenaUnits(target)} +${n}`],
    [/^(.+) \(Boss\)$/, (_, name) => `${tr(name)} (jefe)`],
    [/^([\d.,]+) ticks · ([\d.,]+) events$/i, '$1 tics · $2 eventos'],
    // Canvas headers: "TURN ORDER  ›  NEXT"
    [/^(.+?)(\s+›\s+)(.+)$/, (_, a, sep, b) => {
      const ta = translateCore(a);
      const tb = translateCore(b);
      return ta == null || tb == null ? null : `${ta}${sep}${tb}`;
    }],
    [/^(.+?)'s shield breaks$/, (_, unit) => `Se rompe el escudo de ${arenaUnits(unit)}`],
    [/^(.+?) is defeated!$/, (_, unit) => `¡${arenaUnits(unit)} cae derrotado!`],
    [/^([\d.,]+) first \/ ([\d.,]+) repeat$/i, '$1 la 1.ª vez / $2 al repetir'],
    [/^Clear (bronze|silver|gold|platinum|diamond)$/i, (_, tier) => `Superar ${tr(tier[0].toUpperCase() + tier.slice(1).toLowerCase())}`],
    [/^Accumulate ([\d.,]+) Pet Arena coins$/i, 'Acumula $1 monedas de la Arena'],
    [/^Clear (Bronze|Silver|Gold|Platinum|Diamond) Stage ([\d.,]+)$/i, (_, tier, n) => `Supera la fase ${n} de ${tr(tier)}`],
    [/^(Bronze|Silver|Gold|Platinum|Diamond) Champion$/i, (_, tier) => `Campeón de ${tr(tier)}`],
    [/^Earn ([\d.,]+) Champion's Crowns$/i, 'Consigue $1 Coronas de campeón'],
    // PvP Auto Arena
    [/^\/([\d.,]+) picked$/i, '/$1 elegidas'],
    [/^([\d.,]+)× (.+)$/, (_, n, x) => {
      const t = translateCore(x);
      return t == null ? null : `${n}× ${t}`;
    }],
    [/^\| Cost: ([\d.,]+) per fight$/i, '| Coste: $1 por combate'],
    [/^Fight! \((.+)\)$/i, '¡Luchar! ($1)'],
    [/^Win ([\d.,]+) PvP fights in a row$/i, 'Gana $1 combates PvP seguidos'],
    [/^Win ([\d.,]+) PvP fights$/i, 'Gana $1 combates PvP'],
    [/^Rating: ([\d.,]+)$/i, 'Puntuación: $1'],
    [/^Add an? (\w+) pet$/i, (_, elem) => `Añade una mascota de ${tr(elem.toLowerCase())}`],
    [/^(\w+) Pair$/, (_, elem) => {
      const t = translateCore(elem.toLowerCase());
      return t == null ? null : `Dúo de ${t}`;
    }],
    [/^No synergies firing\. Try same-element pets or ([\d.,]+) holy \+ ([\d.,]+) shadow\.$/i,
      'No hay sinergias activas. Prueba con mascotas del mismo elemento o $1 sagrado + $2 sombra.'],
    [/^Lv(\s*)([\d.,]+)$/, 'Nv$1$2'],
    [/^Shiny chance: ([\d.,]+%)$/i, 'Prob. de shiny: $1'],
    [/^DEFEAT - (ally|enemy) side wins$/i, (_, side) =>
      `DERROTA: gana el bando ${side.toLowerCase() === 'ally' ? 'aliado' : 'enemigo'}`],
    [/^(.+?) takes ([\d.,]+) (\w+) damage$/, (_, unit, n, kind) =>
      `${arenaUnits(unit)} recibe ${n} de daño por ${BONUS[kind.toLowerCase()] ?? tr(kind)}`],
    [/^([\d.,]+)W\/([\d.,]+)L$/, '$1V/$2D'],
    [/^Lv ([\d.,]+) P([\d.,]+)$/, 'Nv $1 P$2'],
    // Status codes drawn on the arena canvas: "ATK_UP", "DEF_DOWN"
    [/^[A-Z]+(?:_[A-Z]+)+$/, (code) => ARENA_STATUS[code] ?? null],
    [/^Energy: ([\d.,]+)\/([\d.,]+)$/i, 'Energía: $1/$2'],
    [/^Page ([\d.,]+)$/i, 'Página $1'],
    [/^Page ([\d.,]+) \/ ([\d.,]+)( · [\d.,]+)?$/i, (_, a, b, rest = '') => `Página ${a} / ${b}${rest}`],
    [/^\+([\d.,]+)% ATK to whole team$/i, '+$1% ATQ para todo el equipo'],
    [/^(.+) - counter-element synergy$/i, (_, elements) =>
      `${elements.split(' / ').map(tr).join(' / ')} - sinergia de contraelementos`],
    [/^Empty selection sends your first ([\d.,]+) owned pets\. Re-sync your fighter after changing\.$/i,
      'Si no eliges ninguna, se envían tus $1 primeras mascotas. Vuelve a sincronizar tu luchador después de cambiar.'],
    [/^Move (.+) (up|down)$/i, (_, skill, dir) => `${dir.toLowerCase() === 'up' ? 'Subir' : 'Bajar'} ${tr(skill)}`],
    [/^Reach ([\d.,]+) PvP rating$/i, 'Alcanza $1 de puntuación PvP'],
    // Pet Arena shop
    [/^\+([\d.,]+)% Dmg, Crit, Zeny, Wpn ATK, PvP\/WoE HP & \+([\d.,]+) PvP\/WoE Speed$/i,
      '+$1% daño, crítico, zeny, ATQ de arma y PV en PvP/WoE, y +$2 de velocidad en PvP/WoE'],
    [/^([\d.,]+) random consumables$/i, '$1 consumibles al azar'],
    [/^Grant ([\d.,]+) feeds of EXP to a pet$/i, 'Da a una mascota la EXP de $1 comidas'],
    [/^Permanent \+([\d.,]+)% damage \(survives prestige\)$/i, '+$1% de daño permanente (se conserva al hacer prestigio)'],
    // Expeditions: "10m | Power: 100\", "Select party (1-3 pets):"
    [/^Select party \(([\d.,]+)-([\d.,]+) pets\):$/i, 'Elige el grupo ($1-$2 mascotas):'],
    [/^(\S+) \| Power: ([\d.,]+)$/i, '$1 | Poder: $2'],
    // Zone events: "2x zeny from all kills", "+50% damage to all mobs"
    [/^\+([\d.,]+)% damage to all mobs$/i, '+$1% de daño a todos los monstruos'],
    [/^([\d.,]+)x (zeny|EXP) from all kills$/i, (_, n, what) =>
      `${what.toLowerCase() === 'exp' ? 'EXP' : 'Zeny'} x${n} en todas las bajas`],
    // Stat bonuses: "+5% Crit", "+20 DPS", "-15% purchase costs"
    [/^([+\-][\d.,]+%?) (.+?)( \([\d.,]+x\))?$/, (_, n, term, times = '') => {
      const t = BONUS[term.toLowerCase()];
      return t ? `${n} ${t}${times}` : null;
    }],
    // Costs: "12.000z + 1 Rune" (only when the item is known)
    [/^([\d.,]+) (.+)$/, (_, n, item) => {
      const t = translateCore(item);
      return t == null ? null : `${n} ${t}`;
    }],
    // Rewards: "+5 White Herb"
    [/^\+([\d.,]+) (.+)$/, (_, n, item) => `+${n} ${tr(item)}`],
  ];

  // Compound strings are split and each part translated on its own.
  // ", " only applies to bonus lists ("+1% drops, +0.5% zeny").
  const UPPER_KEYS = new Map(Object.keys(DICTIONARY).map((k) => [k.toUpperCase(), k]));

  const SEPARATORS = [' · ', ' | ', ', ', ' + '];

  // ---------------------------------------------------------------------------
  // 3. TRANSLATION ENGINE
  // ---------------------------------------------------------------------------
  const INLINE_TAGS = new Set(['SPAN', 'B', 'STRONG', 'I', 'EM', 'SMALL', 'KBD', 'MARK', 'U', 'SUB', 'SUP', 'A', 'LABEL']);
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT', 'CODE', 'PRE']);
  const ATTRIBUTES = ['title', 'placeholder', 'aria-label', 'alt'];
  // Numbers with units or suffixes: "1.22T", "2.5x", "(2.5x)", "377K/1.0M", "3.0Kz"
  const NUMERIC = /^\(?[+\-]?[\d.,]+[kKMBT]?(?:\/[\d.,]+[kKMBT]?)?\s*(?:x|z|%|\/s|s)?\)?$/;
  // Countdowns and durations: "9m 57s", "1h 30m", "10m" (the same in Spanish)
  const DURATION = /^\(?(?:\d+\s*[dhms]\s*)+\)?$/;
  // Enchantment grade tags: "[C]", "[R]"…
  const GRADE_TAG = /^\[[A-Z]\]$/;
  const MAX_TRACKED = 5000;
  const DICTIONARY_VALUES = new Set(Object.values(DICTIONARY));
  const known = new Set(DICTIONARY_VALUES); // Spanish output, never re-translated
  const missing = new Map(); // untranslated text -> where it was seen

  function remember(set, value) {
    if (set.size >= MAX_TRACKED) {
      if (set !== known) return;
      // Live counters keep producing new Spanish text: drop the oldest outputs
      // (keeping the dictionary) instead of forgetting the newest ones
      let drop = MAX_TRACKED / 4;
      for (const v of known) {
        if (drop <= 0) break;
        if (DICTIONARY_VALUES.has(v)) continue;
        known.delete(v);
        drop--;
      }
    }
    set.delete(value); // re-insert so recently seen text counts as newest
    set.add(value);
  }

  // strict: compound text only counts as translated when every part is
  // (used when joining nodes, so a half-translated mix never gets glued together)
  function translateCore(text, strict = false) {
    text = text.replace(/\s+/g, ' '); // non-breaking or repeated spaces
    if (Object.prototype.hasOwnProperty.call(DICTIONARY, text)) return DICTIONARY[text];

    // Text written in capitals ("BROKEN!"): look it up ignoring case
    if (/[A-Z]{2}/.test(text) && text === text.toUpperCase()) {
      const key = UPPER_KEYS.get(text);
      if (key) return DICTIONARY[key].toUpperCase();
    }

    for (const [pattern, replacement] of RULES) {
      const match = text.match(pattern);
      if (!match) continue;
      const out = typeof replacement === 'function'
        ? replacement(...match)
        : text.replace(pattern, replacement);
      if (out != null) return out;
    }

    for (const sep of SEPARATORS) {
      if (!text.includes(sep)) continue;
      const parts = text.split(sep);
      if (sep === ', ' && !parts.every((p) => /^[+\-]/.test(p))) continue;
      let changed = false;
      let complete = true;
      const out = parts.map((part) => {
        const t = translateCore(part.trim(), strict);
        if (t == null) {
          complete = false;
          return part;
        }
        changed = true;
        return t;
      });
      if (changed && (complete || !strict)) return out.join(sep);
    }
    return null;
  }

  // Names (your nick, friends…) that must never be translated or listed.
  // Kept in the browser, not in the script, so updates don't wipe them:
  // edit them with Alt+Shift+N.
  const IGNORE_KEY = 'poring-es:ignored-names';
  const loadIgnored = () => {
    try { return new Set(JSON.parse(localStorage.getItem(IGNORE_KEY) || '[]')); } catch (e) { return new Set(); }
  };
  let ignoredNames = loadIgnored();

  // Where an untranslated text was seen, so it can be translated in context:
  //   /page · <a href="/players/x"> · sección «Recent Card Drops» · «whole sentence»
  const clip = (text, max) => (text.length > max ? text.slice(0, max) + '…' : text);
  const oneLine = (text) => text.replace(/\s+/g, ' ').trim();

  // An element's text as the game wrote it (in English, before our changes)
  function englishText(el) {
    let out = '';
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) out += englishOf(n);
    return oneLine(out);
  }

  // What kind of element holds the text: tag, plus link target / tooltip / role
  function elementInfo(el) {
    const attrs = ['href', 'title', 'role', 'type']
      .map((a) => (el.getAttribute(a) ? ` ${a}="${clip(el.getAttribute(a), 40)}"` : ''))
      .join('');
    return `<${el.tagName.toLowerCase()}${attrs}>`;
  }

  // Nearest heading above the text: tells which panel or section it belongs to
  function sectionOf(el) {
    for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
      const h = a.querySelector('h1, h2, h3, h4');
      if (h && !h.contains(el)) return clip(englishText(h), 60);
    }
    return '';
  }

  // -> { page, element, section, sentence }
  function describe(where) {
    const info = { page: location.pathname, element: '', section: '', sentence: '' };
    if (where && where.attr) { // attribute: placeholder, title, aria-label…
      info.element = `[${where.attr}] ${elementInfo(where.el)}`;
      info.section = sectionOf(where.el);
      return info;
    }
    const el = where && where.parentElement;
    if (!el) return info;
    info.element = elementInfo(el);
    info.section = sectionOf(el);
    const block = el.closest('p, li, h1, h2, h3, h4, label, button, td, th, div') || el;
    const full = englishText(block);
    if (full && full !== where.nodeValue.trim()) info.sentence = clip(full, 140);
    return info;
  }

  function translateText(original, where) {
    const trimmed = original.trim();
    if (ignoredNames.has(trimmed)) return null;
    // Damage pop-ups ("1230!") get the Spanish opening mark
    if (/^[\d.,]+[kKMB]?!$/.test(trimmed)) return original.replace(trimmed, () => '¡' + trimmed);
    if (!trimmed || !/[A-Za-z]/.test(trimmed) || NUMERIC.test(trimmed) || DURATION.test(trimmed) || GRADE_TAG.test(trimmed) || known.has(trimmed)) {
      return null;
    }
    const out = translateCore(trimmed);
    if (out == null) {
      // Single letters (grades, keys) and text already in Spanish aren't worth listing
      if (!/^[A-Za-z]$/.test(trimmed) && !/[áéíóúüñÁÉÍÓÚÜÑ¡¿]/.test(trimmed) &&
          !missing.has(trimmed) && missing.size < MAX_TRACKED) {
        missing.set(trimmed, describe(where));
      }
      return null;
    }
    remember(known, out);
    return original.replace(trimmed, () => out);
  }

  // Chat lines written by players (they carry the player's name button) are
  // left alone: no translation and not listed in untranslated(). System lines
  // such as "X joined the party." have no name button and are still translated.
  const CHAT_ROW = '.items-baseline.leading-normal';
  const isPlayerChatRow = (el) => el.matches(CHAT_ROW) && el.querySelector('button') !== null;

  // The party name, chosen by its leader: the heading right before the
  // "Copy invite link" button of the party panel.
  const INVITE_TITLES = new Set(['Copy invite link', 'Copiar enlace de invitación']);
  const isPartyName = (el) => {
    const next = el.nextElementSibling;
    return !!next && next.tagName === 'BUTTON' && INVITE_TITLES.has(next.getAttribute('title'));
  };

  // Player and guild names in the leaderboard: the name right after the rank
  // badge, either on its own or as the first line of a block (PvP: name, then
  // "401W 182L · 69% WR · 21 streak"). Guilds have their emblem in between.
  const afterRankBadge = (el) => {
    let prev = el && el.previousElementSibling;
    while (prev && prev.tagName === 'IMG') prev = prev.previousElementSibling;
    // The badge holds the rank number; event icons have the same size classes
    return !!prev && prev.matches('.w-5.h-5') && /^\d+$/.test(prev.textContent.trim());
  };
  const isLeaderboardName = (el) =>
    (el.matches('.flex-1.truncate') && afterRankBadge(el)) ||
    (!!el.parentElement && el.parentElement.matches('.flex-1') &&
      el === el.parentElement.firstElementChild && afterRankBadge(el.parentElement));

  // Guild page: the guild name in the panel title, and each member's name
  // (first line of the block after the "leader"/"member" role badge)
  const ROLE_BADGE = 'span.w-12.uppercase';
  const isGuildName = (el) => {
    if (!/^H[1-3]$/.test(el.tagName)) return false;
    const panel = el.closest('.bg-ro-panel');
    return !!panel && !!panel.querySelector(ROLE_BADGE);
  };
  // "Geffen Tower vs Faenyx", "L vs MonkeyBoy34": the name right after "vs",
  // whether "vs" is its own element or loose text before the name
  const afterVs = (el) => {
    const prev = el.previousSibling;
    const text = ((prev && prev.textContent) || '').trim(); // the doctype before <html> has no text
    return /(^|\s)vs$/.test(text) ||
      (!!el.previousElementSibling && el.previousElementSibling.textContent.trim() === 'vs');
  };
  // PvP match screen: the opponent's name, followed by "Rating: 1098"
  const isRatedName = (el) =>
    el.tagName === 'SPAN' && !!el.nextElementSibling &&
    /^(Rating|Puntuación):/.test(el.nextElementSibling.textContent.trim());

  // WoE: the guild holding each castle (right column of the castle button) and
  // the guild after "vs" in the battle log ("Geffen Tower vs Faenyx")
  const isWoeGuildName = (el) =>
    (el.matches('.truncate') && !!el.parentElement && el.parentElement.matches('.text-right') &&
      !!el.closest('button[aria-expanded]')) ||
    afterVs(el);
  // PvP Auto Arena ranking: the fighter's name is the span right before "Lv" / "Lv99"
  const isArenaFighterName = (el) =>
    el.tagName === 'SPAN' && !!el.nextElementSibling &&
    /^(Lv|Nv)\.?\s*[\d.,]*$/.test(el.nextElementSibling.textContent.trim());
  // PvP opponent picker: the name right after the EASY / EVEN / HARD badge
  const OPPONENT_BADGES = new Set(['EASY', 'EVEN', 'HARD', 'FÁCIL', 'IGUALADO', 'DIFÍCIL']);
  const isOpponentName = (el) =>
    !!el.previousElementSibling && OPPONENT_BADGES.has(el.previousElementSibling.textContent.trim().toUpperCase());
  const isGuildMemberName = (el) => {
    const box = el.parentElement;
    return !!box && box.matches('.flex-1') && el === box.firstElementChild &&
      !!box.previousElementSibling && box.previousElementSibling.matches(ROLE_BADGE);
  };

  // Party member names: the button right above "Lv.31 Swordsman"
  const isPartyMemberName = (el) =>
    el.tagName === 'BUTTON' && el.matches('.truncate') &&
    !!el.nextElementSibling && /^(Lv|Nv)\.\s*\d/.test(el.nextElementSibling.textContent.trim());

  // News: the posts themselves (title and excerpt) stay in English; only the
  // page around them (badges, dates, buttons) is translated
  // On /news: the article body, its title, and the titles/excerpts of the
  // linked posts (list cards, previous/next) stay in English
  const isNewsPost = (el) =>
    location.pathname.startsWith('/news') && (
      el.matches('.news-article') ||
      (el.tagName === 'H1' && !!el.closest('article')) ||
      (!!el.closest('a[href^="/news/"]') && (/^(H2|H3|P)$/.test(el.tagName) || el.matches('.line-clamp-2')))
    );

  // Links to a player's, character's or guild's page (transparency, rankings…)
  // Also links to a monster in the database: monster names keep their RO name
  const isProfileLink = (el) =>
    el.tagName === 'A' &&
    /\/(players?|characters?|chars?|guilds?)\/|^\/database\/mobs\//i.test(el.getAttribute('href') || '');

  // GM log: "Character: <span>Name</span>" and "<dt>GM</dt><dd>Name</dd>".
  // "GM character" is a label, not a name, so it is still translated.
  const firstText = (el) => (el && el.firstChild && el.firstChild.nodeType === Node.TEXT_NODE
    ? englishOf(el.firstChild).trim() : '');
  const isLogName = (el) =>
    (el.tagName === 'SPAN' && el.parentElement && el.parentElement.tagName === 'P' &&
      firstText(el.parentElement) === 'Character:' && el.textContent.trim() !== 'GM character' &&
      el.textContent.trim() !== 'Personaje GM') ||
    (el.tagName === 'DD' && !!el.previousElementSibling && el.previousElementSibling.tagName === 'DT' &&
      /^GM$/.test(el.previousElementSibling.textContent.trim()));

  const isPlayerText = (el) =>
    el.hasAttribute('data-poring-es-totals') || // our own totals box, already in Spanish
    isPlayerChatRow(el) || isPartyName(el) || isLeaderboardName(el) || isGuildName(el) ||
    isGuildMemberName(el) || isWoeGuildName(el) || isArenaFighterName(el) || isOpponentName(el) ||
    isRatedName(el) || isNewsPost(el) || isProfileLink(el) || isLogName(el);

  function shouldSkip(node) {
    let el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    while (el) {
      if (SKIP_TAGS.has(el.tagName) || el.isContentEditable || isPlayerText(el)) return true;
      el = el.parentElement;
    }
    return false;
  }

  // Form fields: never touch what the user types, but do translate their
  // placeholder / title ("Search...", "Say something...")
  const FIELD_TAGS = new Set(['INPUT', 'TEXTAREA']);

  const skipFilter = {
    acceptNode: (n) => {
      if (n.nodeType !== Node.ELEMENT_NODE) return NodeFilter.FILTER_ACCEPT;
      if (FIELD_TAGS.has(n.tagName)) {
        translateAttributes(n);
        return NodeFilter.FILTER_REJECT;
      }
      return SKIP_TAGS.has(n.tagName) || isPlayerText(n) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
  };

  // English text of every node we changed, so it can be re-translated
  // when the game updates a neighbouring node.
  const originals = new WeakMap(); // text node -> { orig, set }

  function englishOf(node) {
    const o = originals.get(node);
    return o && node.nodeValue === o.set ? o.orig : node.nodeValue;
  }

  function setText(node, value) {
    if (value.trim()) remember(known, value.trim());
    if (node.nodeValue === value) return;
    originals.set(node, { orig: englishOf(node), set: value });
    node.nodeValue = value;
  }

  // The game often splits one sentence into several text nodes
  // ("Sell: ", "2", "z each"). Join them, translate the whole sentence and
  // spread it back, leaving the number nodes untouched so the game can keep
  // updating them.
  // Numbers the game updates on its own ("4116", "2.0K"); separators stay static
  const isDynamic = (text) => /\d/.test(text) && !/[A-Za-z]/.test(text);

  function translateSplitText(el) {
    const kids = el.childNodes;
    if (kids.length < 2) return;

    const units = [];
    for (const kid of kids) {
      if (kid.nodeType === Node.TEXT_NODE) {
        const text = englishOf(kid);
        units.push({ node: kid, text, dynamic: isDynamic(text) });
      } else if (kid.nodeType === Node.ELEMENT_NODE && !kid.textContent.trim()) {
        continue; // icons, images, <br>...
      } else if (kid.nodeType === Node.ELEMENT_NODE && kid.childElementCount === 0) {
        // Simple inline tag around a label or number: <b>Sell:</b>, <span>2</span>.
        // Block elements (divs, buttons…) are separate texts, never one sentence.
        if (kid.childNodes.length === 0) continue;
        if (kid.childNodes.length > 1 || !INLINE_TAGS.has(kid.tagName)) return;
        const text = englishOf(kid.firstChild);
        units.push({ node: kid.firstChild, text, dynamic: isDynamic(text), inTag: true });
      } else if (kid.nodeType !== Node.COMMENT_NODE) {
        return; // nested markup with words: leave it to the per-node pass
      }
    }

    // A leading tag may be a title glued to its description
    // (<span>Untouchable</span>Reach a 150 combo…): if the whole thing doesn't
    // translate, drop it and try again with the rest.
    while (units.length >= 2 && !joinUnits(units)) {
      if (!units[0].inTag || units[0].dynamic) return;
      units.shift();
    }
  }

  function joinUnits(units) {
    if (units.filter((u) => !u.dynamic).length === 0) return false;
    // A sentence needs some loose text of its own; only tags means separate labels
    if (!units.some((u) => !u.inTag && u.text.trim())) return false;

    const joined = units.map((u) => u.text).join('');
    const trimmed = joined.trim();
    if (!trimmed || !/[A-Za-z]/.test(trimmed)) return false;
    const out = translateCore(trimmed, true);
    if (out == null || out === trimmed) return false;
    const full = joined.replace(trimmed, () => out);

    // Work out the new text of every node before touching the DOM.
    // Text with no static node to hold it (the "¡" in "¡5x...") is glued to
    // the neighbouring number; if the game updates it, it gets re-translated.
    const updates = new Map(); // node -> new text
    let group = [];
    let pos = 0;
    let lastDynamic = null;
    for (const u of units) {
      if (!u.dynamic) {
        group.push(u);
        continue;
      }
      const idx = full.indexOf(u.text, pos);
      if (idx < 0) return false;
      const segment = full.slice(pos, idx);
      if (group.length) group.forEach((g, i) => updates.set(g.node, i === 0 ? segment : ''));
      else if (segment.trim()) updates.set(u.node, segment + u.text);
      group = [];
      pos = idx + u.text.length;
      lastDynamic = u;
    }
    const tail = full.slice(pos);
    if (group.length) group.forEach((g, i) => updates.set(g.node, i === 0 ? tail : ''));
    else if (tail.trim()) updates.set(lastDynamic.node, (updates.get(lastDynamic.node) ?? lastDynamic.text) + tail);

    for (const [node, value] of updates) setText(node, value);
    return true;
  }

  // "Drops" is both a monster and the loot header. The header is shown in
  // capitals (written that way or via CSS), the monster name is not.
  function isLootHeader(node) {
    if (node.nodeValue.trim() !== 'Drops' || !node.parentElement) return false;
    return getComputedStyle(node.parentElement).textTransform === 'uppercase';
  }

  function translateTextNode(node) {
    if (shouldSkip(node)) return;
    if (isLootHeader(node)) return setText(node, node.nodeValue.replace('Drops', 'Botín'));
    // Party member: keep the player's name, translate only the leader tag
    if (node.parentElement && isPartyMemberName(node.parentElement)) {
      return setText(node, node.nodeValue.replace('(Leader)', '(Líder)'));
    }
    // Already translated by us and untouched since
    const o = originals.get(node);
    if (o && node.nodeValue === o.set) return;
    const translated = translateText(node.nodeValue, node);
    if (translated !== null && translated !== node.nodeValue) setText(node, translated);
  }

  // Attribute values we wrote, so they aren't translated (or listed) again
  const attrsSet = new WeakMap(); // element -> { attr: value }

  function translateAttributes(el) {
    if (!el.getAttribute) return;
    for (const attr of ATTRIBUTES) {
      const value = el.getAttribute(attr);
      if (!value) continue;
      const done = attrsSet.get(el);
      if (done && done[attr] === value) continue;
      const translated = translateText(value, { el, attr });
      if (translated !== null && translated !== value) {
        el.setAttribute(attr, translated);
        attrsSet.set(el, { ...done, [attr]: translated });
      }
    }
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    if (FIELD_TAGS.has(root.tagName)) return translateAttributes(root);
    if (shouldSkip(root)) return;

    translateAttributes(root);
    translateSplitText(root);
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      skipFilter
    );
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) {
        translateTextNode(node);
      } else {
        translateAttributes(node);
        translateSplitText(node);
      }
    }
  }

  function translateTitle() {
    if (document.title.includes('Poring Clicker') && !document.title.includes('(ES)')) {
      document.title = document.title.replace('Poring Clicker', 'Poring Clicker (ES)');
    }
  }

  // ---------------------------------------------------------------------------
  // EXTRA: totals under the zone list (bestiary): "Total: 26 monst. | 23.828 bajas"
  // Each zone row reads "4 monst. | 10.042 bajas" (or "4 mobs | 10,042 kills").
  // ---------------------------------------------------------------------------
  const ZONE_STATS = /^([\d.,]+)\s*(?:monst\.|mobs?)\s*\|\s*([\d.,]+)\s*(?:bajas?|kills?)$/i;
  const toInt = (s) => parseInt(s.replace(/[.,]/g, ''), 10) || 0;
  const thousands = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // On by default; Alt+Shift+T turns it on/off (remembered in the browser)
  const TOTALS_KEY = 'poring-es:zone-totals';
  let showZoneTotals = localStorage.getItem(TOTALS_KEY) !== 'off';

  function updateZoneTotals() {
    if (!showZoneTotals) {
      document.querySelectorAll('[data-poring-es-totals]').forEach((b) => b.remove());
      return;
    }
    const lists = new Map(); // zone list container -> [mobs, kills]
    for (const span of document.querySelectorAll('button > span')) {
      const m = span.textContent.trim().match(ZONE_STATS);
      if (!m) continue;
      const list = span.parentElement.parentElement && span.parentElement.parentElement.parentElement;
      if (!list) continue;
      const sum = lists.get(list) || [0, 0];
      sum[0] += toInt(m[1]);
      sum[1] += toInt(m[2]);
      lists.set(list, sum);
    }
    for (const [list, [mobs, kills]] of lists) {
      let box = list.nextElementSibling;
      if (!box || !box.hasAttribute('data-poring-es-totals')) {
        box = document.createElement('div');
        box.setAttribute('data-poring-es-totals', '');
        box.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;margin-top:6px;padding:4px 8px;' +
          'border-top:1px solid currentColor;opacity:.75;font-size:10px;';
        list.after(box);
      }
      const text = `Total: ${thousands(mobs)} monst. | ${thousands(kills)} bajas`;
      if (box.textContent !== text) box.textContent = text;
    }
  }

  // ---------------------------------------------------------------------------
  // EXTRA: "system" theme. The site's sun/moon button cycles
  // dark → light → system → dark. In system mode the site's own theme is kept in
  // line with the OS setting by clicking its button for it, so the site stays
  // in charge of applying and remembering the theme.
  // ---------------------------------------------------------------------------
  const THEME_KEY = 'poring-es:theme';
  const SYSTEM_TITLE = 'Según el sistema (clic: modo oscuro)';
  const THEME_TITLES = new Set([
    'Switch to light mode', 'Switch to dark mode', 'Cambiar a modo claro', 'Cambiar a modo oscuro', SYSTEM_TITLE,
  ]);
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  let systemTheme = localStorage.getItem(THEME_KEY) === 'system';
  let switchingTheme = false;

  const themeButtons = () =>
    [...document.querySelectorAll('button[title]')].filter((b) => THEME_TITLES.has(b.getAttribute('title')));
  const siteTheme = () => document.documentElement.getAttribute('data-theme');

  function setSiteTheme(theme) {
    const button = themeButtons()[0];
    if (!button || siteTheme() === theme) return;
    switchingTheme = true;
    // dispatchEvent rather than click(): click() is ignored while another click is running
    button.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    switchingTheme = false;
  }

  function updateThemeButtons() {
    for (const button of themeButtons()) {
      const title = systemTheme ? SYSTEM_TITLE
        : siteTheme() === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro';
      if (button.getAttribute('title') !== title) button.setAttribute('title', title);
      button.toggleAttribute('data-poring-es-system', systemTheme);
    }
  }

  function applySystemTheme() {
    if (systemTheme) setSiteTheme(systemDark.matches ? 'dark' : 'light');
    observer.disconnect();
    updateThemeButtons();
    observe();
  }

  const MONITOR_ICON = 'data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 ' +
    '002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>');
  const themeStyle = document.createElement('style');
  themeStyle.textContent =
    'button[data-poring-es-system]{position:relative}' +
    'button[data-poring-es-system]>svg{visibility:hidden}' +
    `button[data-poring-es-system]::after{content:"";position:absolute;inset:0;margin:auto;width:1rem;height:1rem;` +
    `background:currentColor;-webkit-mask:url("${MONITOR_ICON}") center/contain no-repeat;` +
    `mask:url("${MONITOR_ICON}") center/contain no-repeat}`;
  document.documentElement.appendChild(themeStyle);

  document.addEventListener('click', (e) => {
    if (switchingTheme) return;
    const button = e.target instanceof Element && e.target.closest('button[title]');
    if (!button || !THEME_TITLES.has(button.getAttribute('title'))) return;
    if (!systemTheme && siteTheme() !== 'light') return; // dark → light: the site does it
    e.preventDefault();
    e.stopImmediatePropagation();
    systemTheme = !systemTheme;
    localStorage.setItem(THEME_KEY, systemTheme ? 'system' : 'site');
    if (!systemTheme) setSiteTheme('dark');
    applySystemTheme();
    toast(`Poring Clicker ES: tema ${systemTheme ? 'según el sistema' : 'oscuro'}`);
  }, true);
  systemDark.addEventListener('change', applySystemTheme);

  // Batch DOM changes once per animation frame so the game doesn't slow down
  const pending = new Set();
  let scheduled = false;

  function flushPending() {
    scheduled = false;
    observer.disconnect();
    for (const node of pending) {
      if (node.isConnected) translateTree(node);
    }
    pending.clear();
    translateTitle();
    updateZoneTotals();
    updateThemeButtons();
    observe();
  }

  const observer = new MutationObserver((mutations) => {
    // A changed text node is re-translated together with its sentence,
    // which may also span the parent's siblings (<b>Sell:</b> 2z each)
    const queue = (n) => {
      if (n.nodeType !== Node.TEXT_NODE || !n.parentNode) return pending.add(n);
      const grandparent = n.parentNode.parentNode;
      pending.add(grandparent && grandparent.nodeType === Node.ELEMENT_NODE ? grandparent : n.parentNode);
    };
    for (const m of mutations) {
      if (m.type === 'characterData' || m.type === 'attributes') queue(m.target);
      else m.addedNodes.forEach(queue);
    }
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(flushPending);
    }
  });

  function observe() {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATTRIBUTES,
    });
  }

  // ---------------------------------------------------------------------------
  // 4. BOOTSTRAP & CONSOLE HELPER
  // ---------------------------------------------------------------------------
  // Pages rendered on the server (news, downloads, account…) are "hydrated" by
  // React once its code loads; changing their text before that makes React
  // throw error #418 and redraw the page. So wait until the page has loaded
  // and React has had a moment, then translate.
  function start() {
    translateTitle();
    translateTree(document.body);
    updateZoneTotals();
    observe();
    applySystemTheme();
  }
  const startLater = () => setTimeout(start, 800);
  if (document.readyState === 'complete') startLater();
  else window.addEventListener('load', startLater, { once: true });

  // "text   ← /page «whole sentence»", sorted
  // TOON (Token-Oriented Object Notation): one header, then one row per text.
  // Values with commas, quotes, colons or edge spaces go quoted.
  const toonValue = (v) =>
    v === '' ? '' : /[,:"\\\n]|^\s|\s$|^(true|false|null|-?[\d.]+)$/.test(v) ? JSON.stringify(v) : v;

  // Lines of the TOON table (header first), so .join('\n') gives the full text
  const untranslatedList = () => {
    const rows = [...missing].sort(([a], [b]) => a.localeCompare(b));
    return [
      `untranslated[${rows.length}]{text,page,element,section,sentence}:`,
      ...rows.map(([text, w]) =>
        '  ' + [text, w.page, w.element, w.section, w.sentence].map(toonValue).join(',')),
    ];
  };

  function untranslated() {
    const list = untranslatedList();
    console.log(list.join('\n'));
    return list;
  }

  // untranslated() in the DevTools console (F12). Script managers run userscripts
  // in their own sandbox, which the page console can't see, so:
  // 1. unsafeWindow, where the manager supports it.
  const pageWindow = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
  pageWindow.untranslated = untranslated;

  // 2. A tiny page-side function that asks the sandbox for the list through a
  //    DOM event (both worlds share the DOM, and events are synchronous).
  document.addEventListener('poring-es:request', () => {
    document.documentElement.dataset.poringEsUntranslated = JSON.stringify(untranslatedList());
  });
  try {
    const bridge = document.createElement('script');
    bridge.textContent = `window.untranslated = function () {
      document.dispatchEvent(new CustomEvent('poring-es:request'));
      const root = document.documentElement;
      const list = JSON.parse(root.dataset.poringEsUntranslated || '[]');
      delete root.dataset.poringEsUntranslated;
      console.log(list.join('\\n'));
      return list;
    };`;
    (document.head || document.documentElement).appendChild(bridge);
    bridge.remove();
  } catch (e) { /* the page's security policy may block it: use the shortcut */ }

  // Canvas text (the Pet Arena battle is drawn, not written): a page-side patch
  // of fillText/strokeText/measureText asks the sandbox for each new text
  // through the same kind of synchronous DOM event, and caches the answer.
  const ARENA_ID = /^p\d+_pet\d+$/;
  document.addEventListener('poring-es:canvas', () => {
    const root = document.documentElement;
    const text = root.dataset.poringEsCanvasIn || '';
    const trimmed = text.trim();
    let out = text;
    if (/[A-Za-z]/.test(trimmed) && !NUMERIC.test(trimmed) && !DURATION.test(trimmed) && !ARENA_ID.test(trimmed)) {
      const t = translateCore(trimmed);
      if (t != null) out = text.replace(trimmed, t);
      else if (!missing.has(trimmed) && !ignoredNames.has(trimmed)) {
        missing.set(trimmed, { page: location.pathname, element: '<canvas>', section: '', sentence: '' });
      }
    }
    root.dataset.poringEsCanvasOut = out;
  });
  try {
    const canvasBridge = document.createElement('script');
    canvasBridge.textContent = `(() => {
      const proto = CanvasRenderingContext2D.prototype;
      const root = document.documentElement;
      const cache = new Map();
      const translate = (text) => {
        if (typeof text !== 'string' || !/[A-Za-z]/.test(text)) return text;
        let out = cache.get(text);
        if (out === undefined) {
          root.dataset.poringEsCanvasIn = text;
          document.dispatchEvent(new CustomEvent('poring-es:canvas'));
          out = root.dataset.poringEsCanvasOut ?? text;
          delete root.dataset.poringEsCanvasIn;
          delete root.dataset.poringEsCanvasOut;
          if (cache.size > 2000) cache.clear();
          cache.set(text, out);
        }
        return out;
      };
      for (const name of ['fillText', 'strokeText', 'measureText']) {
        const original = proto[name];
        proto[name] = function (text, ...rest) { return original.call(this, translate(text), ...rest); };
      }
    })();`;
    (document.head || document.documentElement).appendChild(canvasBridge);
    canvasBridge.remove();
  } catch (e) { /* blocked by the page's security policy: the canvas stays in English */ }

  // 3. Shortcut that needs no console at all: Alt+Shift+U copies the list.
  function toast(message) {
    const box = document.createElement('div');
    box.textContent = message;
    box.style.cssText = 'position:fixed;bottom:16px;right:16px;z-index:2147483647;padding:8px 12px;' +
      'border-radius:6px;background:#222;color:#fff;font:13px sans-serif;box-shadow:0 2px 8px #0006';
    document.documentElement.appendChild(box);
    setTimeout(() => box.remove(), 2500);
  }

  document.addEventListener('keydown', (e) => {
    if (!(e.altKey && e.shiftKey && e.code === 'KeyU')) return;
    e.preventDefault();
    const list = untranslatedList();
    navigator.clipboard.writeText(list.join('\n')).then(
      () => toast(`Poring Clicker ES: ${list.length - 1} textos sin traducir copiados al portapapeles`),
      () => { untranslated(); toast('Poring Clicker ES: no se pudo copiar; la lista está en la consola (F12)'); }
    );
  });

  // 5. Alt+Shift+T: show/hide the totals under the zone list
  document.addEventListener('keydown', (e) => {
    if (!(e.altKey && e.shiftKey && e.code === 'KeyT')) return;
    e.preventDefault();
    showZoneTotals = !showZoneTotals;
    localStorage.setItem(TOTALS_KEY, showZoneTotals ? 'on' : 'off');
    observer.disconnect();
    updateZoneTotals();
    observe();
    toast(`Poring Clicker ES: totales de zonas ${showZoneTotals ? 'activados' : 'desactivados'}`);
  });

  // 4. Alt+Shift+N: names to leave alone (your nick, friends…), comma-separated
  document.addEventListener('keydown', (e) => {
    if (!(e.altKey && e.shiftKey && e.code === 'KeyN')) return;
    e.preventDefault();
    const answer = prompt(
      'Poring Clicker ES: nombres que no se traducen (tu nick, amigos…), separados por comas:',
      [...ignoredNames].join(', ')
    );
    if (answer === null) return;
    const names = answer.split(',').map((n) => n.trim()).filter(Boolean);
    localStorage.setItem(IGNORE_KEY, JSON.stringify(names));
    ignoredNames = new Set(names);
    names.forEach((n) => missing.delete(n));
    toast(`Poring Clicker ES: ${names.length} ${names.length === 1 ? 'nombre guardado' : 'nombres guardados'}`);
  });

  console.log('[Poring Clicker ES] Translator active. Alt+Shift+U copies untranslated text, Alt+Shift+N sets names to ignore.');
})();
