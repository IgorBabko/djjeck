import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class MusicService {
    

    constructor(private http: Http) { }
    
    getMixes(): Observable<Mix[]> {
        return this.http.get('/mixes')
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getTrack(id: string): Observable<Track> {
        return this.http.get(`/tracks/${id}`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        return res.json();
    }
    
    private handleError(error: any) {
        return Observable.throw(error);
    }
}