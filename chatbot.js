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
            location: "Salón de Actos del Colegio",
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
            location: "Salón de Actos del Colegio",
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
                "🌲 Bosque → «Juguemos en el Bosque» de Luli Pampín",
                "🌊 Agua → «Bajo del Mar» de La Sirenita",
                "❄️ Hielo y Flores → «¡Suéltalo!» de Frozen (Gisela)",
                "🎉 Final → Coreografía de celebración con todos los personajes"
            ],
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
            title: null,
            date: null,
            time: null,
            participants: null,
            location: "Salón de Actos del Colegio",
            status: "pendiente",
            description: "La obra del tercer trimestre está pendiente. ¡Pronto habrá novedades!"
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

        // Saludos
        if (this.m(msg, ['hola', 'buenas', 'hey', 'saludos', 'ey', 'hi'])) {
            return `¡Hola! Soy <strong>${BOT_NAME}</strong>, el apuntador digital de Nova-tro-s 🎭<br>Estoy aquí para contarte todo sobre nuestras obras. Puedes preguntarme sobre el guion, el reparto, los ensayos, las fechas... ¡lo que quieras!`;
        }

        // Quién eres
        if (this.m(msg, ['quien eres', 'quién eres', 'como te llamas', 'tu nombre', 'que eres'])) {
            return `Soy <strong>${BOT_NAME}</strong> 🎭, el apuntador digital de Nova-tro-s.<br>Como el apuntador de toda la vida... pero sin esconderme en la concha del escenario. ¡Y sé todos los textos de memoria!`;
        }

        // Ayuda
        if (this.m(msg, ['ayuda', 'help', 'que puedes', 'qué puedes', 'que sabes', 'opciones', 'menu', 'menú'])) {
            return this.getHelp();
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
            return this.getZonas();
        }

        // Coreografias
        if (this.m(msg, ['coreografia', 'coreografía', 'baile', 'bailan', 'cancion', 'canción', 'musica', 'música', 'cantan'])) {
            return this.getCoreografias();
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
            return this.getLugar();
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
            return this.getResumen();
        }

        // Programación general / todos los trimestres
        if (this.m(msg, ['programa', 'programacion', 'programación', 'calendario', 'todas las obras', 'trimestres', 'curso'])) {
            return this.getProgramacion();
        }

        // Pregunta por nombre específico de participante
        const persona = this.detectNombreParticipante(msg);
        if (persona) {
            return `${persona.emoji} <strong>${persona.nombre}</strong> interpreta a <strong>${persona.personaje}</strong> en «Los Guardianes del Planeta» (2º trimestre). ¡Un papel genial! 👏`;
        }

        // Respuesta por defecto
        return `Hmmm… no he pillado bien esa pregunta 🤔<br>Pero puedo contarte sobre el <strong>guion</strong>, el <strong>reparto</strong>, las <strong>fechas</strong>, los <strong>ensayos</strong> o las <strong>coreografías</strong>.<br>¿Qué quieres saber? ¡Escríbeme sin miedo! 🎭`;
    }

    // ---- Respuestas específicas ----
    getHelp() {
        return `Soy <strong>${BOT_NAME}</strong>, el apuntador de Nova-tro-s 🎭<br><br>
Puedes preguntarme cosas como:<br>
🗓️ <em>«¿Cuándo es la obra?»</em><br>
👥 <em>«¿Cuántos participantes somos?»</em><br>
🎭 <em>«¿Quién hace de Madre Tierra?»</em><br>
📜 <em>«Cuéntame el guion»</em><br>
🎵 <em>«¿Qué canciones bailan?»</em><br>
🏋️ <em>«¿Cuándo son los ensayos?»</em><br>
🌍 <em>«¿De qué va la obra?»</em><br>
📅 <em>«¿Qué hay en el tercer trimestre?»</em>`;
    }

    getEnsayos() {
        const e = theaterData.ensayos;
        return `🏋️ <strong>Ensayos del 2º Trimestre:</strong><br><br>
📅 Todos los <strong>${e.dia}</strong><br>
⏰ A las <strong>${e.hora}</strong><br>
📍 En el <strong>${e.lugar}</strong><br><br>
¡Todas las familias participantes están convocadas! 💪`;
    }

    getReparto(msg) {
        const t2 = this.getT2();
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
        const g = this.getT2().guionResumen;
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
        const t2 = this.getT2();
        let html = `📜 <strong>Guion resumido – «${t2.title}»</strong><br><br>`;
        t2.actos.forEach(a => { html += `${a}<br><br>`; });
        html += `Puedes preguntarme por una parte concreta: <em>«dime el Acto 1»</em>, <em>«zona agua»</em>, <em>«Acto 3»</em>… 😉`;
        return html;
    }

    getZonas() {
        const t2 = this.getT2();
        let html = `🎬 <strong>Zonas de actuación – «${t2.title}»</strong><br><br>`;
        t2.zonas.forEach(z => { html += `${z}<br>`; });
        return html;
    }

    getCoreografias() {
        const t2 = this.getT2();
        let html = `🎵 <strong>Coreografías – «${t2.title}»</strong><br><br>`;
        t2.coreografias.forEach(c => { html += `${c}<br>`; });
        return html;
    }

    getFecha(msg) {
        const ti = this.detectTrimester(msg);
        if (ti !== null) {
            const perf = theaterData.performances[ti];
            if (perf.status === 'pendiente') return `📅 Aún no hay fecha confirmada para el <strong>${perf.trimester}</strong>. ¡Estate atento a las novedades! ${perf.emoji}`;
            return `📅 <strong>${perf.emoji} ${perf.title}</strong><br>Fecha: <strong>${perf.date}</strong> a las <strong>${perf.time}</strong>`;
        }
        const t2 = this.getT2();
        return `📅 La obra actual es <strong>«${t2.title}»</strong> y se representa el <strong>${t2.date}</strong> a las <strong>${t2.time}</strong> en el ${t2.location}.`;
    }

    getHora(msg) {
        const ti = this.detectTrimester(msg);
        if (ti !== null) {
            const perf = theaterData.performances[ti];
            if (perf.status === 'pendiente') return `⏰ Todavía no hay hora confirmada para el <strong>${perf.trimester}</strong>.`;
            return `⏰ La actuación del <strong>${perf.trimester}</strong> es a las <strong>${perf.time}</strong>.`;
        }
        return `⏰ Normalmente las actuaciones empiezan a las <strong>10:00h</strong> de la mañana. La del 2º trimestre (${this.getT2().date}) también es a las <strong>${this.getT2().time}</strong>.`;
    }

    getParticipantes(msg) {
        const ti = this.detectTrimester(msg);
        if (ti !== null) {
            const perf = theaterData.performances[ti];
            if (perf.status === 'pendiente') return `👥 Todavía no se conoce el número de participantes del <strong>${perf.trimester}</strong>.`;
            return `👥 En el <strong>${perf.trimester}</strong> participan <strong>${perf.participants} familias (adultos)</strong>.`;
        }
        const t2 = this.getT2();
        return `👥 En el <strong>2º trimestre</strong> somos <strong>${t2.participants} participantes</strong> (todos adultos, padres y madres).<br>El 1º y 3º trimestre están pendientes de confirmación.`;
    }

    getLugar() {
        const t2 = this.getT2();
        return `📍 Las actuaciones se realizan en el <strong>${t2.location}</strong>.<br>Los ensayos son en el <strong>${theaterData.ensayos.lugar}</strong>, los ${theaterData.ensayos.dia} a las ${theaterData.ensayos.hora}.`;
    }

    getTitulo(msg) {
        const ti = this.detectTrimester(msg);
        if (ti !== null) {
            const perf = theaterData.performances[ti];
            if (perf.status === 'pendiente') return `${perf.emoji} El título del <strong>${perf.trimester}</strong> aún no está anunciado. ¡Pronto lo sabremos!`;
            return `${perf.emoji} El <strong>${perf.trimester}</strong> se llama <strong>«${perf.title}»</strong>.`;
        }
        let html = `🎭 <strong>Obras del curso ${theaterData.curso}:</strong><br><br>`;
        theaterData.performances.forEach(p => {
            html += `${p.emoji} <strong>${p.trimester.charAt(0).toUpperCase() + p.trimester.slice(1)}:</strong> ${p.title ? `«${p.title}»` : 'Pendiente'}<br>`;
        });
        return html;
    }

    getResumen() {
        const t2 = this.getT2();
        return `🌍 <strong>«${t2.title}»</strong><br><br>
${t2.description}<br><br>
💬 Mensaje de la obra: <em>«${t2.mensaje}»</em><br><br>
📅 ${t2.date} · ⏰ ${t2.time} · 📍 ${t2.location}`;
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
        const t2 = this.getT2();
        return t2.reparto.find(p => msg.includes(p.nombre.toLowerCase())) || null;
    }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
    new TheaterChatbot();
    initContactForm();
});

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
