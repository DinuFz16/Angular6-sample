import {Injectable} from '@angular/core'

@Injectable()
export class StorageService
{

    public dbname='MangoDB';

    public ldata:any ={};

    constructor()
    {
        this.load()
    }

    load()
    {

    let temp = localStorage.getItem(this.dbname);

    if(temp != '' || temp != null || temp != undefined)
    {
        this.ldata= JSON.parse(temp);
        console.log("LOCAL3"+JSON.stringify(this.ldata));
    }
    else{
       
        this.ldata ={}
        console.log("LOCAL" + this.ldata);
    }
}
synch()
{
    localStorage.setItem(this.dbname,JSON.stringify(this.ldata));
}
set(obj)
{
    for(let temp in obj)
    {
        this.ldata[temp] = obj[temp];
        console.log("LOCAL2"+temp);

        this.synch();
    }

}

get(key)
{
    
    return key === ''? this.ldata:this.ldata[key];
}

removeall()
{
    this.ldata = {};

    this.synch();
}

}