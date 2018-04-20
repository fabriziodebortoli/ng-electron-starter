import { Component, OnInit } from '@angular/core';

import { ElectronService } from 'ngx-electron';

let os = window.require('os');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isElectronApp: boolean;
  process: NodeJS.Process;
  platform: string;
  
  userInfo = os.userInfo();
  homeDir = os.homedir();

  constructor(private _electronService: ElectronService) {} 

  ngOnInit(){
    this.isElectronApp = this._electronService.isElectronApp;
    this.process = this._electronService.process;

    this.platform = this.process.platform;

    console.log("this.process", this.process)
  }  

  launchWindow() {
    this._electronService.shell.openExternal('https://coursetro.com');
  }
}
