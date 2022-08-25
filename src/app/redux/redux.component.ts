import { Component, OnInit } from '@angular/core';
import { addPost, deletePost, loadPosts, updatePost } from './redux.actions';

import { Store, select } from '@ngrx/store';

import { ApiService } from '../service/api.service';
import { ListingData } from '../interfaces/backend-api.interface';

// import { Observable } from 'rxjs';
// import { increment, decrement, reset } from './redux.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './redux.component.html',
})

// export class ReduxComponent {
//   count$!: Observable<number>;

//   constructor(private store: Store<{ count: number }>) {
//     this.count$ = store.pipe(select('count'));
//     console.log("action=>",this.count$,"=>3");
//   }

//   increment() {
//     console.log("click increment")
//     this.store.dispatch(increment());
//     console.log("action=>",increment(),"after changing=> 6");
//   }

//   decrement() {
//     this.store.dispatch(decrement());
//     console.log("action=>",decrement());
//   }

//   reset() {
//     this.store.dispatch(reset());
//     console.log("action=>",reset());
//   }
export class ReduxComponent implements OnInit {
  booleanData: boolean = false;
  error: string = '';
  errorMsg: string = '';
  status: boolean = false;

  postsData: any = {
    reducerManager: {
      dispatcher: {
        _value: {
          post: {
            data: {
              list: [],
            },
          },
        },
      },
    },
  };

  // count$!: Observable<number>;
  posts: ListingData = {
    // _id: '',
    fullName: 'any',
    emailId: 'mukesh.bhaskar@cbnits.com',
    contactNumber: '234567888',
    // usertype: '',
    // is_verified: false,
    // is_Available: false,
    // is_Active: false
  };

  updatedPosts: ListingData = {
    _id: '630609722dcb6482ff44633d',
    fullName: 'mukeshBhaskar',
    emailId: 'mukesh.bhaskar@cbnits.com',
    contactNumber: '234567888',
    // usertype: '',
    // is_verified: false,
    // is_Available: false,
    // is_Active: false
  };

  deletedPosts: ListingData = {
    _id: '',
    fullName: '',
    emailId: '',
    contactNumber: ''
  }
  // post: any;
  // = {
  //     _id: this.posts._id,
  //   fullName: this.postsData.fullName,
  //   emailId: this.posts.emailId,
  //   contactNumber: this.posts.contactNumber,
  //   password: this.posts.password,
  //   usertype: this.posts.usertype,
  //   is_verified: this.posts.is_verified,
  //   is_Available: this.posts.is_Available,
  //   is_Active: this.posts.is_Active,
  //   is_deleted: this.posts.is_deleted,
  //   }

  constructor(private store: Store<any>, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe({
      next: (response: any) => {
        this.postsData = this.store.pipe(select('count'));
        this.booleanData = true;
        this.loadData();
        // console.log('iiiiiiiiii', this.postsData.source.source.reducerManager.dispatcher['_value']?.post);
        // console.log('rrrrrrrrr', this.postsData.source.source.reducerManager.dispatcher);
      },
      error: (response) => {
        if(response.status === 0){
          this.error = 503 + ' ' + 'Service Unavailable';
        }
        else{
          this.error = response.status + ' ' + 'Error';
          this.errorMsg = 'Page' + ' ' + response.statusText;
          this.status = true;
        }
        // response.status === 0
        //   ? (this.error = 503 + ' ' + 'Service Unavailable')
        //   : ((this.error = response.status + ' ' + 'Error'),
        //     (this.errorMsg = 'Page' + ' ' + response.statusText));
      },
    });
  }

  loadData(): void {
    this.store.dispatch(loadPosts());
    // this.store.dispatch(loadPostsSuccess(this.post));
  }

  onAddPosts() {
    this.apiService.addPosts(this.posts).subscribe({
      next: (res: any) => {
        this.postsData = this.store.pipe(select('count'));
        this.booleanData = true;
        this.loadPostData();

        console.log('resSuccess  =>', res);
        console.log('postDataSuccess  =>', this.postsData);
      },
      error: (response) => {
        this.error = response.status + ' ' + 'Error';
        this.errorMsg = 'Page' + ' ' + response.statusText;
        console.log('postDATAError=>', response);
      },

      complete: () => {
        console.log('Data has been added successfully');
      },
    });
  }

  loadPostData(): void {
    const posts: ListingData = {
      // _id: this.updatePosts._id,
      fullName: this.posts.fullName,
      emailId: this.posts.emailId,
      contactNumber: this.posts.contactNumber,
      // password: this.updatePosts.password,
      // usertype: this.updatePosts.usertype,
      // is_verified: this.updatePosts.is_verified,
      // is_Available: this.updatePosts.is_Available,
      // is_Active: this.updatePosts.is_Active,
      // is_deleted: this.updatePosts.is_deleted,
    };
    this.store.dispatch(addPost({ posts }));
  }

  OnUpdatePosts() {
    this.apiService.updatePosts(this.updatedPosts).subscribe({
      next: (res: any) => {
        this.postsData = this.store.pipe(select('count'));
        this.booleanData = true;
        this.loadUpdatePostData();

        console.log('resUpdateSuccess  =>', res);
        console.log('updateDataSuccess  =>', this.postsData);
      },
      error: (response) => {
        this.error = response.status + ' ' + 'Error';
        this.errorMsg = 'Page' + ' ' + response.statusText;
        console.log('updateDATAError=>', response);
      },
    });
  }

  loadUpdatePostData(): void {
    const post: ListingData = {
      _id: this.updatedPosts._id,
      fullName: this.updatedPosts.fullName,
      emailId: this.updatedPosts.emailId,
      contactNumber: this.updatedPosts.contactNumber,
    };
    this.store.dispatch(updatePost({ post }));
  }

  OnDeletePosts(_id: ListingData) {
    if (confirm('Are you sure you want to delete')) {
      this.apiService.deletePosts(this.updatedPosts).subscribe({
        next: (res: any) => {
          this.postsData = this.store.pipe(select('count'));
          this.booleanData = true;
          this.loadDeletePostData(_id);

          console.log('resDeleteSuccess  =>', res);
          console.log('deleteDataSuccess  =>', this.postsData);
        },
        error: (response) => {
          this.error = response.status + ' ' + 'Error';
          this.errorMsg = 'Page' + ' ' + response.statusText;
          console.log('deleteDATAError=>', response);
        },
      });
    }
  }

  loadDeletePostData(_id: ListingData): void {
    // const post: ListingData = {
    //   _id: this.deletedPost._id,
    // };
    this.store.dispatch(deletePost({ _id }));
  }
}