import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ContactComponent} from "./ContactComponent";
/**
 * Created by grahul on 1/9/2017.
 */

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[ContactComponent],
    bootstrap:[ContactComponent]
})
export class FormModule{

}
