import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { WesitAppModule } from './app.module';
import { AppModule } from './wesitdashboard/app.module';
 
ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
