import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProxyService } from 'src/app/servisebi/proxy.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
constructor(private proxyService:ProxyService){}
data$!:Observable<any>                //დავასაბსქრაიბეთ აქ 
ngOnInit(): void {
  this.data$ = this.proxyService.getAllCards();
}
}

