db.createUser({
  user: 'reada',
  pwd: 'reada-db',
  roles: [{ role: 'readWrite', db: 'reada' }]
});

db.reada.insert({
  name: 'reada'
});
