import { Component } from '@angular/core';
import {PostService} from '../services/post.service';


@Component({
  moduleId : module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
    providers: [PostService]
})
export class UserComponent  { 
  name: string;
  email:string;
  hobbies: string[];
  showHobbies: boolean;
  
  address: Address;

posts : Post[];
     constructor(private postsService: PostService) {
      this.name = 'Sonu Kumar';
      this.email = "skbhati199@gmail.com";
     this.address = {
        street: '728, Devi Mandir Khatriwara',
        city: 'Sikandrabad', 
        state: 'UP'
    },
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => 
    {
      this.posts =posts;
    });
      
  }

    toggleHobbies(){
      if(this.showHobbies == true){
          this.showHobbies = false;
      } else {
        this.showHobbies = true;
      }
  }

  addHobby(hobby:any){
      this.hobbies.push(hobby);
  }

  deleteHobby(i:any){
      this.hobbies.splice(i, 1);
  }
 
 }

 interface Address {
    street : string;
    city: string;
    state:string;
 }

interface Post {
  id:number;
  title:string;
  body:string;
}