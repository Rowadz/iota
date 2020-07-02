import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OptionsComponent } from "./components/options/options.component";
import { ImageContainerComponent } from "./components/image-container/image-container.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ColorOptionsComponent } from "./components/options/components/color-options/color-options.component";
import { ParticlesComponent } from "./components/image-container/particles/particles.component";
import { ShapesSelectorComponent } from "./components/options/components/shapes-selector/shapes-selector.component";
import { PacmanSpinnerComponent } from "./components/pacman-spinner/pacman-spinner.component";
import { LayoutModule } from "@angular/cdk/layout";
import { NgParticlesModule } from "ng-particles";

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    ImageContainerComponent,
    ToolbarComponent,
    ColorOptionsComponent,
    ParticlesComponent,
    ShapesSelectorComponent,
    PacmanSpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, NgParticlesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
