export class Global{
    add(name, info){
        this[name] = info
    }
    change(name, info){
        this[name] = info
    }
    all(){
        return Object.entries(this)
    }

    get(...keys) {
    return Object.fromEntries(
        keys.map(key => [key, this[key]])
    );
}
}