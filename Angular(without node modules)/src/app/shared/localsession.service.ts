import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'local';

@Injectable({
  providedIn: 'root'
})
export class LocalsessionService {
  another:any;


  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  public storeOnLocalStorage(taskTitle: any): void {
          
    this.another=taskTitle;
    this.storage.set(STORAGE_KEY, taskTitle);
    //console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
}
}