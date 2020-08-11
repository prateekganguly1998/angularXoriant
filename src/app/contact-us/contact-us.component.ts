import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ContactService } from "../shared/contact.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  allContacts: any;
  contactUsForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    description: new FormControl(),
  });
  contactReqList: any;

  constructor(private service: ContactService) {}

  ngOnInit(): void {
    this.service.getAllContacts().subscribe((data) => {
      this.contactReqList = data;
    });
  }

  onSubmit() {
    return this.service
      .postContact(this.contactUsForm.value)
      .subscribe((data) => {
        this.ngOnInit();
        this.contactUsForm.reset();
      });
    // post api for adding a new contact us
  }
  deleteContactUs(id) {
    console.log(id);
    return this.service.deleteContact(id).subscribe((data) => {
      this.ngOnInit();
    });
    // delete api for deleting that contact request
  }
}
