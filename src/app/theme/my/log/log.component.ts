import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../helpers';

import { ScriptLoaderService } from '../../../_services/script-loader.service';
declare let mApp: any;
@Component({
  selector: 'app-log',
  
  templateUrl: "./log.component.html"  
  ,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class LogComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) {
    
        }
        ngOnInit() {
    
        }
        ngAfterViewInit() {
            this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
                'assets/app/js/dashboard.js');
    
            Helpers.bodyClass('m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default');
    
        }
}
