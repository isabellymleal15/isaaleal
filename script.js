const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A globalização e a economia mundial são temas essenciais para compreender as interações entre países e mercados. Com a crescente interconexão global, o comércio internacional e os acordos comerciais moldam significativamente o cenário econômico. A globalização transformou profundamente o cenário econômico mundial ao facilitar uma interconexão sem precedentes entre países e mercados. Neste contexto dinâmico, a economia global testemunha uma integração crescente de sistemas produtivos e mercados financeiros, enfrentando desafios e oportunidades únicas. Explora-se aqui os impactos da globalização na economia mundial, desde a facilitação do comércio internacional até o papel dos acordos comerciais na promoção do crescimento econômico e na redistribuição de recursos globais. A globalização não só molda as interações econômicas entre nações, mas também influencia aspectos sociais e culturais em um mundo cada vez mais interdependente. ",
        alternativas: [
            {
                texto: "Como a globalização tem transformado o cenário econômico mundial?",
                afirmacao: "A globalização é um fenômeno econômico que, apesar de desafios"
            }
        ]
    },
    {
        enunciado: "A globalização transformou o cenário econômico mundial ao facilitar uma maior interconexão entre países e mercados. Isso resultou em uma maior integração econômica, especialização produtiva, surgimento de cadeias de suprimento globais, ampliação do acesso a mercados e recursos, e influência nas políticas econômicas dos países. Essas mudanças têm impulsionado o crescimento do comércio internacional e impactado significativamente a economia global, moldando novas dinâmicas de competitividade e desenvolvimento econômico.",
        alternativas: [
            {
                texto: "Quais são os efeitos do crescimento do comércio internacional?",
                afirmacao: "como desigualdades e vulnerabilidades, tem potencial"
            },
        ]
    },
    {
        enunciado: "O comércio internacional é essencial para a globalização econômica, promovendo a especialização eficiente na produção, impulsionando o crescimento econômico através de economias de escala e facilitando a transferência de tecnologia e conhecimento entre países. Ele diversifica fontes de suprimento e demanda, cria empregos e reduz riscos econômicos. No entanto, também pode contribuir para desigualdades entre países e enfrenta desafios como impactos ambientais e a necessidade de regulação internacional para garantir benefícios justos e equitativos para todos os participantes.",
        alternativas: [
            {
                texto: "Como os acordos comerciais podem promover a especialização eficiente na produção, conforme mencionado no texto?",
                afirmacao: "para impulsionar o crescimento, promover a cooperação internacional e melhorar o padrão de vida globalmente. "
            },

        ]
    },
    {
        enunciado: "Os acordos comerciais promovem a especialização eficiente na produção ao eliminar barreiras comerciais entre países, permitindo que cada um se concentre naquilo em que é mais eficiente. Isso aumenta a produtividade global e beneficia todos os participantes do acordo.",
        alternativas: [
            {
                texto: "Como os acordos comerciais podem equilibrar os benefícios da especialização produtiva com as necessidades de desenvolvimento sustentável e inclusão econômica globalmente?",
                afirmacao: "Seu impacto na economia mundial reflete uma interconexão complexa que molda tanto oportunidades quanto desafios para o desenvolvimento global."
            },
        ]
    },
    {
        enunciado: "Os acordos comerciais podem equilibrar os benefícios da especialização produtiva com as necessidades de desenvolvimento sustentável e inclusão econômica global ao promoverem práticas sustentáveis, facilitarem o acesso a mercados e tecnologias, e reduzirem disparidades econômicas entre países. Isso visa garantir que os benefícios do comércio sejam distribuídos de maneira justa e sustentável globalmente.",
        alternativas: [
            {
                texto: "entendi",
                afirmacao: ""
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();