// ==UserScript==
// @name         Poring Clicker en español (SpringRO)
// @namespace    https://springro.com/
// @version      1.13.2
// @description  Translates the SpringRO Poring Clicker UI into Spanish on the fly.
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NCA2NCc+PHBhdGggZD0nTTMyIDhjMyAwIDQgMyA3IDYgMTEgMyAxOSAxMyAxOSAyNiAwIDEyLTEyIDE4LTI2IDE4UzYgNTIgNiA0MGMwLTEzIDgtMjMgMTktMjYgMy0zIDQtNiA3LTZ6JyBmaWxsPScjZjlhOGM0JyBzdHJva2U9JyNjMjQ1NmUnIHN0cm9rZS13aWR0aD0nMycvPjxjaXJjbGUgY3g9JzI0JyBjeT0nMzYnIHI9JzMuNScvPjxjaXJjbGUgY3g9JzQwJyBjeT0nMzYnIHI9JzMuNScvPjxwYXRoIGQ9J00yNyA0NHE1IDUgMTAgMCcgc3Ryb2tlPScjMDAwJyBzdHJva2Utd2lkdGg9JzIuNScgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8+PC9zdmc+
// @match        https://springro.com/clicker*
// @match        https://springro.com/account*
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
      '¡Haz clic en los monstruos, recoge botín, refina armas y escala en la clasificación!',
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
    'Ranks': 'Clasificación',
    'Leaderboard': 'Clasificación',
    'Refresh leaderboard': 'Actualizar clasificación',
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
    'Enchanting adds a random bonus stat to your equipment':
      'Encantar añade una bonificación aleatoria a tu equipo',
    'Farm boss shards to enhance!': '¡Consigue fragmentos de jefe para mejorar!',
    'Need materials from monster drops!': '¡Necesitas materiales del botín de los monstruos!',
    'Materials': 'Materiales',
    'Card Slots (': 'Ranuras de carta (',
    'Reroll (': 'Volver a tirar (',
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
    'Pet Arena:': 'Arena de mascotas:',
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
      'Aumenta la bonificación de zeny y los PV en la Arena de mascotas/PvP/WoE',
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
      'Cartas, multiplicador de prestigio, mejoras Kafra, monedas de la Arena de mascotas, Coronas de campeón y granja',
    'Stats, stat points, kills, mob tier, equipment, inventory, pets, pet evolutions, expeditions, Pet Arena progress, WoE team and waiting-line pledges':
      'Atributos, puntos de atributo, bajas, nivel de monstruos, equipo, inventario, mascotas, evoluciones de mascotas, expediciones, progreso en la Arena de mascotas, equipo de WoE y reservas en la cola de espera',
    'Kafra': 'Kafra',
    'Kafra Auto-Attack': 'Autoataque Kafra',
    'Kafra Storage': 'Almacén Kafra',
    'Kafra Vault': 'Bóveda Kafra',
    'Card Binder': 'Carpeta de cartas',
    'Pet Kennel': 'Caseta de mascotas',
    'Weapon Rack': 'Armero',
    'Supply Depot': 'Depósito de suministros',
    'The Workshop': 'El taller',
    'Training Grounds': 'Campo de entrenamiento',
    'Lucky Charm': 'Amuleto de la suerte',
    'Kafra Lucky Charm': 'Amuleto de la suerte Kafra',
    'Guilds & MVP Raids': 'Clanes e incursiones MVP',
    'PvP Auto Arena': 'Arena PvP automática',
    'Pet Arena': 'Arena de mascotas',
    'Dungeon Expeditions': 'Expediciones a mazmorras',
    'Zone Events': 'Eventos de zona',
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
    'Pet Arena Auto-Fighter': 'Autocombate en la Arena de mascotas',
    'Party System': 'Sistema de grupos',

    // Pets
    'Feed': 'Alimentar',
    'feeds (': 'comidas (',
    'Evolve': 'Evolucionar',
    'Evolve to': 'Evoluciona a',
    'Feed favorite food to level up. Max-level pets can evolve with materials + zeny for new forms and abilities.':
      'Dales su comida favorita para que suban de nivel. Las mascotas de nivel máximo pueden evolucionar con materiales + zeny para conseguir nuevas formas y habilidades.',
    'Aqua Shield': 'Escudo acuático',
    'Banana Barrage': 'Lluvia de plátanos',
    'Battle Charge': 'Carga de batalla',
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
    'Shiny': 'Shiny',

    // MVP encounter: start, banners and boss lines
    'Start Encounter': 'Empezar combate',
    'Starting...': 'Empezando...',
    'Go!': '¡Ya!',
    'Full Combo!': '¡Combo completo!',
    'Copy invite link': 'Copiar enlace de invitación',
    'Orc Village': 'Aldea Orca',
    'Orc Hero Bellows A War Cry': 'Orc Hero lanza un grito de guerra',
    'The Tyrant Is Felled': 'El tirano ha caído',
    'The Tiger Falls Silent': 'El tigre enmudece',
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
    'Mastering': 'Dominando',
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
    'drops': 'botín',
    'pet dps': 'DPS de mascotas',
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
    [/^Cost(?::\s*|\s+)(.+)$/i, 'Coste: $1'],
    [/^Reroll slots \((.+?)\)\. Cost: (.+)$/i, 'Volver a tirar ranuras ($1). Coste: $2'],
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
    [/^([\d.,]+) items?$/i, (_, n) => `${n} ${n === '1' ? 'objeto' : 'objetos'}`],
    [/^([\d.,]+)[–-]([\d.,]+) characters: English letters, numbers or symbols\. No spaces, other whitespace or double quotes\.$/i,
      '$1–$2 caracteres: letras del alfabeto inglés, números o símbolos. Sin espacios de ningún tipo ni comillas dobles.'],
    [/^(.+): waiting$/, '$1: esperando'],
    [/^(.+) joined the party\.$/, '$1 se ha unido al grupo.'],
    [/^([\d.,]+) active$/i, (_, n) => `${n} ${n === '1' ? 'activo' : 'activos'}`],
    [/^(.+) left the party\.$/, '$1 ha salido del grupo.'],
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
    [/^Lv\.(\s*)([\d.,]+) (.+)$/, (_, sp, n, cls) => {
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
    [/^Claim All Rewards \((.+)\)$/i, 'Reclamar todas las recompensas ($1)'],
    [/^Sell: (.+) each$/i, 'Venta: $1 cada uno'],
    [/^Sell All \((.+)\)$/i, 'Vender todo ($1)'],
    [/^Sell ([\d.,]+) \((.+)\)$/i, 'Vender $1 ($2)'],
    [/^Use: (.+?) \((.+)\)$/i, (_, x, d) => `Uso: ${tr(x)} (${d})`],
    [/^Pet Food: (.+?) \((.+)\)$/i, (_, x, d) => `Comida de mascota: ${tr(x)} (${d})`],
    [/^Active: (.+)$/i, (_, x) => 'Activo: ' + tr(x)],
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
    [/^Pet Arena \((.+)\)$/i, (_, tier) => `Arena de mascotas (${ARENA_TIERS[tier] ?? tier})`],
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

    // Stat bonuses: "+5% Crit", "+20 DPS", "-15% purchase costs"
    [/^([+\-][\d.,]+%?) (.+?)( \([\d.,]+x\))?$/, (_, n, term, times = '') => {
      const t = BONUS[term.toLowerCase()];
      return t ? `${n} ${t}${times}` : null;
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
  const MAX_TRACKED = 5000;
  const DICTIONARY_VALUES = new Set(Object.values(DICTIONARY));
  const known = new Set(DICTIONARY_VALUES); // Spanish output, never re-translated
  const missing = new Set();

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

  function translateText(original) {
    const trimmed = original.trim();
    // Damage pop-ups ("1230!") get the Spanish opening mark
    if (/^[\d.,]+[kKMB]?!$/.test(trimmed)) return original.replace(trimmed, () => '¡' + trimmed);
    if (!trimmed || !/[A-Za-z]/.test(trimmed) || NUMERIC.test(trimmed) || known.has(trimmed)) {
      return null;
    }
    const out = translateCore(trimmed);
    if (out == null) {
      // Single letters (grades, keys) and text already in Spanish aren't worth listing
      if (!/^[A-Za-z]$/.test(trimmed) && !/[áéíóúüñÁÉÍÓÚÜÑ¡¿]/.test(trimmed)) remember(missing, trimmed);
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

  // Player and guild names in the leaderboard: the name right after the rank badge
  const isLeaderboardName = (el) =>
    el.matches('.flex-1.truncate') &&
    !!el.previousElementSibling && el.previousElementSibling.matches('.w-5.h-5');

  // Party member names: the button right above "Lv.31 Swordsman"
  const isPartyMemberName = (el) =>
    el.tagName === 'BUTTON' && el.matches('.truncate') &&
    !!el.nextElementSibling && /^(Lv|Nv)\.\s*\d/.test(el.nextElementSibling.textContent.trim());

  const isPlayerText = (el) => isPlayerChatRow(el) || isPartyName(el) || isLeaderboardName(el);

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
    const translated = translateText(node.nodeValue);
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
      const translated = translateText(value);
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
  translateTitle();
  translateTree(document.body);
  observe();

  const untranslatedList = () => [...missing].sort();

  function untranslated() {
    const list = untranslatedList();
    console.log(
      'Untranslated strings (' + list.length + '). Copy the ones you want into DICTIONARY:\n\n' +
        list.map((t) => `    ${JSON.stringify(t)}: '',`).join('\n')
    );
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
      console.log('Untranslated strings (' + list.length + '):\\n\\n' + list.join('\\n'));
      return list;
    };`;
    (document.head || document.documentElement).appendChild(bridge);
    bridge.remove();
  } catch (e) { /* the page's security policy may block it: use the shortcut */ }

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
      () => toast(`Poring Clicker ES: ${list.length} textos sin traducir copiados al portapapeles`),
      () => { untranslated(); toast('Poring Clicker ES: no se pudo copiar; la lista está en la consola (F12)'); }
    );
  });

  console.log('[Poring Clicker ES] Translator active. Alt+Shift+U copies untranslated text, or run untranslated() in the console.');
})();
