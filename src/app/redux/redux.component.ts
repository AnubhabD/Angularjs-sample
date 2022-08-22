import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
// import { increment, decrement, reset } from './redux.actions';
import { addPost, deletePost, loadPosts } from './redux.actions';

import { ApiService } from '../service/api.service';

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
  // posts?: any = [
  //   {
  //     _id: 0,
  //     fullName: '',
  //     emailId: '',
  //     contactNumber: '',
  //     phone: '',
  //     password: '',
  //   },
  // ];
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
        this.error = response.status + ' ' + 'Error';
        this.errorMsg = 'Page' + ' ' + response.statusText;
      },
    });
  }

  loadData(): void {
    this.store.dispatch(loadPosts());
    // this.store.dispatch(loadPostsSuccess(this.post));
  }

  onAddPosts() {
    this.store.dispatch(addPost(this.postsData));
  }

  onDeletePosts(id: string) {
    if (confirm('Are you sure you want to delete')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}