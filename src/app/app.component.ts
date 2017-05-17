import { Component, OnInit } from '@angular/core';

import { SolrService } from './solr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Solr search widget!';
  searchTerm = 'corn';
  
  //private searchTerms = new Subject<string>();
  
  constructor (private solrService: SolrService ) {}
  
  ngOnInit() { this.getResults(); }
  
  getResults() {
	this.solrService.getResults(this.searchTerm)
		.subscribe(
		() => console.log("Something happened."),
		error => console.log(error));
  }
}
