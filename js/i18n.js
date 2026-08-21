// ===== LANGUAGE SWITCH (EN / PT-BR / ES) =====
// English text is captured from the HTML itself on first load.
// To edit Portuguese or Spanish text, change the strings in PT / ES below.

const LANG_KEY = 'cw-lang';

const PT = {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.reports': 'Relatórios de Exemplo',
    'nav.newsletter': 'Newsletter',
    'nav.classes': 'Cursos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',

    // Hero
    'hero.title': 'O Cosmos <span>Fala</span>',
    'hero.desc': 'Mapas natais, trânsitos e sinastrias — enriquecidos por mais de vinte anos de prática terapêutica em Medicina Tradicional Chinesa, yoga e Ayurveda.',
    'hero.book': 'Agendar uma Leitura',
    'hero.samples': 'Ver Relatórios de Exemplo',

    // About
    'about.h2': 'Sobre Mim',
    'about.sub': 'Astróloga, terapeuta e estudiosa do cosmos para a vida toda',
    'about.h3': 'Boas-vindas',
    'about.p1': 'A astrologia tem sido um campo de estudo para a vida toda. Minha paixão pelo assunto começou aos doze anos, quando a dureza da existência despertou em mim o desejo de compreender os padrões por trás da experiência humana e dos acontecimentos que moldam nossas vidas.',
    'about.p2': 'Meus estudos formais começaram em 1998 no Instituto Ganesha de Práticas de Cura, no Rio de Janeiro, em um programa de Astropsicologia baseado nos ensinamentos de Liz Greene e na tradição da astrologia psicológica desenvolvida em Londres nos anos 1970. Essa formação inicial estabeleceu uma base sólida nos aspectos psicológicos da astrologia moderna.',
    'about.p3': 'Por muitos anos, o trabalho astrológico permaneceu principalmente dentro de um círculo de amigos e familiares, com ênfase especial em mapas natais, trânsitos e progressões. Mas em 2023 essa história mudou — a prática informal se transformou em trabalho astrológico profissional, quando decidi dedicar-me à minha jornada de uma vida com a astrologia como carreira.',
    'about.p4': 'Minha prática se baseia em mais de vinte anos de formação em disciplinas terapêuticas, incluindo Medicina Tradicional Chinesa, yoga e Ayurveda. Essa bagagem multidisciplinar oferece uma perspectiva adicional ao abordar as complexidades da experiência humana e contribui para uma análise astrológica mais abrangente — o que considero meu diferencial.',
    'about.p5': '<em>Obrigada por estar aqui. Espero que possamos expandir juntos nosso conhecimento de astrologia. Será um prazer compartilhar essa jornada com você.</em>',
    'about.cta': 'Trabalhe Comigo',

    // Services
    'shop.h2': 'Serviços',
    'shop.sub': 'Leituras e análises escritas — via Zoom ou presencialmente',
    'shop.book': 'Agendar',
    'shop.soon': 'Em Breve',
    'svc1.h3': 'Mapa Natal',
    'svc1.desc': 'Uma análise escrita abrangente do seu mapa natal — seus pontos fortes, desafios, padrões de vida e o chamado da sua alma — fundamentada na tradição da astrologia psicológica.',
    'svc1.ul': '<li>✦ Relatório escrito detalhado</li><li>✦ Abordagem da astrologia psicológica</li><li>✦ Seu para guardar e revisitar</li>',
    'svc2.h3': 'Trânsitos e Progressões',
    'svc2.desc': 'Uma análise escrita dos ciclos planetários que ativam seu mapa no momento — o que este capítulo da sua vida está pedindo de você e como trabalhar com isso de forma consciente.',
    'svc2.ul': '<li>✦ Trânsitos atuais e futuros</li><li>✦ Progressões secundárias</li><li>✦ Timing para decisões importantes</li>',
    'svc3.h3': 'Consulta',
    'svc3.desc': 'Uma sessão ao vivo e individual, via Zoom ou presencial, sem relatório escrito. Traga suas perguntas e exploraremos seu mapa juntos.',
    'svc3.ul': '<li>✦ Zoom ou presencial</li><li>✦ Formato de conversa</li><li>✦ Ideal como acompanhamento ou primeiro contato</li>',
    'svc4.h3': 'Sinastria',
    'svc4.desc': 'Uma análise escrita de compatibilidade entre dois mapas — parceiros românticos, familiares ou sócios — revelando as dinâmicas, forças e pontos de crescimento entre vocês.',
    'svc4.ul': '<li>✦ Dois mapas analisados em conjunto</li><li>✦ Dinâmicas e padrões do relacionamento</li><li>✦ Relatório escrito incluído</li>',
    'svc5.h3': 'Revolução Solar',
    'svc5.desc': 'Seu mapa do ano que começa, calculado para o momento exato em que o Sol retorna à sua posição natal — um mapa dos temas e oportunidades do seu novo ano pessoal.',
    'svc5.ul': '<li>✦ Previsão para o ano</li><li>✦ Disponível em breve</li>',
    'svc6.h3': 'Astrologia Horária',
    'svc6.desc': 'Uma resposta a uma pergunta específica, lida a partir de um mapa calculado para o exato momento em que a pergunta é feita. Uma das artes mais antigas e precisas da astrologia.',
    'svc6.ul': '<li>✦ Perguntas específicas e diretas</li><li>✦ Disponível em breve</li>',

    // Sample Reports
    'reports.h2': 'Relatórios de Exemplo',
    'reports.sub': 'Veja exatamente o que você receberá — baixe um exemplo de cada análise escrita',
    'reports.dl': 'Baixar PDF',
    'reports.note': 'Os PDFs de exemplo são adicionados assim que ficam disponíveis. Para solicitar um antes, é só <a href="#contact">entrar em contato</a>.',
    'rep1.h3': 'Exemplo de Mapa Natal',
    'rep1.desc': 'Um exemplo anonimizado da análise completa de mapa natal, para você conhecer a profundidade e o estilo do que receberá.',
    'rep2.h3': 'Exemplo de Trânsitos e Progressões',
    'rep2.desc': 'Veja como os ciclos planetários atuais são interpretados e apresentados em uma análise escrita de trânsitos e progressões.',
    'rep3.h3': 'Exemplo de Sinastria',
    'rep3.desc': 'Um exemplo de análise de relacionamento entre dois mapas — como compatibilidade, dinâmicas e áreas de crescimento são exploradas.',

    // Newsletter
    'news.h2': 'A Carta Mensal de Trânsitos',
    'news.sub': 'Trânsitos astrológicos e reflexões, entregues na sua caixa de entrada uma vez por mês',
    'news.tier': 'Assinatura Mensal da Newsletter',
    'news.per': '/mês',
    'news.ul': '<li>Os principais trânsitos astrológicos do mês, explicados</li><li>O que o céu do mês significa para cada signo</li><li>Orientações de lua nova e lua cheia</li><li>Escrito em linguagem acessível e psicologicamente fundamentada</li><li>Cancele quando quiser</li>',
    'news.btn': 'Assinar',
    'news.note': 'Pagamento seguro e cancelamento fácil, gerenciados pela nossa plataforma de newsletter.',

    // Classes
    'classes.h2': 'Cursos e Círculo de Membros',
    'classes.sub': 'Aprenda astrologia em um ambiente estruturado e acolhedor',
    'classes.intro': 'Os cursos estão em desenvolvimento — os temas planejados incluem fundamentos da astrologia psicológica, leitura de mapa natal e técnicas preditivas. Eles provavelmente serão hospedados no Patreon, onde um círculo de membros com conteúdo exclusivo também está tomando forma.',
    'classes.soon': 'Cursos e Círculo de Membros — Em Breve',
    'classes.cta': 'Assine a Newsletter para Novidades',

    // Blog
    'blog.h2': 'Últimas do Blog',
    'blog.sub': 'Reflexões sobre trânsitos, trabalho com mapas e a vida astrológica',
    'blog.all': 'Ver Todos os Posts',
    'blogpage.h2': 'Reflexões Cósmicas',
    'blogpage.sub': 'Artigos, previsões e reflexões do reino astrológico',

    // Contact
    'contact.title': 'Vamos Conversar',
    'contact.desc': 'Tem alguma pergunta sobre uma leitura ou relatório, ou quer agendar? Envie uma mensagem abaixo — será um prazer ouvir de você.',
    'contact.phName': 'Seu nome',
    'contact.phEmail': 'Seu e-mail',
    'contact.phMessage': 'Sua mensagem',
    'contact.send': 'Enviar Mensagem',

    // Footer
    'footer.text': '© 2026 Prema Moksha Astrology. Todos os direitos reservados. | Feito com amor cósmico ✦'
};

const ES = {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.services': 'Servicios',
    'nav.reports': 'Informes de Ejemplo',
    'nav.newsletter': 'Boletín',
    'nav.classes': 'Cursos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'El Cosmos <span>Habla</span>',
    'hero.desc': 'Cartas natales, tránsitos y sinastrías — enriquecidas por más de veinte años de práctica terapéutica en Medicina Tradicional China, yoga y Ayurveda.',
    'hero.book': 'Reservar una Lectura',
    'hero.samples': 'Ver Informes de Ejemplo',

    // About
    'about.h2': 'Sobre Mí',
    'about.sub': 'Astróloga, terapeuta y estudiosa del cosmos de toda la vida',
    'about.h3': 'Bienvenidos',
    'about.p1': 'La astrología ha sido para mí un campo de estudio de toda la vida. Mi pasión por el tema comenzó a los doce años, cuando la dureza de la existencia despertó en mí el deseo de comprender los patrones detrás de la experiencia humana y de los acontecimientos que moldean nuestras vidas.',
    'about.p2': 'Mis estudios formales comenzaron en 1998 en el Instituto Ganesha de Prácticas de Sanación en Río de Janeiro, en un programa de Astropsicología basado en las enseñanzas de Liz Greene y la tradición de la astrología psicológica desarrollada en Londres en los años 1970. Esta formación inicial estableció una base sólida en los aspectos psicológicos de la astrología moderna.',
    'about.p3': 'Durante muchos años, el trabajo astrológico permaneció principalmente dentro de un círculo de amigos y familiares, con especial énfasis en cartas natales, tránsitos y progresiones. Pero en 2023 esa historia cambió — la práctica informal se transformó en trabajo astrológico profesional, cuando decidí dedicarme a mi camino de toda la vida con la astrología como carrera.',
    'about.p4': 'Mi práctica se basa en más de veinte años de formación en disciplinas terapéuticas, incluyendo Medicina Tradicional China, yoga y Ayurveda. Esta formación multidisciplinaria ofrece una perspectiva adicional al abordar las complejidades de la experiencia humana y contribuye a un análisis astrológico más completo — lo que considero mi diferencial.',
    'about.p5': '<em>Gracias por estar aquí. Espero que podamos expandir juntos nuestro conocimiento de la astrología. Será un placer compartir este viaje contigo.</em>',
    'about.cta': 'Trabaja Conmigo',

    // Services
    'shop.h2': 'Servicios',
    'shop.sub': 'Lecturas y análisis escritos — por Zoom o en persona',
    'shop.book': 'Reservar',
    'shop.soon': 'Próximamente',
    'svc1.h3': 'Carta Natal',
    'svc1.desc': 'Un análisis escrito completo de tu carta natal — tus fortalezas, desafíos, patrones de vida y el llamado de tu alma — fundamentado en la tradición de la astrología psicológica.',
    'svc1.ul': '<li>✦ Informe escrito detallado</li><li>✦ Enfoque de astrología psicológica</li><li>✦ Tuyo para guardar y revisitar</li>',
    'svc2.h3': 'Tránsitos y Progresiones',
    'svc2.desc': 'Un análisis escrito de los ciclos planetarios que activan tu carta en este momento — lo que este capítulo de tu vida te está pidiendo y cómo trabajar con ello de forma consciente.',
    'svc2.ul': '<li>✦ Tránsitos actuales y próximos</li><li>✦ Progresiones secundarias</li><li>✦ Timing para decisiones importantes</li>',
    'svc3.h3': 'Consulta',
    'svc3.desc': 'Una sesión en vivo e individual, por Zoom o en persona, sin informe escrito. Trae tus preguntas y exploraremos tu carta juntos.',
    'svc3.ul': '<li>✦ Zoom o en persona</li><li>✦ Formato de conversación</li><li>✦ Ideal como seguimiento o primer contacto</li>',
    'svc4.h3': 'Sinastría',
    'svc4.desc': 'Un análisis escrito de compatibilidad entre dos cartas — parejas románticas, familiares o socios de negocios — revelando las dinámicas, fortalezas y áreas de crecimiento entre ustedes.',
    'svc4.ul': '<li>✦ Dos cartas analizadas en conjunto</li><li>✦ Dinámicas y patrones de la relación</li><li>✦ Informe escrito incluido</li>',

    // Sample Reports
    'reports.h2': 'Informes de Ejemplo',
    'reports.sub': 'Mira exactamente lo que recibirás — descarga un ejemplo de cada análisis escrito',
    'reports.dl': 'Descargar PDF',
    'reports.note': 'Los PDF de ejemplo se agregan a medida que están disponibles. Para solicitar uno antes, solo <a href="#contact">ponte en contacto</a>.',
    'rep1.h3': 'Ejemplo de Carta Natal',
    'rep1.desc': 'Un ejemplo anonimizado del análisis completo de carta natal, para que conozcas la profundidad y el estilo de lo que recibirás.',
    'rep2.h3': 'Ejemplo de Tránsitos y Progresiones',
    'rep2.desc': 'Mira cómo se interpretan y presentan los ciclos planetarios actuales en un análisis escrito de tránsitos y progresiones.',
    'rep3.h3': 'Ejemplo de Sinastría',
    'rep3.desc': 'Un ejemplo de análisis de relación entre dos cartas — cómo se exploran la compatibilidad, las dinámicas y las áreas de crecimiento.',

    // Newsletter
    'news.h2': 'La Carta Mensual de Tránsitos',
    'news.sub': 'Tránsitos astrológicos y reflexiones, entregados en tu bandeja de entrada una vez al mes',
    'news.tier': 'Suscripción Mensual al Boletín',
    'news.per': '/mes',
    'news.ul': '<li>Los principales tránsitos astrológicos del mes, explicados</li><li>Lo que el cielo del mes significa para cada signo</li><li>Orientaciones de luna nueva y luna llena</li><li>Escrito en lenguaje claro y psicológicamente fundamentado</li><li>Cancela cuando quieras</li>',
    'news.btn': 'Suscribirse',
    'news.note': 'Pago seguro y cancelación fácil, gestionados por nuestra plataforma de boletín.',

    // Classes
    'classes.h2': 'Cursos y Círculo de Miembros',
    'classes.sub': 'Aprende astrología en un ambiente estructurado y acogedor',
    'classes.intro': 'Los cursos están en desarrollo — los temas planeados incluyen fundamentos de astrología psicológica, lectura de carta natal y técnicas predictivas. Probablemente estarán alojados en Patreon, donde también está tomando forma un círculo de miembros con contenido exclusivo.',
    'classes.soon': 'Cursos y Círculo de Miembros — Próximamente',
    'classes.cta': 'Suscríbete al Boletín para Novedades',

    // Blog
    'blog.h2': 'Últimas del Blog',
    'blog.sub': 'Reflexiones sobre tránsitos, trabajo con cartas y la vida astrológica',
    'blog.all': 'Ver Todos los Posts',
    'blogpage.h2': 'Reflexiones Cósmicas',
    'blogpage.sub': 'Artículos, pronósticos y reflexiones del reino astrológico',

    // Contact
    'contact.title': 'Hablemos',
    'contact.desc': '¿Tienes alguna pregunta sobre una lectura o informe, o quieres reservar? Envía un mensaje abajo — será un placer saber de ti.',
    'contact.phName': 'Tu nombre',
    'contact.phEmail': 'Tu correo electrónico',
    'contact.phMessage': 'Tu mensaje',
    'contact.send': 'Enviar Mensaje',

    // Footer
    'footer.text': '© 2026 Prema Moksha Astrology. Todos los derechos reservados. | Hecho con amor cósmico ✦'
};

const DICTS = { pt: PT, es: ES };
const LANG_TAGS = { en: 'en', pt: 'pt-BR', es: 'es' };

// Cache the original English from the DOM on first load
const EN = {};
const EN_PH = {};

function currentLang() {
    const lang = localStorage.getItem(LANG_KEY) || 'en';
    return DICTS[lang] || lang === 'en' ? lang : 'en';
}

function applyLang(lang) {
    document.documentElement.lang = LANG_TAGS[lang] || 'en';
    const dict = DICTS[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict && dict[key] !== undefined) {
            el.innerHTML = dict[key];
        } else if (EN[key] !== undefined) {
            el.innerHTML = EN[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict && dict[key] !== undefined) {
            el.placeholder = dict[key];
        } else if (EN_PH[key] !== undefined) {
            el.placeholder = EN_PH[key];
        }
    });

    document.querySelectorAll('#langSwitch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Capture English originals before anything changes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        EN[el.getAttribute('data-i18n')] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        EN_PH[el.getAttribute('data-i18n-placeholder')] = el.placeholder;
    });

    document.querySelectorAll('#langSwitch button').forEach(btn => {
        btn.addEventListener('click', () => {
            localStorage.setItem(LANG_KEY, btn.dataset.lang);
            applyLang(btn.dataset.lang);
        });
    });

    applyLang(currentLang());
});
