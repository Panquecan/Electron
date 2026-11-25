const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const janela = new BrowserWindow({ width: 800, height: 600 });
  janela.loadFile('index.html');
});
