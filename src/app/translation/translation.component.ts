import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenaiService } from '../services/openai.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  public chatText:any;
  public translatedText:any;
  userMessage !:String;

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
  Translate(){
    this.userMessage = "Please translate the following paragraph into "+this.selectOption+ "and give me only the translated text: \n"+ this.chatText;
    this.openAiService.sendMessage(this.userMessage)
    .subscribe(response => {
      this.translatedText = response.reply.content;
      this.userMessage = '';
    });
  }
  constructor(private route : ActivatedRoute, private openAiService: OpenaiService) { }

  ngOnInit(): void {
    let text = this.route.snapshot.paramMap.get('text');
    console.log(text);
    this.chatText = text;
    console.log(this.chatText);

  }

}
