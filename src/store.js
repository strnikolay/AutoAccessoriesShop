import { makeAutoObservable } from "mobx"

export class Store {
    sampleVar = 0
    activeCatalogItem = {}
    
    constructor() {
        makeAutoObservable(this)
    }



    sampleMetod() {
        this.sampleVar += 1
    }
}