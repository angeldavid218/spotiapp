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
      'Authorization': 'Bearer BQCEDzStfLVvSPdKknk5BT6bcse-0MoCM5ZZRyQGGe5dXsL--xH8jqNhYQm8fbXPZFHAcX66_jEfZ6K-JVUXueUwdKAPU514oEY53RJh-bfFsMZvwMxcqIJeiQJAJeXzXwBuh9Y_ouIDLP9e'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map((data: any) => {
                return data.albums.items;
              }));        
  }

  getArtists(name: string) {
    return this.getQuery(`search?q=${name}&type=artist&limit=15`)
          .pipe(map((data: any) => {
            return data.artists.items;
          }));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
          /*.pipe(map((data: any) => {
            return data.artists.items;
          }));*/
  }

}
