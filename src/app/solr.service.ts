import { Injectable } 		from '@angular/core';
import { Http, Response } 	from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//import { Product } from './product';

@Injectable()
export class SolrService {
	
	private solrUrl = 'http://10.0.1.22:8983/solr/coreTest/select?q=${term}&start=0&rows=10&wt=json';
	
	constructor (private http: Http) {}
	
	getResults(term: string): Observable<any> {
		return this.http.get
		(`http://10.0.1.22:8983/solr/coreTest/select?q=${term}&start=0&rows=10&wt=json`)
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	private extractData(res: Response) {
		let body = res.json();
		console.log(body.data);
	}
	
	private handleError (error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json();
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		}
		else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}