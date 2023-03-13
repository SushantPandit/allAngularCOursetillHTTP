import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Post } from "./post.model";
import { PostService } from "./post.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.creatAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postService.fetchPost().subscribe(
      (res) => {
        console.log(res);
        this.loadedPosts = res;
        this.isFetching = false;
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
      }
    );

    this.errorSub = this.postService.error.subscribe((errorMessage) => {
      this.isFetching = false;
      this.error = errorMessage;
    });
  }

  onClearPosts() {
    // Send Http request

    this.postService.deletePost().subscribe((respose) => {
      console.log(respose);
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
