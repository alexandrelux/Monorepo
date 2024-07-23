import { app, BrowserWindow } from 'electron';
import express from 'express';
import path from 'path';
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (): void => {
  const server = express();

  const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;
  const staticPath = isDev
    ? path.join(__dirname, '../../../web/out')
    : path.join(__dirname, './public');

  server.use(express.static(staticPath));

  const serverInstance = server.listen(0, 'localhost', () => {
    const port = (serverInstance.address() as any).port;
    console.log(`Express server running on http://localhost:${port}`);

    const mainWindow = new BrowserWindow({
      height: 720,
      width: 1000,
      webPreferences: {
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        nodeIntegration: false,
      },
    });

    mainWindow.loadURL(`http://localhost:${port}`);
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
