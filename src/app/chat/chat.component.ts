import { Component, OnInit } from '@angular/core';
import { OpenaiService } from '../services/openai.service';
import { response } from 'express';
import {Router} from '@angular/router'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  userMessage!:String;
  botReply : String = "Take a break from any strenuous activity ";
  chatMessages : {role:String,content:String}[] = [];


  constructor(private openAiService : OpenaiService, private router: Router) { }

  sendMessage(){
    const userMessage = this.userMessage;
    this.chatMessages.push({role:'user',content:userMessage})
    
    
    this.openAiService.sendMessage(this.userMessage)
    .subscribe(response => {
      this.botReply = response.reply.content;
      this.chatMessages.push({role:'assistant', content: this.botReply});
      this.userMessage = '';
    });
    
    

  }

  onSelect(message:any){
    console.log(message.content);
    this.router.navigate(['chat/translation',message.content]);
  }

  ngOnInit(): void {
  }

}
