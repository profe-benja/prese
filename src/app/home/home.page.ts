import { Component } from '@angular/core';
import { PresenteprofeService } from '../services/presenteprofe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = '';
  password: string = '';

  constructor(private presenteprofe: PresenteprofeService) {}

  onLogin() {
    // console.log(this.username, this.password);
    this.presenteprofe.loginTest(this.username).subscribe(
      (response) => {
        if(response.data.perfil == 'docente') {
          console.log(response.data);
          // guardar store
        } else {
          console.log(response.data);
          // guardar 
        }
      }
    )
  }
}
