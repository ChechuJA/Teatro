// Theater data structure
const theaterData = {
    performances: [
        {
            trimester: "primer trimestre",
            title: "El Bosque Mágico",
            date: "15 de Diciembre, 2023",
            time: "10:00h",
            participants: 12,
            location: "Salón de Actos del Colegio",
            description: "Una aventura mágica donde los animales del bosque aprenden sobre la amistad y el trabajo en equipo."
        },
        {
            trimester: "segundo trimestre",
            title: "Piratas en Busca del Tesoro",
            date: "20 de Marzo, 2024",
            time: "10:00h",
            participants: 10,
            location: "Salón de Actos del Colegio",
            description: "Los pequeños piratas emprenden una emocionante búsqueda del tesoro aprendiendo sobre valores y compañerismo."
        },
        {
            trimester: "tercer trimestre",
            title: "El Viaje a las Estrellas",
            date: "15 de Junio, 2024",
            time: "10:00h",
            participants: 11,
            location: "Salón de Actos del Colegio",
            description: "Una aventura espacial que enseña a los peques sobre el universo, los planetas y la importancia de soñar."
        }
    ]
};

// Chatbot logic
class TheaterChatbot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendButton = document.getElementById('sendButton');
        
        this.initEventListeners();
    }

    // Escape HTML to prevent XSS attacks
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    initEventListeners() {
        this.sendButton.addEventListener('click', () => this.handleSend());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSend();
            }
        });
    }

    handleSend() {
        const message = this.chatInput.value.trim();
        if (message === '') return;

        // Display user message
        this.addMessage(message, 'user');
        
        // Clear input
        this.chatInput.value = '';

        // Process and respond
        setTimeout(() => {
            const response = this.processMessage(message);
            this.addMessage(response, 'bot');
        }, 500);
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender === 'user' ? 'user-message' : 'bot-message'}`;
        
        if (typeof text === 'string') {
            // Escape HTML for user messages to prevent XSS
            if (sender === 'user') {
                const p = document.createElement('p');
                p.textContent = text;
                messageDiv.appendChild(p);
            } else {
                // Bot messages can contain safe HTML
                messageDiv.innerHTML = `<p>${text}</p>`;
            }
        } else {
            messageDiv.appendChild(text);
        }
        
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    processMessage(message) {
        const lowerMessage = message.toLowerCase();

        // Check for greetings
        if (this.matchesPattern(lowerMessage, ['hola', 'buenos días', 'buenas tardes', 'hey', 'saludos'])) {
            return '¡Hola! ¿En qué puedo ayudarte? Pregúntame sobre nuestras obras de teatro.';
        }

        // Check for help
        if (this.matchesPattern(lowerMessage, ['ayuda', 'help', 'qué puedes hacer', 'que puedes hacer'])) {
            return 'Puedo ayudarte con información sobre:<br>- Fechas de las actuaciones<br>- Títulos de las obras<br>- Número de participantes<br>- Ubicación de las actuaciones<br>- Horarios<br><br>¡Hazme cualquier pregunta!';
        }

        // Check for date queries
        if (this.matchesPattern(lowerMessage, ['cuándo', 'cuando', 'fecha', 'día', 'dia'])) {
            return this.getDateInfo(lowerMessage);
        }

        // Check for participant queries
        if (this.matchesPattern(lowerMessage, ['cuántos', 'cuantos', 'participantes', 'familias', 'personas'])) {
            return this.getParticipantInfo(lowerMessage);
        }

        // Check for title queries
        if (this.matchesPattern(lowerMessage, ['título', 'titulo', 'nombre', 'obra', 'llamada'])) {
            return this.getTitleInfo(lowerMessage);
        }

        // Check for location queries
        if (this.matchesPattern(lowerMessage, ['dónde', 'donde', 'lugar', 'ubicación', 'ubicacion', 'sitio'])) {
            return this.getLocationInfo(lowerMessage);
        }

        // Check for time queries
        if (this.matchesPattern(lowerMessage, ['qué hora', 'que hora', 'hora', 'horario'])) {
            return this.getTimeInfo(lowerMessage);
        }

        // Check for all performances
        if (this.matchesPattern(lowerMessage, ['todas', 'todos', 'programación', 'programacion', 'calendario'])) {
            return this.getAllPerformances();
        }

        // Check for specific trimester
        const trimester = this.detectTrimester(lowerMessage);
        if (trimester) {
            return this.getPerformanceInfo(trimester);
        }

        // Default response
        return 'Lo siento, no he entendido tu pregunta. Puedes preguntarme sobre fechas, títulos, participantes, ubicación o horarios de nuestras obras. ¿En qué puedo ayudarte?';
    }

    matchesPattern(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }

    detectTrimester(message) {
        if (message.includes('primer') || message.includes('1')) return 0;
        if (message.includes('segundo') || message.includes('2')) return 1;
        if (message.includes('tercer') || message.includes('3')) return 2;
        return null;
    }

    getDateInfo(message) {
        const trimesterIndex = this.detectTrimester(message);
        
        if (trimesterIndex !== null) {
            const perf = theaterData.performances[trimesterIndex];
            return `La obra "${perf.title}" del ${perf.trimester} será el <strong>${perf.date}</strong>.`;
        }
        
        // Return all dates
        let response = 'Estas son las fechas de nuestras actuaciones:<br><br>';
        theaterData.performances.forEach(perf => {
            response += `📅 <strong>${perf.title}</strong>: ${perf.date}<br>`;
        });
        return response;
    }

    getParticipantInfo(message) {
        const trimesterIndex = this.detectTrimester(message);
        
        if (trimesterIndex !== null) {
            const perf = theaterData.performances[trimesterIndex];
            return `En la obra "${perf.title}" del ${perf.trimester} participan <strong>${perf.participants} familias</strong>.`;
        }
        
        // Calculate total
        const total = theaterData.performances.reduce((sum, perf) => sum + perf.participants, 0);
        let response = `Estas son las familias que participan en cada obra del año:<br><br>`;
        theaterData.performances.forEach(perf => {
            response += `👥 <strong>${perf.title}</strong>: ${perf.participants} familias<br>`;
        });
        response += `<br>Entre todas las obras hay ${total} participaciones de familias (algunas repiten).`;
        return response;
    }

    getTitleInfo(message) {
        const trimesterIndex = this.detectTrimester(message);
        
        if (trimesterIndex !== null) {
            const perf = theaterData.performances[trimesterIndex];
            return `La obra del ${perf.trimester} se llama <strong>"${perf.title}"</strong>.<br><br>${perf.description}`;
        }
        
        // Return all titles
        let response = 'Estos son los títulos de nuestras obras:<br><br>';
        theaterData.performances.forEach((perf, index) => {
            response += `🎭 <strong>${perf.title}</strong> (${perf.trimester})<br>`;
        });
        return response;
    }

    getLocationInfo(message) {
        const location = theaterData.performances[0].location;
        return `Todas las actuaciones se realizan en el <strong>${location}</strong>.`;
    }

    getTimeInfo(message) {
        const trimesterIndex = this.detectTrimester(message);
        
        if (trimesterIndex !== null) {
            const perf = theaterData.performances[trimesterIndex];
            return `La obra "${perf.title}" será a las <strong>${perf.time}</strong>.`;
        }
        
        return 'Todas las actuaciones comienzan a las <strong>10:00h</strong> de la mañana.';
    }

    getPerformanceInfo(trimesterIndex) {
        const perf = theaterData.performances[trimesterIndex];
        return `<strong>${perf.title}</strong> (${perf.trimester}):<br><br>` +
               `📅 Fecha: ${perf.date}<br>` +
               `⏰ Hora: ${perf.time}<br>` +
               `👥 Participantes: ${perf.participants} familias<br>` +
               `📍 Lugar: ${perf.location}<br><br>` +
               `${perf.description}`;
    }

    getAllPerformances() {
        let response = '<strong>Programación completa del curso:</strong><br><br>';
        theaterData.performances.forEach((perf, index) => {
            response += `<strong>${index + 1}. ${perf.title}</strong><br>`;
            response += `Fecha: ${perf.date} a las ${perf.time}<br>`;
            response += `Participantes: ${perf.participants} familias<br><br>`;
        });
        return response;
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
