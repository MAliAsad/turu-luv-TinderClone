import "../css/tinderCards.css";
import {useState,useEffect} from "react";
import TinderCard from "react-tinder-card";
import axios from "../axios"

const TinderCards = () => {
    
    const [people,setpeople]=useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const req=await axios.get("/api/tinderCards");
            setpeople(req.data);
        } 
        fetchData();
    },[]);
    
    const swiped=(direction,nameToDelete)=>{
        console.log("removing: "+nameToDelete);
    }
    const outOfFrame=(name)=>{
        console.log("removing: "+name);
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainder" > 
                {people.map(person=>{
                    return (
                        <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]} onSwipe={dir=>swiped(dir,person.name)} onCardLeftScreen={()=>outOfFrame(person.name)} >
                            <div className="card" style={{backgroundImage:`url(${person.imgUrl})`}} >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    )
                })}
            </div>
            
        </div>
    )
}

export default TinderCards
