import { ProductData } from "../DataBase/model.component";
import { Injectable } from '@angular/core';
import { StorageService } from './localstorage.service';

@Injectable()
export class CartService
{

    public cartdata = {};

      

    
    public currentdata:any=[]; // forming to store in local storage 
    

    
    constructor(public local:StorageService)
    {

        this.load();

        this.cartdata = ProductData;
    }

    load()
    {

        this.currentdata = this.local.get("cart");
        
        console.log("data from cart" + this.currentdata)


    }

    remove()
    {
        this.local.removeall();
    }

    set(key)
    {
        console.log("key value" + key);
        this.currentdata = this.local.get("cart");
        
        let count = 1 ; // intitally to set the qty 

         let tempData = {"cart":[]} // forming data to store in local storage 

        let jsondata = {} 

        let token = false;

        if(this.currentdata != null && this.currentdata != '' && this.currentdata != undefined)
        {
            for(let item in this.currentdata)
            {
                console.log("item called"+item);

                if(this.currentdata[item].uid == key)
                {
                    this.currentdata[item].qty += 1 ; 

                    token = true;
                    
                }

                
                
            }

            if(!token)
                {
                    jsondata['uid']= key;
                    jsondata['qty']=count;

                    this.currentdata.push(jsondata);

                    
                }

                let temp = {"cart":this.currentdata};


                    this.local.set(temp);

            
        }

        else
            {

                jsondata['uid'] = key;

                jsondata['qty'] = count;

                tempData.cart.push(jsondata);

                this.local.set(tempData);

                console.log(tempData + "else");
                
            }

        // let tempdata = {"cart":this.finaldata};

        // console.log(tempdata);

        // this.local.set(tempdata);

        
    }


}
