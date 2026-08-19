// ===== LANGUAGE TOGGLE (EN / PT-BR) =====
// English text is captured from the HTML itself on first load.
// To edit Portuguese text, change the strings in PT below.

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
    'hero.subtitle': 'Astrologia Psicológica',
    'hero.title': 'Compreenda os Padrões que <span>Moldam Sua Vida</span>',
    'hero.desc': 'Mapas natais, trânsitos e sinastrias fundamentados na tradição de Liz Greene — enriquecidos por mais de vinte anos de prática terapêutica em Medicina Tradicional Chinesa, yoga e Ayurveda.',
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
    'news.h2': 'A Carta Semanal de Trânsitos',
    'news.sub': 'Trânsitos astrológicos e reflexões, entregues na sua caixa de entrada uma vez por semana',
    'news.tier': 'Assinante Semanal',
    'news.per': '/semana',
    'news.ul': '<li>Os principais trânsitos astrológicos da semana, explicados</li><li>O que o céu da semana significa para cada signo</li><li>Orientações de lua nova e lua cheia</li><li>Escrito em linguagem acessível e psicologicamente fundamentada</li><li>Cancele quando quiser</li>',
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

// Cache the original English from the DOM on first load
const EN = {};
const EN_PH = {};

function currentLang() {
    return localStorage.getItem(LANG_KEY) || 'en';
}

function applyLang(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang === 'pt' && PT[key] !== undefined) {
            el.innerHTML = PT[key];
        } else if (lang === 'en' && EN[key] !== undefined) {
            el.innerHTML = EN[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (lang === 'pt' && PT[key] !== undefined) {
            el.placeholder = PT[key];
        } else if (lang === 'en' && EN_PH[key] !== undefined) {
            el.placeholder = EN_PH[key];
        }
    });

    const toggle = document.getElementById('langToggle');
    if (toggle) toggle.textContent = lang === 'en' ? 'PT' : 'EN';
}

document.addEventListener('DOMContentLoaded', () => {
    // Capture English originals before anything changes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        EN[el.getAttribute('data-i18n')] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        EN_PH[el.getAttribute('data-i18n-placeholder')] = el.placeholder;
    });

    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const next = currentLang() === 'en' ? 'pt' : 'en';
            localStorage.setItem(LANG_KEY, next);
            applyLang(next);
        });
    }

    applyLang(currentLang());
});
