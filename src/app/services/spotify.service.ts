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
      'Authorization': 'Bearer BQCWuIP_mMRxQbJVxG9GD39sf2nB50x69_udGfX0X5FVglgkSxR_2i0jIlG1X0_T2ZjJ3vvLgNh8rB9puOIULQB7gJjIPD67pBJ2OGXs0yWlNYyvXMf1y8IJOAZbJT3fxOIMc2UXo11RvHsP'
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
