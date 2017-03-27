import {BroserModule} from '@angular/platform-browser'; //For bootstrapping browsermodule
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app';
import {BoxComponent} from './box.component';

@NgModule({
	declarations: [
		AppComponent,
		BoxComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {
	
}