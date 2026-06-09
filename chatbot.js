// ============================================================
//  APUNTABOT – el apuntador digital de Nova-tro-s 🎭
// ============================================================

const BOT_NAME = "Apuntabot";

const theaterData = {
    curso: "2025-2026",
    ensayos: {
        dia: "jueves",
        hora: "17:00",
        lugar: "Centro de la Juventud"
    },
    performances: [
        {
            trimester: "primer trimestre",
            num: 1,
            emoji: "🍂",
            title: null,
            date: null,
            time: null,
            participants: null,
            location: "Hall de infantil",
            status: "pendiente",
            description: "La obra del primer trimestre está pendiente. ¡Pronto habrá novedades!"
        },
        {
            trimester: "segundo trimestre",
            num: 2,
            emoji: "❄️",
            title: "Los Guardianes del Planeta",
            date: "25 de marzo de 2026",
            time: "10:00h",
            participants: 21,
            location: "Hall de infantil",
            status: "activa",
            description: "Obra educativa sobre el cuidado del medio ambiente. Los peques aprenderán que pequeñas acciones generan grandes cambios. 3 actos de 20 minutos con coreografías por zonas: 🌲 Bosque, 🌊 Agua, ❄️ Hielo y 🌼 Flores.",
            zonas: ["🌲 Bosque (Árboles, Lobos, Linces, Guacamayos)", "🌊 Agua (Peces, Cocodrilos)", "❄️ Hielo (Osos Polares, Pingüinos)", "🌼 Flores (Abejas)"],
            actos: [
                "🎭 Acto 1 – Algo No Va Bien: Cada ecosistema muestra sus problemas ambientales ante el público.",
                "🎭 Acto 2 – La Gran Reunión: Todos los animales buscan solución y descubren que el héroe es... ¡un niño!",
                "🎭 Acto 3 – El Cambio: Las pequeñas acciones del Niño y el Apicultor transforman el planeta. ¡Celebración final!"
            ],
            mensaje: "Pequeños gestos... ¡grandes cambios! ¿Queréis ser Guardianes del Planeta?",
            coreografias: [
                "� Fondo → Música ambiental de fondo (suena durante toda la obra)",
                "🌲 Bosque → «Juguemos en el Bosque» de Luli Pampín",
                "🌊 Agua → «Bajo del Mar» de La Sirenita",
                "❄️ Hielo → «Nanut el Esquimal»",
                "🐝 Abejas → «Abeja Maya»",
                "🎉 Final → «Pequeño planeta, vuelve a sonreír»"
            ],
            musica: {
                zip: "2025-2026/Trimestre2/musica/canciones-guardianes-planeta.zip",
                archivos: [
                    "00-fondo.mpeg – Música de fondo (toda la obra)",
                    "01-bosque.mpeg – Juguemos en el Bosque",
                    "02-agua.mpeg – Bajo del Mar",
                    "03-hielo.mpeg – Nanut el Esquimal",
                    "04-abejas.mpeg – Abeja Maya",
                    "05-final.mpeg – Pequeño planeta, vuelve a sonreír"
                ]
            },
            reparto: [
                { num: 1,  nombre: "Espe",      personaje: "Abeja 1",              emoji: "🐝" },
                { num: 2,  nombre: "Steph",     personaje: "Apicultor",            emoji: "👨‍🌾" },
                { num: 3,  nombre: "Ester",     personaje: "Cocodrilo 1",          emoji: "🐊" },
                { num: 4,  nombre: "Vero",      personaje: "Madre Tierra (Narradora)", emoji: "🌍" },
                { num: 5,  nombre: "Virgi",     personaje: "Guacamayo 1",          emoji: "🦜" },
                { num: 6,  nombre: "Manuela",   personaje: "Abeja Reina",          emoji: "👑" },
                { num: 7,  nombre: "Esme",      personaje: "Guacamayo 2",          emoji: "🦜" },
                { num: 8,  nombre: "Chechu",    personaje: "Pingüino 1",           emoji: "🐧" },
                { num: 9,  nombre: "Soraya",    personaje: "Abeja 2",              emoji: "🐝" },
                { num: 10, nombre: "Rubén",     personaje: "Niño Protagonista",    emoji: "🧒" },
                { num: 11, nombre: "Cristina",  personaje: "Lobo 1",               emoji: "🐺" },
                { num: 12, nombre: "Hanae",     personaje: "Árbol 1",              emoji: "🌳" },
                { num: 13, nombre: "Helena",    personaje: "Oso Polar 1",          emoji: "🐻‍❄️" },
                { num: 14, nombre: "Ana",       personaje: "Oso Polar 2",          emoji: "🐻‍❄️" },
                { num: 15, nombre: "Rogelio",   personaje: "Por asignar",          emoji: "🎭" },
                { num: 16, nombre: "Chary",     personaje: "Lince 1",              emoji: "🐆" },
                { num: 17, nombre: "Estefanía", personaje: "Lince 2",              emoji: "🐆" },
                { num: 18, nombre: "Isa",       personaje: "Árbol 2",              emoji: "🌳" },
                { num: 19, nombre: "Marta",     personaje: "Pingüino 2",           emoji: "🐧" },
                { num: 20, nombre: "Aitana",    personaje: "Pez 1",                emoji: "🐟" },
                { num: 21, nombre: "Sadaf",     personaje: "Pez 2",                emoji: "🐟" }
            ],
            guionResumen: {
                acto1_bosque: [
                    "🌳 Árbol 1 (Hanae): «Buenos días chicos, ¿qué tal estáis? Antes el aire era limpio y fresco.»",
                    "🌳 Árbol 2 (Isa): «Pero ahora… cof cof… no puedo respirar bien.»",
                    "🐺 Lobo 1 (Cristina): «El bosque está muy callado. Demasiado callado. No escucho a los pájaros.»",
                    "🐆 Lince 1 (Chary): «Solo hay 2 árboles, faltan árboles. Y sin árboles, no hay hogar.»",
                    "🦜 Guacamayo 1 (Virgi): «¡Hay humo! Mucho humo. Los árboles se caen.»",
                    "TODOS (Bosque): «¡Algo pasa en nuestra casa!» *(el público lo repite)*"
                ],
                acto1_agua: [
                    "🐟 Pez 1 (Aitana): «¡Emergencia acuática! ¡Hay basura flotando por todas partes!»",
                    "🐊 Cocodrilo 1 (Ester): «¡Yo quiero agua clara para nadar!»",
                    "🐟 Pez 2 (Sadaf): «Las plantas del río están muriendo y nosotros también estamos en peligro.»",
                    "TODOS (Agua): «¡El agua está triste!» *(el público lo repite)*"
                ],
                acto1_hielo_flores: [
                    "🐻‍❄️ Oso Polar 1 (Helena): «¡Tengo mucho calor! Mi casa de hielo se está derritiendo.»",
                    "🐧 Pingüino 1 (Chechu): «El hielo se rompe bajo mis patas.»",
                    "🐝 Abeja 1 (Espe): «Las flores están desapareciendo. Sin flores, no hay néctar. Sin néctar, no hay miel.»",
                    "👑 Abeja Reina (Manuela): «Sin abejas no hay vida.»",
                    "TODOS: «¡Necesitamos ayuda!»"
                ],
                acto2: [
                    "🌍 Madre Tierra (Vero): «El planeta no funciona con magia. Funciona con acciones.»",
                    "🐺 Lobo 1 (Cristina): «¡Que probemos con un superhéroe!»",
                    "🌍 Madre Tierra (Vero): «No. Alguien pequeño.»",
                    "🧒 Niño (Rubén): «¿Yo? Pero soy pequeño.»",
                    "🐆 Lince 1 (Chary): «Pequeño… pero muy valiente.»",
                    "TODOS: «Pequeños gestos… ¡grandes cambios!» *(el público lo repite)*"
                ],
                acto3: [
                    "🧒 Niño (Rubén): «Empiezo yo.» *(recogiendo basura)*",
                    "👨‍🌾 Apicultor (Steph): «Yo cuido a las abejas.»",
                    "🦜 Guacamayo 1 (Virgi): «¡Hay flores! El agua brilla.»",
                    "🐧 Pingüino (Chechu): «Estoy fresquito.»",
                    "🐻‍❄️ Oso Polar 1 (Helena): «El hielo es fuerte otra vez.»",
                    "🧒 Niño (Rubén al público): «¿Nos ayudáis?»",
                    "TODOS: «¡SOMOS LOS GUARDIANES DEL PLANETA!»"
                ]
            }
        },
        {
            trimester: "tercer trimestre",
            num: 3,
            emoji: "🌸",
            title: "Blancanieves y los 7 Enanitos",
            date: "10 de junio de 2026",
            time: "Por confirmar",
            participants: 14,
            location: "Hall de infantil",
            status: "activa",
            description: "Adaptación teatral del cuento clásico para Educación Infantil, con humor, participación del público y mensajes de amistad y ayuda mutua.",
            mensaje: "Amistad, ayuda mutua y cooperación."
            ,actos: [
                "🎭 Acto 1 – El espejo y la huida: La madrastra descubre que Blancanieves es la más bella y la manda al bosque.",
                "🎭 Acto 2 – La casa de los enanitos: Los enanitos encuentran a Blancanieves y deciden ayudarla.",
                "🎭 Acto 3 – La manzana y el despertar: La anciana engaña a Blancanieves y el príncipe la despierta."
            ],
            musica: {
                zip: "2025-2026/Trimestre3/musica-blancanieves-y-los-7-enanitos.zip",
                archivos: [
                    "Ay ho cavar, cavar - Profesores OT.mp3",
                    "Some Day My Prince Will Come.mp3",
                    "Hi-Ho De Blanca Nieves.mp3",
                    "Magic Mirror.mp3",
                    "Overture from Snow White and the Seven Dwarfs.mp3"
                ]
            },
            reparto: [
                { num: 1, nombre: "Chary", personaje: "Narrador", emoji: "🌍" },
                { num: 2, nombre: "Por asignar", personaje: "Blancanieves", emoji: "👧" },
                { num: 3, nombre: "Vero", personaje: "Madrastra", emoji: "👑" },
                { num: 4, nombre: "Por asignar", personaje: "Anciana", emoji: "👵" },
                { num: 5, nombre: "Ana", personaje: "Espejo Mágico", emoji: "🪞" },
                { num: 6, nombre: "Virginia", personaje: "Cazador", emoji: "🏹" },
                { num: 7, nombre: "Por asignar", personaje: "Príncipe Florián", emoji: "🤴" },
                { num: 8, nombre: "Aitana", personaje: "Enanito Tartamudo", emoji: "⛏️" },
                { num: 9, nombre: "Manuela", personaje: "Enanito Gruñón", emoji: "⛏️" },
                { num: 10, nombre: "Estefanía", personaje: "Enanito Comilón", emoji: "⛏️" },
                { num: 11, nombre: "Ester", personaje: "Enanito Miedoso", emoji: "⛏️" },
                { num: 12, nombre: "Isa", personaje: "Enanito Ciego", emoji: "⛏️" },
                { num: 13, nombre: "Sadaf", personaje: "Enanito Llorón", emoji: "⛏️" },
                { num: 14, nombre: "Marta", personaje: "Enanito Dormilón", emoji: "⛏️" }
            ],
            pendientes: ["Blancanieves", "Anciana", "Príncipe Florián"],
            guionResumen: {
                acto1: [
                    "🌍 Narrador: «Érase una vez un reino muy lejano donde vivía Blancanieves.»",
                    "👑 Madrastra: «Espejo, espejito, ¿quién es la más bella de este reino?»",
                    "🪞 Espejo Mágico: «Ahora la más bella es Blancanieves.»",
                    "🏹 Cazador: «Huye lejos y busca un lugar seguro.»"
                ],
                acto2: [
                    "⛏️ Enanito Tartamudo: «¿Quién ha entrado en nuestra casa?»",
                    "⛏️ Enanito Gruñón: «¡Está todo desordenado!»",
                    "👧 Blancanieves: «No tengo dónde ir. Mi madrastra me quiere matar.»",
                    "⛏️ Enanitos: «¡Te quedas con nosotros!»"
                ],
                acto3: [
                    "👵 Anciana: «¡Manzanas ricas! Toma, pruébala.»",
                    "🌍 Narrador: «Blancanieves muerde la manzana y cae al suelo.»",
                    "🤴 Príncipe Florián: «¿Qué ha pasado? ¿Quién es esta bella princesa?»",
                    "🤴 Príncipe Florián: «Soy el príncipe Florián.»"
                ],
                principe: [
                    "🤴 Príncipe Florián: «¿Qué ha pasado? ¿Quién es esta bella princesa?»",
                    "🤴 Príncipe Florián: «Soy el príncipe Florián.»"
                ]
            }
        }
    ]
};

// ============================================================
//  Clase principal – Apuntabot 🎭
// ============================================================
class TheaterChatbot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput    = document.getElementById('chatInput');
        this.sendButton   = document.getElementById('sendButton');
        this.selectedTrimester = null;
        this.initEventListeners();
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    initEventListeners() {
        this.sendButton.addEventListener('click', () => this.handleSend());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSend();
        });
    }

    handleSend() {
        const message = this.chatInput.value.trim();
        if (message === '') return;
        this.addMessage(message, 'user');
        this.chatInput.value = '';
        setTimeout(() => {
            const response = this.processMessage(message);
            this.addMessage(response, 'bot');
        }, 400);
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender === 'user' ? 'user-message' : 'bot-message'}`;

        if (sender === 'user') {
            const p = document.createElement('p');
            p.textContent = text;
            messageDiv.appendChild(p);
        } else {
            if (sender === 'bot') {
                const avatar = document.createElement('span');
                avatar.className = 'bot-avatar';
                avatar.textContent = '🎭';
                messageDiv.appendChild(avatar);
            }
            const bubble = document.createElement('div');
            bubble.className = 'bot-bubble';
            bubble.innerHTML = text;
            messageDiv.appendChild(bubble);
        }

        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    // ---- Utilidades ----
    m(msg, keywords) {
        return keywords.some(k => msg.includes(k));
    }

    getT2() {
        return theaterData.performances[1]; // segundo trimestre (activa)
    }

    getT3() {
        return theaterData.performances[2];
    }

    getPerformanceByIndex(index) {
        return theaterData.performances[index] || null;
    }

    getCurrentPerformance() {
        return this.getT3();
    }

    getSelectedPerformance() {
        if (this.selectedTrimester === null) return null;
        return this.getPerformanceByIndex(this.selectedTrimester);
    }

    getActivePerformance() {
        return this.getSelectedPerformance() || this.getCurrentPerformance();
    }

    setSelectedTrimester(index) {
        this.selectedTrimester = index;
    }

    isTrimesterSelectionMessage(msg) {
        const clean = msg.trim();
        return [
            'segundo trimestre', 'segundo', 'segunda', '2º', 'trimestre 2',
            'tercer trimestre', 'tercero', 'tercer', '3º', 'trimestre 3'
        ].includes(clean);
    }

    getTrimesterChooser() {
        return `Antes de nada, dime sobre qué trimestre quieres información 👇<br><br>
<div class="quick-replies">
    <button class="qr-btn" data-q="Segundo trimestre">❄️ Segundo trimestre</button>
    <button class="qr-btn" data-q="Tercer trimestre">🌸 Tercer trimestre</button>
</div>`;
    }

    getTrimesterMenu(perf) {
        if (!perf) return this.getTrimesterChooser();

        if (perf.num === 2) {
            return `${perf.emoji} <strong>Has elegido ${perf.trimester}</strong>: <strong>«${perf.title}»</strong><br><br>
Puedo enseñarte esto:<br><br>
<div class="quick-replies">
    <button class="qr-btn" data-q="¿Cuándo es la obra del segundo trimestre?">📅 Día del teatro</button>
    <button class="qr-btn" data-q="Dame el reparto completo del segundo trimestre">🎭 Personajes y personas</button>
    <button class="qr-btn" data-q="Cuéntame el guion del Acto 1 del segundo trimestre">📜 Ver guion resumido</button>
    <button class="qr-btn" data-q="Ver guion online del segundo trimestre">📖 Ver guion online</button>
    <button class="qr-btn" data-q="Descargar guion PDF del segundo trimestre">📄 Descargar guion</button>
    <button class="qr-btn" data-q="Descargar canciones del segundo trimestre">🎵 Canciones</button>
</div>`;
        }

        return `${perf.emoji} <strong>Has elegido ${perf.trimester}</strong>: <strong>«${perf.title}»</strong><br><br>
Puedo enseñarte esto:<br><br>
<div class="quick-replies">
    <button class="qr-btn" data-q="¿Cuándo es la obra del tercer trimestre?">📅 Día del teatro</button>
    <button class="qr-btn" data-q="Dame el reparto completo del tercer trimestre">🎭 Personajes y personas</button>
    <button class="qr-btn" data-q="¿Qué personajes faltan por asignar en el tercer trimestre?">🚨 Pendientes por asignar</button>
    <button class="qr-btn" data-q="Cuéntame el guion del Acto 1 de Blancanieves">📜 Ver guion resumido</button>
    <button class="qr-btn" data-q="Ver guion online del tercer trimestre">📖 Ver guion online</button>
    <button class="qr-btn" data-q="Descargar guion PDF del tercer trimestre">📄 Descargar guion</button>
    <button class="qr-btn" data-q="Descargar canciones del tercer trimestre">🎵 Canciones</button>
</div>`;
    }

    getPerformanceForMessage(msg) {
        const ti = this.detectTrimester(msg);
        if (ti !== null) return theaterData.performances[ti];
        if (this.getSelectedPerformance()) return this.getSelectedPerformance();
        if (this.m(msg, ['blancanieves', 'enanito', 'enanitos', 'madrastra', 'espejo', 'principe', 'príncipe', 'cazador', 'anciana'])) return this.getT3();
        if (this.m(msg, ['guardianes', 'planeta', 'madre tierra', 'apicultor', 'abeja', 'bosque', 'agua', 'hielo', 'flores'])) return this.getT2();
        return this.getCurrentPerformance();
    }

    detectTrimester(msg) {
        if (this.m(msg, ['primer', 'primero', '1º', 'trimestre 1'])) return 0;
        if (this.m(msg, ['segundo', 'segunda', '2º', 'trimestre 2'])) return 1;
        if (this.m(msg, ['tercer', 'tercero', '3º', 'trimestre 3'])) return 2;
        return null;
    }

    // ---- Procesamiento de mensajes ----
    processMessage(rawMessage) {
        const msg = rawMessage.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // quitar tildes para comparar

        const trimesterIdx = this.detectTrimester(msg);
        if (trimesterIdx !== null && trimesterIdx > 0) {
            this.setSelectedTrimester(trimesterIdx);
            if (this.isTrimesterSelectionMessage(msg)) {
                return this.getTrimesterMenu(this.getPerformanceByIndex(trimesterIdx));
            }
        }

        // Saludos
        if (this.m(msg, ['hola', 'buenas', 'hey', 'saludos', 'ey', 'hi'])) {
            return `¡Hola! Soy <strong>${BOT_NAME}</strong>, el apuntador digital de Nova-tro-s 🎭<br>Te ayudo con reparto, fechas, guion y materiales.<br><br>${this.getTrimesterChooser()}`;
        }

        // Quién eres
        if (this.m(msg, ['quien eres', 'quién eres', 'como te llamas', 'tu nombre', 'que eres'])) {
            return `Soy <strong>${BOT_NAME}</strong> 🎭, el apuntador digital de Nova-tro-s.<br>Como el apuntador de toda la vida... pero sin esconderme en la concha del escenario. ¡Y sé todos los textos de memoria!`;
        }

        // Ayuda
        if (this.m(msg, ['ayuda', 'help', 'que puedes', 'qué puedes', 'que sabes', 'opciones', 'menu', 'menú'])) {
            const selected = this.getSelectedPerformance();
            return selected ? this.getTrimesterMenu(selected) : this.getHelp();
        }

        if (!this.getSelectedPerformance() && this.m(msg, ['fecha', 'reparto', 'guion', 'texto', 'acto', 'obra', 'personajes', 'pdf', 'descargar', 'ver guion', 'online', 'lugar', 'hora', 'de que va', 'de qué va', 'participantes'])) {
            return this.getTrimesterChooser();
        }

        // Ensayos
        if (this.m(msg, ['ensayo', 'ensayos', 'cuando ensayamos', 'donde ensayamos', 'entreno', 'entrenar'])) {
            return this.getEnsayos();
        }

        // Reparto / quién hace qué
        if (this.m(msg, ['reparto', 'personaje', 'personajes', 'quien hace', 'quién hace', 'actores', 'actrices', 'quien es', 'quién es', 'papel', 'papeles', 'rol', 'cast'])) {
            return this.getReparto(msg);
        }

        // Guion / texto de la obra
        if (this.m(msg, ['guion', 'guión', 'texto', 'dialogo', 'diálogo', 'escena', 'acto', 'actos', 'que dicen', 'qué dicen', 'frases', 'que pasa', 'qué pasa', 'argumento', 'trama', 'historia'])) {
            return this.getGuion(msg);
        }

        // Zonas / partes de la obra
        if (this.m(msg, ['zona', 'zonas', 'bosque', 'agua', 'hielo', 'flores', 'partes'])) {
            return this.getZonas(msg);
        }

        // Coreografias
        if (this.m(msg, ['coreografia', 'coreografía', 'baile', 'bailan', 'cancion', 'canción', 'musica', 'música', 'cantan'])) {
            return this.getCoreografias(msg);
        }

        // Descarga canciones / ZIP
        if (this.m(msg, ['zip', 'mp3', 'mpeg', 'canciones', 'archivo', 'archivos', 'fichero']) || (this.m(msg, ['descarga', 'descargar']) && this.m(msg, ['canciones', 'musica', 'música']))) {
            const perf = this.getPerformanceForMessage(msg);
            if (perf.num === 3) {
                let html = `🎵 <strong>Música de «${perf.title}»</strong><br><br>`;
                html += `Puedes <a href="${perf.musica.zip}" download><strong>descargar el ZIP de música</strong></a> con estos audios:<br><br>`;
                perf.musica.archivos.forEach(a => { html += `📄 ${a}<br>`; });
                html += `<br>También tienes el <a href="2025-2026/Trimestre3/blancanieves-y-los-7-enanitos.html" target="_blank"><strong>guion online</strong></a> y el <a href="2025-2026/Trimestre3/blancanieves-y-los-7-enanitos.pdf" download><strong>PDF</strong></a>.`;
                return html;
            }
            const t2 = this.getT2();
            let html = `🎵 <strong>Canciones de «${t2.title}»</strong><br><br>`;
            html += `Puedes <a href="${t2.musica.zip}" download><strong>descargar el ZIP con todas las canciones</strong></a> (6 archivos):<br><br>`;
            t2.musica.archivos.forEach(a => { html += `📄 ${a}<br>`; });
            html += `<br>También puedes reproducirlas directamente desde el <a href="2025-2026/Trimestre2/los-guardianes-del-planeta.html" target="_blank">guion interactivo</a>, con un botón Play en cada coreografía.`;
            return html;
        }

        if (this.m(msg, ['ver guion online', 'guion online', 'leer guion', 'leer online'])) {
            const perf = this.getPerformanceForMessage(msg);
            const path = perf.num === 3 ? '2025-2026/Trimestre3/blancanieves-y-los-7-enanitos.html' : '2025-2026/Trimestre2/los-guardianes-del-planeta.html';
            return `📖 Puedes ver el guion online de <strong>«${perf.title}»</strong> aquí:<br><br><a href="${path}" target="_blank"><strong>Abrir guion online</strong></a>`;
        }

        if (this.m(msg, ['pdf', 'descargar guion', 'guion pdf'])) {
            const perf = this.getPerformanceForMessage(msg);
            const path = perf.num === 3 ? '2025-2026/Trimestre3/blancanieves-y-los-7-enanitos.pdf' : '2025-2026/Trimestre2/los-guardianes-del-planeta.pdf';
            return `📄 Puedes descargar el PDF de <strong>«${perf.title}»</strong> aquí:<br><br><a href="${path}" download><strong>Descargar guion en PDF</strong></a>`;
        }

        // Fecha / cuándo
        if (this.m(msg, ['cuando', 'cuándo', 'fecha', 'dia de', 'día de', 'cuando es'])) {
            return this.getFecha(msg);
        }

        // Participantes / cuántos somos
        if (this.m(msg, ['cuantos', 'cuántos', 'participantes', 'familias', 'personas', 'somos', 'cuanta gente', 'cuánta gente'])) {
            return this.getParticipantes(msg);
        }

        // Dónde es / lugar
        if (this.m(msg, ['donde', 'dónde', 'lugar', 'ubicacion', 'ubicación', 'sitio', 'colegio', 'salon', 'salón'])) {
            return this.getLugar(msg);
        }

        // Hora
        if (this.m(msg, ['hora', 'horario', 'que hora', 'a que hora', 'cuando empieza'])) {
            return this.getHora(msg);
        }

        // Título de la obra
        if (this.m(msg, ['titulo', 'título', 'nombre de la obra', 'como se llama', 'cómo se llama', 'que obra', 'qué obra'])) {
            return this.getTitulo(msg);
        }

        // Resumen / de qué va
        if (this.m(msg, ['resume', 'resumen', 'de que va', 'de qué va', 'sobre que', 'sobre qué', 'que cuenta', 'qué cuenta', 'mensaje'])) {
            return this.getResumen(msg);
        }

        // Programación general / todos los trimestres
        if (this.m(msg, ['programa', 'programacion', 'programación', 'calendario', 'todas las obras', 'trimestres', 'curso'])) {
            return this.getProgramacion();
        }

        // Pregunta por nombre específico de participante
        const persona = this.detectNombreParticipante(msg);
        if (persona) {
            return `${persona.emoji} <strong>${persona.nombre}</strong> interpreta a <strong>${persona.personaje}</strong> en «${persona.obra}». ¡Un papel genial! 👏`;
        }

        // Respuesta por defecto
        const selected = this.getSelectedPerformance();
        if (selected) return this.getTrimesterMenu(selected);
        return this.getTrimesterChooser();
    }

    // ---- Respuestas específicas ----
    getHelp() {
        return `Soy <strong>${BOT_NAME}</strong>, el apuntador de Nova-tro-s 🎭<br><br>${this.getTrimesterChooser()}`;
    }

    getEnsayos() {
        const e = theaterData.ensayos;
        const current = this.getActivePerformance();
        return `🏋️ <strong>Ensayos de «${current.title}»</strong><br><br>
📅 Todos los <strong>${e.dia}</strong><br>
⏰ A las <strong>${e.hora}</strong><br>
📍 En el <strong>${e.lugar}</strong><br><br>
¡Todas las familias participantes están convocadas! 💪`;
    }

    getReparto(msg) {
        const perf = this.getPerformanceForMessage(msg);
        if (!perf.reparto) return `🎭 Aún no tengo el reparto cargado de <strong>${perf.title}</strong>.`;

        if (perf.num === 3) {
            if (this.m(msg, ['faltan', 'pendientes', 'por asignar', 'vacantes'])) {
                let html = `🚨 <strong>Personajes pendientes en «${perf.title}»</strong><br><br>`;
                perf.pendientes.forEach(p => { html += `🔴 ${p}<br>`; });
                return html;
            }

            const personajesBuscar = {
                'narrador': 1,
                'blancanieves': 2,
                'madrastra': 3,
                'anciana': 4,
                'espejo': 5, 'espejo magico': 5, 'espejo mágico': 5,
                'cazador': 6,
                'principe': 7, 'príncipe': 7, 'florian': 7, 'florián': 7,
                'tartamudo': 8,
                'grunon': 9, 'gruñon': 9, 'gruñón': 9,
                'comilon': 10, 'comilón': 10,
                'miedoso': 11,
                'ciego': 12,
                'lloron': 13, 'llorón': 13,
                'dormilon': 14, 'dormilón': 14
            };

            for (const [clave, idx] of Object.entries(personajesBuscar)) {
                if (msg.includes(clave)) {
                    const p = perf.reparto[idx - 1];
                    if (p.nombre.toLowerCase() === 'por asignar') {
                        return `${p.emoji} <strong>${p.personaje}</strong> → <span style="color:#d32f2f;"><strong>Por asignar</strong></span>`;
                    }
                    return `${p.emoji} <strong>${p.personaje}</strong> → lo hace <strong>${p.nombre}</strong> 👏`;
                }
            }

            let html = `🎭 <strong>Reparto completo «${perf.title}»</strong><br>${perf.trimester.charAt(0).toUpperCase() + perf.trimester.slice(1)} · ${perf.participants} participantes<br><br>`;
            perf.reparto.forEach(p => {
                const nombre = p.nombre.toLowerCase() === 'por asignar'
                    ? `<span style="color:#d32f2f;"><strong>Por asignar</strong></span>`
                    : `<strong>${p.nombre}</strong>`;
                html += `${p.emoji} ${nombre} → ${p.personaje}<br>`;
            });
            html += `<br>🚨 Pendientes: ${perf.pendientes.join(', ')}`;
            return html;
        }

        const t2 = perf;
        // ¿Busca personaje concreto?
        const personajesBuscar = {
            'madre tierra': 4, 'narradora': 4, 'narradora': 4,
            'arbol 1': 12, 'árbol 1': 12,
            'arbol 2': 18, 'árbol 2': 18,
            'lobo': 11,
            'lince 1': 16, 'lince 2': 17,
            'guacamayo 1': 5, 'guacamayo 2': 7,
            'pez 1': 20, 'pez 2': 21,
            'cocodrilo': 3,
            'oso polar 1': 13, 'oso polar 2': 14,
            'pingüino 1': 8, 'pinguino 1': 8,
            'pingüino 2': 19, 'pinguino 2': 19,
            'abeja 1': 1, 'abeja 2': 9,
            'abeja reina': 6, 'reina': 6,
            'apicultor': 2,
            'niño': 10, 'nino': 10, 'protagonista': 10
        };
        for (const [clave, idx] of Object.entries(personajesBuscar)) {
            if (msg.includes(clave)) {
                const p = t2.reparto[idx - 1];
                return `${p.emoji} <strong>${p.personaje}</strong> → lo hace <strong>${p.nombre}</strong> 👏`;
            }
        }
        // Reparto completo
        let html = `🎭 <strong>Reparto completo «Los Guardianes del Planeta»</strong><br>2º Trimestre 2025-2026 · ${t2.participants} participantes<br><br>`;
        t2.reparto.forEach(p => {
            html += `${p.emoji} <strong>${p.nombre}</strong> → ${p.personaje}<br>`;
        });
        return html;
    }

    getGuion(msg) {
        const perf = this.getPerformanceForMessage(msg);
        if (perf.num === 3) {
            const g = perf.guionResumen;
            if (this.m(msg, ['principe', 'príncipe', 'florian', 'florián'])) {
                return `<strong>🤴 Texto del Príncipe Florián</strong><br><br>${g.principe.join('<br>')}<br><br>En el guion actual tiene <strong>2 intervenciones</strong>.`;
            }
            if (this.m(msg, ['acto 1', 'acto1', 'primero', 'primer acto'])) {
                return `<strong>🎭 Acto 1 – El espejo y la huida</strong><br><br>${g.acto1.join('<br>')}`;
            }
            if (this.m(msg, ['acto 2', 'acto2', 'segundo acto'])) {
                return `<strong>🎭 Acto 2 – La casa de los enanitos</strong><br><br>${g.acto2.join('<br>')}`;
            }
            if (this.m(msg, ['acto 3', 'acto3', 'tercer acto', 'final', 'manzana'])) {
                return `<strong>🎭 Acto 3 – La manzana y el despertar</strong><br><br>${g.acto3.join('<br>')}`;
            }

            let html = `📜 <strong>Guion resumido – «${perf.title}»</strong><br><br>`;
            perf.actos.forEach(a => { html += `${a}<br><br>`; });
            html += `Puedes preguntarme por <em>«Acto 1»</em>, <em>«Acto 2»</em>, <em>«Acto 3»</em> o <em>«texto del príncipe»</em>.`;
            return html;
        }

        const g = perf.guionResumen;
        if (this.m(msg, ['acto 1', 'acto1', 'primero', 'primer acto', 'bosque'])) {
            return `<strong>🌲 Acto 1 – Zona Bosque</strong><br><br>${g.acto1_bosque.join('<br>')}`;
        }
        if (this.m(msg, ['agua', 'rio', 'río', 'pez', 'peces', 'cocodrilo'])) {
            return `<strong>🌊 Acto 1 – Zona Agua</strong><br><br>${g.acto1_agua.join('<br>')}`;
        }
        if (this.m(msg, ['hielo', 'oso polar', 'pinguino', 'pingüino', 'abeja', 'flores'])) {
            return `<strong>❄️🌼 Acto 1 – Hielo y Flores</strong><br><br>${g.acto1_hielo_flores.join('<br>')}`;
        }
        if (this.m(msg, ['acto 2', 'acto2', 'reunion', 'reunión', 'gran reunion', 'niño', 'small actions'])) {
            return `<strong>🎭 Acto 2 – La Gran Reunión</strong><br><br>${g.acto2.join('<br>')}`;
        }
        if (this.m(msg, ['acto 3', 'acto3', 'cambio', 'final', 'guardianes'])) {
            return `<strong>🎭 Acto 3 – El Cambio</strong><br><br>${g.acto3.join('<br>')}`;
        }
        // Resumen de los 3 actos
        let html = `📜 <strong>Guion resumido – «${perf.title}»</strong><br><br>`;
        perf.actos.forEach(a => { html += `${a}<br><br>`; });
        html += `Puedes preguntarme por una parte concreta: <em>«dime el Acto 1»</em>, <em>«zona agua»</em>, <em>«Acto 3»</em>… 😉`;
        return html;
    }

    getZonas(msg = '') {
        const perf = this.getPerformanceForMessage(msg);
        if (!perf.zonas) {
            return `🎬 <strong>«${perf.title}»</strong> no está organizada por zonas como la obra del segundo trimestre. Aquí la obra va por <strong>3 actos</strong>.`;
        }
        let html = `🎬 <strong>Zonas de actuación – «${perf.title}»</strong><br><br>`;
        perf.zonas.forEach(z => { html += `${z}<br>`; });
        return html;
    }

    getCoreografias(msg = '') {
        const perf = this.getPerformanceForMessage(msg);
        if (!perf.coreografias) {
            if (perf.musica?.zip) {
                let html = `🎵 En <strong>«${perf.title}»</strong> no hay coreografías cargadas, pero sí música disponible.<br><br>`;
                html += `Puedes <a href="${perf.musica.zip}" download><strong>descargar el ZIP de música</strong></a>.<br><br>`;
                if (perf.musica.archivos?.length) {
                    html += `<strong>Incluye:</strong><br>`;
                    perf.musica.archivos.forEach(a => { html += `📄 ${a}<br>`; });
                }
                return html;
            }
            return `🎵 En <strong>«${perf.title}»</strong> no tengo coreografías específicas cargadas. Si queréis, puedo contaros el reparto, el resumen por actos o qué personajes faltan por asignar.`;
        }
        let html = `🎵 <strong>Coreografías y canciones – «${perf.title}»</strong><br><br>`;
        perf.coreografias.forEach(c => { html += `${c}<br>`; });
        html += `<br>💾 <strong>¿Quieres las canciones?</strong> Puedes reproducirlas directamente desde el <a href="2025-2026/Trimestre2/los-guardianes-del-planeta.html" target="_blank">guion interactivo</a> o <a href="${perf.musica.zip}" download>descargar el ZIP con todas</a>.`;
        return html;
    }

    getFecha(msg) {
        const ti = this.detectTrimester(msg);
        if (ti !== null) {
            const perf = theaterData.performances[ti];
            if (perf.status === 'pendiente') return `📅 Aún no hay fecha confirmada para el <strong>${perf.trimester}</strong>. ¡Estate atento a las novedades! ${perf.emoji}`;
            return `📅 <strong>${perf.emoji} ${perf.title}</strong><br>Fecha: <strong>${perf.date}</strong> a las <strong>${perf.time}</strong>`;
        }
        const current = this.getActivePerformance();
        return `📅 La obra seleccionada es <strong>«${current.title}»</strong> y se representa el <strong>${current.date}</strong> a las <strong>${current.time}</strong> en el ${current.location}.`;
    }

    getHora(msg) {
        const ti = this.detectTrimester(msg);
        if (ti !== null) {
            const perf = theaterData.performances[ti];
            if (perf.status === 'pendiente') return `⏰ Todavía no hay hora confirmada para el <strong>${perf.trimester}</strong>.`;
            return `⏰ La actuación del <strong>${perf.trimester}</strong> es a las <strong>${perf.time}</strong>.`;
        }
        const current = this.getActivePerformance();
        return `⏰ La hora de <strong>«${current.title}»</strong> es <strong>${current.time}</strong>.`;
    }

    getParticipantes(msg) {
        const ti = this.detectTrimester(msg);
        if (ti !== null) {
            const perf = theaterData.performances[ti];
            if (perf.status === 'pendiente') return `👥 Todavía no se conoce el número de participantes del <strong>${perf.trimester}</strong>.`;
            return `👥 En el <strong>${perf.trimester}</strong> participan <strong>${perf.participants} familias (adultos)</strong>.`;
        }
        const current = this.getActivePerformance();
        return `👥 En <strong>«${current.title}»</strong> participan <strong>${current.participants} familias (adultos)</strong>.`;
    }

    getLugar(msg) {
        const ti = this.detectTrimester(msg);
        const current = ti !== null ? theaterData.performances[ti] : this.getActivePerformance();
        return `📍 La actuación de <strong>«${current.title}»</strong> será en el <strong>${current.location}</strong>.<br>Los ensayos son en el <strong>${theaterData.ensayos.lugar}</strong>, los ${theaterData.ensayos.dia} a las ${theaterData.ensayos.hora}.`;
    }

    getTitulo(msg) {
        const ti = this.detectTrimester(msg);
        if (ti !== null) {
            const perf = theaterData.performances[ti];
            if (perf.status === 'pendiente') return `${perf.emoji} El título del <strong>${perf.trimester}</strong> aún no está anunciado. ¡Pronto lo sabremos!`;
            return `${perf.emoji} El <strong>${perf.trimester}</strong> se llama <strong>«${perf.title}»</strong>.`;
        }
        const current = this.getActivePerformance();
        if (this.getSelectedPerformance()) {
            return `${current.emoji} La obra del <strong>${current.trimester}</strong> es <strong>«${current.title}»</strong>.`;
        }
        let html = `📅 <strong>Programación ${theaterData.curso}:</strong><br><br>`;
        theaterData.performances.forEach(p => {
            if (p.status === 'pendiente') {
                html += `${p.emoji} <strong>${p.trimester.charAt(0).toUpperCase() + p.trimester.slice(1)}:</strong> Pendiente<br>`;
            } else {
                html += `${p.emoji} <strong>${p.trimester.charAt(0).toUpperCase() + p.trimester.slice(1)}:</strong> «${p.title}» — ${p.date}<br>`;
            }
        });
        html += `<br>${this.getTrimesterChooser()}`;
        return html;
    }

    getResumen(msg) {
        const perf = this.getPerformanceForMessage(msg);
        return `${perf.emoji} <strong>«${perf.title}»</strong><br><br>
${perf.description}<br><br>
💬 Mensaje de la obra: <em>«${perf.mensaje || 'Amistad y cooperación.'}»</em><br><br>
📅 ${perf.date} · ⏰ ${perf.time} · 📍 ${perf.location}`;
    }

    getProgramacion() {
        let html = `📅 <strong>Programación ${theaterData.curso}:</strong><br><br>`;
        theaterData.performances.forEach(p => {
            if (p.status === 'pendiente') {
                html += `${p.emoji} <strong>${p.trimester.charAt(0).toUpperCase() + p.trimester.slice(1)}:</strong> Pendiente<br>`;
            } else {
                html += `${p.emoji} <strong>${p.trimester.charAt(0).toUpperCase() + p.trimester.slice(1)}:</strong> «${p.title}» — ${p.date} a las ${p.time}<br>`;
            }
        });
        return html;
    }

    detectNombreParticipante(msg) {
        const performances = [];
        const selected = this.getSelectedPerformance();
        const current = this.getCurrentPerformance();

        if (selected) performances.push(selected);
        if (!performances.includes(current)) performances.push(current);
        theaterData.performances.forEach(perf => {
            if (perf?.reparto && !performances.includes(perf)) performances.push(perf);
        });

        for (const perf of performances) {
            const p = perf.reparto ? perf.reparto.find(persona => msg.includes(persona.nombre.toLowerCase()) && persona.nombre.toLowerCase() !== 'por asignar') : null;
            if (p) return { ...p, obra: perf.title };
        }

        return null;
    }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new TheaterChatbot();
    initContactForm();
    initApuntabotToggle();
    initQuickReplies(chatbot);
});

// Lógica del widget flotante (abrir / cerrar)
function initApuntabotToggle() {
    const panel  = document.getElementById('apuntabot-panel');
    const toggle = document.getElementById('apuntabot-toggle');
    const close  = document.getElementById('apuntabot-close');
    const input  = document.getElementById('chatInput');

    if (!panel || !toggle) return;

    toggle.addEventListener('click', () => {
        const isHidden = panel.getAttribute('aria-hidden') === 'true';
        panel.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
        if (isHidden && input) setTimeout(() => input.focus(), 250);
    });

    if (close) {
        close.addEventListener('click', () => {
            panel.setAttribute('aria-hidden', 'true');
        });
    }
}

// Botones de pregunta rápida (quick-reply)
function initQuickReplies(chatbot) {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.qr-btn');
        if (!btn) return;
        const question = btn.dataset.q;
        if (!question) return;
        // Enviar como si fuera escrito por el usuario
        chatbot.addMessage(question, 'user');
        setTimeout(() => {
            const response = chatbot.processMessage(question);
            chatbot.addMessage(response, 'bot');
        }, 350);
        // Abrir panel si estaba cerrado
        const panel = document.getElementById('apuntabot-panel');
        if (panel) panel.setAttribute('aria-hidden', 'false');
        // Scroll al fondo
        const msgs = document.getElementById('chatMessages');
        if (msgs) setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 400);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Constants for form submission timing
    const FORM_SUBMISSION_DELAY_MS = 1000;
    const MESSAGE_HIDE_DELAY_MS = 5000;
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;
            
            // Display sending message
            formMessage.className = 'form-message';
            formMessage.textContent = 'Enviando mensaje...';
            formMessage.classList.add('success');
            
            // Simulate server delay for form submission
            setTimeout(() => {
                formMessage.textContent = '¡Gracias por tu interés, ' + name + '! Te contactaremos pronto por email.';
                contactForm.reset();
                
                // Hide success message after delay
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, MESSAGE_HIDE_DELAY_MS);
            }, FORM_SUBMISSION_DELAY_MS);
        });
    }
}
