import "core-js/client/shim";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from './app/app.module';


document.addEventListener('DOMContentLoaded', ()=>{
    platformBrowserDynamic().bootstrapModule(AppModule);
});


