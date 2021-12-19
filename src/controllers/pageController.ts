import { Request, Response } from "express";
import { creatMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const home = (req: Request, res: Response)=>{
    
    let list = Pet.getAll();
    
    res.render('pages/page',{
        menu: creatMenuObject('all'),

        banner:{
            title:"alguma coisa ",
            background: "allanimals.jpg"
        },
        list
    })

}

export const dogs = (req: Request, res: Response)=>{
    let list = Pet.getFromType('dog');
   
    res.render('pages/page',{
        menu: creatMenuObject('dog'),

        banner:{
            title:"Cachorros ",
            background: "banner_dog.jpg"
        },
        list

    })

}

export const cats = (req: Request, res: Response)=>{
    let list = Pet.getFromType('cat');
   
    res.render('pages/page',{
        menu: creatMenuObject('cat'),

        banner:{
            title:"Gatos ",
            background: "banner_cat.jpg"
        },
        list

    })
}

export const fish = (req: Request, res: Response)=>{
    let list = Pet.getFromType('fish')
    res.render('pages/page',{
        menu: creatMenuObject("fish"),

        banner:{
            title:"Peixes ",
            background: "banner_fish.jpg"
        },
        list

    })
}