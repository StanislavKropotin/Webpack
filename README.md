# Webpack

Configured Webpack with the following features:

• Webpack-dev-server installed and configured.

• Hot module replacement is configured.

• It is possible to run on different environments (dev, prod) with different configurations (for example, remove HMR on prod)

• The JSON server from which the received data is displayed is configured.

• Added launch of linter on commit.

For start:
1. launch the json server in the terminal:
json-server --watch database.json

2. open the second terminal tab and enter:
npm run start
(this is dev)

3. for prod:
npm run build
(create index.html in the dist folder)
