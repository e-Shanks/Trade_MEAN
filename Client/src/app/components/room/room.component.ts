import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { AuthService } from 'src/app/services/auth.service';
import { GroupService } from 'src/app/services/group.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(public GroupService: GroupService, 
    public AuthService: AuthService, 
    private PostService: PostService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async NewPost(sPostMessage: string){
    let result: boolean = false
    let post: Post = {
      author: {
        author_id: this.AuthService.LoggedUserData!._id!,
        firstname: this.AuthService.LoggedUserData!.firstname,
        lastname: this.AuthService.LoggedUserData!.lastname,
        login: this.AuthService.LoggedUserData!.login,
        avatar: this.AuthService.LoggedUserData!.avatar
      },
      text: sPostMessage
    }

    result = await this.PostService.PostPost(post, this.GroupService.CurrentGroup?._id!)

    if(result){
      this.router.navigate(['/Room'])
    }
  }
}
