const create = async () => {
  const fs = require('node:fs');
  const content = 'I am fresh and young';

  fs.writeFile('./fresh.txt', content, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await create();
