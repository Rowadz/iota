import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsComponent } from './components/options/options.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ColorOptionsComponent } from './components/options/components/color-options/color-options.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    ImageContainerComponent,
    ToolbarComponent,
    ColorOptionsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
