import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAVXNmZYuJQ8RmYZt2Iz7rt1Gw0cNfUBoAHYR1DUHByPs2eIXdyNAMpvnilWw5lYEPxZiFzERBnib5sNl222OS55-v30ybnQsc-vdaEjfUa82Cm4B4bA5qHA5V7L1Wl5fOy3pwj2OIVXiA-'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map((data: any) => {
                return data.albums.items;
              }));        
  }

  getArtist(name: string) {
    return this.getQuery(`search?q=${name}&type=artist&limit=15`)
          .pipe(map((data: any) => {
            return data.artists.items;
          }));
  }

}
