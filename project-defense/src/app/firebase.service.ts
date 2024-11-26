import { inject, Injectable } from "@angular/core";
import { collectionData, Firestore } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { Observable } from "rxjs";
import { Demo } from "./demo.interface";

@Injectable({ providedIn: 'root' })
export class FirebaseService {
    firestore = inject(Firestore)
    demoCollection = collection(this.firestore, 'demo');

    getDemo(): Observable<Demo[]> {
        return collectionData(this.demoCollection, {
            idField: 'id'
        })as Observable<Demo[]>;
    }
}