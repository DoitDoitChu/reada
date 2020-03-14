db.createUser({
  user: 'reada',
  pwd: 'reada-db',
  roles: [{ role: 'readWrite', db: 'reada' }]
});

// db.createCollection('Genre', { autoIndexId: true });

// db.genres.insert([
//   { type: 100, subType: [] },
//   { type: 200, subType: [] },
//   { type: 300, subType: [] },
//   { type: 400, subType: [] },
//   { type: 500, subType: [] },
//   { type: 600, subType: [] },
//   { type: 700, subType: [] },
//   { type: 800, subType: [] },
//   { type: 900, subType: [] }
// ]);
