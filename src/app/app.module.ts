import { BrowserModule } 	from '@angular/platform-browser';
import { NgModule } 		from '@angular/core';
import { FormsModule } 		from '@angular/forms';
import { HttpModule, JsonpModule }	from '@angular/http';

import { AppComponent } from './app.component';
import { SolrService } from './solr.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	HttpModule,
	JsonpModule
  ],
  declarations: [
	AppComponent
  ],
  providers: [ SolrService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
