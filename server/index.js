const jsonServer = require('json-server')
const path = require('path')

module.exports = (req, res) => {
  const server = jsonServer.create()
  const router = jsonServer.router(path.join(__dirname, '../db.json'))
  const middlewares = jsonServer.defaults()

  server.use(middlewares)
  
  server.use(jsonServer.rewriter({
    '/api/*': '/$1',
  }))

  server.post('/api/login', (req, res) => {
    const { email, password } = req.body
    const db = router.db
    const users = db.get('users').value()
    
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      res.json({ message: 'Login bem-sucedido', user })
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' })
    }
  })

  server.post('/api/register', (req, res) => {
    const { email, password } = req.body
    const db = router.db
    const users = db.get('users').value()

    const newUser = { id: Date.now(), email, password }
    db.get('users').push(newUser).write()

    res.json({ message: 'Cadastro bem-sucedido', user: newUser })
  })

  server.use(router);

  server(req, res);
}
