import { createServer } from 'http';
import app, {  } from './backend/app.js';
const port = process.env.PORT || 3000;
set('port', port);
const server = createServer(app);
server.listen(port);

module.exports = app;
export default app;
