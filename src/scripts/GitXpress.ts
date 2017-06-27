/// <reference path="./provider/Provider.ts" />
/// <reference path="./provider/ProviderFactory.ts" />

import * as GitFactory from './provider/ProviderFactory';
import * as IProvider from './provider/Provider';


declare var chrome:any;

class GitXpress {

  DOM:object;
  location:string;
  
  constructor(){
    this.DOM = {
      body: document.body
    }

    document.addEventListener('DOMContentLoaded', this.onDomReady.bind(this));
  }

  onDomReady(){
    chrome.devtools.inspectedWindow.eval('document.location.href', (currentUrl:string) => {
      this.location = currentUrl;
      let provider: IProvider.GitProvider.GitAbstract = GitFactory.GitProvider.GitFactory.createProvider(this.location);
      provider.loadRepo(null);
    });
  }
}

(<any>window).gitXpress = new GitXpress();