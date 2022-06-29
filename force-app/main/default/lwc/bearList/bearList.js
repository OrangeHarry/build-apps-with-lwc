import { LightningElement, wire } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
// BearController.getAllBears() Apex method
import getAllBears from '@salesforce/apex/BearController.getAllBears';

export default class BearList extends LightningElement {
    @wire(getAllBears) bears; //템플릿을 .data 형식으로 받아오는거로 변경해서 @wire방식 하나로 밑에 주석부분들이 필요가 없게됨
    appResources = {
        bearSilhouette: `${ursusResources}/standing-bear-silhouette.png`,
    };
    //bears;
    //error;
    /*connectedCallback(){
        this.loadBears();
    }
    loadBears(){
        getAllBears().then(result =>{
                        this.bears = result;
                    })
                    .catch(error => {
                        this.error = error
                    })
    }
    */
}