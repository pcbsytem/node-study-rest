module.exports = (app) => {
  app.get('/atendimentos', (req, res) =>
    res.send('Voce esta na rota de atendimento e esta realizando um get!')
  );

  app.post('/atendimentos', (req, res) => {
    console.log(`body`, req.body);
    res.send('Voce esta na rota de atendimentos e esta realizando um post.')
  });
}