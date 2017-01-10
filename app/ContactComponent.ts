import {Component} from "@angular/core";
/**
 * Created by grahul on 1/9/2017.
 */
import {Contact} from "./Model/contact"
@Component({
    selector: "contact-form",
    templateUrl: "../UI/contact-form.html"
})
export class ContactComponent{

    countries = ['India', 'Australia', 'England', 'South Africa', 'USA', 'Japan', 'Singapore'];

    contact = new Contact('First Name', 'Second Name', this.countries[0], 514521111);

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    active = true;

    newContact() {
        this.contact = new Contact('', '','', 0);
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }
}
