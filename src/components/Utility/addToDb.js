//import toast from "daisyui/components/toast";
import { toast } from 'react-toastify';

const addToStoredReadList =(id)=>{

    const storedList=getStoredReadList();

    if(storedList.includes(id)){
        //console.log("already Exist");
        toast('This book is already Exist to your read list');
    }else{
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);
        //ideally trigger
        toast('This book is added to your read list');
    }
}

const getStoredReadList=()=>{

    const storedListStr=localStorage.getItem('read-list');

    if(storedListStr){
        const storedList=JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }

}
export {addToStoredReadList,getStoredReadList}