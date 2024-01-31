import { Org } from "../models/orgModel.js";

let orgList = [
    {
        name: "Programadores do Amanhã",
        adress: "",
        website: "https://programadoresdoamanha.org",
        description: "Uma ponte que dá acesso a jovens negros e negras que desejam ingressar no mercado da tecnologia.",
        contact: "https://www.instagram.com/programadoresdoamanha/"
    },
    {
        name: "Fundação Bradesco - Escola Virtual",
        adress: "",
        website: "https://www.ev.org.br",
        description: "Criada em 2001, a Escola Virtual é um portal de e-learning dedicado a oferecer cursos gratuitos e 100% on-line em diferentes áreas de interesse, como Desenvolvimento Pessoal e Profissional, Metodologias de Aprendizagem, Negócios e Inovação, Produtividade, Programação e Tecnologia da Informação.",
        contact: ""
    },
    {
        name: "Senac",
        adress: "Consulte os polos na aba Polos do site.",
        website: "https://www.ead.senac.br/gratuito/",
        description: "Instrutores com experiência de mercado também garantem referências atualizadas e atividades práticas, deixando você preparado para enfrentar os desafios em sua área de atuação. Tudo isso aliado ao reconhecimento e credibilidade do Senac, que já na década de 1940 promovia o ensino a distância por meio de seus cursos na Universidade do Ar, uma ação pioneira que na época levou conhecimento profissional a locais distantes por meio de programas de rádio.",
        contact: "4090-1040 - para capitais e regiões metropolitanas | 0800-777-3622"
    },
    {
        name: "Fundação Getúlio Vargas",
        adress: "Consultar polos no site: https://educacao-executiva.fgv.br/fgv#block-bean-nossas-unidades",
        website: "https://educacao-executiva.fgv.br/cursos/gratuitos",
        description: "A FGV possui uma variedade de cursos gratuitos em diversas áreas de atuação por conta da parceria com OEG – Open Education Global. Membro desde 2008, a Fundação foi a primeira instituição de ensino brasileira a integrar o consórcio de países que oferecem conteúdos e materiais didáticos gratuitos online. ",
        contact: "https://www.instagram.com/fgv.educacaoexecutiva/"
    },
    {
        name: "Harvard University - CC50",
        adress: "",
        website: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
        description: "This is CS50x , Harvard University's introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience. An entry-level course taught by David J. Malan, CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, Python, SQL, and JavaScript plus CSS and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming. The on-campus version of CS50x , CS50, is Harvard's largest course. ",
        contact: ""
    }
];

//Essa função registra uma nova ORG

function orgRegister(name, adress, website, description, contact) {
    let newOrg = new Org(name, adress, website, description, contact);
    orgList.push(newOrg);
    return newOrg;
}

//Essa função faz a busca de uma ORG a partir do seu nome

function orgSearchByName(orgName) {
    let orgNameLower = orgName.toLowerCase();
    let findOrg = orgList.filter(org => org.name.toLowerCase().includes(orgNameLower));
    return findOrg;
}

//Essa função faz a busca de uma ORG com base em seu endereço. Ao registrar uma ORG, o endereço pode estar vazio (Caso essa ORG funcione apenas de maneira virtual). A função verifica se o usuário insere algum dado no método GET, e se inseriu, procura, dentre as ORGS que possuem um endereço cadastrado, alguma que atenda ao pedido do usuário. Se ele não inserir nada no body, mostra todas as ORGS que possuem um website.

function orgsByAdress(location){
    if(location){
        let locationLower = location.toLowerCase()
        let findOrg = orgList.filter(org => org.adress.toLowerCase().includes(locationLower));
        return findOrg;
    }else{
        let findOrg = orgList.filter(org => org.website !== "");
        return findOrg;
    }
}

export { orgRegister, orgSearchByName, orgsByAdress };