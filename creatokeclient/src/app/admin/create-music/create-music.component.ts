import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-create-music',
  templateUrl: './create-music.component.html',
  styleUrls: ['./create-music.component.css']
})
export class CreateMusicComponent {
  form: FormGroup;
  constructor(public fb: FormBuilder, private adminService: AdminService) {
    this.form = this.fb.group({
      title: [''],
      style: [''],
      category: [''],
      description: [''],
      paroles: [''],
      extrait: [''],
      creatoke: [''],
      full_music: [''],
      prix: [1],
      image: [''],
      auteur: [''],
      youtube: [''],
      spotify: [''],
      isHighlighted: false,
      isOnline: false,
    });
  }
  ngOnInit() {}
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // @ts-ignore
      this.form.get('music').setValue(file);
    }
  }
  submitForm() {

    console.warn('Your order has been submitted', this.form.value);
    //this.form.reset();
    this.adminService.createMusic(this.form.value).then(ok => console.log(ok)).catch(err => console.error(err));
  }
}
