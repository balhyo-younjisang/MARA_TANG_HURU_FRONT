import * as path from "path";
import { app, BrowserWindow, Menu, MenuItem } from "electron";
let isDev: typeof import("electron-is-dev");
const BASE_URL = "http://localhost:3000";

let mainWindow: BrowserWindow | null;

function createMainWindow(): void {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
    },
  });

  const customMenu = new Menu();
  customMenu.append(
    new MenuItem({
      label: "MARA TANG HURU",
      submenu: [
        {
          role: "reload",
          accelerator: "Control+R",
        },
      ],
    })
  );

  Menu.setApplicationMenu(customMenu);

  mainWindow.once("ready-to-show", () => {
    mainWindow!.show();
  });

  if (isDev) {
    mainWindow.loadURL(BASE_URL);

    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
  }

  mainWindow.on("closed", (): void => {
    mainWindow = null;
  });
}

app.on("ready", (): void => {
  createMainWindow();
});

app.on("window-all-closed", (): void => {
  app.quit();
});

app.on("activate", (): void => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
