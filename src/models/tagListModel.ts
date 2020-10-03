import RecordItem from '@/custom';
const localStorageKeyName = 'tagList';
type TagListModel ={
    data: string[];
    fetch: () => string[];
    create: (name: string) => boolean;
    save: () => void;
}
const tagListModel: TagListModel={
    data:[],
    fetch(){
        this.data = ["衣","食", "住", "行"] ||JSON.parse( window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    create(name: string){
        if(this.data.indexOf(name) <0){
            this.data.push(name);
            this.save();
            return true;
        }
        throw Error('duplicated');
        return false;
    },
    save(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export  {tagListModel};