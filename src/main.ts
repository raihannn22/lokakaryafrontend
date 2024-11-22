import { bootstrapApplication } from '@angular/platform-browser';
// <<<<<<< HEAD
// =======
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// >>>>>>> raihan
import { AppComponent } from './app/app.component';
// import { appConfig } from './app/app.config';

// <<<<<<< HEAD
// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );
// =======
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule)  
  ]
}).catch(err => console.error(err));
// >>>>>>> raihan
