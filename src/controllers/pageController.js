
exports.home = (req, res) => {
    res.render('pages/home', {
        title: 'Início',
        activePage: 'home',
        profile: {
            name: 'Carlos Eduardo',
            role: 'Desenvolvedor em formação',
            description: 'Sou apaixonado por tecnologia, desenvolvimento de software e criação de soluções digitais. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.',
            location: 'Sua cidade, Brasil',
            github: 'https://github.com/cadu-ribeir/',
        }
    });
};
