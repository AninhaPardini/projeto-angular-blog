import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HeaderAreaComponent } from './components/header-area/header-area.component';
import { ArticleCardsComponent } from './components/article-cards/article-cards.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ContentComponent } from './pages/content/content.component';
import { MyLibraryComponent } from './components/my-library/my-library.component';
import { BookComponent } from './components/book/book.component';
import { LightonOffComponent } from './components/lighton-off/lighton-off.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SocialComponent } from './components/social/social.component';
import { DesignComponent } from './pages/design/design.component';
import { DevelopmentComponent } from './pages/development/development.component';
import { ProductManagerComponent } from './pages/product-manager/product-manager.component';
import { HeaderPortifolioComponent } from './components/header-portifolio/header-portifolio.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderAreaComponent,
    ArticleCardsComponent,
    HomeComponent,
    ContentComponent,
    MyLibraryComponent,
    BookComponent,
    LightonOffComponent,
    NotFoundComponent,
    SocialComponent,
    DesignComponent,
    DevelopmentComponent,
    ProductManagerComponent,
    HeaderPortifolioComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    CommonModule,

  ],
  providers: [ { provide: LOCALE_ID, useValue: 'en-US'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
