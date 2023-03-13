import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, tap } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  creatAndStorePost(title: string, content: string) {
    const postData: Post = {
      title: title,
      content: content,
    };

    this.http
      .post<{ name: string }>(
        "https://ng-own-project-data-default-rtdb.firebaseio.com/post.json",
        postData,
        {
          // observe: "body",
          observe: "response", // will get  full response with status code 200 and all.
        }
      )
      .subscribe(
        (resposeData) => {
          console.log(resposeData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPost() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("print", "prity");
    searchParams = searchParams.append("ccf", "jjt");

    let params = {
      asdf: "lkjht",
      bbty: "hhytr",
    };
    return this.http
      .get<{ [key: string]: Post }>(
        "https://ng-own-project-data-default-rtdb.firebaseio.com/post.json",
        {
          // params:searchParams,
          params,
          responseType: 'json',
        }
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }

  deletePost() {
    return this.http
      .delete<{ name: string }>(
        "https://ng-own-project-data-default-rtdb.firebaseio.com/post.json",
        {
          observe: "events",
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
          if (event.type === HttpEventType.Sent) {
            // ..... can be use in video upload time...
          }
        })
      );
  }
}
