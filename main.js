const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

// Targeting windows ONLY
let win;

function createWindow() {
  // Create browser window
  win = new BrowserWindow({ fullscreen: true });

  // Load index.html
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // Open Chrome DevTools
  // win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

// Run createWindow once app is loaded
app.on("ready", createWindow);

// Quit when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
