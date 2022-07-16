import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private ApiService: ApiService) { }

  PostPost(sPost: Post, sGroup_id: string): Promise<any>{
    return this.ApiService.PostPost(sPost, sGroup_id).toPromise()
  }
}
