import RecordItem from '@/custom';
const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel ={
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => boolean;
    save: () => void;
    delete: (id: string) => void;
}
const tagListModel: TagListModel={
    data:[],
    fetch(){
        this.data = 
            JSON.parse( window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    create(name: string){
        const names = this.data.map(item=>item.name);
        if(names.indexOf(name) <0){
            this.data.push({
                id:name,
                name:name});
            this.save();
            return true;
        }
        throw Error('duplicated');
        return false;
    },
    save(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    delete(id: string){
        this.data = this.data.filter(item => item.id !== id);
        this.save();
        console.log(this.fetch());
    }
}

export  {tagListModel};