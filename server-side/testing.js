const { initialiseDatabase } = require('./services/mongoose');
const {
  periodicallyClearTrash
} = require('./services/periodically-clear-trash');

const begin = async () => {
  const response = await initialiseDatabase();
  console.log(response);
  periodicallyClearTrash(3300);
};

begin();
