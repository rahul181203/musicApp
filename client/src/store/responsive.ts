import {atom} from 'jotai'

export const sizeAtom = atom<Boolean>(true);

sizeAtom.onMount=(set)=>{
    window.innerWidth < 640 ? set(true) : set(false)
    window.addEventListener('resize',()=>{
        if(window.innerWidth<640){
            set(true)
        }
        else{
            set(false)
        }
    })
}