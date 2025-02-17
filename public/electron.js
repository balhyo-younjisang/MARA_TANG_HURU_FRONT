"use strict";
exports.__esModule = true;
var path = require("path");
var electron_1 = require("electron");
var isDev;
var BASE_URL = "http://localhost:3000";
var mainWindow;
function createMainWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true
        }
    });
    var customMenu = new electron_1.Menu();
    customMenu.append(new electron_1.MenuItem({
        label: "MARA TANG HURU",
        submenu: [
            {
                role: "reload",
                accelerator: "Control+R"
            },
        ]
    }));
    electron_1.Menu.setApplicationMenu(customMenu);
    mainWindow.once("ready-to-show", function () {
        mainWindow.show();
    });
    if (isDev) {
        mainWindow.loadURL(BASE_URL);
        mainWindow.webContents.openDevTools();
    }
    else {
        mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
    }
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}
electron_1.app.on("ready", function () {
    createMainWindow();
});
electron_1.app.on("window-all-closed", function () {
    electron_1.app.quit();
});
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createMainWindow();
    }
});
