import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './courses/course.module';
import { Coremodule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    Coremodule,
    RouterModule.forRoot([ 
      //Rotas padrão
      {
        path:'', redirectTo: 'courses', pathMatch: 'full'
      },
      
    ]),
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
