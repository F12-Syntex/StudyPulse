import { ContextBridge, ipcRenderer } from 'electron';

class Database {
  private static instance: Database;
  private bridge: any = {
    get: (key: string) => ipcRenderer.send('get', key),
    set: (key: string, value: any) => ipcRenderer.send('set', key, value),
  };

  public static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new Database();
      return this.instance;
    }
  }

  public get(key: string) {
    return ipcRenderer.send('get', key);
  }

  public set(key: string, value: any) {
    ipcRenderer.send('set', key, value);
  }
}

export default Database;
