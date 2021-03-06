import { Tag } from './FunctionalInterface';

export interface Settings {
  sync: Boolean;
  fb?: any;
}

export interface StorageData {
  page?:string;
  tags?:Tag;
  sync?: Boolean;
  fb?: any;
  token?: string;
}


export default class IStorage {
  set(key:string, val:StorageData):any{
    return new Promise((resolve:Function, reject:Function) => {
      let value = JSON.stringify(val);
      localStorage.setItem(key, value);
      resolve(val);
    });
  }
  get(key:string):any{
    return new Promise((resolve:Function, reject:Function) => {
      let value:string = localStorage.getItem(key);
      try {
        let val:StorageData = JSON.parse(value);
        resolve(val);
      } catch(e){
        reject(e);
      }
    })
  }
}