/* eslint-disable import/no-extraneous-dependencies */
import { app } from 'electron';
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';
import path from 'path';
import { port } from '../../DevConfig.json';

function getAssetsPath(fileName: string) {
  if (process.env.NODE_ENV === 'production' && app.isPackaged === true) {
    return path.resolve(process.resourcesPath, 'assets', fileName);
  }
  if (process.env.NODE_ENV === 'production' && app.isPackaged === false) {
    return path.resolve(__dirname, '../../../assets', fileName);
  }
  return path.resolve(__dirname, '../../../assets', fileName);
}

function getHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const url = `http://localhost:${port}`;
    return url;
  }
  return `file://${path.resolve(__dirname, `../renderer/${htmlFileName}`)}`;
}

function getPreloadPath(Name: string) {
  if (process.env.NODE_ENV === 'development') {
    return path.resolve(__dirname, '../../dist/main', Name);
  }
  return path.resolve(__dirname, Name);
}

function installExtensions() {
  const extensions = [REDUX_DEVTOOLS];
  extensions.forEach((Name) => {
    installExtension(Name) // eslint-disable-next-line no-console
      .then((name) => console.log(`${name} Extension Added`))
      // eslint-disable-next-line no-console
      .catch((err) => console.log('An error occurred: ', err));
  });
}

export { getAssetsPath, getHtmlPath, getPreloadPath, installExtensions };
